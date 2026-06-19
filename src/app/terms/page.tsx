import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Concessionaire Insurance | Contractors Choice Agency",
  description: "Terms of Service for ConcessionaireInsurance.com and Contractors Choice Agency.",
};

export default function TermsPage() {
  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-slate-500 mb-10">Last updated: January 1, 2025</p>

        <div className="space-y-8">
          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing and using ConcessionaireInsurance.com (the &quot;Site&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this Site. These terms apply to all visitors, users, and others who access or use the Site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">2. Insurance Disclaimer</h2>
            <p className="text-slate-600 leading-relaxed">
              The information provided on this Site is for general informational purposes only and does not constitute insurance advice. Coverage availability, terms, conditions, and rates vary by state and individual circumstances. Information on this Site does not guarantee coverage or establish an insurance policy. To obtain insurance coverage, you must contact Contractors Choice Agency directly and complete the appropriate application process. All coverage is subject to underwriting approval.
            </p>
            <p className="text-slate-600 leading-relaxed mt-3">
              Contractors Choice Agency (NPN: 8608479) is licensed as an insurance producer in all 50 states. Licensing information is available upon request.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">3. No Warranty</h2>
            <p className="text-slate-600 leading-relaxed">
              This Site is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. Contractors Choice Agency does not warrant that the Site will be uninterrupted, error-free, or free of viruses or other harmful components.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">4. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by applicable law, Contractors Choice Agency and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your access to or use of (or inability to access or use) the Site.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">5. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed">
              The content on this Site, including text, graphics, logos, images, and software, is the property of Contractors Choice Agency and is protected by applicable intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any content without our express written permission.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">6. User Conduct</h2>
            <p className="text-slate-600 leading-relaxed mb-3">You agree not to:</p>
            <ul className="list-disc list-inside text-slate-600 space-y-1 ml-4">
              <li>Use the Site for any unlawful purpose or in violation of these terms</li>
              <li>Transmit any harmful, offensive, or disruptive content</li>
              <li>Attempt to gain unauthorized access to any part of the Site</li>
              <li>Use the Site to collect information about other users</li>
              <li>Impersonate any person or entity</li>
              <li>Engage in any conduct that restricts or inhibits anyone&apos;s use of the Site</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">7. Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Your use of the Site is also governed by our Privacy Policy, which is incorporated into these Terms of Service by reference. Please review our Privacy Policy to understand our practices regarding your personal information.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">8. Third-Party Links</h2>
            <p className="text-slate-600 leading-relaxed">
              The Site may contain links to third-party websites. These links are provided for your convenience only. Contractors Choice Agency has no control over the content of those sites and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">9. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law provisions. You agree to submit to the personal jurisdiction of the state and federal courts located in Maricopa County, Arizona for the resolution of any disputes.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">10. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by posting the new terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the Site after any changes constitutes your acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-3">11. Contact Information</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="mt-3 text-slate-600">
              <p>Contractors Choice Agency</p>
              <p>12220 E Riggs Rd, Chandler, AZ 85249</p>
              <p>Phone: 844-967-5247</p>
              <p>Email: josh@contractorschoiceagency.com</p>
              <p className="mt-2 text-slate-500">NPN: 8608479 | Licensed in all 50 states</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
