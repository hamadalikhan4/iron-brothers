// Reference content is centralized here for client review and later CMS integration.
export const image = (id: string, width = 900) =>
  `https://images.unsplash.com/${id}?w=${width}&auto=format&fit=crop&q=85`;
export const photos = {
  hero: image("photo-1784223135855-eb44994a50b3", 1920),
  mountain: image("photo-1626710214966-a95bc038cf85"),
  mining: image("photo-1680463990599-9d318aaecf71"),
  lease: image("photo-1606023760842-7cf9bc8e0564"),
  trading: image("photo-1724597500306-a4cbb7d1324e"),
  gems: image("photo-1546608135-e5de34abc308"),
  marble: image("photo-1560427450-00fa9481f01e"),
  copper: image("photo-1635658753628-7f56f2909845"),
  quartz: image("photo-1562162115-54cc44600875"),
  gold: image("photo-1609216970378-ce61cd74a187"),
  partners: image("photo-1667922210719-566cbfec2b11"),
  global: image("photo-1636113937099-9e51e9fb180e"),
  glass: image("photo-1583686298564-46fbffda0707"),
  industrial: image("photo-1709489662983-3674d790b224"),
  commercial: image("photo-1706499856012-14f062c72b49"),
  ecommerce: image("photo-1593617761943-9099951a0769"),
};
export const company = {
  name: "Iron Brothers",
  region: "Gilgit-Baltistan, Pakistan",
  email: "",
  phone: "",
  whatsapp: "",
  socialLinks: [] as { label: string; url: string }[],
};
export const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Mining & Minerals", "/mining"],
  ["Import & Trading", "/trading"],
  ["Mine Sites", "/mine-sites"],
  ["Portfolio", "/portfolio"],
  ["Media", "/media"],
  ["Team", "/team"],
  ["Contact", "/contact"],
];
export const inquiryTypes = [
  "General Inquiry",
  "Mining Inquiry",
  "Mine Leasing",
  "Import & Trading",
  "Partnership",
  "Investment Inquiry",
];
export const inquiryLink = (type = "General Inquiry", subject = "") =>
  `/contact?${new URLSearchParams({ type, ...(subject ? { subject } : {}) })}`;
export const sites = [
  {
    id: "kargah-nala",
    name: "Kargah Nala",
    location: "Gilgit, GB",
    detailLocation: "Near Gilgit City, Gilgit-Baltistan",
    minerals: ["Iron Ore", "Gemstones"],
    status: "Available",
    type: "Mineral Exploration",
    photo: image("photo-1621840790975-186b80103d43"),
    x: 38,
    y: 44,
    description:
      "Kargah Nala is a valley located near Gilgit city, known for its geological diversity and historical significance. The area presents mineral exploration opportunities in an accessible mountain setting.",
  },
  {
    id: "shigar",
    name: "Shigar",
    location: "Shigar, GB",
    detailLocation: "Shigar Valley, Gilgit-Baltistan",
    minerals: ["Marble", "Quartz"],
    status: "Under Review",
    type: "Mining Lease",
    photo: photos.hero,
    x: 68,
    y: 31,
    description:
      "The Shigar Valley presents opportunities for geological assessment and mineral exploration. Contact our team for current site information, documentation and partnership requirements.",
  },
  {
    id: "bathrait-nala",
    name: "Bathrait Nala",
    location: "Tangir, GB",
    detailLocation: "Tangir region, Gilgit-Baltistan",
    minerals: ["Copper", "Gold"],
    status: "Partnership",
    type: "Joint Venture",
    photo: image("photo-1640685673598-536fcf983248"),
    x: 25,
    y: 64,
    description:
      "Bathrait Nala is presented as an exploration and partnership opportunity. Mineral potential and development suitability require site-specific geological assessment.",
  },
  {
    id: "darel",
    name: "Darel",
    location: "Darel, GB",
    detailLocation: "Darel Valley, Gilgit-Baltistan",
    minerals: ["Multiple Minerals"],
    status: "Available",
    type: "Mineral Exploration",
    photo: image("photo-1571089347199-f0600f382311"),
    x: 56,
    y: 72,
    description:
      "Darel Valley offers opportunities for mineral exploration and regional partnerships. Discuss current availability, access and supporting documentation with our team.",
  },
];
export const services = [
  {
    title: "Mining & Minerals",
    photo: photos.mining,
    description:
      "Exploring mineral-rich areas and mining opportunities across Gilgit-Baltistan and beyond.",
    tags: ["Mineral exploration", "Site assessment"],
    link: "/mining",
    cta: "Explore Mining",
  },
  {
    title: "Mine Area Leasing",
    photo: photos.lease,
    description:
      "Connecting selected mine-area opportunities with qualified partners and investors.",
    tags: ["Lease opportunities", "Partnerships"],
    link: "/leasing",
    cta: "Explore Leasing",
  },
  {
    title: "Import & Trading",
    photo: photos.trading,
    description:
      "Connecting international suppliers with local markets across a broad range of products.",
    tags: ["Glassware", "Industrial", "Consumer goods"],
    link: "/trading",
    cta: "View Trading",
  },
  {
    title: "Mineral Trading",
    photo: photos.marble,
    description:
      "Connecting mineral resources with buyers, partners and international markets.",
    tags: ["Buyers network", "Global markets"],
    link: "/mining",
    cta: "Explore Minerals",
  },
  {
    title: "Investment & Partnership",
    photo: photos.partners,
    description:
      "Creating opportunities for investors, mining partners and businesses in natural resources.",
    tags: ["Investment", "Joint ventures"],
    link: inquiryLink("Partnership"),
    cta: "Partner With Us",
  },
  {
    title: "International Expansion",
    photo: photos.global,
    description:
      "Building international partnerships across mining, minerals and global trade.",
    tags: ["Global reach", "Cross-border trade"],
    link: inquiryLink("Partnership", "International expansion"),
    cta: "Global Opportunities",
  },
];
export const minerals = [
  {
    name: "Iron Ore",
    photo: photos.mountain,
    description:
      "An economically significant mineral and a focus for exploration across mountain regions.",
  },
  {
    name: "Copper",
    photo: photos.copper,
    description:
      "A versatile industrial metal used in electronics, construction and energy infrastructure.",
  },
  {
    name: "Gold",
    photo: photos.gold,
    description:
      "Precious metal exploration potential within the geological formations of the region.",
  },
  {
    name: "Gemstones",
    photo: photos.gems,
    description:
      "Precious and semi-precious stones, including aquamarine, tourmaline and other specimens.",
  },
  {
    name: "Marble",
    photo: photos.marble,
    description:
      "Dimension stone opportunities for construction and decorative applications.",
  },
  {
    name: "Quartz",
    photo: photos.quartz,
    description:
      "A mineral with applications in technology, construction and manufacturing.",
  },
  {
    name: "Other Minerals",
    photo: photos.mining,
    description:
      "Additional mineral categories for assessment, exploration and qualified partnerships.",
  },
];
export const products = [
  { name: "Premium Glassware Set", category: "Glassware", photo: photos.glass },
  {
    name: "Industrial Hardware Kit",
    category: "Industrial",
    photo: photos.industrial,
  },
  {
    name: "Commercial Supply Pack",
    category: "Commercial",
    photo: photos.commercial,
  },
  {
    name: "Consumer Lifestyle Range",
    category: "Consumer",
    photo: photos.trading,
  },
  {
    name: "E-Commerce Bundle",
    category: "E-Commerce",
    photo: photos.ecommerce,
  },
  {
    name: "Crystal Glassware Collection",
    category: "Glassware",
    photo: photos.gems,
  },
];
export const projects = [
  {
    id: "kargah-survey",
    name: "Kargah Nala Mineral Survey",
    category: "Mining",
    location: "Gilgit, GB",
    year: "2024",
    status: "Completed",
    photo: sites[0].photo,
    description:
      "Preliminary mineral survey and site assessment of the Kargah Nala valley for exploration opportunities.",
  },
  {
    id: "shigar-assessment",
    name: "Shigar Valley Site Assessment",
    category: "Mine Sites",
    location: "Shigar, GB",
    year: "2024",
    status: "Completed",
    photo: sites[1].photo,
    description:
      "Site evaluation of the Shigar Valley and review of mineral-bearing geological formations.",
  },
  {
    id: "glassware-import",
    name: "International Glassware Import",
    category: "Import",
    location: "Pakistan",
    year: "2024",
    status: "Active",
    photo: photos.glass,
    description:
      "Import and distribution opportunities for glassware across commercial and retail markets.",
  },
  {
    id: "bathrait-exploration",
    name: "Bathrait Nala Exploration",
    category: "Mining",
    location: "Tangir, GB",
    year: "2025",
    status: "Active",
    photo: sites[2].photo,
    description:
      "Assessment of copper and gold exploration potential and future partnership opportunities.",
  },
  {
    id: "mining-partnerships",
    name: "Mining Partnership Development",
    category: "Partnerships",
    location: "GB Region",
    year: "2025",
    status: "Active",
    photo: photos.partners,
    description:
      "Development of strategic partnerships with qualified mining investors and business partners.",
  },
  {
    id: "darel-survey",
    name: "Darel Valley Mine Survey",
    category: "Mine Sites",
    location: "Darel, GB",
    year: "2025",
    status: "Active",
    photo: sites[3].photo,
    description:
      "Survey and documentation of mine areas, mineral potential and site characteristics.",
  },
  {
    id: "trading-network",
    name: "Commercial Trading Network",
    category: "Trading",
    location: "Pakistan",
    year: "2025",
    status: "Active",
    photo: photos.commercial,
    description:
      "Connecting international suppliers with Pakistani distribution and retail markets.",
  },
  {
    id: "mineral-export",
    name: "Mineral Rock Export Initiative",
    category: "Trading",
    location: "GB – International",
    year: "2025",
    status: "Active",
    photo: photos.marble,
    description:
      "Connecting mineral samples and specimens with buyers and collectors.",
  },
];
export const gallery = [
  { name: "Mountain regions", category: "Mountains", photo: photos.hero },
  { name: "Kargah Nala", category: "Mine Sites", photo: sites[0].photo },
  { name: "Crystals and gemstones", category: "Minerals", photo: photos.gems },
  { name: "Mining equipment", category: "Machinery", photo: photos.mining },
  { name: "Bathrait Nala", category: "Mine Sites", photo: sites[2].photo },
  { name: "Mineral samples", category: "Minerals", photo: photos.copper },
  { name: "Darel Valley", category: "Mountains", photo: sites[3].photo },
  { name: "International trade", category: "Trading", photo: photos.trading },
];
export const roles = [
  {
    role: "Chief Executive Officer",
    group: "Leadership",
    description:
      "Guides the company vision, business strategy and long-term growth.",
  },
  {
    role: "Director – Operations",
    group: "Leadership",
    description: "Oversees mining, leasing and trading operations.",
  },
  {
    role: "Director – Business Development",
    group: "Leadership",
    description: "Leads partnerships and international expansion.",
  },
  {
    role: "Operations Manager",
    group: "Management",
    description: "Coordinates operational planning and project delivery.",
  },
  {
    role: "Geological & Technical Team",
    group: "Technical Team",
    description:
      "Supports geological assessment and responsible resource development.",
  },
  {
    role: "Import & Trading Team",
    group: "Trading Team",
    description:
      "Coordinates sourcing, supplier relationships and trading inquiries.",
  },
];
