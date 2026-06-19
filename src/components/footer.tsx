import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { href: "/services/general-liability", label: "General Liability" },
  { href: "/services/product-liability", label: "Product Liability" },
  { href: "/services/commercial-auto", label: "Commercial Auto" },
  { href: "/services/workers-compensation", label: "Workers Comp" },
  { href: "/services/inland-marine", label: "Equipment Coverage" },
  { href: "/services/liquor-liability", label: "Liquor Liability" },
];

const coverageLinks = [
  { href: "/coverages/food-trucks", label: "Food Trucks" },
  { href: "/coverages/fair-festival-vendors", label: "Fair & Festival Vendors" },
  { href: "/coverages/stadium-concessions", label: "Stadium Concessions" },
  { href: "/coverages/amusement-park-vendors", label: "Amusement Park Vendors" },
  { href: "/coverages/carnival-game-operators", label: "Carnival Operators" },
  { href: "/coverages/merchandise-vendors", label: "Merchandise Vendors" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Get a Quote" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CI</span>
              </div>
              <div>
                <span className="font-heading font-bold text-white text-sm leading-tight block">
                  Concessionaire
                </span>
                <span className="font-heading font-bold text-teal-400 text-sm leading-tight block">
                  Insurance
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6 max-w-xs">
              Expert insurance for concessionaires and event vendors. Protecting food trucks,
              fair vendors, carnival operators, and more since 2005.
            </p>
            <div className="space-y-2">
              <a
                href="tel:844-967-5247"
                className="flex items-center space-x-2 text-slate-300 hover:text-teal-400 text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-400" />
                <span>844-967-5247</span>
              </a>
              <a
                href="mailto:josh@contractorschoiceagency.com"
                className="flex items-center space-x-2 text-slate-300 hover:text-teal-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>josh@contractorschoiceagency.com</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 text-teal-400" />
                <span>12220 E Riggs Rd, Chandler, AZ 85249</span>
              </div>
            </div>
            <p className="text-slate-500 text-xs mt-4">NPN: 8608479 | Licensed All 50 States</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Coverages
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Cover */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Who We Cover
            </h3>
            <ul className="space-y-2">
              {coverageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Legal
            </h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2025 Contractors Choice Agency. All rights reserved. | Concessionaire Insurance is a
            specialty division of Contractors Choice Agency.
          </p>
        </div>
      </div>
    </footer>
  );
}
