import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, Phone, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

const coverageSlugs = [
  "food-trucks",
  "fair-festival-vendors",
  "stadium-concessions",
  "amusement-park-vendors",
  "carnival-game-operators",
  "merchandise-vendors",
];

interface VendorCoverage {
  name: string;
  heroDesc: string;
  risks: string[];
  coverages: string[];
  stateCompliance: string;
  bodyParagraphs: string[];
  faqs: { q: string; a: string }[];
}

const vendorData: Record<string, VendorCoverage> = {
  "food-trucks": {
    name: "Food Truck Insurance",
    heroDesc: "Comprehensive insurance for mobile food truck operators — covering your truck, your kitchen, your crew, and your customers.",
    risks: [
      "Vehicle accidents while driving to events",
      "Customer slip and fall at your truck",
      "Foodborne illness or contamination claims",
      "Equipment theft or damage",
      "Employee injuries during service",
      "Fire or property damage at service location",
    ],
    coverages: [
      "Commercial Auto — liability and physical damage for your truck",
      "General Liability — customer injuries at your truck",
      "Product Liability — foodborne illness and contamination",
      "Equipment Coverage — cooking equipment, generator, POS",
      "Workers Compensation — for employees and helpers",
      "Liquor Liability — if you serve beer or wine",
    ],
    stateCompliance: "Food trucks operate across state lines and must comply with each state's commercial auto, workers comp, and food safety requirements. If you travel to events in multiple states, your insurance program needs to be structured to meet the most stringent requirements among those states. We specialize in multi-state food truck programs.",
    bodyParagraphs: [
      "A food truck is both a vehicle and a commercial food service operation — which creates two distinct sets of insurance needs that must work together. When your truck is moving, commercial auto insurance provides liability and physical damage coverage. When you're parked and serving customers, general liability takes over. Understanding this handoff is critical for ensuring you have no coverage gaps.",
      "Commercial auto insurance for food trucks covers liability (if you're at fault in an accident), physical damage to your truck (collision and comprehensive), and uninsured motorist protection if someone hits your truck and has no insurance. The food truck itself — the vehicle and the kitchen build-out — needs to be properly valued on the policy to ensure full replacement coverage if it's totaled.",
      "General liability for food truck operations covers customer injuries at your truck, property damage you cause to venues or neighboring vendors, and products and completed operations (which responds to post-service food claims). Most events and venues require proof of general liability coverage with a minimum of $1 million per occurrence before you can participate.",
      "Product liability is particularly important for food truck operators. You're preparing and serving food to the public, and foodborne illness claims are the most significant product liability exposure a mobile food vendor faces. A dedicated product liability policy or endorsement ensures you're protected against claims from contamination, allergen reactions, and other food-safety incidents.",
      "If you have employees or helpers — including part-time workers who join you for events — workers' compensation is required in most states. Food truck work involves heat exposure, sharp implements, heavy equipment, and slip and fall risks. Workers comp ensures your employees receive proper care if injured and protects your business from direct liability.",
    ],
    faqs: [
      { q: "Is my food truck covered while parked at a commissary?", a: "Commercial auto covers your truck while it's parked at any location. If you store cooking equipment or supplies at a commissary, those items should be covered under your inland marine policy." },
      { q: "What if I share my food truck with another operator?", a: "If someone else drives or operates your food truck under a separate business arrangement, you need to discuss this with your agent. Non-owned auto coverage, additional insured arrangements, or separate policies may be needed depending on the situation." },
      { q: "Does food truck insurance cover my commissary kitchen?", a: "Your food truck policy covers the truck itself and your operations from the truck. A separate commercial property or general liability policy is needed for a commissary or brick-and-mortar kitchen location." },
      { q: "What if I sell at farmers markets, not events?", a: "Farmers markets have their own insurance requirements. Many food truck operators participate in both market and event settings — your policy can be structured to cover you in both contexts." },
      { q: "How much does food truck insurance cost?", a: "Food truck insurance costs vary based on the truck's value, your revenue, whether you have employees, your driving record, and the states where you operate. Basic programs start around $2,000-$4,000 per year for a comprehensive package." },
    ],
  },
  "fair-festival-vendors": {
    name: "Fair & Festival Vendor Insurance",
    heroDesc: "Specialized coverage for county fair, state fair, and music festival vendors — including certificates, additional insured endorsements, and same-day processing.",
    risks: [
      "Slip and fall claims at your booth",
      "Food contamination or illness claims",
      "Damage to fair grounds or neighboring booths",
      "Equipment theft during the event",
      "Weather-related damage to your display",
      "Product claims from sold merchandise",
    ],
    coverages: [
      "General Liability — required by all fairs and festivals",
      "Product Liability — essential for food and beverage vendors",
      "Equipment and Inventory Coverage",
      "Commercial Auto — for vehicles transporting your setup",
      "Workers Compensation — for helpers and seasonal staff",
      "Single-Event or Annual Policy Options",
    ],
    stateCompliance: "State fairs and county fairs are often governed by state agencies or agricultural boards with specific vendor insurance requirements. Requirements differ from state to state — some require the State to be named as Additional Insured, others have specific minimum limits above the industry standard. Always request the event's vendor insurance requirements document before applying.",
    bodyParagraphs: [
      "Fair and festival vendors operate in the most concentrated public settings in the retail world — tens of thousands of people walking past your booth over the course of an event. This creates both tremendous business opportunity and meaningful liability exposure. The right insurance program ensures you can participate confidently without worrying about the financial consequences of an incident.",
      "Every fair and festival you participate in will require proof of general liability insurance with a minimum of $1 million per occurrence. Many will also require you to name the event, fair board, or venue as an Additional Insured on your policy. We process certificate of insurance requests the same day — often within the hour — so you're never held up from submitting a vendor application.",
      "Food vendors at fairs and festivals need product liability coverage beyond what's included in standard general liability. Fair food — funnel cakes, corn dogs, BBQ, specialty ethnic foods — involves high-temperature cooking, complex preparation, and service to thousands of people per event. The combination of food safety risk and event scale means product liability is essential.",
      "Equipment and inventory coverage protects your display fixtures, cooking equipment, merchandise inventory, and supplies against theft, vandalism, and accidental damage during fair and festival events. Fair environments involve equipment being loaded and unloaded repeatedly over a fair's run — this creates both transit risk and setup/breakdown risk that inland marine coverage addresses.",
      "Seasonal vendors who participate in multiple fairs and festivals throughout the year benefit from an annual policy rather than event-by-event short-term policies. Annual policies typically offer better rates, simpler administration (one certificate for all events rather than separate policies per event), and continuous coverage between events. We'll help you structure the right program for your event schedule.",
    ],
    faqs: [
      { q: "Do I need separate insurance for each fair I attend?", a: "Not necessarily. An annual general liability policy covers you at all events throughout the year. You'll need to issue certificates (additional insured endorsements) specific to each event, but the underlying policy is one annual program." },
      { q: "The fair board is requiring very specific certificate language. Can you handle that?", a: "Yes — we're experienced with fair board certificate requirements, including specific additional insured language, notice of cancellation requirements, and description of operations language. Tell us what the fair board needs and we'll produce it." },
      { q: "Do I need insurance for a one-day pop-up market?", a: "If the market or event requires it — yes. Short-term event policies are available for single-day or single-event coverage if you only need coverage occasionally." },
      { q: "What if I sell at both indoor and outdoor events?", a: "Your annual general liability policy covers you at both indoor and outdoor events. The coverage follows you regardless of whether the event is indoors or outdoors." },
      { q: "Can I get a certificate for multiple events on one certificate?", a: "Yes — certificates can list multiple events or use general language that covers your operations at events broadly. We'll structure the certificate to work for your specific needs." },
    ],
  },
  "stadium-concessions": {
    name: "Stadium Concession Insurance",
    heroDesc: "High-limit insurance programs for stadium and arena concession operators — meeting the elevated requirements of major sports venues and entertainment facilities.",
    risks: [
      "High-volume customer injury exposure",
      "Liquor liability from alcohol sales",
      "Employee injuries in high-traffic kitchens",
      "Product contamination at scale",
      "Vendor contract compliance requirements",
      "Property damage in stadium environments",
    ],
    coverages: [
      "General Liability with higher limits ($2M+ per occurrence)",
      "Liquor Liability — required for most stadium concessions",
      "Workers Compensation for large concession crews",
      "Product Liability for food and beverage",
      "Equipment Breakdown Coverage",
      "Umbrella/Excess Liability for stadium minimums",
    ],
    stateCompliance: "Stadium and arena concession contracts typically include detailed insurance requirements that exceed standard event vendor minimums. Limits of $2 million per occurrence or higher are common. Some venues require excess liability policies (umbrellas) to meet total required limits. Review your vendor contract's insurance section carefully and share it with our team — we'll build a program that meets every requirement.",
    bodyParagraphs: [
      "Stadium and arena concessions operate in a unique high-volume environment that creates both significant business opportunity and elevated risk exposure. Serving thousands of fans during sporting events, concerts, and other entertainment events means higher foot traffic past your concession stands, more transactions, more food and beverage service, and greater potential for claims than typical event vendor settings.",
      "Liquor liability is a dominant concern for stadium concession operators. Alcohol sales are a major revenue driver at sports venues, and dram shop liability exposure is correspondingly significant. A patron who becomes intoxicated at your concession stand and then causes injury to themselves or others creates potential liability for you as the alcohol seller. Liquor liability insurance — typically at higher limits than standard — is essential for any stadium vendor serving alcohol.",
      "Workers' compensation is critical for stadium concession operations, which often involve larger crews than typical event vendors. Kitchen workers, cashiers, runners, supervisors — all face workplace injury risks in the high-pressure, high-volume stadium environment. Workers comp covers medical expenses and lost wages for injured employees and protects your business from direct liability for workplace injuries.",
      "Stadium vendor contracts typically include detailed insurance requirements that must be met before you can operate. These requirements often specify higher limits than you'd encounter at a community fair, require specific additional insured language, and may require umbrella or excess liability policies to meet total required coverage levels. We review vendor contracts and build programs that satisfy every requirement.",
      "Product liability at stadium scale carries unique considerations. When you're selling food and beverages to thousands of people per game, a contamination event can generate a very large number of simultaneous claims. Robust product liability coverage with adequate limits is essential for any stadium food vendor.",
    ],
    faqs: [
      { q: "My stadium contract requires $5M in total liability. Can you do that?", a: "Yes — we can structure programs with umbrella or excess liability coverage that brings your total limit to $5 million or higher. Stadium contracts with high limit requirements are something we regularly handle." },
      { q: "Does my insurance need to cover stadium-owned equipment I use?", a: "If you're using stadium-owned equipment, check your contract — you may be required to carry equipment coverage that names the stadium as an additional insured. We can structure the policy to meet these requirements." },
      { q: "I have 50 employees for game days. Is workers comp required?", a: "Yes — with 50 employees, workers comp is required in all states. Game-day part-time and temporary workers are employees under workers comp law and must be covered." },
      { q: "Can I get proof of insurance quickly for my stadium application?", a: "Yes — we process certificate requests and additional insured endorsements same-day. If you need documentation for a stadium vendor application, call us and we can typically have it to you within a few hours." },
      { q: "Do I need separate policies for different stadiums I operate in?", a: "Typically no — one well-structured annual policy with appropriate endorsements can cover your operations at multiple stadiums. Each venue will need to be named as an Additional Insured on the certificate." },
    ],
  },
  "amusement-park-vendors": {
    name: "Amusement Park Vendor Insurance",
    heroDesc: "Specialized insurance for theme park and amusement venue concessionaires — built to meet the strict insurance requirements of major entertainment facilities.",
    risks: [
      "High-foot-traffic bodily injury claims",
      "Theme park contract insurance requirements",
      "Food and product liability at high volume",
      "Equipment theft or damage in park environment",
      "Compliance with park operator requirements",
      "Injury claims from park guests",
    ],
    coverages: [
      "General Liability meeting park requirements",
      "Product Liability for food vendors",
      "Equipment and Inventory Coverage",
      "Workers Compensation",
      "Vendor Contract Compliance Review",
      "Umbrella Liability if required",
    ],
    stateCompliance: "Amusement parks are typically regulated by state agencies for safety and operational compliance. Insurance requirements vary by park and by state. Theme park vendor contracts often include indemnification clauses, hold harmless agreements, and insurance requirements that need careful review. We work with vendors to ensure their insurance program satisfies park requirements and protects them from the contractual risks inherent in park vendor agreements.",
    bodyParagraphs: [
      "Amusement park and theme park concessionaires operate in one of the highest-foot-traffic environments in the retail world. Major theme parks see millions of visitors annually, and a concession stand or merchandise vendor within a park is exposed to an enormous number of potential claimants every operating day. This scale of exposure requires a thoughtfully structured insurance program.",
      "Theme park vendor contracts are often lengthy and include detailed insurance requirements, indemnification clauses, and hold harmless agreements. The contract may specify not just insurance limits, but also the financial strength rating of the carrier, specific endorsement language, and notice of cancellation requirements. Our specialists review vendor contracts and ensure your insurance program satisfies every requirement.",
      "Food vendors within amusement parks face the same product liability exposures as other food vendors, amplified by the park's high-volume environment. Thousands of transactions per day, combined with the complexity of operating a food service location in a park environment (potentially shared kitchen facilities, temperature control challenges, and the physical activity of park guests), create meaningful food safety risks.",
      "Workers' compensation is essential for amusement park vendors who employ staff to manage high-volume operations. Park environments involve unique workplace hazards — heavy foot traffic around your concession area, the physical demands of continuous service, and the challenges of working in an environment full of moving guests. Workers comp ensures your employees are protected.",
      "Equipment coverage for amusement park vendors protects cooking equipment, POS systems, refrigeration, display cases, and merchandise inventory against theft, damage, and breakdown. Park environments may have specific requirements for equipment installed in park facilities — your policy needs to address these requirements and the park's interest in equipment installed on their property.",
    ],
    faqs: [
      { q: "The park is requiring me to carry a specific minimum rating carrier. Can you do that?", a: "Yes — we work with carriers at the A-rated level and above. If your park contract specifies a minimum AM Best rating (e.g., A-VIII or better), we can confirm the carrier rating meets that requirement." },
      { q: "Does my insurance cover inside the park only or also getting to the park?", a: "Your general liability covers your operations within the park. Commercial auto covers vehicle-related incidents traveling to and from the park. Make sure you have both policies in place." },
      { q: "The park wants to be indemnified in the contract. Does my insurance cover this?", a: "Indemnification clauses in vendor contracts are a separate legal matter from insurance, but your general liability policy does fund the defense and payment of covered claims against you and additional insureds. We recommend having an attorney review any broad indemnification clauses." },
      { q: "I sell both food and merchandise at the park. Do I need separate policies?", a: "Not necessarily — one comprehensive policy can cover both food and merchandise operations. We'll make sure your policy is endorsed properly for both types of activity." },
      { q: "Can I get coverage for just the summer season?", a: "Seasonal policies are available for vendors who only operate during specific months. We'll structure your coverage to match your operating season." },
    ],
  },
  "carnival-game-operators": {
    name: "Carnival Game Operator Insurance",
    heroDesc: "Insurance for traveling carnivals, game booth operators, and mobile amusement operations — built for the unique multi-state, multi-event nature of carnival business.",
    risks: [
      "Customer injury at game booths",
      "Claims related to prize merchandise",
      "Multi-state regulatory compliance",
      "Equipment theft or damage in transit",
      "Employee injuries during setup",
      "Amusement ride liability if applicable",
    ],
    coverages: [
      "General Liability for game booths and attractions",
      "Products Liability for merchandise prizes",
      "Equipment and Game Coverage",
      "Commercial Auto for carnival vehicles",
      "Workers Compensation for carnival crew",
      "Multi-State Program Coverage",
    ],
    stateCompliance: "Carnival operators face some of the most complex regulatory environments of any vendor category. State amusement ride safety laws, game operation regulations, and licensing requirements vary significantly from state to state. Some states require filing proof of insurance with a state agency before carnival operations can commence. If you operate rides in addition to games, ride safety certification and specific insurance requirements apply. We help carnival operators navigate multi-state compliance.",
    bodyParagraphs: [
      "Traveling carnival operators face a uniquely complex insurance environment. Unlike fixed-location vendors, carnival operators move constantly — different events, different states, different regulatory frameworks, week after week throughout the fair season. This mobility creates a risk profile that requires specialized insurance expertise to address properly.",
      "General liability for carnival game operators covers customer injuries at game booths, property damage to venue property, and the products and completed operations exposure from game prizes and merchandise. If a customer is injured at your game booth — tripping over equipment, being struck by an object, or any other incident — your GL policy responds to defend and settle covered claims.",
      "The prize merchandise aspect of carnival game operation creates product liability exposure. If prizes distributed at your games prove to be defective — containing hazardous materials, presenting choking hazards, or having other defects — claims against your business can arise. Product liability coverage extends to the prizes you give out as part of your game operation.",
      "Multi-state operations require careful insurance planning. Commercial auto policies need to be structured for interstate commerce. Workers comp must comply with each state's requirements for the states where you operate. General liability needs appropriate coverage territory. We build programs for carnival operators that travel across state lines — a single coordinated program that complies with each state you visit.",
      "If your operation includes any mechanical amusement rides — even small kiddie rides — the regulatory requirements escalate significantly. State amusement ride safety regulations require inspection certifications, may require filing proof of insurance with state agencies, and mandate higher liability limits for ride operations. If you operate rides, share that information with our team so we can build the appropriate program.",
    ],
    faqs: [
      { q: "I operate in 15 states during fair season. Can one policy cover all of them?", a: "Yes — we build multi-state carnival programs that provide coverage in all the states where you operate. The policy will specify the states or use broader territorial language to cover your operations nationwide." },
      { q: "Do game booths need separate insurance from food concessions at the same carnival?", a: "If both operations are under the same business entity, one policy may cover both. If they're separate businesses, separate policies are needed. Our specialists can review your situation and recommend the right structure." },
      { q: "What if I have a ride that just broke down. Am I still liable for injuries?", a: "If a ride breaks down and causes injury, liability exists regardless of the mechanical status of the equipment at the time. General liability and potentially umbrella coverage would respond. Equipment breakdown coverage addresses the cost of repairing the ride itself." },
      { q: "Do I need workers comp for ride operators?", a: "Yes — ride operators are employees and workers comp is required for them in most states. Ride operation also involves specific hazards that make workers comp particularly important." },
      { q: "Can I get short-term event insurance for just one carnival run?", a: "Short-term event policies are available, but for carnival operators attending multiple events per year, an annual policy is typically more cost-effective. We can help you compare options." },
    ],
  },
  "merchandise-vendors": {
    name: "Merchandise Vendor Insurance",
    heroDesc: "Insurance for souvenir, apparel, and product vendors at events, fairs, festivals, and sporting events — covering your inventory, your booth, and your customers.",
    risks: [
      "Customer injury at your booth or display",
      "Product defect or injury claims",
      "Merchandise inventory theft or damage",
      "Display fixture damage or collapse",
      "Property damage to venue",
      "Claims related to sold merchandise",
    ],
    coverages: [
      "General Liability — booth and display coverage",
      "Product Liability — for merchandise sold",
      "Inland Marine — inventory and equipment",
      "Commercial Auto — for transport vehicles",
      "Workers Compensation if applicable",
      "Single-Event Options Available",
    ],
    stateCompliance: "Merchandise vendors face insurance requirements similar to food vendors at most events, though without the product liability complexity of food service. The primary requirements are general liability with additional insured endorsements for the event organizer. In states with strong consumer protection laws, product liability for merchandise is particularly important — defective products that cause injury to consumers create significant claims exposure for the seller.",
    bodyParagraphs: [
      "Merchandise vendors at events and festivals may not face the same food safety risks as food concessionaires, but they face real and significant liability exposure nonetheless. Customers browsing your displays, merchandise that proves defective, and the general slip and fall risks of a busy event environment all create the need for proper insurance coverage.",
      "General liability is the foundation of merchandise vendor coverage. If a customer is injured at your booth — tripping over display fixtures, being struck by a falling item, or suffering any other incident attributable to your operations — your GL policy covers defense costs and any covered settlement. Event organizers require this coverage universally as a condition of participation.",
      "Product liability for merchandise vendors protects you against claims that the products you sell caused harm to a consumer. If you sell apparel, toys, accessories, novelties, or other merchandise, and a product proves defective and injures a customer, product liability coverage funds your legal defense and settlement costs. This exposure exists even if you didn't manufacture the product — as the seller, you can be named in product liability claims.",
      "Inventory coverage — typically written as an Inland Marine policy — protects your merchandise inventory against theft, vandalism, and accidental damage. Merchandise vendors invest significantly in inventory before each season or event. If your inventory is stolen from your vehicle, damaged at an event, or destroyed by weather, inland marine coverage reimburses the loss and keeps your business operational.",
      "Single-event insurance is a common question for merchandise vendors who only participate in one or a few events per year. Short-term policies covering one event or a defined period (30-90 days) are available for vendors who don't need year-round coverage. For vendors attending three or more events annually, an annual policy typically offers better value and administrative simplicity.",
    ],
    faqs: [
      { q: "I only sell at two events per year. Do I need annual insurance?", a: "You can get a short-term event policy for individual events rather than an annual policy. For two events per year, comparing the cost of two short-term policies versus one annual policy is worthwhile — sometimes the annual policy is surprisingly affordable." },
      { q: "What if someone claims a product I sold was defective?", a: "Product liability insurance covers your defense and any covered settlement in a product defect claim. Even if you didn't manufacture the product, you as the seller can face liability claims. Product liability coverage is important for all merchandise vendors." },
      { q: "Does my homeowner's insurance cover inventory stored at home?", a: "Standard homeowner's policies typically don't cover business inventory or have very low limits for business property. If you store inventory at home, you likely need a home-based business endorsement or a separate inland marine policy to properly cover that inventory." },
      { q: "I sell online as well as at events. Am I covered for online sales?", a: "Event-focused policies typically cover sales at events, not online retail. Online retail creates a separate set of exposures that may need to be specifically addressed in your policy. Discuss your online sales with our team." },
      { q: "My display collapsed and damaged a neighboring vendor's booth. Am I covered?", a: "Yes — if your display or booth equipment damages someone else's property, that's a general liability property damage claim. Your GL policy covers defense costs and covered damages up to your policy limits." },
    ],
  },
};

export async function generateStaticParams() {
  return coverageSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = vendorData[slug];
  if (!data) return {};
  return {
    title: `${data.name} | Contractors Choice Agency`,
    description: `${data.heroDesc} Get a free quote in 15 minutes. Call 844-967-5247.`,
  };
}

export default async function CoverageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = vendorData[slug];

  if (!data) notFound();

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-teal-200 mb-4 text-sm">
              <Link href="/coverages" className="hover:text-white transition-colors">
                Who We Cover
              </Link>{" "}
              / {data.name}
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              {data.name}
            </h1>
            <p className="text-teal-100 text-xl mb-8">{data.heroDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-block bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white hover:bg-teal-600 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>844-967-5247</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6">
                Coverage & Protection
              </h2>
              <div className="space-y-4 mb-10">
                {data.bodyParagraphs.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6">
                State Compliance
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10">{data.stateCompliance}</p>

              {data.faqs.length > 0 && (
                <>
                  <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {data.faqs.map((faq, i) => (
                      <div key={i} className="bg-slate-50 rounded-xl p-6">
                        <h3 className="font-heading font-semibold text-slate-900 mb-2">
                          {faq.q}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* Risks */}
              <div className="bg-red-50 border border-red-100 rounded-2xl p-6 mb-6">
                <h3 className="font-heading font-bold text-slate-900 mb-4">Key Risks You Face</h3>
                <ul className="space-y-2">
                  {data.risks.map((risk, i) => (
                    <li key={i} className="flex items-start space-x-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coverages */}
              <div className="bg-teal-50 rounded-2xl p-6 mb-6">
                <h3 className="font-heading font-bold text-slate-900 mb-4">Recommended Coverages</h3>
                <ul className="space-y-2">
                  {data.coverages.map((coverage, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{coverage}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-teal-500 rounded-2xl p-6 text-white">
                <h3 className="font-heading font-bold text-xl mb-3">Ready to Get Covered?</h3>
                <p className="text-teal-100 text-sm mb-5">
                  15-minute quotes. Same-day certificates. Licensed in all 50 states.
                </p>
                <Link
                  href="/quote"
                  className="block bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-xl font-semibold text-center transition-colors mb-3"
                >
                  Get a Free Quote
                </Link>
                <a
                  href="tel:844-967-5247"
                  className="flex items-center justify-center space-x-2 border border-teal-300 text-white hover:bg-teal-600 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>844-967-5247</span>
                </a>
              </div>

              {/* Other Types */}
              <div className="mt-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">
                  Other Vendor Types
                </h3>
                <div className="space-y-2">
                  {coverageSlugs
                    .filter((s) => s !== slug)
                    .map((s) => {
                      const label = s
                        .split("-")
                        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
                        .join(" ");
                      return (
                        <Link
                          key={s}
                          href={`/coverages/${s}`}
                          className="flex items-center justify-between text-slate-600 hover:text-teal-500 text-sm py-2 border-b border-slate-100 last:border-0 transition-colors"
                        >
                          <span>{label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Get Covered Today
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            We specialize in {data.name.toLowerCase()}. Call or get a quote online — same-day certificates available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:844-967-5247"
              className="inline-flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>844-967-5247</span>
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center border-2 border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Get a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
