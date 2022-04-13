const DATABASE_MODELS = {
    USER: "User",
    VEHICLE: "Vehicle",
    RIDE: "Ride",
    LENDER: "Lender",
    PAYMENT: "Payment",
    REVIEW: "Reviews",
    BUSINESS: "Business",
    KEY: "Key",
    VEHICLE_ACTION: "VehicleAction",
    STRIPE_ACCOUNT: "StripeAccount",
    STRIPE_ACCOUNT_LINK: "StripeAccountLink",
    STRIPE_CUSTOMER: "StripeCustomer",
    STRIPE_PAYMENT_INTENT: "StripePaymentIntent",
    DRIVER_LICENSE: "DriverLicense",
    ADMIN: "ADMIN"
}

const COLLECTIONS = {
    USERS: "users",
    VEHICLES: "vehicles",
    RIDES: "rides",
    LENDERS: "lenders",
    PAYMENTS: "payments",
    REVIEWS: "reviews",
    BUSINESSES: "businesses",
    KEYS: "keys",
    VEHICLE_ACTIONS: "vehicleActions",
    STRIPE_ACCOUNTS: "stripeAccounts",
    STRIPE_ACCOUNT_LINKS: "stripeAccountLinks",
    STRIPE_CUSTOMERS: "stripeCustomers",
    STRIPE_PAYMENT_INTENTS: "stripePaymentIntents",
    DRIVER_LICENSES: "driverLicenses",
    ADMINS: "admins",
}

const DB_URI = "mongodb://127.0.0.1:27017/HACKAUBG";

const JWT_SECRET = "lj1ds21idpk2]312d's[23123q";

const PORT = 6140;

const NODE_ENVIRONMENTS = {
    DEVELOPMENT: "DEVELOPMENT",
    PRODUCTION: "PRODUCTION",
}

const NODE_ENVIRONMENT = NODE_ENVIRONMENTS.DEVELOPMENT;

const HTTP_STATUS_CODES = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
}

const USER_STATUSES = {
    ACTIVE: "ACTIVE",
    BLOCKED: "BLOCKED",
}

const LENDER_STATUSES = {
    ACTIVE: "ACTIVE",
    PENDING_APPROVAL: "PENDING_APPROVAL",
    INACTIVE: "INACTIVE",
    BLOCKED: "BLOCKED",
}

const DEFAULT_ERROR_MESSAGE = "Internal server error";

const CAR_MAKERS = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo",
]

const SCOOTER_MAKERS = [
    "Segway",
    "Xiaomi",
]

const BIKE_MAKERS = [
    "24seven",
    "333Fab",
    "3G",
    "3T",
    "3rensho",
    "6KU",
    "9 zero 7",
    "A-bike",
    "A2B e-bikes",
    "AGang",
    "ALAN",
    "AMF",
    "Abici",
    "Accell",
    "Access",
    "Acstar",
    "Adams (Trail a bike)",
    "Adolphe Clément",
    "Advocate",
    "Aegis",
    "Aerofix Cycles",
    "Affinity Cycles",
    "Airborne",
    "Alcyon",
    "Alexander Leutner & Co.",
    "Alien Bikes",
    "All City",
    "Alldays & Onions",
    "Alliance",
    "Alton",
    "American Bicycle Group",
    "American Machine and Foundry",
    "American Star Bicycle",
    "Amoeba",
    "Apache Bicycles",
    "Apollo",
    "Ares",
    "Argo Cargo Bike",
    "Argon 18",
    "Asama",
    "Atala",
    "Atomlab",
    "Author",
    "Avalon",
    "Avanti",
    "Aventón",
    "Avenue",
    "Azonic",
    "Azor",
    "Azub",
    "Azzuri",
    "BBF",
    "BCA",
    "BH Bikes (Beistegui Hermanos)",
    "BMC",
    "BSA",
    "BSP",
    "BULLS Bikes",
    "Bacchetta",
    "Bachetta",
    "Backward Circle",
    "Badger Bikes",
    "Bafang",
    "Bailey",
    "Bakfiets",
    "Bamboocycles",
    "Banshee Bikes",
    "Bantam (Bantam Bicycle Works)",
    "Barracuda",
    "Basso",
    "Batavus",
    "Bazooka",
    "BeOne",
    "Bearclaw Bicycle Co.",
    "Beater Bikes",
    "Benelli",
    "Benno",
    "Benotto",
    "Bergamont",
    "Bertin",
    "Bertoni",
    "Bianchi",
    "Bickerton",
    "Big Cat Bikes",
    "Big Shot",
    "Bike Friday",
    "Bike Mielec",
    "Bike4Life",
    "BikeE recumbents",
    "Biktrix",
    "Bilenky Cycle Works",
    "Biomega",
    "Birdy",
    "Biria",
    "Birmingham Small Arms Company",
    "Bishop",
    "Black Heart Bike Co",
    "Black Market",
    "Black Mountain Cycles",
    "Black Sheep Bikes",
    "Blix",
    "Blue (Blue Competition Cycles)",
    "Blue Sky Cycle Carts",
    "Boardman Bikes",
    "Bobbin",
    "Bohemian Bicycles",
    "Bombtrack",
    "Bontrager",
    "Boo Bicycles",
    "Boreal",
    "Borealis (Borealis Fat Bikes)",
    "Borile",
    "Bottecchia",
    "Boulder Bicycles",
    "Breadwinner",
    "Breakbrake17 Bicycle Co.",
    "Breezer",
    "Brennabor",
    "Bridgestone",
    "Brilliant Bicycle",
    "British Eagle",
    "Broakland",
    "Brodie",
    "Broke Bikes",
    "Brompton Bicycle",
    "Brooklyn Bicycle Co.",
    "Brother Cycles",
    "Browning",
    "Brunswick Corporation",
    "Budnitz",
    "Burley Design",
    "Bushnell",
    "CCM",
    "CETMA Cargo",
    "CRUD",
    "CVLN (Civilian)",
    "Calcott Brothers",
    "Calfee Design",
    "Caloi",
    "Campion Cycle Company",
    "Canfield Brothers",
    "Cannondale",
    "Canyon bicycles",
    "Carrera bicycles",
    "Carrol Cycles",
    "Catrike",
    "Cayne",
    "Centurion",
    "Cero",
    "Cervélo",
    "Charge",
    "Chariot",
    "Chase",
    "Checker Pig",
    "Chicago Bicycle Company",
    "Christiania Bikes",
    "Chromag",
    "Cicielios",
    "Cicli Barco",
    "Cicli Olympia",
    "Cielo",
    "Cignal",
    "Cilo",
    "Cinelli",
    "Ciocc",
    "Citizen Bike",
    "City Bicycles Company",
    "Civia",
    "Clark-Kent",
    "Claud Butler",
    "Cleary Bikes",
    "Co-Motion",
    "Coboc",
    "Colnago",
    "Colony",
    "Colossi",
    "Columbia",
    "Columbus Tubing",
    "Commencal Bikes",
    "Concord Recreation",
    "Condor",
    "Conor",
    "Convercycle",
    "Cook Bros. Racing",
    "Cooper Bikes",
    "Corima",
    "Corratec",
    "Cortina Cycles",
    "Cove",
    "Crank2",
    "Create",
    "Creme Cycles",
    "Crew",
    "Critical Cycles",
    "Crumpton",
    "Crust Bikes",
    "Cruzbike",
    "Cube",
    "Cuevas",
    "Cult",
    "Currie Technology (Currietech)",
    "Currys",
    "Curtlo",
    "Cyclamatic",
    "Cycle Force Group",
    "CyclePro",
    "Cycles Fanatic",
    "Cycles Follis",
    "Cycles Toussaint",
    "Cycleurope",
    "Cyfac",
    "Cyrusher",
    "DEAN",
    "DHS",
    "DK Bikes",
    "DMR Bikes",
    "DOST",
    "DYU",
    "Da Bomb Bikes",
    "Daccordi",
    "Dahon",
    "Dartmoor",
    "Davidson",
    "Dawes Cycles",
    "De Rosa",
    "DeBernardi",
    "DeSalvo Cycles",
    "Decathlon",
    "Deco",
    "Deity",
    "Del Sol",
    "Della Santa",
    "Den Beste Sykkel",
    "Dengfu",
    "Derby Cycle",
    "Detroit Bikes",
    "Devinci",
    "Devron",
    "Di Blasi Industriale",
    "Diadora",
    "Diamant",
    "Diamondback",
    "Dillenger",
    "DirtySixer",
    "Discwing",
    "Dobermann",
    "Dodici Milano",
    "Dolan",
    "Donnelly",
    "Downtube",
    "Drag",
    "Dynacraft",
    "Dynamic Bicycles",
    "Dyno",
    "E. C. Stearns Bicycle Agency",
    "EAI (Euro Asia Imports)",
    "EBC",
    "EG Bikes (Metronome)",
    "EGO Movement",
    "EMC Bikes",
    "EZ Pedaler (EZ Pedaler electric bikes)",
    "Eagle Bicycle",
    "Eastern",
    "Easy Motion",
    "Easy Racers",
    "Ebisu",
    "Eddy Merckx",
    "EighthInch",
    "Electra",
    "Electric Bike Technologies",
    "Elite SRL",
    "Elliptigo",
    "Ellis",
    "Ellis Briggs",
    "Ellsworth",
    "Emilio Bozzi",
    "Encore",
    "Engin Cycles",
    "Enigma Titanium",
    "Erickson Bikes",
    "Europa",
    "Evans Cycles",
    "Evelo",
    "Evil",
    "Evo",
    "Ezee",
    "FBM",
    "FLX",
    "FRAMED",
    "Factor",
    "Faggin",
    "Failure",
    "Fairdale",
    "Fairlight",
    "Falco Bikes",
    "Falcon",
    "Fanatik",
    "Faraday",
    "Fat City Cycles",
    "Fatback",
    "FattE-Bikes",
    "Fausto Coppi",
    "Federal",
    "Felt",
    "Fetish",
    "Fezzari",
    "Field",
    "Firefly Bicycles",
    "Firefox",
    "Firenze",
    "Firmstrong",
    "Fit bike Co.",
    "Fleet Velo",
    "Fleetwing",
    "Flybikes",
    "Flying Pigeon",
    "Flying Scot",
    "Flyxii",
    "Focale44",
    "Focus",
    "Fokhan",
    "Folmer & Schwing",
    "Fondriest",
    "Forge Bikes",
    "Formula",
    "Fortified",
    "Foundry Cycles",
    "Fox",
    "Fram",
    "Framebuilder Supply",
    "Frances",
    "Francesco Moser (F. Moser)",
    "Freddie Grubb",
    "Free Agent",
    "Free Spirit",
    "Freedom",
    "Frog bikes",
    "Fuji",
    "Fyxation",
    "GMC",
    "GOTRAX",
    "GT Bicycles",
    "Gardin",
    "Garneau",
    "Gary Fisher",
    "Gavin",
    "Gazelle",
    "GenZe",
    "Gendron Bicycles",
    "Genesis",
    "Geotech",
    "Gepida",
    "Gerard",
    "Ghost",
    "Giant (and LIV)",
    "Gilmour",
    "Giordano",
    "Gitane",
    "Gladiator Cycle Company",
    "Globe",
    "Gnome et Rhône",
    "Gocycle",
    "Golden Cycles",
    "Gomier",
    "Gordon Hill",
    "Gorilla bikes",
    "Gormully & Jeffery",
    "Grabber",
    "Graflex",
    "Gravity",
    "Green Light Cycle Ltd.",
    "Greenfield",
    "Greenspeed",
    "Growler Performance Bikes",
    "Guardian",
    "Gudereit",
    "Guerciotti",
    "Guerrilla Gravity",
    "Gunnar",
    "Guru",
    "HBBC (Huntington Beach Bicycle, Co)",
    "HERCULES // Fahrräder & E-Bikes",
    "HP Velotechnik",
    "Habanero",
    "Haibike",
    "Hallstrom",
    "Haluzak",
    "Hampsten Cycles",
    "Handsome Cycles",
    "Hanford",
    "Hardrocx",
    "Haro",
    "Harry Quinn",
    "Harvey Cycle Works",
    "Hasa",
    "Hase bikes",
    "Head",
    "Heinkel",
    "Helkama",
    "Hercules Rodeado",
    "Heritage",
    "Herkelmann",
    "Hero Cycles Ltd",
    "Heron",
    "Hetchins",
    "Hija de la Coneja",
    "Hilltopper",
    "Himiway",
    "Hinton Cycles",
    "Hirschfeld",
    "Hoffman",
    "Holdsworth",
    "Hollandia",
    "Hornit",
    "HubBub",
    "Huffy",
    "Hufnagel",
    "Humber",
    "Humble Frameworks",
    "Hunter",
    "Hurtu",
    "Hyper",
    "IBEX",
    "ICE Trikes (Inspired Cycle Engineering)",
    "ICan Cycling",
    "IRO Cycles",
    "IZIP",
    "Ibis",
    "Ideal Bikes",
    "Identiti",
    "Independent Fabrication",
    "Industrieverband Fahrzeugbau",
    "Inglis (Retrotec)",
    "Innerlight Cycles",
    "Inspired",
    "Intense",
    "Iride Bicycles",
    "Iron Horse Bikes",
    "Ironhorse Bicycles",
    "Islabikes",
    "Italvega",
    "Itera plastic bicycle",
    "Iver Johnson",
    "Iverson",
    "JMC Bicycles",
    "JP Weigle's",
    "Jamis",
    "Jan Janssen",
    "Javelin",
    "Jetson",
    "Jettrike",
    "Joey",
    "John Cherry bicycles",
    "John Deere",
    "Johnny Loco",
    "Jorg & Olif",
    "Juiced Bikes",
    "Juliana Bicycles",
    "K2",
    "KHS Bicycles",
    "KTM",
    "KW Bicycle",
    "Kalkhoff",
    "Kalloy",
    "Kazam",
    "Kelly",
    "Kellys Bicycles",
    "Kent",
    "Kestrel",
    "Kettler Alu-Rad",
    "Kettler USA",
    "Kinesis",
    "Kinesis Industry",
    "Kink",
    "Kinn",
    "Kirk",
    "Kish Fabrication",
    "Klein Bikes",
    "Knolly",
    "Koga-Miyata",
    "Kogswell Cycles",
    "Kona",
    "Kron",
    "Kronan",
    "Kross SA",
    "Kuota",
    "Kustom Kruiser",
    "Kuwahara",
    "LDG (Livery Design Gruppe)",
    "LOW//",
    "Land Shark",
    "Lankeleisi",
    "Lapierre",
    "Larry Vs Harry",
    "Laurin & Klement",
    "LeMond",
    "Leader Bikes",
    "Lectric Cycles",
    "Lectric eBikes",
    "Legacy Frameworks",
    "Leopard",
    "Lesoosebike",
    "Liberty",
    "Light My Fire",
    "Lightning Cycle Dynamics",
    "Lightspeed",
    "Linear",
    "Linus",
    "Liotto (Cicli Liotto Gino & Figli)",
    "Litespeed",
    "Liteville",
    "Liv",
    "Loekie",
    "Longbikes",
    "Look",
    "Lotus",
    "Louison Bobet",
    "Lynskey",
    "M2S Bikes",
    "MBK",
    "MEC (Mountain Equipment Co-op)",
    "MMR",
    "MVMT Bikes",
    "Madsen",
    "Madwagon",
    "Magellan",
    "Magna",
    "Magnum Bikes",
    "Malvern Star",
    "ManKind",
    "Mango",
    "Manhattan",
    "Mantis",
    "Map Bicycles",
    "Maraton",
    "Marin Bikes",
    "Marinoni",
    "Mars Cycles",
    "Marson",
    "Maruishi",
    "Marukin",
    "Masi",
    "Mason Cycles",
    "Matra",
    "Maverick",
    "Maxcom",
    "Maxyara",
    "Melon Bicycles",
    "Mercian Cycles",
    "Mercier",
    "Merida Bikes",
    "Merit Bikes",
    "Merlin",
    "MetaBikes",
    "Metrofiets",
    "Micajah C. Henley",
    "Micargi",
    "Miele bicycles",
    "Mikkelsen",
    "Milwaukee Bicycle Co.",
    "MirraCo",
    "Mission Bicycles",
    "Miyata",
    "Mizutani",
    "Momentum",
    "Monark",
    "Mondia",
    "Mondraker",
    "Mongoose",
    "Montague",
    "Montra",
    "Moots Cycles",
    "Mosaic",
    "Moser Cicli",
    "Mosh",
    "Mosso",
    "Moth Attack",
    "Motiv",
    "Motobecane",
    "Motrike",
    "Moulden",
    "Moulton Bicycle",
    "Mountain Cycles",
    "Mountainsmith",
    "Muddy Fox",
    "Murray",
    "Mutant Bikes",
    "Mutiny",
    "Müsing (Muesing)",
    "NCM eBikes",
    "NEMO",
    "NS Bikes",
    "Nakamura",
    "Naked",
    "Nakto",
    "Nashbar",
    "National",
    "Native",
    "Nazca",
    "Neil Pryde",
    "Nema",
    "Neobike",
    "New Albion",
    "New Balance",
    "Next",
    "Niner",
    "Nirve",
    "Nishiki",
    "Nomad Cargo",
    "Norco Bikes",
    "Normal Bicycles",
    "Norman Cycles",
    "Northrock",
    "Novara",
    "Nukeproof",
    "Nymanbolagen",
    "O'Leary",
    "OHM",
    "OPEN",
    "Obed",
    "Olmo",
    "Omnium",
    "On-One",
    "OneWheel",
    "Onway",
    "Opel",
    "Optimus",
    "Opus",
    "Orange Bikes",
    "Orbea",
    "Orbit",
    "Orient Bikes",
    "Origin8",
    "Other",
    "Otis Guy",
    "Oyama",
    "Oyma Power",
    "Ozone",
    "P Tec",
    "PUBLIC bikes",
    "Pacific Cycle",
    "Pake",
    "Panasonic",
    "Paper Bicycle",
    "Parkpre",
    "Parlee",
    "Pasculli",
    "Pashley Cycles",
    "Patria",
    "Pedego",
    "Pedersen bicycle",
    "Pegasus",
    "Pegoretti",
    "Penhale Bicycle Co.",
    "Pereira",
    "Performance",
    "Performer",
    "Peugeot",
    "Phat Cycles",
    "Phillips Cycles",
    "Phoenix",
    "Pilen",
    "Pinarello",
    "Pinnacle",
    "Pivot",
    "Planet X",
    "Pogliaghi",
    "Polygon",
    "Pope Manufacturing Company",
    "Premium",
    "Prevelo",
    "Price",
    "Primus Mootry",
    "Principia",
    "Priority Bicycles",
    "Private Label",
    "Procycle Group",
    "Prodeco Tech",
    "Propain",
    "Prophete",
    "Puch",
    "Pure Fix Cycles",
    "Python",
    "Python Pro",
    "QBP",
    "QWIC",
    "Quadrant Cycle Company",
    "Quest",
    "Quintana Roo",
    "REI",
    "RIH",
    "RIH Sport Amsterdam",
    "RSD",
    "RST",
    "Rabeneick",
    "Rad Power Bikes",
    "Radio Bike Co",
    "Radio Flyer",
    "Ragley",
    "Raleigh",
    "Ram",
    "Rambler",
    "Rans Designs",
    "Rapide",
    "Rat Rod Bikes",
    "Ratking",
    "Rawland Cycles",
    "Razor",
    "Redline",
    "Redlof",
    "Redshift",
    "Reid",
    "Republic",
    "Retrospec",
    "Revel",
    "Ribble",
    "Ridgeback",
    "Ridley",
    "Riese und Müller",
    "Rift",
    "Ritchey",
    "Ritte",
    "Rivendell Bicycle Works",
    "Roadmaster",
    "Roberts Cycles",
    "Robin Hood",
    "Rock Lobster",
    "Rocky Mountain Bicycles",
    "Rodeo Adventure Labs",
    "Rodriguez",
    "Rohloff",
    "Roll Bicycle Company",
    "Rosko",
    "Ross",
    "Rossignol",
    "Rossin",
    "Rover Company",
    "Rowbike",
    "Royal",
    "Royce Union",
    "Rudge-Whitworth",
    "S & M",
    "SC Bicycles",
    "SCOTT",
    "SE Bikes",
    "SR Suntour",
    "START",
    "STRiDA",
    "Sage Titanium Bicycles",
    "Sakae",
    "Salsa",
    "Salt BMX",
    "Samchuly",
    "Sancineto",
    "Sanderson",
    "Santa Cruz",
    "Santana Cycles",
    "Saracen Cycles",
    "Sava",
    "Scania AB",
    "Scapin",
    "Scattante",
    "Schindelhauer",
    "Schwinn",
    "Sears Roebuck",
    "Season",
    "Sekai",
    "Sekine",
    "Sense",
    "Serotta",
    "Sette",
    "Seven Cycles",
    "Shadow Conspiracy",
    "Shelby Cycle Company",
    "Shimano",
    "Shinola",
    "Shogun",
    "Shredder",
    "Silverback",
    "Simcoe",
    "Simplon",
    "Simson",
    "Sinclair Zike",
    "Six-Eleven",
    "Skyway",
    "Sohrab Cycles",
    "Solex",
    "Solé (Sole bicycles)",
    "Soma",
    "Somec",
    "Sondors",
    "Sonoma",
    "Soulcraft",
    "Source",
    "Spalding Bicycles",
    "Sparta",
    "Specialized",
    "Spectrum",
    "Speedco",
    "Speedvagen",
    "Speedwell bicycles",
    "Spicer",
    "SpiderTech",
    "Spooky",
    "Spot",
    "St. Tropez",
    "Stages",
    "Staiger",
    "Standard Byke",
    "Standert",
    "Stanley",
    "Stanridge",
    "State Bicycle Co.",
    "Stealth Electric Bikes",
    "Steelman Cycles",
    "Stein Trikes",
    "Stelber Cycle Corp",
    "Stella",
    "Sterling Bicycle Co.",
    "Steve Potts",
    "Stevens",
    "Stevenson Custom Bicycles",
    "Stinner",
    "Stoemper",
    "Stolen Bicycle Co.",
    "Stooge Cycles",
    "Strada Customs",
    "Stradalli Cycles",
    "Strawberry Bicycle",
    "Strider",
    "Stromer",
    "Strong Frames",
    "Stålhästen",
    "Subrosa",
    "Suelo",
    "Sun",
    "Sunday",
    "Sunn",
    "Supercross",
    "Supercycle",
    "Supernova Bikes",
    "Surface604",
    "Surly",
    "Surrey",
    "Sweetpea Bicycles",
    "Swingset",
    "Swobo",
    "SyCip",
    "Syntace",
    "TET Cycles (Tom Teesdale Bikes)",
    "TI Cycles",
    "TI Cycles of India",
    "Taarnby",
    "Tadpole",
    "Takara",
    "Talisman Bikes",
    "Tangent Products",
    "Tati Cycles",
    "Taylor Bicycles (Paul Taylor)",
    "Tec Labs",
    "Tern",
    "Terra Trike",
    "Terrible One",
    "Terrot",
    "Terry",
    "Thesis Bike",
    "Thorn Cycles",
    "Thrill",
    "Throne Cycles",
    "Thruster",
    "Thule",
    "TigoMac",
    "Time",
    "Tioga",
    "Titan",
    "Titus",
    "Tokyobike",
    "Tomac",
    "Tommasini",
    "Tommaso",
    "Tony Hawk",
    "Torelli",
    "Torker",
    "Total BMX",
    "Tour de France",
    "Tout Terrain",
    "Toyo",
    "Track and Trail",
    "Traitor",
    "Transit",
    "Transition Bikes",
    "Trayl",
    "Trek",
    "Tribe Bicycle Co",
    "Trident",
    "TrikExplor",
    "Trinx",
    "Triumph Cycle",
    "Tubus",
    "Tunturi",
    "Turboant",
    "Turin",
    "Turner Bicycles",
    "Twin Six",
    "Umberto Dei",
    "Univega",
    "Unknown",
    "Upland",
    "Urago",
    "Urban Arrow",
    "Urban Bike",
    "VAAST",
    "VSF Fahrradmanufaktur",
    "Valdora",
    "Van Dessel",
    "Van Herwerden",
    "Van Raam",
    "VanMoof",
    "Vassago",
    "Velo",
    "Velo Orange",
    "Velo Vie",
    "Velomotors",
    "Velorbis",
    "Veloretti",
    "Verde",
    "Vicini",
    "Vilano",
    "Villy Customs",
    "Vindec High Riser",
    "Viner",
    "Virtue",
    "Viscount",
    "Vision",
    "Vista",
    "Vitus",
    "Viva",
    "Vivente",
    "Volae",
    "Volagi",
    "Volume",
    "Voodoo",
    "Vortrieb",
    "Vtuvia",
    "Vélo Bolton",
    "VéloSoleX",
    "WTB (Wilderness Trail Bikes)",
    "Wabi Cycles",
    "Waterford",
    "Wdnsdy",
    "WeThePeople",
    "WeeRide",
    "Weehoo",
    "Whirlwind",
    "Whisky Parts Co",
    "Wilier",
    "Windsor",
    "Winora",
    "Winter Bicycles",
    "Witcomb Cycles",
    "Wittson",
    "Woom",
    "WordLock",
    "WorkCycles",
    "Worksman Cycles",
    "Wraith Fabrication",
    "Wright Cycle Company",
    "X-Treme",
    "Xds",
    "Xootr",
    "Xtracycle",
    "YT",
    "Yamaguchi Bicycles",
    "Yamaha",
    "Yeti",
    "Yuba",
    "Zigo",
    "Zinn Cycles",
    "Zoom Balance Bike",
    "Zycle Fix",
    "b'Twin",
    "beixo",
    "de Fietsfabriek",
    "di Florino",
    "eFlow",
    "eVox",
    "eZip",
    "iGo Electric Bikes",
    "k.bedford customs",
    "samebike",
    "sixthreezero"
]

const SMARTCAR_ID = "5e2c2092-1e00-4328-8fbc-fb6c360c6abd";
const SMARTCAR_SECRET = "cb4ba386-558c-46e4-973d-d7f4723667af";

const VEHICLE_STATUSES = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    BLOCKED: "BLOCKED",
}

const VEHICLE_TYPES = {
    MOPED: "MOPED",
    MOTORCYCLE: "MOTORCYCLE",
    CAR: "CAR",
    ELECTRIC_SCOOTER: "ELECTRIC_SCOOTER",
    BIKE: "BIKE",
    OTHER_WITH_ENGINE: "OTHER_WITH_ENGINE",
    OTHER_WITHOUT_ENGINE: "OTHER_WITHOUT_ENGINE",
}

const VEHICLE_TYPES_WITHOUT_DRIVER_LICENSE = [VEHICLE_TYPES.ELECTRIC_SCOOTER, VEHICLE_TYPES.BIKE, VEHICLE_TYPES.OTHER_WITH_ENGINE, VEHICLE_TYPES.OTHER_WITHOUT_ENGINE];

const RIDE_STATUSES = {
    AWAITING_PAYMENT: "AWAITING_PAYMENT",
    AWAITING: "AWAITING",
    ONGOING: "ONGOING",
    FINISHED: "FINISHED",
    CANCELLED: "CANCELLED",
    PENDING_APPROVAL: "PENDING_APPROVAL",
    CANCELLED_BY_SYSTEM: "CANCELLED_BY_SYSTEM"
}

const BUSINESS_STATUSES = {
    INACTIVE: "INACTIVE",
    ACTIVE: "ACTIVE",
    BLOCKED: "BLOCKED",
    PENDING_APPROVAL: "PENDING_APPROVAL"
}

const UNLOCK_TYPES = {
    AUTOMATIC: "AUTOMATIC",
    MANUAL: "MANUAL"
}

const CURRENCY_TYPES = {
    EUR: "EUR",
    BGN: "BGN",
    USD: "USD"
}

const PAYMENT_STATUSES = {
    PAYED: "PAYED",
    UNPAYED: "UNPAYED",
}

const ONE_DAY_IN_MILLISECONDS = 86400000;

const THIRTY_MINUTES_IN_MILLISECONDS = 1800000;

const TEN_MINUTES_IN_MILLISECONDS = 600000;
const TWENTY_MINUTES_IN_MILLISECONDS = 1200000;

STRIPE_SECRET_KEY = "sk_test_51KEMKSKLGg8Ds3vhOtAXTcaZYLYAMb245EU4qMPZ5TtHLIRl6Kg24fitLmJ4TK8KNxzcQIVFdWeWz2o23Ha0HMvB00ajF0Kh7N";
STRIPE_PUBLIC_KEY = "pk_test_51KEMKSKLGg8Ds3vhNLpawzHO3ak27D8zbupGX0mYYRQ383NWYASM5y1nWkXYMNpT7W3WM4EiOsQdXSlUTd70pHpv007tW74nxl";

const KEY_STATUSES = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
    PENDING_AUTH_FLOW: "PENDING_AUTH_FLOW",
    BLOCKED: "BLOCKED",
}

const KEY_ACTIONS = {
    UNLOCK: "UNLOCK",
    LOCK: "LOCK",
}

const WEEK_IN_MILLISECONDS = 604800000;

const STRIPE_ACCOUNT_STATUSES = {
    ACTIVE: "ACTIVE",
    BLOCKED: "BLOCKED",
}

const STRIPE_CUSTOMER_STATUSES = {
    ACTIVE: "ACTIVE",
    BLOCKED: "BLOCKED",
}

const STRIPE_ACCOUNT_LINK_TYPES = {
    ONBOARDING: "account_onboarding",
    UPDATE: "account_update"
}

const ONBOARDING_CALLBACK_STATUSES = {
    SUCCESSFUL: "successful",
    UNSUCCESSFUL: "unsuccessful"
}

const STRIPE_WEBHOOK_SIGNING_SECRET = "whsec_f3ac6398bbe00dc0bfee37f64ce0e282a48d3c61359dffe55614bf137dd43459";

const DRIVER_LICENSE_STATUSES = {
    PENDING_APPROVAL: "PENDING_APPROVAL",
    DISAPPROVED: "DISAPPROVED",
    APPROVED: "APPROVED",
    EXPIRED: "EXPIRED"
}

const ADMIN_SECRET = "maptold45goodstealhold";

const ADMIN_STATUSES = {
    ACTIVE: "ACTIVE",
    INACTIVE: "INACTIVE",
}

const DEFAULT_MAXIMUM_PICKUP_LOCATION_DISTANCE_IN_SEARCH = 20;

module.exports = {
    DATABASE_MODELS: DATABASE_MODELS,
    COLLECTIONS: COLLECTIONS,
    DB_URI: DB_URI,
    COLLECTIONS: COLLECTIONS,
    PORT: PORT,
    NODE_ENVIRONMENT: NODE_ENVIRONMENT,
    NODE_ENVIRONMENTS: NODE_ENVIRONMENTS,
    HTTP_STATUS_CODES: HTTP_STATUS_CODES,
    JWT_SECRET: JWT_SECRET,
    DEFAULT_ERROR_MESSAGE: DEFAULT_ERROR_MESSAGE,
    SMARTCAR_ID: SMARTCAR_ID,
    SMARTCAR_SECRET: SMARTCAR_SECRET,
    USER_STATUSES: USER_STATUSES,
    VEHICLE_STATUSES: VEHICLE_STATUSES,
    CAR_MAKERS: CAR_MAKERS,
    SCOOTER_MAKERS: SCOOTER_MAKERS,
    LENDER_STATUSES: LENDER_STATUSES,
    VEHICLE_TYPES: VEHICLE_TYPES,
    BIKE_MAKERS: BIKE_MAKERS,
    RIDE_STATUSES: RIDE_STATUSES,
    UNLOCK_TYPES: UNLOCK_TYPES,
    CURRENCY_TYPES: CURRENCY_TYPES,
    ONE_DAY_IN_MILLISECONDS: ONE_DAY_IN_MILLISECONDS,
    THIRTY_MINUTES_IN_MILLISECONDS: THIRTY_MINUTES_IN_MILLISECONDS,
    PAYMENT_STATUSES: PAYMENT_STATUSES,
    BUSINESS_STATUSES: BUSINESS_STATUSES,
    STRIPE_SECRET_KEY: STRIPE_SECRET_KEY,
    STRIPE_PUBLIC_KEY: STRIPE_PUBLIC_KEY,
    KEY_STATUSES: KEY_STATUSES,
    KEY_ACTIONS: KEY_ACTIONS,
    WEEK_IN_MILLISECONDS: WEEK_IN_MILLISECONDS,
    STRIPE_ACCOUNT_STATUSES: STRIPE_ACCOUNT_STATUSES,
    STRIPE_ACCOUNT_LINK_TYPES: STRIPE_ACCOUNT_LINK_TYPES,
    ONBOARDING_CALLBACK_STATUSES: ONBOARDING_CALLBACK_STATUSES,
    STRIPE_CUSTOMER_STATUSES: STRIPE_CUSTOMER_STATUSES,
    TEN_MINUTES_IN_MILLISECONDS: TEN_MINUTES_IN_MILLISECONDS,
    STRIPE_WEBHOOK_SIGNING_SECRET: STRIPE_WEBHOOK_SIGNING_SECRET,
    DRIVER_LICENSE_STATUSES: DRIVER_LICENSE_STATUSES,
    VEHICLE_TYPES_WITHOUT_DRIVER_LICENSE: VEHICLE_TYPES_WITHOUT_DRIVER_LICENSE,
    ADMIN_SECRET: ADMIN_SECRET,
    ADMIN_STATUSES: ADMIN_STATUSES,
    DEFAULT_MAXIMUM_PICKUP_LOCATION_DISTANCE_IN_SEARCH: DEFAULT_MAXIMUM_PICKUP_LOCATION_DISTANCE_IN_SEARCH,
    TWENTY_MINUTES_IN_MILLISECONDS: TWENTY_MINUTES_IN_MILLISECONDS
}