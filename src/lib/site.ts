export const site = {
  name: "We Train You",
  fullName: "We Train You — Coffee & Skill",
  tagline: "Empowering your potential",
  address: "Birtamode-5, Shanischare Road, near Nepal Bank, Jhapa",
  addressShort: "Birtamode-5, Jhapa",
  hours: "8:00 AM – 5:00 PM",
  hoursNote: "Sunday to Friday · walk in any time",
  phones: ["9811347501", "9767778602", "9826941488"],
  whatsapp:
    "https://wa.me/9779811347501?text=Namaste%2C%20I%27d%20like%20to%20know%20about%20the%20next%20batch%20at%20We%20Train%20You.",
  facebook: "https://www.facebook.com/profile.php?id=61561974630232",
  maps: "https://www.google.com/maps/search/?api=1&query=We+Train+You+Birtamode+Jhapa",
  since: "2019",
};

export type Course = {
  name: string;
  duration: string;
  level: string;
  price: string;
  schedule: string;
  summary: string;
  includes: string[];
};

export type Skill = {
  slug: string;
  index: string;
  name: string;
  shortName: string;
  short: string;
  kicker: string;
  image: string;
  alt: string;
  duration: string;
  from: string;
  intro: string;
  highlights: string[];
  modules: { title: string; items: string[] }[];
  courses: Course[];
  outcomes: string[];
};

export const skills: Skill[] = [
  {
    slug: "barista",
    index: "01",
    name: "Barista & Espresso",
    shortName: "Barista",
    short:
      "Espresso, milk texture and free-pour latte art — taught on a real bar, cup after cup.",
    kicker: "The core craft",
    image: "/images/skill-espresso.jpg",
    alt: "Hands tamping espresso in a portafilter on a dark counter",
    duration: "1–3 months",
    from: "NPR 9,500",
    intro:
      "Espresso is unforgiving. A gram too much, two degrees too hot, a second too long — the cup tells on you. We train your palate and your hands until you can read a shot, texture milk by feel, and work a bar through a morning rush without losing a single order.",
    highlights: [
      "Dual-boiler machines, real grinders, daily bar time",
      "Dialling in by taste — not by timer",
      "Free-pour hearts, tulips and rosettas",
      "Menu costing and café workflow",
    ],
    modules: [
      {
        title: "The bean & the grind",
        items: [
          "Origin, processing and roast freshness",
          "Burr grinders: calibration and daily care",
          "Dose, distribution and level tamping",
          "Reading a dry and wet coffee puck",
        ],
      },
      {
        title: "Espresso & milk",
        items: [
          "Extraction theory: yield, ratio, time",
          "Dialling in a new bag of beans",
          "Silk microfoam and temperature control",
          "Free-pour latte art from heart to rosetta",
        ],
      },
      {
        title: "Working the bar",
        items: [
          "Building a compact, profitable menu",
          "Speed, sequencing and station setup",
          "Backflushing, water quality, waste control",
          "Service language and upselling",
        ],
      },
    ],
    courses: [
      {
        name: "Barista Foundations",
        duration: "1 month",
        level: "Beginner",
        price: "NPR 9,500",
        schedule: "Sun–Fri · 8:00–10:00 AM or 2:00–4:00 PM",
        summary:
          "A complete introduction to the bar. You will pull, taste and adjust espresso daily, steam milk confidently, and leave able to run a small café bar on your own.",
        includes: [
          "Espresso and milk fundamentals",
          "Daily supervised bar practice",
          "Latte art basics",
          "Course certificate",
        ],
      },
      {
        name: "Professional Barista",
        duration: "3 months",
        level: "Beginner to job-ready",
        price: "NPR 24,000",
        schedule: "Sun–Fri · morning or afternoon shift",
        summary:
          "Our flagship programme. Foundations plus advanced latte art, café operations, costing, hygiene and interview preparation — built for people who want a career, not just a certificate.",
        includes: [
          "Everything in Barista Foundations",
          "Advanced latte art intensive",
          "Café workflow, costing and stock",
          "Placement support and reference",
        ],
      },
      {
        name: "Latte Art Intensive",
        duration: "2 weeks",
        level: "All levels",
        price: "NPR 6,500",
        schedule: "Sun–Fri · 4:00–6:00 PM",
        summary:
          "For working baristas who can pull a good shot but want the pour to match. Two weeks of focused milk texturing and free-pour repetition.",
        includes: [
          "Milk science and texture drills",
          "Heart, tulip, rosetta, swan",
          "Cup angle, flow rate, contrast",
          "Unlimited practice milk",
        ],
      },
    ],
    outcomes: [
      "Barista in a specialty café",
      "Hotel coffee outlet",
      "Café owner-operator",
      "Event and wedding barista",
    ],
  },
  {
    slug: "bakery",
    index: "02",
    name: "Bakery & Pastry",
    shortName: "Bakery",
    short:
      "Bread, laminated pastry and cakes with proper technique — measured, proofed and baked from scratch.",
    kicker: "Flour, water, patience",
    image: "/images/skill-bakery.jpg",
    alt: "Baker shaping dough on a floured marble counter",
    duration: "1–3 months",
    from: "NPR 12,000",
    intro:
      "Baking rewards precision. We teach the why behind the recipe — gluten, hydration, fermentation, temperature — so you can fix a dough instead of throwing it away. Every class bakes, and everything you bake goes home with you.",
    highlights: [
      "Sourdough starter from day one",
      "Laminated doughs by hand",
      "Commercial recipe costing",
      "Counter display and shelf life",
    ],
    modules: [
      {
        title: "Bread fundamentals",
        items: [
          "Flour grades, hydration and gluten",
          "Yeast, sourdough and fermentation",
          "Kneading, folding and shaping",
          "Steam, scoring and oven management",
        ],
      },
      {
        title: "Laminated & sweet",
        items: [
          "Croissant, danish and puff pastry",
          "Butter blocks and lamination folds",
          "Proofing schedules and bake timing",
          "Fillings, glazes and finishes",
        ],
      },
      {
        title: "Cakes & shop",
        items: [
          "Sponges, buttercreams and ganache",
          "Finishing and simple decoration",
          "Costing, portioning and pricing",
          "Display, packaging and storage",
        ],
      },
    ],
    courses: [
      {
        name: "Bakery Foundations",
        duration: "1 month",
        level: "Beginner",
        price: "NPR 12,000",
        schedule: "Sun–Fri · 10:00 AM–1:00 PM",
        summary:
          "Bread, buns, cookies, brownies and a first cake — the everyday range a neighbourhood bakery actually sells.",
        includes: [
          "Daily hands-on bakes",
          "Ingredients and equipment guide",
          "Recipe booklet",
          "Course certificate",
        ],
      },
      {
        name: "Professional Bakery & Pastry",
        duration: "3 months",
        level: "Beginner to job-ready",
        price: "NPR 30,000",
        schedule: "Sun–Fri · morning or afternoon shift",
        summary:
          "A full bakery training: sourdough, viennoiserie, cakes, costing and a production plan you can take straight into a shop or kitchen.",
        includes: [
          "Everything in Foundations",
          "Sourdough and laminated pastry",
          "Production planning and costing",
          "Placement support and reference",
        ],
      },
      {
        name: "Weekend Baking",
        duration: "4 weekends",
        level: "Hobby",
        price: "NPR 5,500",
        schedule: "Saturday · 11:00 AM–2:00 PM",
        summary:
          "For people who bake at home and want to bake better. Four relaxed sessions covering bread, cake, cookies and pastry.",
        includes: [
          "Four guided sessions",
          "Home-oven techniques",
          "Recipe booklet",
          "All ingredients included",
        ],
      },
    ],
    outcomes: [
      "Bakery kitchen assistant",
      "Hotel pastry section",
      "Home bakery business",
      "Café baking partner",
    ],
  },
  {
    slug: "bubble-tea",
    index: "03",
    name: "Bubble Tea & Beverages",
    shortName: "Bubble tea",
    short:
      "A complete bubble tea bar: pearls, teas, syrups, ratios and a menu that sells itself.",
    kicker: "Fast, repeatable, profitable",
    image: "/images/skill-bubble-tea.jpg",
    alt: "Three bubble tea cups with tapioca pearls on a pale stone counter",
    duration: "2–4 weeks",
    from: "NPR 7,500",
    intro:
      "Bubble tea is a business of consistency. One perfect cup is easy; five hundred identical cups a day is the skill. We cover the whole bar — brewing, pearls, syrups, sealing, pricing — and build a menu you can actually run.",
    highlights: [
      "Fruit, milk and brown sugar ranges",
      "Pearl cooking and hold times",
      "Costing per cup and menu pricing",
      "Small-space bar setup",
    ],
    modules: [
      {
        title: "Tea & pearls",
        items: [
          "Tea bases: black, green, oolong",
          "Brewing strength and dilution",
          "Tapioca cooking, sweetening, storage",
          "Jelly, popping boba and toppings",
        ],
      },
      {
        title: "The menu",
        items: [
          "Milk teas and fruit teas",
          "Brown sugar and cheese foam",
          "Syrups, fruit purées and ice ratios",
          "Consistency checks and tasting",
        ],
      },
      {
        title: "Bar & business",
        items: [
          "Equipment for a small counter",
          "Per-cup costing and pricing",
          "Speed of service and storage",
          "Branding, cups and packaging",
        ],
      },
    ],
    courses: [
      {
        name: "Bubble Tea Essentials",
        duration: "2 weeks",
        level: "Beginner",
        price: "NPR 7,500",
        schedule: "Sun–Fri · 2:00–4:00 PM",
        summary:
          "Learn the full core menu and the habits that keep cups consistent. Enough to work a bubble tea counter with confidence.",
        includes: [
          "Core menu of 12 drinks",
          "Pearl and topping handling",
          "Recipe cards",
          "Course certificate",
        ],
      },
      {
        name: "Bubble Tea Shop Startup",
        duration: "1 month",
        level: "Aspiring owner",
        price: "NPR 14,000",
        schedule: "Sun–Fri · 2:00–4:00 PM",
        summary:
          "Drinks plus the shop: equipment lists, supplier sourcing, costing, menu design, hygiene and a simple launch plan for Birtamode and the surrounding towns.",
        includes: [
          "Everything in Essentials",
          "Equipment and supplier list",
          "Costing and pricing workbook",
          "One-to-one launch review",
        ],
      },
    ],
    outcomes: [
      "Bubble tea counter staff",
      "Café beverage menu",
      "Own bubble tea outlet",
      "Event and festival stall",
    ],
  },
  {
    slug: "hospitality",
    index: "04",
    name: "Hospitality & Service",
    shortName: "Hospitality",
    short:
      "Front-of-house confidence: service sequence, table craft, grooming and guest conversation.",
    kicker: "The human side of the job",
    image: "/images/skill-hospitality.jpg",
    alt: "Waiter in a black apron carrying a service tray in a restaurant",
    duration: "1–3 months",
    from: "NPR 8,000",
    intro:
      "Great service is quiet and precise. We train the sequence a guest never notices — the greeting, the water, the timing, the clear — and the confidence to handle a complaint without flinching. Practical shifts, real tables, honest feedback.",
    highlights: [
      "Full service sequence, Nepali and English",
      "Tray and table craft drills",
      "Grooming and presentation standards",
      "Interview and CV preparation",
    ],
    modules: [
      {
        title: "Service sequence",
        items: [
          "Welcome, seating and menus",
          "Order taking and upselling",
          "Serving from the right, clearing from the right",
          "Billing and farewell",
        ],
      },
      {
        title: "Table craft",
        items: [
          "Tray balance and carrying",
          "Cutlery, glassware and napkin folds",
          "Wine, water and beverage service",
          "Handling spills and mistakes",
        ],
      },
      {
        title: "People & work",
        items: [
          "Guest conversation and body language",
          "Complaint handling and escalation",
          "Hygiene, safety and teamwork",
          "CV, interview and workplace etiquette",
        ],
      },
    ],
    courses: [
      {
        name: "Waiter & Front of House",
        duration: "1 month",
        level: "Beginner",
        price: "NPR 8,000",
        schedule: "Sun–Fri · 11:00 AM–1:00 PM",
        summary:
          "The essentials of restaurant service, practised until they are automatic — for first jobs in cafés, restaurants and hotels.",
        includes: [
          "Service sequence training",
          "Daily practical drills",
          "Grooming and etiquette",
          "Course certificate",
        ],
      },
      {
        name: "Hospitality Professional",
        duration: "3 months",
        level: "Beginner to job-ready",
        price: "NPR 20,000",
        schedule: "Sun–Fri · morning or afternoon shift",
        summary:
          "Front office, housekeeping basics and restaurant service in one programme, with English communication and interview preparation built in.",
        includes: [
          "Service, front office and housekeeping",
          "Spoken English for hospitality",
          "Interview and CV workshop",
          "Placement support and reference",
        ],
      },
    ],
    outcomes: [
      "Restaurant waiter / captain",
      "Hotel front office",
      "Café counter and floor",
      "Banquet and event service",
    ],
  },
];

export const stats = [
  { value: "7+", label: "Years teaching" },
  { value: "5,000+", label: "Students trained" },
  { value: "04", label: "Craft programmes" },
  { value: "90%", label: "Placement support" },
];

export const gallery = [
  {
    src: "/images/classroom.jpg",
    alt: "Students watching an instructor demonstrate an espresso machine",
    caption: "Morning demo, barista batch",
  },
  {
    src: "/images/gallery-latte.jpg",
    alt: "Tulip latte art in an off-white cup",
    caption: "Free-pour practice",
  },
  {
    src: "/images/skill-bakery.jpg",
    alt: "Shaping dough on a floured counter",
    caption: "Bakery, first week",
  },
  {
    src: "/images/gallery-student.jpg",
    alt: "A barista holding a finished latte",
    caption: "Final assessment",
  },
  {
    src: "/images/skill-bubble-tea.jpg",
    alt: "Bubble tea cups on a stone counter",
    caption: "Bubble tea bar",
  },
  {
    src: "/images/gallery-display.jpg",
    alt: "Fresh croissants and breads on a bakery counter",
    caption: "The bake counter",
  },
  {
    src: "/images/gallery-interior.jpg",
    alt: "Minimal café interior with espresso machine and plants",
    caption: "Our training floor",
  },
  {
    src: "/images/hero-barista.jpg",
    alt: "Barista pouring latte art",
    caption: "Pouring, one on one",
  },
  {
    src: "/images/skill-hospitality.jpg",
    alt: "Waiter carrying a service tray",
    caption: "Service drill",
  },
  {
    src: "/images/skill-espresso.jpg",
    alt: "Tamping espresso into a portafilter",
    caption: "Dialling in",
  },
];

export const testimonials = [
  {
    quote:
      "I walked in able to make tea. I walked out able to run a bar alone on a Saturday morning.",
    name: "Anisha Rai",
    role: "Barista, specialty café · Birtamode",
    course: "Professional Barista, 2024",
  },
  {
    quote:
      "The bakery module paid for itself in the first month of my shop. I still use the costing sheet they gave us.",
    name: "Bikash Limbu",
    role: "Owner, Limbu Bakes · Damak",
    course: "Professional Bakery, 2023",
  },
  {
    quote:
      "They did not just teach me service. They taught me how to stand at a table and talk to people.",
    name: "Sushmita Gurung",
    role: "Front of house, hotel · Bhadrapur",
    course: "Hospitality Professional, 2024",
  },
];

export const marqueeWords = [
  "Barista",
  "Espresso",
  "Latte art",
  "Sourdough",
  "Pastry",
  "Bubble tea",
  "Hospitality",
  "Service",
  "Bakery",
  "Placement",
];
