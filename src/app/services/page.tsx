import Link from "next/link";
import { Shield, Package, Truck, Users, Box, Wine, ArrowRight, Phone } from "lucide-react";
import { coverages } from "@/lib/coverages";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concessionaire Insurance Coverages | Contractors Choice Agency",
  description:
    "Explore our complete range of insurance coverages for concessionaires and event vendors — general liability, product liability, commercial auto, workers comp, equipment, and liquor liability.",
};

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-10 h-10" />,
  Package: <Package className="w-10 h-10" />,
  Truck: <Truck className="w-10 h-10" />,
  Users: <Users className="w-10 h-10" />,
  Box: <Box className="w-10 h-10" />,
  Wine: <Wine className="w-10 h-10" />,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Concessionaire Insurance Coverages
          </h1>
          <p className="text-teal-100 text-xl max-w-3xl mx-auto mb-8">
            Comprehensive insurance solutions for food vendors, event operators, and concessionaires.
            Every coverage type your business needs — from the basics to specialized protection.
          </p>
          <Link
            href="/quote"
            className="inline-block bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-bold text-lg transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      {/* Coverage Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coverages.map((coverage) => (
              <div
                key={coverage.slug}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-lg hover:border-teal-300 transition-all group"
              >
                <div className="w-16 h-16 bg-teal-50 group-hover:bg-teal-100 rounded-xl flex items-center justify-center text-teal-500 mb-6 transition-colors">
                  {iconMap[coverage.icon]}
                </div>
                <h2 className="font-heading text-xl font-bold text-slate-900 mb-3">
                  {coverage.name}
                </h2>
                <p className="text-slate-600 mb-5 leading-relaxed">{coverage.description}</p>
                <div className="mb-6">
                  <div className="text-sm font-semibold text-slate-700 mb-2">Key Features:</div>
                  <ul className="space-y-1">
                    {coverage.features.slice(0, 4).map((feature, i) => (
                      <li key={i} className="flex items-center space-x-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-xs text-slate-500 mb-4">
                  <span className="font-medium">Who needs this:</span> {coverage.who}
                </div>
                <Link
                  href={`/services/${coverage.slug}`}
                  className="inline-flex items-center space-x-2 text-teal-500 hover:text-teal-600 font-semibold text-sm transition-colors"
                >
                  <span>Full Coverage Details</span>
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
            Not Sure Which Coverages You Need?
          </h2>
          <p className="text-slate-600 text-lg mb-8">
            Our specialists will review your operation and recommend the right coverage package for
            your specific situation. No pressure — just honest advice.
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
