import { notFound } from "next/navigation";
import Link from "next/link";
import { Shield, Package, Truck, Users, Box, Wine, Check, Phone, ArrowRight } from "lucide-react";
import { coverages } from "@/lib/coverages";
import type { Metadata } from "next";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-12 h-12" />,
  Package: <Package className="w-12 h-12" />,
  Truck: <Truck className="w-12 h-12" />,
  Users: <Users className="w-12 h-12" />,
  Box: <Box className="w-12 h-12" />,
  Wine: <Wine className="w-12 h-12" />,
};

const serviceFAQs: Record<string, { q: string; a: string }[]> = {
  "general-liability": [
    { q: "What limits do event organizers typically require?", a: "Most fairs, festivals, and events require a minimum of $1 million per occurrence and $2 million aggregate general liability. Larger events like major state fairs or national festivals may require $2 million per occurrence." },
    { q: "Can I add event organizers as additional insureds?", a: "Yes — we add additional insureds at no extra charge, same day. Just provide the event organizer's name and address and we'll update your certificate accordingly." },
    { q: "Does general liability cover product claims for food vendors?", a: "Most GL policies include products and completed operations coverage, but limits and exclusions vary. We recommend a dedicated product liability policy for all food vendors to ensure adequate protection." },
    { q: "Is slip and fall at my booth covered?", a: "Yes — if a customer slips, trips, or falls at your concession stand and files a claim, your general liability policy covers defense costs, medical expenses, and any settlement up to your policy limits." },
    { q: "How quickly can I get a GL policy?", a: "We can typically bind a general liability policy the same day you call. A certificate of insurance can be issued within the hour." },
  ],
  "product-liability": [
    { q: "Is product liability included in my general liability policy?", a: "Many GL policies include some product coverage, but for food vendors, the limits and exclusions may be insufficient. We recommend a dedicated product liability endorsement or separate policy for all food and beverage vendors." },
    { q: "What types of foodborne illness claims are covered?", a: "Product liability covers claims from bacterial contamination (Salmonella, E. coli, Listeria), viral contamination, physical contamination (foreign objects), and chemical contamination, as well as allergic reactions to undisclosed allergens." },
    { q: "What if the food supplier is at fault, not me?", a: "Even if a food supplier's product caused the harm, you as the seller can still be named in a lawsuit. Your product liability policy covers your legal defense in the interim, and you may have indemnification rights against the supplier." },
    { q: "Do I need product liability for pre-packaged foods?", a: "Yes — resellers of commercially packaged goods can still face product liability claims. If the product harms a consumer, you may be held liable as the seller regardless of whether you manufactured the product." },
    { q: "How much product liability coverage do I need?", a: "Most vendors need at minimum $1 million per occurrence. High-volume food vendors serving large crowds should consider $2 million per occurrence. Our specialists will recommend appropriate limits based on your operation." },
  ],
  "commercial-auto": [
    { q: "Does my personal auto insurance cover my food truck?", a: "No — personal auto policies exclude commercial use. If you're using a vehicle for your food vendor business, you need a commercial auto policy. Driving your food truck without commercial auto coverage creates significant uninsured exposure." },
    { q: "Is my trailer covered under commercial auto?", a: "Trailers can be covered under commercial auto, but they need to be specifically listed on the policy. Make sure your trailer is scheduled on your policy to ensure coverage for both liability and physical damage." },
    { q: "What is hired and non-owned auto coverage?", a: "Hired and non-owned auto coverage protects your business if you rent vehicles or your employees use their personal vehicles for business purposes. This is important for vendors who rent trucks or trailers for events." },
    { q: "What if my food truck is used as a cooking location?", a: "When your food truck is stationary and you're operating it as a food service location, general liability (not auto) covers customer injuries. Commercial auto covers vehicle-related incidents while driving." },
    { q: "Do I need commercial auto if I only tow a trailer?", a: "Yes — if you're using a personal vehicle to tow a business trailer, your personal policy may not cover business-related accidents. A commercial auto policy for the towing vehicle protects your business." },
  ],
  "workers-compensation": [
    { q: "Is workers comp required for seasonal event workers?", a: "In most states, yes — if you're paying someone to work at your events, they're likely considered an employee regardless of how many hours they work. Workers comp requirements vary by state, but the threshold for coverage is often just one employee." },
    { q: "What if I use independent contractors instead of employees?", a: "Misclassifying employees as independent contractors is a common mistake. If a worker files a claim for an injury, your state's workers comp board may determine they were actually an employee — leaving you exposed. Our specialists can help you understand your exposure." },
    { q: "Are day laborers or helpers covered?", a: "Temporary, day-of-event workers are typically considered employees under workers comp law. If you hire helpers for event setup, operation, or breakdown, they should be covered under your workers comp policy." },
    { q: "What does workers comp pay for?", a: "Workers comp covers medical expenses for work-related injuries, lost wages while the employee recovers, rehabilitation costs, and death benefits in fatal accidents. It also includes employer's liability, which protects your business if an employee sues you over a workplace injury." },
    { q: "What states have specific concessionaire workers comp requirements?", a: "Workers comp requirements vary significantly by state — coverage thresholds, exemptions, and rates all differ. If you operate in multiple states, your policy should comply with the requirements of the most stringent states. We specialize in multi-state vendor programs." },
  ],
  "inland-marine": [
    { q: "What is inland marine insurance and why do I need it?", a: "Inland marine insurance covers property that moves or is located at temporary locations — making it ideal for mobile vendors. It protects your equipment, inventory, and supplies wherever they travel, unlike standard commercial property insurance which only covers a fixed location." },
    { q: "Is my generator covered under inland marine?", a: "Yes — generators and power equipment are among the most commonly covered items for event vendors. Power equipment is expensive, frequently transported, and subject to theft, vandalism, and mechanical breakdown." },
    { q: "What happens if my equipment is stolen from an event?", a: "If your equipment is stolen from an event, your inland marine policy covers the theft up to the scheduled value of the item, minus your deductible. Make sure your equipment is scheduled on the policy with accurate replacement values." },
    { q: "Does equipment coverage include breakdown?", a: "Many inland marine policies include equipment breakdown coverage, which covers mechanical and electrical failure in addition to physical damage from accidents. This is particularly valuable for refrigeration units, fryers, and generators." },
    { q: "Can I cover inventory in transit?", a: "Yes — inland marine coverage can be extended to cover your food inventory and supplies while in transit to events. This is important for vendors who transport temperature-sensitive products or valuable specialty ingredients." },
  ],
  "liquor-liability": [
    { q: "What is dram shop liability?", a: "Dram shop laws in most states hold alcohol sellers liable for damages caused by intoxicated customers they served. If you sell alcohol at an event and a customer later causes an accident, your business could be held liable under dram shop statutes. Liquor liability insurance covers these claims." },
    { q: "Do I need liquor liability for just selling beer?", a: "Yes — even beer and wine sales create liquor liability exposure. Any alcoholic beverage sale triggers dram shop law applicability in most states." },
    { q: "Is liquor liability included in general liability?", a: "Standard general liability policies typically exclude liquor liability. You need a separate liquor liability endorsement or policy if you sell alcohol at events." },
    { q: "What if I'm serving under the event organizer's liquor license?", a: "Even if you're operating under a host event's liquor license, you may still have personal liability exposure for your service. Check with our specialists to ensure you're protected." },
    { q: "Do I need a liquor license to get liquor liability insurance?", a: "Typically yes — liquor liability insurance is tied to a liquor license or temporary permit. We can help you coordinate the timing of your license application and insurance binding." },
  ],
};

const serviceContent: Record<string, { intro: string; bodyParagraphs: string[]; whoNeeds: string }> = {
  "general-liability": {
    intro: "General liability insurance is the foundation of every concessionaire's coverage program. It protects your business against third-party claims of bodily injury and property damage — the most common types of claims that arise in event and festival environments.",
    bodyParagraphs: [
      "Operating at fairs, festivals, sporting events, and other public gatherings puts you in direct contact with large numbers of people in environments you don't control. Wet grass, crowded pathways, hot cooking equipment, and temporary tent structures all create liability exposure that could result in significant claims against your business without proper insurance.",
      "A general liability policy for concessionaires includes coverage for bodily injury — if a customer is injured at your booth due to your operations, your GL policy covers their medical expenses, legal defense costs, and any settlement or judgment against you. It also covers property damage, protecting you if your operations damage the venue, neighboring vendors' property, or other third-party property.",
      "Products and completed operations coverage is a key component of general liability for food vendors. This extends your coverage to include claims that arise after the customer has left your booth — for example, a claim of food-related illness that develops hours after your event. While general liability includes this coverage, food vendors should also consider a dedicated product liability policy for more robust protection.",
      "The Additional Insured requirement is standard at virtually every event you'll participate in. Event organizers protect themselves by requiring vendors to name them as Additional Insureds on the vendor's GL policy. This means that if a claim arises from your operations at their event, your insurance extends to cover the event organizer as well. We add additional insureds at no charge and process certificate requests same-day.",
      "Standard GL limits for event vendors are $1 million per occurrence and $2 million aggregate — these are the minimum limits most events require. Some larger events, stadium concession programs, and amusement park vendors may require higher limits. We can structure your policy to meet any event's insurance requirements.",
    ],
    whoNeeds: "Every concessionaire, event vendor, food truck operator, fair booth operator, and any business that sells products or services at public events, festivals, fairs, or temporary locations needs general liability insurance. It is universally required by event organizers and provides the core liability protection for your operation.",
  },
  "product-liability": {
    intro: "For food and beverage concessionaires, product liability insurance is not optional — it's essential. A single foodborne illness claim from a contaminated product can result in costs that exceed the value of your business. Product liability insurance protects you from these catastrophic exposures.",
    bodyParagraphs: [
      "Unlike general liability which covers incidents at your booth, product liability covers harm caused by what you sell. For food vendors, this primarily means foodborne illness claims — bacterial contamination (Salmonella, E. coli, Listeria), viral contamination (Norovirus), and chemical contamination. It also covers allergic reactions from undisclosed allergens, foreign object contamination, and spoilage-related claims.",
      "The severity of foodborne illness claims can be extraordinary. A cluster of illness at a large event can generate dozens of simultaneous claims. When Cyclospora or Listeria is traced to a vendor's product, media coverage amplifies the damage beyond direct legal costs. Medical expenses for severe cases — hospitalization, long-term illness, or death — can reach hundreds of thousands of dollars per claim. Without product liability insurance, a single outbreak can be financially fatal to a small vendor business.",
      "Allergen liability is an increasingly prominent risk. The FDA's Major Food Allergen labeling requirements include nine allergens: milk, eggs, fish, shellfish, tree nuts, peanuts, wheat, soybeans, and sesame. Failure to disclose allergens — whether through inadequate labeling, cross-contamination during preparation, or recipe changes — creates significant liability. Severe allergic reactions (anaphylaxis) can be fatal, making allergen-related claims among the most serious a food vendor faces.",
      "The distinction between products liability included in a GL policy and dedicated product liability coverage matters. Many standard GL policies include a products and completed operations coverage component but may sub-limit food-related claims, exclude bacterial contamination, or apply exclusions that leave food vendors insufficiently protected. A dedicated product liability endorsement or policy is structured specifically for food service risks and provides more robust, reliable protection.",
      "Food recall expense coverage is available as part of some product liability programs. If you sell packaged products — bottled sauces, jams, baked goods — and a contamination issue is discovered, the cost of locating and retrieving product from the market can be significant. Recall expense coverage reimburses notification costs, retrieval logistics, and the value of recalled product.",
    ],
    whoNeeds: "All food and beverage concessionaires need product liability insurance — including food truck operators, fair and festival food vendors, concession stand operators, caterers working events, and any vendor selling consumable products at public events. Vendors of packaged, shelf-stable goods should also carry product liability, as they can face claims as the seller even if they didn't manufacture the product.",
  },
  "commercial-auto": {
    intro: "If you drive your food truck, haul a concession trailer, or use vehicles to get your operation to events, commercial auto insurance is legally required. Personal auto policies exclude commercial use — and driving without proper coverage creates enormous uninsured liability.",
    bodyParagraphs: [
      "A food truck is simultaneously a vehicle and a business location — and those two functions create two separate insurance needs. Commercial auto insurance covers your food truck while it's being driven: liability for accidents you cause on the road, physical damage to your truck from collisions and covered perils, and uninsured motorist protection. When your food truck is parked and you're serving customers, general liability takes over.",
      "Trailer coverage is essential for many concessionaires who tow their concession units to events. Trailers need to be specifically scheduled on your commercial auto policy to be covered. Both liability coverage (if your trailer causes an accident while being towed) and physical damage coverage (for the trailer itself) should be included. An unscheduled trailer creates significant gaps in your coverage.",
      "Hired and non-owned auto coverage extends your policy to cover vehicles you don't own but use for business. If you rent a truck to transport equipment, or if an employee uses their personal vehicle on your behalf, hired and non-owned auto provides the business liability protection your standard commercial auto policy may not extend to those vehicles.",
      "Equipment in transit coverage under commercial auto or inland marine protects your supplies and equipment while they're being transported. High-value equipment — generators, cooking equipment, display systems — represents significant investment. Coverage while in transit ensures that an accident on the way to an event doesn't leave you with a total loss.",
      "Multi-state commercial auto coverage is important for vendors who travel to events in different states. Insurance requirements for commercial vehicles vary by state. Working with a specialist who understands interstate commerce and multi-state vendor operations ensures your coverage is compliant wherever your truck takes you.",
    ],
    whoNeeds: "Any concessionaire who operates a food truck, drives a commercial vehicle to events, tows a concession trailer, or uses vehicles as part of their vendor operations. If you transport equipment, supplies, or a concession unit to events using any vehicle, commercial auto coverage is required by law and essential for your protection.",
  },
  "workers-compensation": {
    intro: "Workers' compensation insurance is legally required in most states for any business with employees — including part-time and seasonal event helpers. The physical demands of vendor work create real injury risk, and workers comp protects both your employees and your business.",
    bodyParagraphs: [
      "Event vendor work involves significant physical demands: lifting heavy equipment, working around hot cooking surfaces, long hours on your feet, exposure to weather extremes, and the injury risks of setup and breakdown. These activities put workers at genuine risk of injury, and when injuries happen, workers comp ensures your employees receive proper medical care and wage replacement while protecting your business from direct financial liability.",
      "The definition of 'employee' under workers comp law is broader than many vendors realize. Day-of-event helpers, seasonal workers, and part-time staff are typically considered employees under workers comp statutes, not independent contractors. If someone works for you in exchange for payment — cash or otherwise — they may be legally classified as your employee. Misclassifying employees as independent contractors and then facing a workers comp claim creates serious exposure.",
      "Workers compensation benefits cover medical expenses for work-related injuries, a portion of the employee's lost wages during recovery (typically two-thirds of their regular wage), rehabilitation and retraining costs if the injury prevents return to the same job, and death benefits for fatal workplace accidents. Employer's liability coverage, which is included in most workers comp policies, protects your business if an employee sues you directly over a workplace injury.",
      "State-by-state compliance is complex for vendors who operate in multiple states. Workers comp laws, rate structures, and coverage requirements vary significantly from state to state. A vendor operating in California faces different requirements than one in Texas (which doesn't mandate workers comp) or Florida. Multi-state vendor programs need to be structured to comply with each state's requirements.",
      "Even if you're a sole proprietor with no regular employees, workers comp coverage for yourself may be worth considering. If you're injured while setting up or operating at an event, you'll have no income replacement without coverage. A voluntary workers comp policy or occupational accident policy can fill this gap for solo operators.",
    ],
    whoNeeds: "Any concessionaire with employees — even part-time, seasonal, or temporary event helpers — needs workers' compensation insurance. In most states, having even one paid worker makes workers comp legally required. Solo operators should consider voluntary workers comp coverage for themselves, particularly if they do physical setup work or operate cooking equipment.",
  },
  "inland-marine": {
    intro: "Your concession equipment represents a major investment. Inland Marine insurance protects that equipment wherever it travels — at events, in transit, and in storage — covering theft, vandalism, accidental damage, and breakdown.",
    bodyParagraphs: [
      "The term 'Inland Marine' sounds unrelated to food vendor insurance, but it refers to a category of insurance that covers property in transit and property used in mobile or temporary locations. For concessionaires, this is the right category for covering equipment that doesn't stay in one fixed location — which is most of what you own.",
      "Commercial fryers, grills, flat-tops, and other cooking equipment represent thousands of dollars of investment. Refrigeration units, freezers, and cold-holding equipment are essential and expensive to replace. Generators, which power your entire operation at events that don't have electrical hookups, can cost $5,000-$20,000 or more. Inland marine insurance covers all of these items against theft, vandalism, fire, and accidental damage.",
      "Equipment breakdown coverage is a critical add-on for vendors who depend on their equipment functioning during events. Standard property insurance covers physical damage — something hitting your fryer, for example — but not mechanical or electrical failure. Equipment breakdown coverage responds when your generator fails mid-event, your refrigeration malfunctions and causes inventory spoilage, or your commercial fryer breaks down due to electrical failure.",
      "Display fixtures, signage, canopy systems, and point-of-sale equipment are also coverable under inland marine. These items may not seem like big-ticket assets individually, but replacing a canopy system, banner displays, and equipment mounting hardware after a wind event or theft can add up quickly. Scheduling these items on your inland marine policy at their replacement cost value ensures full reimbursement if they're damaged or stolen.",
      "Inventory coverage is available under inland marine for vendors who carry food inventory and supplies. Spoilage coverage specifically addresses the loss of refrigerated or temperature-sensitive inventory due to equipment failure. If your refrigeration fails overnight and you lose $3,000 in perishable inventory before a weekend of events, spoilage coverage reimburses that loss.",
    ],
    whoNeeds: "Any concessionaire with commercial cooking equipment, generators, refrigeration units, concession trailers, display systems, or inventory needs inland marine insurance. If you transport equipment to events or store equipment off-site, a standard commercial property policy won't cover those items — inland marine is the right solution for mobile vendor operations.",
  },
  "liquor-liability": {
    intro: "If you sell beer, wine, spirits, or any alcoholic beverages at events and festivals, liquor liability insurance is essential. Standard general liability policies exclude alcohol-related claims, leaving you exposed to dram shop liability and other alcohol-service risks.",
    bodyParagraphs: [
      "Dram shop laws exist in most states and create legal liability for businesses that sell alcohol to intoxicated individuals who then harm themselves or others. As a vendor selling alcohol at an event, you can be held legally responsible if you serve a customer who was visibly intoxicated and that customer later causes a car accident or injures someone. Dram shop liability claims can result in significant damages — liquor liability insurance protects your business against these exposures.",
      "Assault and battery coverage is an important component of liquor liability policies. Alcohol consumption at events can lead to altercations, and businesses in the vicinity of alcohol service can face claims even when the vendor isn't the direct cause. Some standard GL policies exclude assault and battery claims entirely. Liquor liability policies typically include A&B coverage as part of the standard program.",
      "Beer and wine festivals have become major events across the country, and vendors at these events face concentrated liquor liability exposure. When thousands of attendees are consuming alcohol and you're one of dozens of serving vendors, any incident can generate claims against all nearby vendors. Having adequate liquor liability coverage — with appropriate limits — is essential for participating in these events.",
      "The interaction between your liquor license and your insurance is important. Most temporary alcohol permits and event liquor licenses require proof of liquor liability insurance as part of the application. Coverage must be in place before the license is granted. We coordinate timing with applicants to make sure the policy is bound and the certificate is available when you need it for your permit application.",
      "Liquor liability limits should be calibrated to your event size and exposure. A vendor serving beer at a small community fair has different exposure than a festival bar vendor serving a crowd of 10,000. We'll discuss your typical event size and selling volume to recommend appropriate limits. Most events require at least $1 million in liquor liability coverage.",
    ],
    whoNeeds: "Any concessionaire or event vendor who sells, serves, or otherwise provides alcoholic beverages at events, festivals, fairs, or public gatherings needs liquor liability insurance. This includes vendors with temporary liquor licenses, beer garden operators, wine festival vendors, and any vendor operating under a host's liquor license where you have personal service liability.",
  },
};

export async function generateStaticParams() {
  return coverages.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const coverage = coverages.find((c) => c.slug === slug);
  if (!coverage) return {};
  return {
    title: `${coverage.name} for Concessionaires | Contractors Choice Agency`,
    description: `${coverage.description} Get a free quote in 15 minutes. Licensed in all 50 states. Call 844-967-5247.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const coverage = coverages.find((c) => c.slug === slug);

  if (!coverage) notFound();

  const content = serviceContent[slug] || {
    intro: coverage.description,
    bodyParagraphs: ["Contact us to learn more about this coverage."],
    whoNeeds: coverage.who,
  };
  const faqs = serviceFAQs[slug] || [];
  const iconMap2: Record<string, React.ReactNode> = {
    Shield: <Shield className="w-12 h-12" />,
    Package: <Package className="w-12 h-12" />,
    Truck: <Truck className="w-12 h-12" />,
    Users: <Users className="w-12 h-12" />,
    Box: <Box className="w-12 h-12" />,
    Wine: <Wine className="w-12 h-12" />,
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-teal-200 mb-4 text-sm">
              <Link href="/services" className="hover:text-white transition-colors">
                Coverages
              </Link>{" "}
              / {coverage.name}
            </div>
            <div className="text-white mb-4">{iconMap2[coverage.icon]}</div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
              {coverage.name} for Concessionaires
            </h1>
            <p className="text-teal-100 text-xl mb-8">{content.intro}</p>
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
                What Does {coverage.name} Cover?
              </h2>
              <div className="space-y-4 mb-10">
                {content.bodyParagraphs.map((para, i) => (
                  <p key={i} className="text-slate-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6">
                Who Needs {coverage.name}?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10">{content.whoNeeds}</p>

              {faqs.length > 0 && (
                <>
                  <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
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
              {/* Coverage Features */}
              <div className="bg-teal-50 rounded-2xl p-6 mb-6">
                <h3 className="font-heading font-bold text-slate-900 mb-4">Coverage Features</h3>
                <ul className="space-y-3">
                  {coverage.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <Check className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{feature}</span>
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
                <p className="text-teal-200 text-xs mt-4 text-center">
                  NPN: 8608479 | Licensed All 50 States
                </p>
              </div>

              {/* Other Services */}
              <div className="mt-6">
                <h3 className="font-heading font-semibold text-slate-900 mb-3 text-sm uppercase tracking-wider">
                  Other Coverages
                </h3>
                <div className="space-y-2">
                  {coverages
                    .filter((c) => c.slug !== slug)
                    .map((c) => (
                      <Link
                        key={c.slug}
                        href={`/services/${c.slug}`}
                        className="flex items-center justify-between text-slate-600 hover:text-teal-500 text-sm py-2 border-b border-slate-100 last:border-0 transition-colors"
                      >
                        <span>{c.name}</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    ))}
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
            Get {coverage.name} for Your Operation
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Call us or get a quote online. We&apos;ll have you covered — with certificate — the same day.
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
