"use client";

import { useState } from "react";
import { Phone, Check } from "lucide-react";

const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming",
];

const vendorTypes = [
  "Food Truck",
  "Fair / Festival Food Vendor",
  "Festival Merchandise Vendor",
  "Stadium / Arena Concession",
  "Amusement Park Vendor",
  "Carnival Game Operator",
  "Carnival Ride Operator",
  "Farmers Market Vendor",
  "Catering / Event Food Service",
  "Beer / Wine / Spirits Vendor",
  "Packaged Food Products",
  "Other",
];

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=concessionaireinsurance.com`;

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch(WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form_name: "quote", source: "concessionaireinsurance.com", ...Object.fromEntries(data.entries()) }) });
    } catch {}
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      // Still show success in case of network issues on Netlify
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-teal-500" />
          </div>
          <h1 className="font-heading text-3xl font-bold text-slate-900 mb-4">
            Quote Request Received!
          </h1>
          <p className="text-slate-600 text-lg mb-6">
            Thank you for reaching out. One of our concessionaire insurance specialists will review
            your information and contact you within 15 minutes during business hours.
          </p>
          <div className="bg-teal-50 rounded-xl p-5 mb-8">
            <p className="text-slate-700 text-sm">
              Need coverage immediately? Call us directly at{" "}
              <a href="tel:844-967-5247" className="text-teal-600 font-bold">
                844-967-5247
              </a>{" "}
              and we can typically bind coverage and issue a certificate the same day.
            </p>
          </div>
          <a
            href="/"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors"
          >
            Back to Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-12 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="font-heading text-4xl font-bold text-white mb-4">
                Get a Free Concessionaire Insurance Quote
              </h1>
              <p className="text-teal-100 text-lg mb-6">
                Complete the form and a specialist will follow up within 15 minutes. Need coverage
                today? Call us directly.
              </p>
              <a
                href="tel:844-967-5247"
                className="inline-flex items-center space-x-2 bg-white text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-xl font-bold transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>844-967-5247</span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              {[
                { value: "15 min", label: "Average Quote" },
                { value: "Same Day", label: "Certificate" },
                { value: "50 States", label: "Licensed" },
                { value: "20+ Years", label: "Experience" },
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-white">
                  <div className="font-heading font-bold text-xl">{item.value}</div>
                  <div className="text-teal-200 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-2">
              Tell Us About Your Operation
            </h2>
            <p className="text-slate-500 text-sm mb-8">
              All fields marked * are required. The more detail you provide, the more accurate your quote.
            </p>

            <form
              name="quote"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="quote" />
              <p className="hidden">
                <label>Do not fill: <input name="bot-field" /></label>
              </p>

              {/* Personal Info */}
              <div>
                <h3 className="font-heading font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                  Contact Information
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="firstName">
                      First Name *
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="lastName">
                      Last Name *
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>

              {/* Business Info */}
              <div>
                <h3 className="font-heading font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                  Business Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="businessName">
                      Business Name *
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      required
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="state">
                        Primary State *
                      </label>
                      <select
                        id="state"
                        name="state"
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select state...</option>
                        {states.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="vendorType">
                        Vendor Type *
                      </label>
                      <select
                        id="vendorType"
                        name="vendorType"
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select type...</option>
                        {vendorTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="yearsInBusiness">
                        Years in Business
                      </label>
                      <select
                        id="yearsInBusiness"
                        name="yearsInBusiness"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="new">Just starting</option>
                        <option value="1-2">1–2 years</option>
                        <option value="3-5">3–5 years</option>
                        <option value="6-10">6–10 years</option>
                        <option value="11-20">11–20 years</option>
                        <option value="20+">20+ years</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="estimatedRevenue">
                        Estimated Annual Revenue
                      </label>
                      <select
                        id="estimatedRevenue"
                        name="estimatedRevenue"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select range...</option>
                        <option value="under-25k">Under $25,000</option>
                        <option value="25k-75k">$25,000 – $75,000</option>
                        <option value="75k-150k">$75,000 – $150,000</option>
                        <option value="150k-500k">$150,000 – $500,000</option>
                        <option value="500k-1m">$500,000 – $1 Million</option>
                        <option value="over-1m">Over $1 Million</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">
                  Tell Us More About Your Operation
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 resize-none"
                  placeholder="Number of events per year, states you operate in, employees, specific coverage needs, current insurance issues, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-xl font-bold text-lg transition-colors"
              >
                Submit Quote Request
              </button>

              <p className="text-xs text-slate-500 text-center">
                By submitting, you agree to be contacted by Contractors Choice Agency regarding your
                insurance quote. NPN: 8608479. Licensed in all 50 states.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
