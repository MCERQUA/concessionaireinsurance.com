import Link from "next/link";
import { Truck, ChefHat, Award, Zap, Globe, ShoppingBag, ArrowRight, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who We Cover | Concessionaire Insurance Specialists | CCA",
  description:
    "Specialized insurance for food trucks, fair vendors, stadium concessions, amusement park vendors, carnival operators, and merchandise vendors. Find your vendor type and get a quote.",
};

const vendorTypes = [
  {
    slug: "food-trucks",
    icon: <Truck className="w-10 h-10" />,
    name: "Food Trucks",
    desc: "Mobile food truck operators face unique insurance challenges — your truck is simultaneously a vehicle and a commercial kitchen. We specialize in food truck insurance programs that cover both roles.",
    highlights: ["Commercial auto for your truck", "General & product liability", "Equipment and inventory", "Multi-state coverage"],
  },
  {
    slug: "fair-festival-vendors",
    icon: <ChefHat className="w-10 h-10" />,
    name: "Fair & Festival Vendors",
    desc: "County fairs, state fairs, and music festivals require specific insurance documentation. We know exactly what fair boards and festival organizers require — and we process certificates fast.",
    highlights: ["Additional insured endorsements", "Same-day certificate processing", "Seasonal coverage options", "Food and merchandise vendors"],
  },
  {
    slug: "stadium-concessions",
    icon: <Award className="w-10 h-10" />,
    name: "Stadium Concessions",
    desc: "Stadium and arena concession operators serve massive crowds and face higher liability requirements than typical event vendors. We build programs that meet stadium and venue insurance requirements.",
    highlights: ["High-limit liability programs", "Liquor liability available", "Workers comp for large crews", "Venue compliance expertise"],
  },
  {
    slug: "amusement-park-vendors",
    icon: <Zap className="w-10 h-10" />,
    name: "Amusement Park Vendors",
    desc: "Theme park and amusement venue concessionaires operate in controlled environments with strict venue requirements. We navigate the compliance requirements so you can focus on your business.",
    highlights: ["Theme park vendor compliance", "High-foot-traffic liability", "Equipment and inventory", "Contract review assistance"],
  },
  {
    slug: "carnival-game-operators",
    icon: <Globe className="w-10 h-10" />,
    name: "Carnival Operators",
    desc: "Traveling carnivals and carnival game operators move across state lines and attend dozens of events per year. We build multi-state programs that travel with you wherever the fair season takes you.",
    highlights: ["Multi-state coverage", "Game booth liability", "Traveling carnival programs", "Amusement ride coverage available"],
  },
  {
    slug: "merchandise-vendors",
    icon: <ShoppingBag className="w-10 h-10" />,
    name: "Merchandise Vendors",
    desc: "Souvenir, apparel, and product vendors at events need protection for their inventory, their booth, and the customers they serve. We cover merchandise vendors at fairs, festivals, and sporting events.",
    highlights: ["Inventory coverage", "Booth and display coverage", "Product liability", "Single-event options available"],
  },
];

export default function CoveragesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Who We Cover
          </h1>
          <p className="text-teal-100 text-xl max-w-3xl mx-auto mb-8">
            We specialize in insurance for every type of concessionaire and event vendor. Find your
            vendor type below to learn about the specific coverages and requirements for your operation.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Vendor Types Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vendorTypes.map((vendor) => (
              <div
                key={vendor.slug}
                className="bg-white border border-slate-200 hover:border-teal-300 rounded-2xl p-8 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 bg-teal-50 group-hover:bg-teal-100 rounded-xl flex items-center justify-center text-teal-500 mb-6 transition-colors">
                  {vendor.icon}
                </div>
                <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">{vendor.name}</h2>
                <p className="text-slate-600 mb-5 leading-relaxed text-sm">{vendor.desc}</p>
                <ul className="space-y-2 mb-6">
                  {vendor.highlights.map((h, i) => (
                    <li key={i} className="flex items-center space-x-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/coverages/${vendor.slug}`}
                  className="inline-flex items-center space-x-2 text-teal-500 hover:text-teal-600 font-semibold text-sm transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
            Don&apos;t See Your Vendor Type?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            We cover a wide range of concessionaire and event vendor operations beyond those listed
            above. Call us to discuss your specific operation — we can build a program for it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:844-967-5247"
              className="inline-flex items-center justify-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call 844-967-5247</span>
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-semibold transition-colors"
            >
              Get a Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
