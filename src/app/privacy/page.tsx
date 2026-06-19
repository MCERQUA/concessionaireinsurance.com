import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Concessionaire Insurance | Contractors Choice Agency",
  description: "Privacy Policy for ConcessionaireInsurance.com and Contractors Choice Agency.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Last updated: January 1, 2025</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">1. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              Contractors Choice Agency (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates ConcessionaireInsurance.com. We collect information you provide directly to us, such as when you request a quote, contact us, or use our services. This includes your name, email address, phone number, business name, business information, and insurance-related details.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">2. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
              <li>Provide insurance quotes and related services</li>
              <li>Communicate with you about your insurance coverage</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative information, such as policy updates</li>
              <li>Respond to your comments and questions</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">3. Information Sharing</h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as necessary to provide our insurance services (e.g., to insurance carriers and underwriters) or as required by law. We may share information with trusted third parties who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">4. Data Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We implement appropriate technical and organizational measures to maintain the security of your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">5. Cookies and Tracking</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some portions of our website may not function properly without cookies.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">6. Third-Party Links</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website may contain links to third-party websites. We have no control over the content and practices of those sites and cannot accept responsibility for their respective privacy policies. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">7. California Privacy Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              If you are a California resident, you may have certain rights under the California Consumer Privacy Act (CCPA) regarding your personal information. You have the right to request disclosure of the categories and specific pieces of personal information we have collected about you, the right to request deletion of your personal information, and the right to opt out of the sale of your personal information. We do not sell personal information.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">8. Changes to This Policy</h2>
            <p className="text-slate-600 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Your continued use of our website after any changes constitutes your acceptance of the new Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">9. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-3 text-slate-600">
              <p>Contractors Choice Agency</p>
              <p>12220 E Riggs Rd, Chandler, AZ 85249</p>
              <p>Phone: 844-967-5247</p>
              <p>Email: josh@contractorschoiceagency.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
