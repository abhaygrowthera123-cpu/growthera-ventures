export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Information We Collect</h2>
            <p className="text-slate-700">
              We collect information you provide directly to us, such as when you fill out our contact form, book a
              consultation, or request our services. This includes your name, email address, phone number, company
              information, and any other details you choose to provide.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-slate-700">We use the information we collect to:</p>
            <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2">
              <li>Provide and improve our services</li>
              <li>Communicate with you about your inquiry</li>
              <li>Send you updates and promotional materials</li>
              <li>Process your payments</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Data Protection</h2>
            <p className="text-slate-700">
              We implement appropriate technical and organizational measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely on
              encrypted servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies & Tracking</h2>
            <p className="text-slate-700">
              Our website uses cookies and similar tracking technologies to enhance your experience. You can control
              cookie settings through your browser preferences. Essential cookies are required for site functionality.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Third-Party Sharing</h2>
            <p className="text-slate-700">
              We do not sell your personal information to third parties. We may share information with trusted service
              providers who assist us in operating our website and conducting our business, subject to confidentiality
              agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Your Rights</h2>
            <p className="text-slate-700">
              You have the right to access, correct, or delete your personal information. To exercise these rights,
              please contact us at support@growtheraventures.in.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Contact Us</h2>
            <p className="text-slate-700">
              If you have questions about our Privacy Policy, please contact us at support@growtheraventures.in or call
              +91 9810924009.
            </p>
          </section>

          <p className="text-sm text-slate-500 pt-8 border-t border-slate-200">Last updated: November 2025</p>
        </div>
      </section>
    </div>
  )
}
