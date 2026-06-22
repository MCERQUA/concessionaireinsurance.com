export interface Coverage {
  slug: string;
  name: string;
  icon: string;
  description: string;
  features: string[];
  who: string;
}

export const coverages: Coverage[] = [
  {
    slug: "general-liability",
    name: "General Liability",
    icon: "Shield",
    description:
      "Core protection covering bodily injury and property damage claims arising from your vendor operations at events, fairs, and festivals.",
    features: [
      "Bodily injury protection ($1M per occurrence)",
      "Property damage liability",
      "Products and completed operations",
      "Personal and advertising injury",
      "Medical payments coverage",
      "Additional insured endorsements available",
    ],
    who: "All concessionaires and event vendors",
  },
  {
    slug: "product-liability",
    name: "Product Liability",
    icon: "Package",
    description:
      "Essential coverage for food vendors against claims of foodborne illness, contamination, allergic reactions, or other product-related injuries.",
    features: [
      "Foodborne illness claims",
      "Contamination and spoilage coverage",
      "Allergic reaction liability",
      "Product recall expense coverage",
      "FDA compliance support",
      "Defense costs included",
    ],
    who: "Food and beverage concessionaires",
  },
  {
    slug: "commercial-auto",
    name: "Commercial Auto",
    icon: "Truck",
    description:
      "Coverage for your food truck, cargo vans, trailers, and other commercial vehicles used in your vendor business operations.",
    features: [
      "Liability for food trucks and cargo vans",
      "Physical damage (collision and comprehensive)",
      "Trailer coverage",
      "Hired and non-owned auto",
      "Equipment in transit",
      "Uninsured motorist protection",
    ],
    who: "Mobile food vendors and food truck operators",
  },
  {
    slug: "workers-compensation",
    name: "Workers Comp",
    icon: "Users",
    description:
      "Required in most states, workers comp protects your employees — including seasonal and part-time event staff — from work-related injuries.",
    features: [
      "Medical expense coverage for injured workers",
      "Lost wage replacement",
      "Seasonal and temporary worker coverage",
      "State-mandated compliance",
      "Employer's liability protection",
      "Part-time staff included",
    ],
    who: "Vendors with employees or seasonal staff",
  },
  {
    slug: "inland-marine",
    name: "Equipment & Inventory",
    icon: "Box",
    description:
      "Protects your valuable equipment, inventory, and supplies while in transit, at events, or in storage — wherever your business takes you.",
    features: [
      "Food service equipment coverage",
      "Generators and power equipment",
      "Display fixtures and signage",
      "Inventory in transit",
      "Equipment breakdown coverage",
      "Theft and vandalism protection",
    ],
    who: "All vendors with equipment or inventory",
  },
  {
    slug: "liquor-liability",
    name: "Liquor Liability",
    icon: "Wine",
    description:
      "If you sell beer, wine, or spirits at festivals and events, liquor liability insurance protects you against dram shop laws and alcohol-related claims.",
    features: [
      "Dram shop liability coverage",
      "Assault and battery coverage",
      "Beer and wine festival coverage",
      "BYOB event coverage",
      "State dram shop law compliance",
      "Defense costs covered",
    ],
    who: "Vendors selling alcohol at events",
  },
];
