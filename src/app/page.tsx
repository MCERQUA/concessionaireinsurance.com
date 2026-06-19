"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import {
  Shield,
  Package,
  Truck,
  Users,
  Box,
  Wine,
  ChefHat,
  Star,
  Check,
  ChevronDown,
  ChevronUp,
  Phone,
  Award,
  Globe,
  Clock,
  Zap,
  ShoppingBag,
  Utensils,
} from "lucide-react";
import { coverages } from "@/lib/coverages";

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-8 h-8" />,
  Package: <Package className="w-8 h-8" />,
  Truck: <Truck className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
  Box: <Box className="w-8 h-8" />,
  Wine: <Wine className="w-8 h-8" />,
};

const vendorTypes = [
  {
    icon: <Truck className="w-8 h-8" />,
    name: "Food Trucks",
    desc: "Mobile food truck operators and street food vendors",
    href: "/coverages/food-trucks",
  },
  {
    icon: <ChefHat className="w-8 h-8" />,
    name: "Fair & Festival Vendors",
    desc: "County fair, state fair, and music festival operators",
    href: "/coverages/fair-festival-vendors",
  },
  {
    icon: <Award className="w-8 h-8" />,
    name: "Stadium Concessions",
    desc: "Sports venue and arena concession operators",
    href: "/coverages/stadium-concessions",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    name: "Amusement Park Vendors",
    desc: "Theme park and amusement venue concessionaires",
    href: "/coverages/amusement-park-vendors",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    name: "Carnival Operators",
    desc: "Traveling carnivals, game booths, and ride operators",
    href: "/coverages/carnival-game-operators",
  },
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    name: "Merchandise Vendors",
    desc: "Souvenir, apparel, and product vendors at events",
    href: "/coverages/merchandise-vendors",
  },
];

const testimonials = [
  {
    name: "Maria R.",
    title: "Food Truck Owner",
    location: "Phoenix, AZ",
    text: "Getting my food truck insured used to take days. Contractors Choice Agency had me covered in under an hour. They understand the mobile vendor business — they know exactly what certificates event organizers need and they produce them instantly.",
  },
  {
    name: "Dave T.",
    title: "Fair Booth Operator",
    location: "Austin, TX",
    text: "I've been vending at state fairs across Texas and Oklahoma for 12 years. Josh and his team have been my insurance specialists for the last 8. They handle all my additional insured requests without me having to follow up. That's rare.",
  },
  {
    name: "Sandra K.",
    title: "Carnival Concessionaire",
    location: "Tampa, FL",
    text: "Our operation travels to 40+ events per year across 6 states. Finding an agent who understands multi-state vendor compliance was a nightmare until we found Contractors Choice. They built us a program that works everywhere we go.",
  },
];

const faqs = [
  {
    question: "What is concessionaire insurance?",
    answer:
      "Concessionaire insurance is a specialized commercial insurance program designed for businesses that sell food, merchandise, or operate games and rides at events, fairs, festivals, stadiums, and amusement venues. It typically includes general liability, product liability, commercial auto, and equipment coverage tailored to the mobile, event-driven nature of vendor businesses.",
  },
  {
    question: "Do I need insurance for a single event?",
    answer:
      "Yes — most events, fairs, and festivals require proof of insurance before you can participate. Short-term event insurance policies are available for vendors who only attend one or a few events per year. For vendors attending three or more events annually, an annual policy is usually more cost-effective.",
  },
  {
    question: "What does general liability cover for food vendors?",
    answer:
      "General liability covers third-party bodily injury and property damage claims arising from your operations. This includes slip and falls at your booth, injuries from your equipment, and damage to venue property. Most policies include products and completed operations coverage, which helps with food-related claims, though a dedicated product liability policy is recommended for food vendors.",
  },
  {
    question: "How quickly can I get a certificate of insurance?",
    answer:
      "At Contractors Choice Agency, we process certificate of insurance requests the same day — often within the hour. If you need a certificate quickly for an event application, call us at 844-967-5247 and we can typically have your coverage bound and certificate issued within a few hours.",
  },
  {
    question: "Do I need product liability if I sell packaged foods?",
    answer:
      "Yes. Even if you're reselling commercially packaged goods from an established manufacturer, you can still face product liability claims as the seller. If the product causes harm to a consumer, you may be named in a lawsuit regardless of whether you manufactured the product. Product liability insurance protects you in these situations and covers your legal defense costs.",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-slate-50 transition-colors"
          >
            <span className="font-heading font-semibold text-slate-900 pr-4">{faq.question}</span>
            {openIndex === i ? (
              <ChevronUp className="w-5 h-5 text-teal-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
            )}
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 bg-white">
              <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block bg-teal-50 text-teal-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                Specialist Insurance for Concessionaires
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Insurance Built for{" "}
                <span className="text-teal-500">Concessionaires</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Protect your food truck, fair booth, carnival operation, or event concession with
                coverage designed specifically for mobile vendors. 20+ years of expertise. 15-minute
                quotes. Licensed in all 50 states.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors text-center"
                >
                  Get a Free Quote
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-teal-500 text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-semibold text-lg transition-colors text-center"
                >
                  View Coverages
                </Link>
              </div>
              <div className="mt-8 flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-teal-500" />
                  <span>No obligation quote</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-teal-500" />
                  <span>Same-day certificates</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-teal-500" />
                  <span>All 50 states</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hero.jpg"
                  alt="Professional food vendor at outdoor festival"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">15-Minute Quotes</div>
                  <div className="text-xs text-slate-500">Fast coverage for busy vendors</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-teal-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { stat: "All 50 States", label: "Licensed & Compliant" },
              { stat: "20+ Years", label: "Industry Experience" },
              { stat: "15 Minutes", label: "Average Quote Time" },
              { stat: "2-Hour", label: "Claims Response SLA" },
            ].map((item, i) => (
              <div key={i}>
                <div className="font-heading text-2xl font-bold">{item.stat}</div>
                <div className="text-teal-100 text-sm mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Coverages We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive insurance solutions designed for the unique risks of mobile and event-based vendor operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverages.map((coverage, i) => (
              <motion.div
                key={coverage.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/services/${coverage.slug}`}
                  className="block bg-white border border-slate-200 hover:border-teal-300 rounded-2xl p-6 hover:shadow-lg transition-all group h-full"
                >
                  <div className="w-14 h-14 bg-teal-50 group-hover:bg-teal-100 rounded-xl flex items-center justify-center text-teal-500 mb-4 transition-colors">
                    {iconMap[coverage.icon]}
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 text-lg mb-2">
                    {coverage.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {coverage.description}
                  </p>
                  <div className="text-teal-500 text-sm font-semibold group-hover:text-teal-600">
                    Learn more →
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CCA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Why Concessionaires Choose Us
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: <Award className="w-5 h-5 text-teal-500" />,
                    title: "Former Contractor Background",
                    desc: "Josh Cotner founded Contractors Choice Agency as a former contractor himself. We understand the vendor and contractor mindset — not just insurance theory.",
                  },
                  {
                    icon: <Clock className="w-5 h-5 text-teal-500" />,
                    title: "20+ Years Specialist Experience",
                    desc: "Since 2005, we've focused exclusively on specialty commercial insurance for contractors and vendors. We know the fair board requirements, event insurance standards, and state compliance nuances.",
                  },
                  {
                    icon: <Zap className="w-5 h-5 text-teal-500" />,
                    title: "Same-Day Certificates",
                    desc: "We process certificate of insurance requests the same day — often within the hour. Never lose a vendor spot because of slow paperwork.",
                  },
                  {
                    icon: <Globe className="w-5 h-5 text-teal-500" />,
                    title: "Licensed in All 50 States",
                    desc: "Whether you operate locally or travel the country doing fairs and festivals, we can cover you in every state with a single, streamlined program.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="tel:844-967-5247"
                  className="inline-flex items-center space-x-2 bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 844-967-5247</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/images/team.jpg"
                alt="Insurance professionals at Contractors Choice Agency"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WHO WE COVER */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Who We Cover
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From food trucks to stadium concessions, we have specialized programs for every type of concessionaire and event vendor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vendorTypes.map((vendor, i) => (
              <motion.div
                key={vendor.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={vendor.href}
                  className="block bg-slate-50 hover:bg-teal-50 border border-slate-200 hover:border-teal-300 rounded-2xl p-6 transition-all group"
                >
                  <div className="text-teal-500 mb-3 group-hover:scale-110 transition-transform inline-block">
                    {vendor.icon}
                  </div>
                  <h3 className="font-heading font-bold text-slate-900 mb-2">{vendor.name}</h3>
                  <p className="text-slate-600 text-sm">{vendor.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-teal-100 text-lg max-w-2xl mx-auto">
              Getting covered is fast and simple. We handle the details so you can focus on your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Tell Us About Your Operation",
                desc: "Share details about your business — what you sell, where you operate, how many events per year, and whether you have employees.",
              },
              {
                step: "2",
                title: "Get Your Custom Quote in 15 Minutes",
                desc: "Our specialists build a tailored coverage program and provide a detailed quote — typically in 15 minutes or less.",
              },
              {
                step: "3",
                title: "Get Covered & Get Back to Business",
                desc: "Approve your coverage and we bind it immediately. Your certificate of insurance is ready the same day — sometimes within the hour.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-teal-100 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Vendors Nationwide
            </h2>
            <p className="text-lg text-slate-600">
              Real feedback from concessionaires who rely on us for their insurance needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                    <div className="text-slate-500 text-xs">{t.title} — {t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Answers to the most common questions about concessionaire insurance.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FAQAccordion />
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "$2M+", label: "in Claims Paid" },
              { stat: "298+", label: "Active Clients" },
              { stat: "50", label: "States Licensed" },
              { stat: "15 Min", label: "Average Quote" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="font-heading text-3xl font-bold text-teal-400 mb-1">{item.stat}</div>
                <div className="text-slate-400 text-sm">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Protect Your Vendor Business?
            </h2>
            <p className="text-teal-100 text-xl mb-8">
              Get a free, no-obligation quote in 15 minutes. Same-day certificates available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center justify-center space-x-2 bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-xl font-bold text-xl transition-colors"
              >
                <Phone className="w-6 h-6" />
                <span>844-967-5247</span>
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-teal-700 hover:bg-teal-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
              >
                Get a Quote Now
              </Link>
            </div>
            <p className="text-teal-200 text-sm mt-6">
              Licensed in all 50 states | NPN: 8608479 | Founded 2005
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
