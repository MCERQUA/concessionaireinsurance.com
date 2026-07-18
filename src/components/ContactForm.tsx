"use client";

import React from "react";

const WEBHOOK_URL = `https://josh.jam-bot.com/social-api/api/leads/webhook/netlify?tenant=josh&site=concessionaireinsurance.com`;

export default function ContactForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const formData = Object.fromEntries(data.entries()) as Record<string, string>;
    // Honeypot: if the bot-field is filled, silently follow the original redirect.
    if (formData["bot-field"]) {
      window.location.href = "/contact?success=true";
      return;
    }
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ form_name: "contact", source: "concessionaireinsurance.com", ...formData }),
      });
    } catch {
      // Never block the existing success UX if the post fails.
    }
    window.location.href = "/contact?success=true";
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      className="space-y-5"
      action="/contact?success=true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden">
        <label>Do not fill this out: <input name="bot-field" /></label>
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
            placeholder="Your name"
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
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500"
          placeholder="(555) 000-0000"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="subject">
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white"
        >
          <option value="">Select a subject...</option>
          <option value="quote">Request a Quote</option>
          <option value="certificate">Certificate of Insurance Request</option>
          <option value="existing-policy">Question About Existing Policy</option>
          <option value="claims">Claims Assistance</option>
          <option value="general">General Question</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 resize-none"
          placeholder="Tell us about your operation and how we can help..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-teal-500 hover:bg-teal-600 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
      >
        Send Message
      </button>

      <p className="text-xs text-slate-500 text-center">
        We typically respond within a few hours during business hours. For immediate assistance, call 844-967-5247.
      </p>
    </form>
  );
}
