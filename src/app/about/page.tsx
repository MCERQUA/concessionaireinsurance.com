import Link from "next/link";
import { Phone, Mail, MapPin, Award, Globe, Clock, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Contractors Choice Agency | Concessionaire Insurance Specialists",
  description:
    "Learn about Josh Cotner and Contractors Choice Agency — founded 2005 by a former contractor, now specializing in insurance for concessionaires and event vendors nationwide.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            About Contractors Choice Agency
          </h1>
          <p className="text-teal-100 text-xl max-w-3xl mx-auto">
            Founded by a former contractor in 2005, we specialize in commercial insurance for
            specialty trade businesses — including concessionaires and event vendors nationwide.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
                The Josh Cotner Story
              </h2>
              <div className="space-y-5 text-slate-600 leading-relaxed">
                <p>
                  Josh Cotner didn&apos;t start in insurance — he started with his hands in the trade.
                  Working as a contractor in Arizona gave Josh a firsthand understanding of what
                  business owners in the trades and vendor industries actually need from their insurance
                  coverage: clarity, responsiveness, and a specialist who gets it.
                </p>
                <p>
                  That frustration with generic insurance agents who didn&apos;t understand the nuances
                  of specialty commercial operations led Josh to transition into insurance with a clear
                  mission: build an agency that serves specialty businesses with the same expertise and
                  professionalism that those businesses bring to their own trades.
                </p>
                <p>
                  Contractors Choice Agency was founded in 2005. Over two decades, Josh and his team
                  have built one of the most specialized commercial insurance programs in the Southwest,
                  serving clients across 50+ specialty niches — including an expanding focus on
                  concessionaires and event vendors who face the same challenges that drew Josh to the
                  industry in the first place: mobile operations, multi-state compliance, and insurance
                  agents who don&apos;t understand their world.
                </p>
                <p>
                  Today, Contractors Choice Agency is headquartered in Chandler, Arizona, with
                  additional offices in downtown Phoenix and Miami, Florida. We&apos;re licensed in all
                  50 states and serve clients from food truck operators in California to carnival
                  operators working the state fair circuit from Florida to Washington.
                </p>
                <p>
                  Our approach is simple: treat every client with the same expertise and attention we&apos;d
                  want if we were in their position. That means fast quotes, same-day certificates,
                  honest coverage recommendations, and a team that answers the phone when you need them.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl overflow-hidden shadow-xl mb-8">
                <img
                  src="/images/team.jpg"
                  alt="Contractors Choice Agency team"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Award className="w-5 h-5 text-teal-500" />, label: "Founded", value: "2005" },
                  { icon: <Globe className="w-5 h-5 text-teal-500" />, label: "Licensed In", value: "All 50 States" },
                  { icon: <Users className="w-5 h-5 text-teal-500" />, label: "Active Clients", value: "298+" },
                  { icon: <Clock className="w-5 h-5 text-teal-500" />, label: "Quote Time", value: "15 Minutes" },
                ].map((stat, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-4 text-center">
                    <div className="flex justify-center mb-2">{stat.icon}</div>
                    <div className="font-heading font-bold text-slate-900 text-lg">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Concessionaires */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl font-bold text-slate-900 mb-4">
              Why We Specialize in Concessionaires
            </h2>
            <p className="text-slate-600 text-lg">
              Concessionaire and event vendor insurance requires a level of specialization that most
              general commercial agents simply don&apos;t have. Here&apos;s why we focus on this market.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Mobile Complexity",
                desc: "Vendors who operate across multiple states, multiple events, and temporary locations face coverage challenges that generic commercial policies don't address. We build programs designed for mobility.",
              },
              {
                title: "Certificate Speed",
                desc: "Fair boards and event organizers require certificates and additional insured endorsements on short notice. Our team processes these requests same-day — often within the hour.",
              },
              {
                title: "Niche Expertise",
                desc: "From food truck commercial auto to carnival ride compliance to stadium concession contracts — we know the specific requirements, risks, and coverage solutions for each vendor niche.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Phone</div>
                    <a href="tel:844-967-5247" className="text-teal-500 hover:text-teal-600">844-967-5247</a>
                    <span className="text-slate-400 mx-2">|</span>
                    <a href="tel:855-336-7189" className="text-teal-500 hover:text-teal-600">855-336-7189</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Email</div>
                    <a href="mailto:josh@contractorschoiceagency.com" className="text-teal-500 hover:text-teal-600">
                      josh@contractorschoiceagency.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-teal-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-teal-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Headquarters</div>
                    <div className="text-slate-600">12220 E Riggs Rd</div>
                    <div className="text-slate-600">Chandler, AZ 85249</div>
                    <div className="text-slate-500 text-sm mt-1">Additional offices: Phoenix, AZ | Miami, FL</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-4 bg-slate-50 rounded-xl text-sm text-slate-600">
                <strong>NPN: 8608479</strong> | Licensed in all 50 states | Founded 2005
              </div>
            </div>
            <div className="bg-teal-500 rounded-2xl p-8 text-white">
              <h3 className="font-heading text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-teal-100 mb-6">
                Call us or get a quote online. We specialize in concessionaire insurance and can have
                you covered — with certificate — the same day.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:844-967-5247"
                  className="flex items-center justify-center space-x-2 bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-xl font-bold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call 844-967-5247</span>
                </a>
                <Link
                  href="/quote"
                  className="flex items-center justify-center border-2 border-teal-300 text-white hover:bg-teal-600 px-6 py-3 rounded-xl font-semibold transition-colors"
                >
                  Get a Quote Online
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
