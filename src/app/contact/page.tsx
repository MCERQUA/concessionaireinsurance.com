import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Concessionaire Insurance | Contractors Choice Agency",
  description:
    "Contact Contractors Choice Agency for concessionaire and event vendor insurance. Call 844-967-5247 or send us a message. Same-day certificate processing available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 pb-16 bg-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-teal-100 text-xl max-w-2xl mx-auto">
            Ready to get covered? Have questions about your coverage? Our specialists are here to help.
            Call us or send a message and we&apos;ll respond the same day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <a href="tel:844-967-5247" className="text-teal-500 hover:text-teal-600 font-medium block text-lg">
                      844-967-5247
                    </a>
                    <a href="tel:855-336-7189" className="text-teal-500 hover:text-teal-600 font-medium block">
                      855-336-7189
                    </a>
                    <p className="text-slate-500 text-sm mt-1">24/7 claims reporting available</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:josh@contractorschoiceagency.com"
                      className="text-teal-500 hover:text-teal-600 font-medium"
                    >
                      josh@contractorschoiceagency.com
                    </a>
                    <p className="text-slate-500 text-sm mt-1">We respond same business day</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Headquarters</h3>
                    <p className="text-slate-600">12220 E Riggs Rd</p>
                    <p className="text-slate-600">Chandler, AZ 85249</p>
                    <p className="text-slate-500 text-sm mt-1">Additional: Phoenix, AZ | Miami, FL</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-teal-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">Monday – Friday: 8:00 AM – 6:00 PM MST</p>
                    <p className="text-slate-600">Saturday: 9:00 AM – 2:00 PM MST</p>
                    <p className="text-slate-500 text-sm mt-1">Claims: 24/7 | Quotes: 15 minutes</p>
                  </div>
                </div>
              </div>
              <div className="bg-teal-50 rounded-xl p-5 text-sm text-slate-700">
                <strong className="font-semibold">Need a certificate quickly?</strong> We process certificate of insurance requests same-day — often within the hour. Call 844-967-5247 or include your certificate details in the contact form.
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-heading text-2xl font-bold text-slate-900 mb-8">
                Send a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
