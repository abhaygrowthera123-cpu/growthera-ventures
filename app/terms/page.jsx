export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">Terms of Service</h1>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-slate-700">
              By accessing and using this website, you accept and agree to be bound by the terms and provision of this
              agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Use License</h2>
            <p className="text-slate-700">
              Permission is granted to temporarily download one copy of the materials (information or software) on
              Growthera Ventures' website for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Disclaimer</h2>
            <p className="text-slate-700">
              The materials on Growthera Ventures' website are provided on an 'as is' basis. Growthera Ventures makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Limitations</h2>
            <p className="text-slate-700">
              In no event shall Growthera Ventures or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Growthera Ventures' website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Accuracy of Materials</h2>
            <p className="text-slate-700">
              The materials appearing on Growthera Ventures' website could include technical, typographical, or
              photographic errors. Growthera Ventures does not warrant that any of the materials on its website are
              accurate, complete, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Service Modifications</h2>
            <p className="text-slate-700">
              Growthera Ventures may revise these terms of service for its website at any time without notice. By using
              this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <p className="text-sm text-slate-500 pt-8 border-t border-slate-200">Last updated: November 2025</p>
        </div>
      </section>
    </div>
  )
}
