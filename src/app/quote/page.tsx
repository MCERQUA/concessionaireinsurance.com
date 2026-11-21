"use client";

import { useState } from "react";
import { Phone, Check } from "lucide-react";
import AcordFields from "@/components/AcordFields";

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

const entityTypes = [
  "Individual / Sole proprietorship",
  "Partnership",
  "Corporation",
  "LLC",
  "Joint venture",
  "S Corporation",
  "Trust",
  "Not for profit",
  "Other",
];

const coverageTypeOptions = [
  "General Liability",
  "Product Liability (Food / Completed Operations)",
  "Commercial Auto",
  "Inland Marine (Equipment & Generators)",
  "Liquor Liability",
  "Workers' Compensation",
  "Umbrella / Excess",
  "Other",
];

const STATE_CODES: Record<string, string> = {
  Alabama: "AL", Alaska: "AK", Arizona: "AZ", Arkansas: "AR", California: "CA", Colorado: "CO", Connecticut: "CT",
  Delaware: "DE", Florida: "FL", Georgia: "GA", Hawaii: "HI", Idaho: "ID", Illinois: "IL", Indiana: "IN", Iowa: "IA",
  Kansas: "KS", Kentucky: "KY", Louisiana: "LA", Maine: "ME", Maryland: "MD", Massachusetts: "MA", Michigan: "MI",
  Minnesota: "MN", Mississippi: "MS", Missouri: "MO", Montana: "MT", Nebraska: "NE", Nevada: "NV", "New Hampshire": "NH",
  "New Jersey": "NJ", "New Mexico": "NM", "New York": "NY", "North Carolina": "NC", "North Dakota": "ND", Ohio: "OH",
  Oklahoma: "OK", Oregon: "OR", Pennsylvania: "PA", "Rhode Island": "RI", "South Carolina": "SC", "South Dakota": "SD",
  Tennessee: "TN", Texas: "TX", Utah: "UT", Vermont: "VT", Virginia: "VA", Washington: "WA", "West Virginia": "WV",
  Wisconsin: "WI", Wyoming: "WY",
};

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=concessionaireinsurance.com`;

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [coverageError, setCoverageError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // coverageTypes is a checkbox group (ACORD "Coverage requested", required) — HTML5
    // `required` on checkboxes would force ALL of them checked, which is not the intent.
    // At least one must be checked; block submit with a visible message until it is.
    const selectedCoverage = data.getAll("coverageTypes").map(String);
    if (selectedCoverage.length === 0) {
      setCoverageError(true);
      return;
    }
    setCoverageError(false);

    const fields = Object.fromEntries(data.entries()) as Record<string, string>;
    // Object.fromEntries only keeps the LAST value for a repeated key, so coverageTypes
    // (multiple checkboxes sharing one name) has to be folded back in explicitly.
    fields.coverageTypes = selectedCoverage.join(", ");
    // The leads DB promotes `name`/`full_name` only; this form collects the name in two
    // halves, so send a joined `name` in the payload as well. The UI is unchanged.
    const fullName = `${fields.firstName ?? ""} ${fields.lastName ?? ""}`.trim();
    // ADD-ONLY canonical mirrors for the ACORD mapper, derived from what the visitor already typed (nobody is asked twice).
    // Blank stays blank: a mirror is only added when its source is present and a faithful value.
    const t = (k: string) => (fields[k] ?? "").trim();
    const mirrors: Record<string, string> = {};
    if (t("streetAddress")) {
      mirrors.physicalAddress = t("streetAddress");
      // `address` is the mailing street: only mirror it when the visitor did not say the mailing address differs
      if (t("mailingSameAsPhysical") !== "No") mirrors.address = t("streetAddress");
    }
    if (t("city")) mirrors.physicalCity = t("city");
    // USPS two-letter code (the ACORD box is ~2 chars). Already-2-letter kept; unmappable stays blank.
    const stCode = STATE_CODES[t("state")] ?? (/^[A-Za-z]{2}$/.test(t("state")) ? t("state").toUpperCase() : "");
    if (stCode) mirrors.physicalState = stCode;
    if (t("zip")) mirrors.physicalZip = t("zip");
    if (t("businessDescription")) mirrors.locationDescription = t("businessDescription");
    const exact = t("annualRevenueExact").replace(/[$,\s]/g, "");
    if (exact !== "" && Number.isFinite(Number(exact)) && Number(exact) > 0) mirrors.lastGrossSales = exact;
    if (t("percentSubcontracted") !== "") mirrors.workSubcontractedPercent = t("percentSubcontracted");
    const base = { ...mirrors, ...fields };
    const payload = fullName ? { ...base, name: fullName } : base;

    // The leads webhook can answer 200 with {"stored": false} (lead NOT saved). Only a 2xx whose body
    // does not say stored:false counts as captured; anything else falls back to Netlify Forms, so a
    // lead is never reported as sent on a webhook that dropped it. Only when both fail is the visitor
    // told it did not send.
    let captured = false;
    try {
      const res = await fetch(WEBHOOK_URL, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ form_name: "quote", source: "concessionaireinsurance.com", ...payload }) });
      if (res.ok) {
        const body = await res.json().catch(() => null);
        captured = !(body && body.stored === false);
      }
    } catch {}
    if (!captured) {
      try {
        const res = await fetch('/__forms.html', {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(payload).toString(),
        });
        if (res.ok) captured = true;
      } catch {}
    }
    setFailed(!captured);
    setSubmitted(captured);
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
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="entityType">
                        Business Entity Type *
                      </label>
                      <select
                        id="entityType"
                        name="entityType"
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select entity type...</option>
                        {entityTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="yearBusinessStarted">
                        Year Business Started *
                      </label>
                      <input
                        id="yearBusinessStarted"
                        name="yearBusinessStarted"
                        type="number"
                        required
                        min={1900}
                        max={2100}
                        placeholder="e.g. 2023"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
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
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="tradeType">
                        Vendor Type *
                      </label>
                      <select
                        id="tradeType"
                        name="tradeType"
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
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="annualRevenue">
                        Estimated Annual Revenue *
                      </label>
                      <select
                        id="annualRevenue"
                        name="annualRevenue"
                        required
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
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="statesOfOperation">
                        States Where You Operate *
                      </label>
                      <input
                        id="statesOfOperation"
                        name="statesOfOperation"
                        type="text"
                        required
                        placeholder="e.g. Arizona, Nevada, California"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        List every state you travel to for fairs, festivals, or events — not just your home state.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="fullTimeEmployees">
                        Full-Time Employees *
                      </label>
                      <input
                        id="fullTimeEmployees"
                        name="fullTimeEmployees"
                        type="number"
                        min={0}
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="usesSubcontractors">
                        Do you use subcontractors, sub-vendors, or staffing agencies? *
                      </label>
                      <select
                        id="usesSubcontractors"
                        name="usesSubcontractors"
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="operationType">
                        How do you operate?
                      </label>
                      <select
                        id="operationType"
                        name="operationType"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="Fixed location">Fixed location only</option>
                        <option value="Event-based / mobile">Event-based / mobile only</option>
                        <option value="Both fixed location and events">Both fixed location and events</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="usesPropaneOrOpenFlame">
                      Do you use propane, open flame cooking, deep fryers, or similar heat-producing equipment?
                    </label>
                    <select
                      id="usesPropaneOrOpenFlame"
                      name="usesPropaneOrOpenFlame"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Business address + description */}
              <div>
                <h3 className="font-heading font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                  Business Address &amp; Operations
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="streetAddress">
                      Street Address *
                    </label>
                    <input
                      id="streetAddress"
                      name="streetAddress"
                      type="text"
                      required
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="city">
                        City *
                      </label>
                      <input
                        id="city"
                        name="city"
                        type="text"
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="zip">
                        ZIP Code *
                      </label>
                      <input
                        id="zip"
                        name="zip"
                        type="text"
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="fein">
                        Federal Employer ID (FEIN)
                      </label>
                      <input
                        id="fein"
                        name="fein"
                        type="text"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="businessDescription">
                      Describe Your Operations *
                    </label>
                    <textarea
                      id="businessDescription"
                      name="businessDescription"
                      rows={3}
                      required
                      placeholder="What do you sell or serve, how, and where?"
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Prior insurance */}
              <div>
                <h3 className="font-heading font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                  Prior Insurance
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="currentlyInsured">
                      Are you currently insured? *
                    </label>
                    <select
                      id="currentlyInsured"
                      name="currentlyInsured"
                      required
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="currentCarrier">
                        Current / Prior Insurance Carrier
                      </label>
                      <input
                        id="currentCarrier"
                        name="currentCarrier"
                        type="text"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="currentPolicyExpiration">
                        Current Policy Expiration Date
                      </label>
                      <input
                        id="currentPolicyExpiration"
                        name="currentPolicyExpiration"
                        type="date"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Loss history */}
              <div>
                <h3 className="font-heading font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                  Loss History
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="lossesLast3Years">
                      Any claims or losses in the last 3 years? *
                    </label>
                    <select
                      id="lossesLast3Years"
                      name="lossesLast3Years"
                      required
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                    >
                      <option value="">Select...</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="lossCount">
                      How many claims?
                    </label>
                    <input
                      id="lossCount"
                      name="lossCount"
                      type="number"
                      min={0}
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="lossDescription">
                      Claim Details: Dates, What Happened, Amounts
                    </label>
                    <textarea
                      id="lossDescription"
                      name="lossDescription"
                      rows={3}
                      className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Coverage requested */}
              <div>
                <h3 className="font-heading font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider border-b border-slate-100 pb-2">
                  Coverage Requested
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="block text-sm font-medium text-slate-700 mb-2">
                      Coverage needed *
                    </span>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {coverageTypeOptions.map((c) => (
                        <label key={c} className="flex items-center gap-2 text-sm text-slate-700">
                          <input
                            type="checkbox"
                            name="coverageTypes"
                            value={c}
                            onChange={() => setCoverageError(false)}
                            className="rounded border-slate-300 text-teal-500 focus:ring-teal-500"
                          />
                          {c}
                        </label>
                      ))}
                    </div>
                    {coverageError && (
                      <p role="alert" className="text-sm text-red-700 mt-2">
                        Please select at least one coverage type before submitting.
                      </p>
                    )}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="requestedLimits">
                        Liability Limits Wanted
                      </label>
                      <select
                        id="requestedLimits"
                        name="requestedLimits"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="1M/2M">1M/2M</option>
                        <option value="1M/3M">1M/3M</option>
                        <option value="2M/4M">2M/4M</option>
                        <option value="Not sure">Not sure</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="desiredEffectiveDate">
                        Requested Coverage Start Date *
                      </label>
                      <input
                        id="desiredEffectiveDate"
                        name="desiredEffectiveDate"
                        type="date"
                        required
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="event_coverage_date">
                        Date of Coverage for Events
                      </label>
                      <input
                        id="event_coverage_date"
                        name="event_coverage_date"
                        type="date"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
                      />
                      <p className="text-xs text-slate-500 mt-1">
                        The date (or first day) you need coverage for an event — leave blank if not event-specific.
                      </p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="additionalInsuredNeeded">
                        Need Additional Insured certificates for event organizers/venues?
                      </label>
                      <select
                        id="additionalInsuredNeeded"
                        name="additionalInsuredNeeded"
                        className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
                      >
                        <option value="">Select...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <AcordFields />

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
                  placeholder="Number of events per year, specific coverage needs, current insurance issues, etc."
                />
              </div>

              {failed && (
                <div role="alert" className="rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-800">
                  That did not send — your details are still here, nothing was lost. Please try
                  again, or call us at{" "}
                  <a href="tel:8449675247" className="font-semibold underline">844-967-5247</a>{" "}
                  and we will take them over the phone.
                </div>
              )}

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
