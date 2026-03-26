const LANDMARKS = [
  // ===== ARCHITECTURE =====
  {
    name: "Chrysler Building",
    lat: 40.7516,
    lng: -73.9755,
    category: "architecture",
    year: 1930,
    detail: "William Van Alen",
    clues: [
      "This Art Deco skyscraper was briefly the world's tallest building before being surpassed in the same year.",
      "Located in Midtown East near Grand Central, its lobby features elaborate African marble and steel.",
      "Its iconic crown features stainless steel eagle gargoyles and triangular sunburst windows — built for an automaker."
    ]
  },
  {
    name: "Flatiron Building",
    lat: 40.7411,
    lng: -73.9897,
    category: "architecture",
    year: 1902,
    detail: "Daniel Burnham",
    clues: [
      "This early steel-frame skyscraper's unusual footprint was dictated by the intersection of two major streets.",
      "Standing at the crossing of Broadway and Fifth Avenue, it became one of the most photographed buildings of the early 1900s.",
      "Its triangular shape gives it a distinctive wedge profile — just 6.5 feet wide at its narrowest point in the Flatiron District."
    ]
  },
  {
    name: "Woolworth Building",
    lat: 40.7123,
    lng: -74.0083,
    category: "architecture",
    year: 1913,
    detail: "Cass Gilbert",
    clues: [
      "This Neo-Gothic tower was the world's tallest building for 17 years and was paid for entirely in cash.",
      "Located in Lower Manhattan near City Hall, its ornate lobby is covered in Byzantine-style mosaics.",
      "Nicknamed the 'Cathedral of Commerce,' it was built for a five-and-dime store magnate."
    ]
  },
  {
    name: "Guggenheim Museum",
    lat: 40.7830,
    lng: -73.9590,
    category: "architecture",
    year: 1959,
    detail: "Frank Lloyd Wright",
    clues: [
      "This museum's radical spiral design was controversial among artists who worried paintings couldn't hang on curved walls.",
      "Situated along Museum Mile on the Upper East Side, it contrasts sharply with the rectangular grid of the neighborhood.",
      "Designed by America's most famous architect, visitors ride an elevator up and walk down a continuous spiraling ramp."
    ]
  },
  {
    name: "TWA Flight Center",
    lat: 40.6437,
    lng: -73.7890,
    category: "architecture",
    year: 1962,
    detail: "Eero Saarinen",
    clues: [
      "This swooping concrete terminal was designed to evoke the excitement of flight with its wing-shaped roof.",
      "Located at a major transportation hub in Queens, it closed as an airline terminal in 2001.",
      "Now a luxury hotel at JFK Airport, it was built for Trans World Airlines and designed by a Finnish-American architect."
    ]
  },
  {
    name: "One World Trade Center",
    lat: 40.7127,
    lng: -74.0134,
    category: "architecture",
    year: 2014,
    detail: "David Childs (SOM)",
    clues: [
      "At exactly 1,776 feet, this building's height references a year of national significance.",
      "Its tapered glass form rises from a concrete base in Lower Manhattan, replacing towers lost in a national tragedy.",
      "The tallest building in the Western Hemisphere stands at the northwest corner of the memorial plaza."
    ]
  },
  {
    name: "Brooklyn Bridge",
    lat: 40.7061,
    lng: -73.9969,
    category: "architecture",
    year: 1883,
    detail: "John Augustus Roebling",
    clues: [
      "When completed, this hybrid cable-stayed/suspension structure was the longest of its kind in the world.",
      "Its twin Gothic stone towers connect two boroughs across the East River.",
      "Opened in 1883, its designer died before construction began; his son and daughter-in-law finished the project."
    ]
  },
  {
    name: "Grand Central Terminal",
    lat: 40.7527,
    lng: -73.9772,
    category: "architecture",
    year: 1913,
    detail: "Reed & Stem / Warren & Wetmore",
    clues: [
      "This Beaux-Arts transportation hub features a ceiling mural depicting 2,500 stars — painted backwards.",
      "Located at 42nd Street and Park Avenue in Midtown, it was nearly demolished in the 1960s before a landmark ruling saved it.",
      "Its iconic main concourse clock, atop the information booth, is estimated to be worth $20 million."
    ]
  },
  {
    name: "The Oculus",
    lat: 40.7112,
    lng: -74.0113,
    category: "architecture",
    year: 2016,
    detail: "Santiago Calatrava",
    clues: [
      "This controversial transit hub cost nearly $4 billion, making it one of the most expensive stations ever built.",
      "Its white steel ribs rise from the World Trade Center site in Lower Manhattan like skeletal wings.",
      "Designed by a Spanish architect, its skylight opens each year on September 11th."
    ]
  },
  {
    name: "Empire State Building",
    lat: 40.7484,
    lng: -73.9857,
    category: "architecture",
    year: 1931,
    detail: "Shreve, Lamb & Harmon",
    clues: [
      "This Art Deco tower held the title of world's tallest building for nearly 40 years.",
      "Located in Midtown at 34th Street and Fifth Avenue, its observatory offers panoramic views from the 86th floor.",
      "Built in just 410 days during the Great Depression, it was famously climbed by a giant ape in film."
    ]
  },
  {
    name: "St. Patrick's Cathedral",
    lat: 40.7585,
    lng: -73.9760,
    category: "architecture",
    year: 1878,
    detail: "James Renwick Jr.",
    clues: [
      "This Neo-Gothic cathedral is the largest decorated Gothic-style Catholic church in North America.",
      "Situated on Fifth Avenue across from Rockefeller Center, its twin spires rise 330 feet.",
      "Construction began before the Civil War; its architect also designed the Smithsonian Castle in Washington."
    ]
  },
  {
    name: "Rockefeller Center",
    lat: 40.7587,
    lng: -73.9787,
    category: "architecture",
    year: 1939,
    detail: "Raymond Hood (lead)",
    clues: [
      "This Art Deco complex of 19 commercial buildings was the largest private development project of its time.",
      "Spanning from 48th to 51st Street in Midtown, it features a sunken plaza that becomes an ice rink in winter.",
      "Home to 30 Rock and a famous gilded statue of Prometheus, it was funded by an oil family dynasty."
    ]
  },
  {
    name: "Vessel (Hudson Yards)",
    lat: 40.7536,
    lng: -74.0022,
    category: "architecture",
    year: 2019,
    detail: "Thomas Heatherwick",
    clues: [
      "This honeycomb-like structure of interconnected staircases was a centerpiece of NYC's newest mega-development.",
      "Located on the far west side of Midtown above a railyard, it resembles a giant bronze beehive.",
      "With 154 flights of stairs and 80 landings, this climbable sculpture at Hudson Yards closed due to safety concerns."
    ]
  },
  {
    name: "The Shed",
    lat: 40.7534,
    lng: -74.0029,
    category: "architecture",
    year: 2019,
    detail: "Diller Scofidio + Renfro",
    clues: [
      "This cultural center features a telescoping outer shell that can deploy over an adjacent plaza.",
      "Part of the Hudson Yards development on the West Side, its movable structure doubles its performance space.",
      "Its kinetic architecture allows the building to physically expand and contract on a set of rails."
    ]
  },
  {
    name: "Statue of Liberty",
    lat: 40.6892,
    lng: -74.0445,
    category: "architecture",
    year: 1886,
    detail: "Frédéric Auguste Bartholdi / Gustave Eiffel",
    clues: [
      "This colossal neoclassical sculpture was a diplomatic gift symbolizing friendship between two republics.",
      "Standing on an island in the harbor, its copper skin has oxidized to a distinctive green patina.",
      "A French gift dedicated in 1886, its internal iron framework was engineered by the same man who built a famous Parisian tower."
    ]
  },
  {
    name: "Lincoln Center",
    lat: 40.7725,
    lng: -73.9835,
    category: "architecture",
    year: 1962,
    detail: "Philip Johnson, Eero Saarinen, others",
    clues: [
      "This performing arts campus was built as part of an urban renewal project that demolished a residential neighborhood.",
      "Located on the Upper West Side near Columbus Circle, its travertine-clad buildings surround a central fountain plaza.",
      "Home to the Metropolitan Opera and New York Philharmonic, its construction displaced the neighborhood shown in West Side Story."
    ]
  },
  {
    name: "The High Line",
    lat: 40.7480,
    lng: -74.0048,
    category: "architecture",
    year: 2009,
    detail: "James Corner Field Operations / Diller Scofidio + Renfro",
    clues: [
      "This innovative public park was built on infrastructure that once carried freight trains through the city.",
      "Stretching through Chelsea and the Meatpacking District on the West Side, it's an elevated greenway above street level.",
      "A 1.45-mile-long park on a repurposed elevated rail line, it runs from Gansevoort Street to 34th Street."
    ]
  },
  {
    name: "New York Public Library (Main Branch)",
    lat: 40.7532,
    lng: -73.9822,
    category: "architecture",
    year: 1911,
    detail: "Carrère & Hastings",
    clues: [
      "This Beaux-Arts masterpiece is guarded by two famous marble lions nicknamed Patience and Fortitude.",
      "Located on Fifth Avenue at 42nd Street, its Rose Main Reading Room spans nearly two city blocks.",
      "One of the largest marble structures ever built in the US, it holds millions of items including a Gutenberg Bible."
    ]
  },
  {
    name: "Hearst Tower",
    lat: 40.7666,
    lng: -73.9809,
    category: "architecture",
    year: 2006,
    detail: "Norman Foster",
    clues: [
      "This tower's distinctive diagrid pattern uses 20% less steel than a conventional frame.",
      "Rising from a preserved 1928 Art Deco base at Columbus Circle, old and new architecture merge dramatically.",
      "NYC's first occupied 'green' office building, designed by a British architect famous for high-tech architecture."
    ]
  },
  {
    name: "Washington Square Arch",
    lat: 40.7308,
    lng: -73.9973,
    category: "architecture",
    year: 1892,
    detail: "Stanford White",
    clues: [
      "This marble triumphal arch replaced an earlier temporary wooden version built for a centennial celebration.",
      "Standing at the southern end of Fifth Avenue in Greenwich Village, it anchors a famous park popular with NYU students.",
      "Built to commemorate George Washington's inauguration, it was designed by a partner of McKim, Mead & White."
    ]
  },
  {
    name: "30 Hudson Yards (The Edge)",
    lat: 40.7539,
    lng: -74.0005,
    category: "architecture",
    year: 2020,
    detail: "KPF (Kohn Pedersen Fox)",
    clues: [
      "This tower features the highest outdoor observation deck in the Western Hemisphere.",
      "Part of a massive West Side development, visitors can lean out over the city on angled glass walls 100 stories up.",
      "The triangular outdoor sky deck at Hudson Yards juts out 80 feet from the building's 100th floor."
    ]
  },
  {
    name: "MetLife Building (formerly Pan Am)",
    lat: 40.7536,
    lng: -73.9768,
    category: "architecture",
    year: 1963,
    detail: "Emery Roth & Sons / Walter Gropius",
    clues: [
      "This massive International Style tower was controversial for blocking the view up Park Avenue.",
      "Straddling the train tracks behind a famous Midtown terminal, it once had a rooftop helipad.",
      "Originally named for an airline, this Bauhaus-influenced tower sits directly above Grand Central Terminal."
    ]
  },
  {
    name: "Lever House",
    lat: 40.7590,
    lng: -73.9725,
    category: "architecture",
    year: 1952,
    detail: "SOM (Gordon Bunshaft)",
    clues: [
      "This glass curtain-wall office building revolutionized commercial architecture when it opened on Park Avenue.",
      "Its design features a ground-floor open plaza and a horizontal base supporting a vertical glass slab.",
      "Built for a soap company on Park Avenue, it was among the first International Style skyscrapers in the city."
    ]
  },
  {
    name: "Seagram Building",
    lat: 40.7585,
    lng: -73.9718,
    category: "architecture",
    year: 1958,
    detail: "Ludwig Mies van der Rohe / Philip Johnson",
    clues: [
      "This bronze-and-glass tower is considered the finest example of the International Style in North America.",
      "Set back from Park Avenue with a public plaza, it influenced zoning laws to encourage open space in Midtown.",
      "Built for a Canadian distillery, it was designed by the master who coined 'less is more.'"
    ]
  },
  {
    name: "Morgan Library & Museum",
    lat: 40.7491,
    lng: -73.9814,
    category: "architecture",
    year: 1906,
    detail: "McKim, Mead & White (original) / Renzo Piano (expansion)",
    clues: [
      "This private library was built to house one of the greatest collections of rare books and manuscripts in the world.",
      "Located on Madison Avenue in Murray Hill, a modern glass atrium now connects its historic brownstone buildings.",
      "Originally the personal library of a famous financier, its 2006 expansion was designed by an Italian Pritzker Prize winner."
    ]
  },
  {
    name: "Central Park Bethesda Terrace",
    lat: 40.7736,
    lng: -73.9712,
    category: "architecture",
    year: 1873,
    detail: "Calvert Vaux & Jacob Wrey Mould",
    clues: [
      "This ornate two-level terrace features some of the finest carved stonework in any American park.",
      "Located at the heart of Central Park near the lake, its angel-topped fountain celebrates the opening of an aqueduct.",
      "The 'Angel of the Waters' atop its fountain commemorates the Croton Aqueduct; the terrace's carved panels depict the four seasons."
    ]
  },
  {
    name: "One57",
    lat: 40.7655,
    lng: -73.9793,
    category: "architecture",
    year: 2014,
    detail: "Christian de Portzamparc",
    clues: [
      "This glass tower helped launch the era of 'supertall' luxury condos along a stretch known as Billionaires' Row.",
      "Rising 1,004 feet on 57th Street south of Central Park, its cascading blue glass facade suggests a waterfall.",
      "Designed by a French Pritzker laureate, it was the first of the ultra-luxury towers on Billionaires' Row."
    ]
  },
  {
    name: "432 Park Avenue",
    lat: 40.7616,
    lng: -73.9716,
    category: "architecture",
    year: 2015,
    detail: "Rafael Viñoly",
    clues: [
      "This residential tower's extreme slenderness ratio (1:15) makes it one of the thinnest skyscrapers ever built.",
      "Its minimalist grid of square windows marches up nearly 1,400 feet on the east side of Midtown.",
      "Inspired by a 1905 trash can design, this Park Avenue supertall was the tallest residential building in the world when completed."
    ]
  },
  {
    name: "The Dakota",
    lat: 40.7766,
    lng: -73.9762,
    category: "architecture",
    year: 1884,
    detail: "Henry Janeway Hardenbergh",
    clues: [
      "When built, this luxury apartment building was so far from the city center it was jokingly compared to a distant territory.",
      "Overlooking Central Park on the Upper West Side at 72nd Street, its Germanic Renaissance facade features gables and dormers.",
      "Famous as the home of John Lennon and the setting of Rosemary's Baby, its name references the Dakota Territory."
    ]
  },
  {
    name: "Citigroup Center (601 Lexington)",
    lat: 40.7581,
    lng: -73.9710,
    category: "architecture",
    year: 1977,
    detail: "Hugh Stubbins",
    clues: [
      "This tower's distinctive 45-degree angled top was originally planned as a solar panel but never used for that purpose.",
      "Raised on massive stilts in Midtown to preserve a church at its base, it survived a secret structural crisis in 1978.",
      "A whistleblower engineering student discovered that its bolted joints couldn't withstand certain wind loads, triggering an emergency retrofit."
    ]
  },
  {
    name: "Williamsburg Savings Bank Tower",
    lat: 40.6862,
    lng: -73.9779,
    category: "architecture",
    year: 1929,
    detail: "Halsey, McCormack & Helmer",
    clues: [
      "This was the tallest building in Brooklyn for over 80 years, visible from much of the borough.",
      "Located near the Barclays Center and Atlantic Terminal, its ornate Romanesque-Byzantine interior is now an event space.",
      "A 512-foot landmark with a four-faced clock tower, it was converted to luxury condos and renamed 'One Hanson Place.'"
    ]
  },
  {
    name: "Ansonia Hotel",
    lat: 40.7804,
    lng: -73.9814,
    category: "architecture",
    year: 1904,
    detail: "Paul Émile Duboy",
    clues: [
      "This massive Beaux-Arts residential hotel was so well soundproofed it became a favorite of musicians.",
      "Located on Broadway on the Upper West Side, its ornate facade features rounded corner towers and terra cotta details.",
      "Babe Ruth, Igor Stravinsky, and Enrico Caruso all lived in this landmark, which once housed a rooftop farm with livestock."
    ]
  },
  {
    name: "Ford Foundation Building",
    lat: 40.7494,
    lng: -73.9726,
    category: "architecture",
    year: 1967,
    detail: "Kevin Roche & John Dinkeloo",
    clues: [
      "This building's soaring indoor garden atrium was revolutionary — one of the first in a modern office building.",
      "Located near the United Nations in Turtle Bay, its glass-walled offices look inward onto a lush 12-story greenhouse.",
      "Built for a major philanthropic organization, its atrium garden contains full-grown trees and terraced planting beds."
    ]
  },
  {
    name: "56 Leonard Street",
    lat: 40.7187,
    lng: -74.0059,
    category: "architecture",
    year: 2017,
    detail: "Herzog & de Meuron",
    clues: [
      "This residential tower's stacked, cantilevered form resembles a game of Jenga made of glass and concrete.",
      "Rising in Tribeca, its pixelated silhouette and offset floor plates give each unit unique views.",
      "Designed by the Swiss duo behind the Tate Modern and Beijing's Bird's Nest, it's topped with a distinctive Anish Kapoor sculpture."
    ]
  },
  {
    name: "VIA 57 West",
    lat: 40.7732,
    lng: -73.9942,
    category: "architecture",
    year: 2016,
    detail: "BIG (Bjarke Ingels Group)",
    clues: [
      "This residential building's pyramidal shape was dubbed a 'courtscraper' — a hybrid of a European courtyard block and a skyscraper.",
      "Overlooking the Hudson River on the Upper West Side, its tetrahedron form creates a large internal courtyard.",
      "Designed by a Danish 'starchitect' whose firm's name is a three-letter acronym, it peaks at 467 feet on the waterfront."
    ]
  },
  {
    name: "New Museum",
    lat: 40.7223,
    lng: -73.9930,
    category: "architecture",
    year: 2007,
    detail: "SANAA (Sejima + Nishizawa)",
    clues: [
      "This contemporary art museum looks like a stack of misaligned white boxes piled atop one another.",
      "Located on the Bowery in the Lower East Side, it was the first new art museum built downtown in over a century.",
      "Designed by the Japanese firm SANAA, its shifted aluminum-mesh-clad volumes create a playfully off-kilter silhouette."
    ]
  },
  {
    name: "Manhattan Bridge",
    lat: 40.7074,
    lng: -73.9907,
    category: "architecture",
    year: 1909,
    detail: "Leon Moisseiff / Carrère & Hastings (arch)",
    clues: [
      "This suspension bridge features a grand Beaux-Arts arch and colonnade at its entrance — unusual for a bridge.",
      "Connecting Lower Manhattan to DUMBO in Brooklyn, it carries subway, car, bike, and pedestrian traffic.",
      "Often framed in photos from Washington Street in DUMBO, its ornamental arch was designed by the same firm that built the main public library."
    ]
  },
  {
    name: "George Washington Bridge",
    lat: 40.8517,
    lng: -73.9527,
    category: "architecture",
    year: 1931,
    detail: "Othmar Ammann / Cass Gilbert",
    clues: [
      "When it opened, this bridge's 3,500-foot main span was nearly double the length of any existing suspension bridge.",
      "Connecting Washington Heights in Manhattan to New Jersey across the Hudson, its exposed steel towers were originally meant to be clad in stone.",
      "Le Corbusier called it 'the most beautiful bridge in the world'; its bare steel lattice towers became an accidental icon of engineering aesthetics."
    ]
  },
  {
    name: "United Nations Headquarters",
    lat: 40.7489,
    lng: -73.9680,
    category: "architecture",
    year: 1952,
    detail: "Oscar Niemeyer / Le Corbusier / Wallace Harrison",
    clues: [
      "This International Style complex sits on territory that is technically not part of any country.",
      "Overlooking the East River in Turtle Bay, its glass slab Secretariat building was radical when constructed.",
      "Designed by an international committee of architects including a Brazilian and a Swiss-French modernist, it occupies 18 acres of international territory."
    ]
  },
  // ===== HISTORICAL =====
  {
    name: "Ellis Island",
    lat: 40.6995,
    lng: -74.0396,
    category: "historical",
    year: 1892,
    detail: "Gateway for 12 million immigrants from 1892–1954",
    clues: [
      "More than 12 million people entered the United States through this processing station over six decades.",
      "Located in the harbor between Manhattan and New Jersey, its grand Beaux-Arts main building now houses a museum.",
      "Over 40% of Americans can trace their ancestry through this immigration station that operated from 1892 to 1954."
    ]
  },
  {
    name: "Federal Hall",
    lat: 40.7074,
    lng: -74.0103,
    category: "historical",
    year: 1842,
    detail: "Site of George Washington's first inauguration (1789)",
    clues: [
      "The first Capitol building of the United States once stood on this site on Wall Street.",
      "A bronze statue of the nation's first president stands on its front steps in Lower Manhattan's Financial District.",
      "George Washington took the oath of office here on April 30, 1789; the current Greek Revival building dates to 1842."
    ]
  },
  {
    name: "Stonewall Inn",
    lat: 40.7338,
    lng: -74.0022,
    category: "historical",
    year: 1969,
    detail: "Birthplace of the modern LGBTQ+ rights movement",
    clues: [
      "A 1969 uprising at this bar is widely considered the catalyst for the modern LGBTQ+ rights movement.",
      "Located on Christopher Street in Greenwich Village, it became a National Monument in 2016.",
      "The Stonewall uprising began in the early hours of June 28, 1969 when patrons resisted a police raid."
    ]
  },
  {
    name: "Fraunces Tavern",
    lat: 40.7033,
    lng: -74.0112,
    category: "historical",
    year: 1719,
    detail: "Where Washington bade farewell to his officers in 1783",
    clues: [
      "This colonial-era tavern hosted a famous farewell dinner at the end of the Revolutionary War.",
      "Located at the corner of Pearl and Broad Streets in the Financial District, it's one of the oldest surviving buildings in Manhattan.",
      "On December 4, 1783, George Washington said goodbye to his Continental Army officers in this tavern's Long Room."
    ]
  },
  {
    name: "African Burial Ground",
    lat: 40.7143,
    lng: -74.0044,
    category: "historical",
    year: 1991,
    detail: "Rediscovered 17th-18th century burial ground for enslaved and free Africans",
    clues: [
      "This sacred site was accidentally uncovered during construction of a federal building in the early 1990s.",
      "Located in Lower Manhattan near City Hall, it contained the remains of an estimated 15,000 people.",
      "The largest known colonial-era burial ground for people of African descent in North America, it became a National Monument in 2006."
    ]
  },
  {
    name: "Castle Clinton",
    lat: 40.7036,
    lng: -74.0170,
    category: "historical",
    year: 1811,
    detail: "Fort turned immigration station turned aquarium in Battery Park",
    clues: [
      "This circular sandstone fort has served as a fortification, entertainment venue, immigration station, and aquarium.",
      "Sitting at the southern tip of Manhattan in Battery Park, it now serves as the ticket office for harbor island ferries.",
      "Built to defend the harbor during the War of 1812, it processed 8 million immigrants before Ellis Island opened."
    ]
  },
  {
    name: "Governors Island",
    lat: 40.6895,
    lng: -74.0168,
    category: "historical",
    year: 1776,
    detail: "Military installation for over 200 years, now a public park",
    clues: [
      "This 172-acre island served as a military post from the Revolution through the Cold War.",
      "Located in the harbor between Manhattan and Brooklyn, it's now accessible by free ferry on summer weekends.",
      "Home to two early 19th-century forts (Jay and Columbus), it was a Coast Guard base until 1996 and is now a public park."
    ]
  },
  {
    name: "Triangle Shirtwaist Factory Site",
    lat: 40.7311,
    lng: -73.9953,
    category: "historical",
    year: 1911,
    detail: "Site of the 1911 factory fire that killed 146 workers",
    clues: [
      "A devastating 1911 industrial disaster at this site killed 146 garment workers and transformed labor laws in America.",
      "The building still stands near Washington Square Park in Greenwich Village, now part of NYU.",
      "Locked exit doors trapped workers in the burning Triangle Shirtwaist Factory, leading to sweeping fire safety and labor reforms."
    ]
  },
  {
    name: "Seneca Village Site",
    lat: 40.7811,
    lng: -73.9687,
    category: "historical",
    year: 1825,
    detail: "Destroyed community of Black property owners displaced for Central Park",
    clues: [
      "This thriving community of primarily African American property owners was destroyed to make way for a famous park.",
      "Located in what is now the west side of Central Park between 82nd and 89th Streets.",
      "Founded in 1825, Seneca Village was home to about 260 residents, three churches, and a school before being razed in 1857."
    ]
  },
  {
    name: "Hamilton Grange",
    lat: 40.8222,
    lng: -73.9475,
    category: "historical",
    year: 1802,
    detail: "Alexander Hamilton's country home in Harlem",
    clues: [
      "This Federal-style house was the only home ever owned by a Founding Father who became a Broadway sensation.",
      "Now located in St. Nicholas Park in Hamilton Heights, the building was moved twice from its original location.",
      "Alexander Hamilton's country estate, built two years before his fatal duel, was relocated to a Harlem park in 2008."
    ]
  },
  {
    name: "Tenement Museum",
    lat: 40.7188,
    lng: -73.9900,
    category: "historical",
    year: 1863,
    detail: "Preserved tenement building at 97 Orchard Street",
    clues: [
      "This preserved 19th-century apartment building tells the stories of the immigrant families who lived there.",
      "Located on Orchard Street in the Lower East Side, it was home to an estimated 7,000 people from over 20 countries.",
      "Sealed shut in 1935 and rediscovered intact, 97 Orchard Street now houses a museum dedicated to immigrant life."
    ]
  },
  {
    name: "Green-Wood Cemetery",
    lat: 40.6580,
    lng: -73.9904,
    category: "historical",
    year: 1838,
    detail: "Historic cemetery and site of the Battle of Brooklyn",
    clues: [
      "This 478-acre landscape was one of the most popular tourist attractions in the US before Central Park was built.",
      "Located in the hills of South Brooklyn, its Gothic Revival entrance gate is a National Historic Landmark.",
      "The burial place of Boss Tweed, Leonard Bernstein, and Jean-Michel Basquiat, it also encompasses the site of the Battle of Brooklyn."
    ]
  },
  {
    name: "City Hall",
    lat: 40.7128,
    lng: -74.0060,
    category: "historical",
    year: 1812,
    detail: "Oldest city hall in the US still housing its original government",
    clues: [
      "This is the oldest city hall in the nation that still serves its original governmental function.",
      "Its Federal-style design with French Renaissance influence sits in a park at the center of Lower Manhattan's Civic Center.",
      "When built, it was considered so far north that its rear facade was finished in cheap brownstone — nobody would see it from behind."
    ]
  },
  {
    name: "Apollo Theater",
    lat: 40.8100,
    lng: -73.9501,
    category: "historical",
    year: 1934,
    detail: "Legendary venue for African American performers since 1934",
    clues: [
      "This theater's Amateur Night has launched the careers of countless music legends since the 1930s.",
      "Located on 125th Street in Harlem, it became a cultural institution for African American entertainment.",
      "Ella Fitzgerald, James Brown, and Jimi Hendrix all got their start at this Harlem theater's famous Amateur Night."
    ]
  },
  {
    name: "The Cloisters",
    lat: 40.8649,
    lng: -73.9319,
    category: "historical",
    year: 1938,
    detail: "Medieval art museum built from European monastery elements",
    clues: [
      "This museum was assembled from architectural elements of five medieval European monasteries.",
      "Located in Fort Tryon Park at the northern tip of Manhattan, it overlooks the Hudson River and the Palisades.",
      "A branch of the Met devoted to medieval art, it incorporates actual Romanesque and Gothic cloisters shipped from France and Spain."
    ]
  },
  {
    name: "Cooper Union Foundation Building",
    lat: 40.7290,
    lng: -73.9907,
    category: "historical",
    year: 1859,
    detail: "Site of Lincoln's 'Right Makes Might' speech",
    clues: [
      "A famous 1860 speech delivered in this building's Great Hall helped propel its speaker to the presidency.",
      "Located in the East Village at Astor Place, this brownstone Italianate building was one of the first to use steel railroad rails as structural beams.",
      "Abraham Lincoln's 'Cooper Union Address' in February 1860 made the case against slavery's expansion and launched his national reputation."
    ]
  },
  {
    name: "South Street Seaport",
    lat: 40.7063,
    lng: -74.0033,
    category: "historical",
    year: 1625,
    detail: "Historic port district dating to NYC's founding",
    clues: [
      "This waterfront district was the center of the city's maritime commerce for over two centuries.",
      "Located where Fulton Street meets the East River, its cobblestone streets and 19th-century buildings now house shops and restaurants.",
      "Home to a collection of historic sailing ships and the Fulton Fish Market (which operated here from 1822 to 2005)."
    ]
  },
  {
    name: "Roosevelt Island Smallpox Hospital",
    lat: 40.7515,
    lng: -73.9500,
    category: "historical",
    year: 1856,
    detail: "Ruins of a Gothic Revival hospital on Roosevelt Island",
    clues: [
      "The Gothic Revival ruins of this hospital stand as one of the city's most hauntingly beautiful landmarks.",
      "Located on the southern tip of a narrow island in the East River, it was part of a complex of charitable institutions.",
      "Built in 1856 to treat smallpox patients, its stabilized stone shell on Roosevelt Island was designated a landmark in 1972."
    ]
  },
  {
    name: "Weeksville Heritage Center",
    lat: 40.6733,
    lng: -73.9117,
    category: "historical",
    year: 1838,
    detail: "One of America's first free Black communities",
    clues: [
      "This site preserves one of the first free African American communities established in the 19th century.",
      "Located in the Crown Heights neighborhood of Brooklyn, three original wooden houses from the 1840s still stand.",
      "Founded by James Weeks in 1838, this community in Brooklyn had its own school, church, and newspaper."
    ]
  },
  {
    name: "Dyckman Farmhouse",
    lat: 40.8675,
    lng: -73.9236,
    category: "historical",
    year: 1784,
    detail: "Oldest remaining farmhouse in Manhattan",
    clues: [
      "This is the only surviving 18th-century Dutch Colonial farmhouse in Manhattan.",
      "Located in the Inwood neighborhood at the very northern tip of the island, it sits amid modern apartment buildings.",
      "Built by the Dyckman family around 1784 after the British burned their previous home during the Revolution."
    ]
  },
  {
    name: "Morris-Jumel Mansion",
    lat: 40.8345,
    lng: -73.9388,
    category: "historical",
    year: 1765,
    detail: "Manhattan's oldest house; Washington's headquarters in 1776",
    clues: [
      "This Palladian-style mansion is the oldest surviving house in Manhattan.",
      "Perched on a hilltop in Washington Heights with commanding views, it served as a military headquarters during the Revolution.",
      "George Washington used this 1765 mansion as his headquarters during the Battle of Harlem Heights in September 1776."
    ]
  },
  {
    name: "Prospect Park",
    lat: 40.6602,
    lng: -73.9690,
    category: "historical",
    year: 1867,
    detail: "Olmsted & Vaux considered it their masterpiece over Central Park",
    clues: [
      "The designers of this park considered it superior to their more famous Manhattan project.",
      "This 526-acre green space in the heart of Brooklyn features a 60-acre lake and the only forest in the borough.",
      "Designed by Olmsted and Vaux (who also created Central Park), they considered this 1867 Brooklyn park their masterpiece."
    ]
  },
  {
    name: "Coney Island",
    lat: 40.5749,
    lng: -73.9857,
    category: "historical",
    year: 1880,
    detail: "America's original amusement park destination",
    clues: [
      "This beachfront neighborhood pioneered the modern amusement park, with the first enclosed roller coaster in 1884.",
      "Located at the southern tip of Brooklyn, its boardwalk, hot dog stands, and rides have drawn crowds for over a century.",
      "Home to Luna Park, the Cyclone roller coaster, and Nathan's Famous hot dogs, this Brooklyn beach has been 'the people's playground' since the 1880s."
    ]
  },
  {
    name: "Snug Harbor Cultural Center",
    lat: 40.6437,
    lng: -74.1020,
    category: "historical",
    year: 1833,
    detail: "Former retirement home for sailors on Staten Island",
    clues: [
      "This campus of Greek Revival buildings was originally built as a retirement home for aged merchant sailors.",
      "Located on the north shore of Staten Island, its grand temple-fronted structures now house museums, gardens, and performance spaces.",
      "Sailors' Snug Harbor operated from 1833 to 1976; its row of five Greek Revival temples is one of the finest in the country."
    ]
  },
  {
    name: "King Manor Museum",
    lat: 40.7058,
    lng: -73.8028,
    category: "historical",
    year: 1750,
    detail: "Home of Rufus King, one of the last Founding Fathers to oppose slavery",
    clues: [
      "This colonial farmhouse was home to a Founding Father who was among the earliest prominent opponents of slavery.",
      "Located in Jamaica, Queens, this Georgian-Federal house is now a museum surrounded by a small park.",
      "Rufus King, a signer of the Constitution and fierce slavery opponent, lived in this Queens house from 1805 until his death in 1827."
    ]
  },
  {
    name: "Fort Tilden",
    lat: 40.5598,
    lng: -73.8867,
    category: "historical",
    year: 1917,
    detail: "Decommissioned coastal defense fort in the Rockaways",
    clues: [
      "This former military installation guarded the approaches to the harbor with massive gun batteries.",
      "Located on the Rockaway Peninsula in Queens, its abandoned bunkers and batteries are now part of a national recreation area.",
      "Built during WWI and expanded in WWII, this fort in the Rockaways once housed Nike missiles during the Cold War."
    ]
  },
  {
    name: "Bowling Green",
    lat: 40.7042,
    lng: -74.0137,
    category: "historical",
    year: 1733,
    detail: "NYC's oldest public park; site of the Charging Bull",
    clues: [
      "This small oval park is the oldest public park in New York City, established as a formal green in 1733.",
      "Located at the foot of Broadway in Lower Manhattan, a famous bronze sculpture of a bull stands nearby.",
      "In 1776, a crowd pulled down a gilded lead statue of King George III that stood here and melted it into musket balls."
    ]
  },
  {
    name: "Old Stone House",
    lat: 40.6744,
    lng: -73.9789,
    category: "historical",
    year: 1699,
    detail: "Site of a key engagement in the Battle of Brooklyn, 1776",
    clues: [
      "A desperate stand at this farmhouse during the Revolution saved the Continental Army from total destruction.",
      "This reconstructed Dutch-colonial stone house sits in a park in the Park Slope neighborhood of Brooklyn.",
      "During the Battle of Brooklyn in 1776, Maryland troops made a sacrificial rearguard action here, allowing Washington's army to escape."
    ]
  },
  {
    name: "Merchant's House Museum",
    lat: 40.7282,
    lng: -73.9926,
    category: "historical",
    year: 1832,
    detail: "Perfectly preserved 19th-century home in NoHo",
    clues: [
      "This is the only 19th-century family home in Manhattan preserved intact — inside and out.",
      "Located on East 4th Street in NoHo, it contains the original furniture, clothing, and personal items of the family who lived there.",
      "The Tredwell family's 1832 row house was left virtually untouched for nearly a century, making it a time capsule of domestic life."
    ]
  },
  {
    name: "Lefferts Historic House",
    lat: 40.6621,
    lng: -73.9676,
    category: "historical",
    year: 1783,
    detail: "Dutch-American farmhouse in Prospect Park",
    clues: [
      "This wooden farmhouse was rebuilt after British troops burned the original during the Revolutionary War.",
      "Now located inside Brooklyn's largest park, it offers a glimpse into 18th-century Dutch farming life.",
      "The Lefferts family rebuilt this house around 1783; it was moved to Prospect Park in 1918 and operates as a children's museum."
    ]
  },
  {
    name: "Bartow-Pell Mansion",
    lat: 40.8721,
    lng: -73.8037,
    category: "historical",
    year: 1842,
    detail: "Greek Revival mansion in Pelham Bay Park, the Bronx",
    clues: [
      "This elegant Greek Revival mansion sits in the largest park in New York City — larger than Central Park.",
      "Located in Pelham Bay Park in the Bronx, its formal terraced gardens overlook Long Island Sound.",
      "Built by the Bartow family in 1842, this mansion in the Bronx features a stunning freestanding stone spiral staircase."
    ]
  },
  {
    name: "Flushing Quaker Meeting House",
    lat: 40.7630,
    lng: -73.8306,
    category: "historical",
    year: 1694,
    detail: "Connected to the Flushing Remonstrance and religious freedom",
    clues: [
      "This simple wooden structure is tied to a 1657 document considered a precursor to the First Amendment.",
      "Located in downtown Flushing, Queens, it has been in continuous use as a house of worship for over 300 years.",
      "Built by Quakers in 1694, it's connected to the Flushing Remonstrance — an early protest for religious freedom against Peter Stuyvesant."
    ]
  },
  {
    name: "Edgar Allan Poe Cottage",
    lat: 40.8634,
    lng: -73.8947,
    category: "historical",
    year: 1812,
    detail: "Poe's final home where he wrote 'Annabel Lee'",
    clues: [
      "A master of the macabre spent his final years in this tiny wooden cottage, hoping the country air would help his ailing wife.",
      "Now surrounded by apartment buildings in the Bronx, this small house was once on a rural farm.",
      "Edgar Allan Poe wrote 'Annabel Lee' and 'Eureka' while living in this Bronx cottage from 1846 to 1849."
    ]
  }
];
