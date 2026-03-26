// ===== ArchiTap NYC — Game Logic =====

(function () {
  "use strict";

  // --- Constants ---
  const ROUNDS = 5;
  const MAX_DISTANCE_KM = 30;
  const MULTIPLIERS = [1, 1, 2, 2, 3];
  const HINT_PENALTY = 10;
  const LAUNCH_DATE = "2026-03-26";
  const STORAGE_KEY = "architap_state";

  // --- DOM refs ---
  const $map = document.getElementById("map");
  const $clueText = document.getElementById("clue-text");
  const $roundLabel = document.getElementById("round-label");
  const $multiplierBadge = document.getElementById("multiplier-badge");
  const $categoryBadge = document.getElementById("category-badge");
  const $btnHint = document.getElementById("btn-hint");
  const $btnConfirm = document.getElementById("btn-confirm");
  const $totalScore = document.getElementById("total-score");
  const $puzzleNumber = document.getElementById("puzzle-number");
  const $resultOverlay = document.getElementById("result-overlay");
  const $summaryOverlay = document.getElementById("summary-overlay");
  const $playedOverlay = document.getElementById("played-overlay");

  // --- State ---
  let map, tileLayer;
  let currentRound = 0;
  let totalScore = 0;
  let clueIndex = 0;
  let guessMarker = null;
  let answerMarker = null;
  let answerLabel = null;
  let resultLine = null;
  let dailyLandmarks = [];
  let roundResults = [];
  let gameActive = false;

  // --- Seeded RNG from date ---
  function hashDate(dateStr) {
    let h = 0;
    for (let i = 0; i < dateStr.length; i++) {
      h = ((h << 5) - h + dateStr.charCodeAt(i)) | 0;
    }
    return Math.abs(h);
  }

  function seededShuffle(arr, seed) {
    const copy = [...arr];
    let s = seed;
    for (let i = copy.length - 1; i > 0; i--) {
      s = (s * 16807 + 0) % 2147483647;
      const j = s % (i + 1);
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function getTodayStr() {
    const d = new Date();
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }

  function getPuzzleNumber(dateStr) {
    const launch = new Date(LAUNCH_DATE);
    const today = new Date(dateStr);
    return Math.floor((today - launch) / 86400000) + 1;
  }

  // --- Distance (Haversine) ---
  function haversineKm(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // --- Score calculation ---
  function calcScore(distKm, hintsUsed, multiplier) {
    const base = Math.max(0, Math.round(100 * (1 - distKm / MAX_DISTANCE_KM)));
    const penalty = hintsUsed * HINT_PENALTY;
    return Math.max(0, base - penalty) * multiplier;
  }

  // --- Format distance ---
  function fmtDist(km) {
    if (km < 1) return Math.round(km * 1000) + " m";
    return km.toFixed(1) + " km";
  }

  // --- Score color class for dots ---
  function scoreTier(distKm) {
    if (distKm < 1) return "correct";
    if (distKm < 5) return "far";
    return "very-far";
  }

  // --- Score emoji for share ---
  function scoreEmoji(distKm) {
    if (distKm < 0.5) return "\uD83D\uDFE2"; // green
    if (distKm < 1) return "\uD83D\uDFE1"; // yellow
    if (distKm < 3) return "\uD83D\uDFE0"; // orange
    return "\uD83D\uDD34"; // red
  }

  // --- LocalStorage ---
  function loadState() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
      return {};
    }
  }

  function saveState(state) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  // --- Init Map ---
  function initMap() {
    map = L.map($map, {
      center: [40.7580, -73.9855],
      zoom: 12,
      minZoom: 10,
      maxZoom: 18,
      zoomControl: true,
      maxBounds: [
        [40.45, -74.30],
        [40.95, -73.65],
      ],
      maxBoundsViscosity: 1.0,
    });

    tileLayer = L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://osm.org/copyright">OSM</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    );
    tileLayer.addTo(map);

    map.on("click", onMapClick);
  }

  // --- Map click handler ---
  function onMapClick(e) {
    if (!gameActive) return;

    // Remove previous guess marker
    if (guessMarker) map.removeLayer(guessMarker);

    guessMarker = L.marker(e.latlng, {
      icon: L.divIcon({
        className: "guess-marker",
        iconSize: [20, 20],
      }),
    }).addTo(map);

    $btnConfirm.style.display = "block";
  }

  // --- Start daily game ---
  function startGame() {
    const today = getTodayStr();
    const state = loadState();

    // Check if already played today
    if (state.lastPlayed === today && state.results) {
      showPlayedScreen(state);
      return;
    }

    const seed = hashDate(today);
    const shuffled = seededShuffle(LANDMARKS, seed);
    // Mix categories: pick from architecture and historical
    const arch = shuffled.filter((l) => l.category === "architecture");
    const hist = shuffled.filter((l) => l.category === "historical");
    dailyLandmarks = [arch[0], arch[1], hist[0], arch[2], hist[1]];

    const puzzleNum = getPuzzleNumber(today);
    $puzzleNumber.textContent = "Puzzle #" + puzzleNum;

    currentRound = 0;
    totalScore = 0;
    roundResults = [];
    $totalScore.textContent = "0";
    gameActive = true;

    startRound();
  }

  // --- Start a round ---
  function startRound() {
    const landmark = dailyLandmarks[currentRound];
    clueIndex = 0;

    // Clear markers/lines
    clearMapOverlays();

    // Reset map view
    map.setView([40.7580, -73.9855], 12);

    // Update UI
    $roundLabel.textContent = `Round ${currentRound + 1} / ${ROUNDS}`;
    $multiplierBadge.textContent = MULTIPLIERS[currentRound] + "x";

    $categoryBadge.className = landmark.category;
    $categoryBadge.textContent = landmark.category;

    $clueText.textContent = landmark.clues[0];

    $btnHint.style.display = landmark.clues.length > 1 ? "block" : "none";
    $btnHint.disabled = false;
    $btnHint.textContent = "Next Clue (-10 pts)";
    $btnConfirm.style.display = "none";

    // Update round dots
    document.querySelectorAll(".round-dot").forEach((dot, i) => {
      if (i === currentRound) {
        dot.className = "round-dot active";
      } else if (i < currentRound) {
        // Keep completed class
      } else {
        dot.className = "round-dot";
      }
    });

    $resultOverlay.classList.add("hidden");
  }

  // --- Clear map overlays ---
  function clearMapOverlays() {
    if (guessMarker) {
      map.removeLayer(guessMarker);
      guessMarker = null;
    }
    if (answerMarker) {
      map.removeLayer(answerMarker);
      answerMarker = null;
    }
    if (answerLabel) {
      map.removeLayer(answerLabel);
      answerLabel = null;
    }
    if (resultLine) {
      map.removeLayer(resultLine);
      resultLine = null;
    }
  }

  // --- Confirm guess ---
  function confirmGuess() {
    if (!guessMarker || !gameActive) return;
    gameActive = false;

    const landmark = dailyLandmarks[currentRound];
    const guessLL = guessMarker.getLatLng();
    const dist = haversineKm(guessLL.lat, guessLL.lng, landmark.lat, landmark.lng);
    const hintsUsed = clueIndex; // clueIndex 0 = first clue (free), so hints = clueIndex
    const mult = MULTIPLIERS[currentRound];
    const score = calcScore(dist, hintsUsed, mult);

    totalScore += score;
    $totalScore.textContent = totalScore;
    $totalScore.classList.remove("score-pop");
    void $totalScore.offsetWidth;
    $totalScore.classList.add("score-pop");

    // Show answer marker
    answerMarker = L.marker([landmark.lat, landmark.lng], {
      icon: L.divIcon({
        className: "answer-marker",
        iconSize: [20, 20],
      }),
    }).addTo(map);

    // Answer label
    answerLabel = L.marker([landmark.lat, landmark.lng], {
      icon: L.divIcon({
        className: "answer-marker-label",
        html: landmark.name,
        iconAnchor: [-14, 10],
      }),
    }).addTo(map);

    // Draw line
    resultLine = L.polyline(
      [
        [guessLL.lat, guessLL.lng],
        [landmark.lat, landmark.lng],
      ],
      {
        color: "#e8934a",
        weight: 2,
        dashArray: "6 4",
        opacity: 0.8,
      }
    ).addTo(map);

    // Fit bounds to show both points
    const bounds = L.latLngBounds(
      [guessLL.lat, guessLL.lng],
      [landmark.lat, landmark.lng]
    );
    map.fitBounds(bounds, { padding: [60, 60], maxZoom: 15 });

    // Update round dot
    const dot = document.querySelector(`.round-dot[data-round="${currentRound}"]`);
    dot.className = "round-dot " + scoreTier(dist);

    // Save round result
    roundResults.push({
      name: landmark.name,
      distance: dist,
      score: score,
      hintsUsed: hintsUsed,
      multiplier: mult,
    });

    // Show result overlay
    document.getElementById("result-name").textContent = landmark.name;
    document.getElementById("result-year").textContent = landmark.year;
    document.getElementById("result-detail").textContent = landmark.detail;
    document.getElementById("result-distance").textContent = fmtDist(dist);
    document.getElementById("result-distance").style.color =
      dist < 1 ? "var(--green)" : dist < 5 ? "var(--orange)" : "var(--red)";
    document.getElementById("result-score").textContent = "+" + score;
    document.getElementById("result-score").style.color = "var(--accent)";

    const isLast = currentRound >= ROUNDS - 1;
    document.getElementById("btn-next").textContent = isLast
      ? "See Results"
      : "Next Round";

    $btnHint.style.display = "none";
    $btnConfirm.style.display = "none";

    $resultOverlay.classList.remove("hidden");
  }

  // --- Next round ---
  function nextRound() {
    currentRound++;
    if (currentRound >= ROUNDS) {
      endGame();
    } else {
      gameActive = true;
      startRound();
    }
  }

  // --- End game ---
  function endGame() {
    clearMapOverlays();

    // Save to localStorage
    const today = getTodayStr();
    const state = loadState();
    state.lastPlayed = today;
    state.results = roundResults;
    state.totalScore = totalScore;
    state.puzzleNumber = getPuzzleNumber(today);
    saveState(state);

    showSummary($summaryOverlay, "summary-total", "summary-max", "summary-rounds", "btn-share", "share-confirm", "countdown");
  }

  // --- Show summary helper ---
  function showSummary(overlay, totalId, maxId, roundsId, shareId, confirmId, countdownId) {
    const maxScore = MULTIPLIERS.reduce((s, m) => s + 100 * m, 0);

    document.getElementById(totalId).textContent = totalScore;
    document.getElementById(maxId).textContent = `out of ${maxScore}`;

    const roundsContainer = document.getElementById(roundsId);
    roundsContainer.innerHTML = "";
    roundResults.forEach((r) => {
      const div = document.createElement("div");
      div.className = "summary-round";
      div.innerHTML = `
        <span class="summary-round-name">${r.name}</span>
        <span class="summary-round-distance">${fmtDist(r.distance)}</span>
        <span class="summary-round-score" style="color: ${
          r.distance < 1 ? "var(--green)" : r.distance < 5 ? "var(--orange)" : "var(--red)"
        }">+${r.score}</span>
      `;
      roundsContainer.appendChild(div);
    });

    document.getElementById(shareId).onclick = () => copyShareText(confirmId);

    $resultOverlay.classList.add("hidden");
    overlay.classList.remove("hidden");

    startCountdown(countdownId);
  }

  // --- Already played screen ---
  function showPlayedScreen(state) {
    totalScore = state.totalScore;
    roundResults = state.results;
    $totalScore.textContent = totalScore;
    $puzzleNumber.textContent = "Puzzle #" + state.puzzleNumber;

    // Set round dots
    roundResults.forEach((r, i) => {
      const dot = document.querySelector(`.round-dot[data-round="${i}"]`);
      dot.className = "round-dot " + scoreTier(r.distance);
    });

    showSummary($playedOverlay, "played-total", "played-max", "played-rounds", "btn-share-played", "share-confirm-played", "countdown-played");
  }

  // --- Copy share text ---
  function copyShareText(confirmId) {
    const today = getTodayStr();
    const num = getPuzzleNumber(today);
    const maxScore = MULTIPLIERS.reduce((s, m) => s + 100 * m, 0);

    let text = `ArchiTap NYC #${num}\n`;
    text += `Score: ${totalScore}/${maxScore}\n\n`;
    roundResults.forEach((r) => {
      text += scoreEmoji(r.distance) + " ";
    });
    text += "\n\nhttps://architap.nyc";

    navigator.clipboard.writeText(text).then(() => {
      const el = document.getElementById(confirmId);
      el.classList.remove("hidden");
      setTimeout(() => el.classList.add("hidden"), 2000);
    });
  }

  // --- Countdown to midnight ---
  function startCountdown(elId) {
    const el = document.getElementById(elId);

    function update() {
      const now = new Date();
      const midnight = new Date(now);
      midnight.setHours(24, 0, 0, 0);
      const diff = midnight - now;

      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);

      el.textContent =
        String(h).padStart(2, "0") +
        ":" +
        String(m).padStart(2, "0") +
        ":" +
        String(s).padStart(2, "0");
    }

    update();
    setInterval(update, 1000);
  }

  // --- Event listeners ---
  $btnConfirm.addEventListener("click", confirmGuess);
  $btnHint.addEventListener("click", () => {
    const landmark = dailyLandmarks[currentRound];
    clueIndex++;
    if (clueIndex < landmark.clues.length) {
      $clueText.textContent = landmark.clues[clueIndex];
    }
    if (clueIndex >= landmark.clues.length - 1) {
      $btnHint.disabled = true;
      $btnHint.textContent = "No more clues";
    }
  });
  document.getElementById("btn-next").addEventListener("click", nextRound);

  // --- Init ---
  initMap();
  startGame();
})();
