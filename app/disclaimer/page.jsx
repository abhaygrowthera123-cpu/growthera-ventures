import { AlertCircle } from "lucide-react"

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-12 sm:py-16 lg:py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start gap-4 mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
          <AlertCircle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h1 className="text-3xl font-bold text-yellow-900 mb-2">Important Disclaimer</h1>
            <p className="text-yellow-800">Please read this disclaimer carefully before using our services</p>
          </div>
        </div>

        <div className="prose prose-slate max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Non-Government Entity</h2>
            <p className="text-slate-700 font-semibold text-lg text-red-600">
              Growthera Ventures is a PRIVATE CONSULTANCY FIRM and is NOT a government agency, department, or official
              body.
            </p>
            <p className="text-slate-700 mt-4">
              We do not have any official affiliation with the Government of India or any of its departments including
              but not limited to:
            </p>
            <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2 mt-2">
              <li>Ministry of Corporate Affairs</li>
              <li>Ministry of Micro, Small & Medium Enterprises (MSME)</li>
              <li>Startup India Initiative</li>
              <li>Udyam Registration Portal</li>
              <li>Any banking or financial institution</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Role</h2>
            <p className="text-slate-700">
              Growthera Ventures provides consultancy, guidance, and documentation assistance services only. We help
              businesses:
            </p>
            <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2 mt-2">
              <li>Understand government schemes and requirements</li>
              <li>Prepare and organize necessary documentation</li>
              <li>Navigate application processes</li>
              <li>Facilitate connections with relevant authorities</li>
            </ul>
            <p className="text-slate-700 mt-4">
              All final approvals and decisions rest solely with the respective government agencies and authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">No Guarantee of Approval</h2>
            <p className="text-slate-700">
              While we provide expert guidance and assistance, we CANNOT GUARANTEE the approval of any application,
              certification, or funding scheme. Approval depends on:
            </p>
            <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2 mt-2">
              <li>Your business eligibility criteria</li>
              <li>Quality and completeness of documentation</li>
              <li>Government authority's discretion and policies</li>
              <li>Economic and regulatory conditions</li>
              <li>Compliance with all applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Fee Structure</h2>
            <p className="text-slate-700">
              All fees charged by Growthera Ventures are for consultancy and documentation services only. They are NOT:
            </p>
            <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2 mt-2">
              <li>Government registration or filing fees</li>
              <li>Processing charges that guarantee approval</li>
              <li>Payment to any government authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Liability Limitations</h2>
            <p className="text-slate-700">Growthera Ventures is not liable for:</p>
            <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2 mt-2">
              <li>Rejection or denial of any application by government authorities</li>
              <li>Changes in government policies or schemes</li>
              <li>Delays caused by government processing</li>
              <li>Loss of revenue or business opportunities</li>
              <li>Any indirect, incidental, or consequential damages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Legal Compliance</h2>
            <p className="text-slate-700">By engaging our services, you confirm that:</p>
            <ul className="list-disc list-inside text-slate-700 ml-4 space-y-2 mt-2">
              <li>Your business information is accurate and truthful</li>
              <li>All documents provided are authentic</li>
              <li>You comply with all applicable laws and regulations</li>
              <li>You are responsible for accuracy of submitted information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact & Support</h2>
            <p className="text-slate-700">For questions about this disclaimer or our services:</p>
            <div className="mt-4 p-4 bg-slate-100 rounded-lg">
              <p className="text-slate-900">
                <strong>Email:</strong> support@growtheraventures.com
              </p>
              <p className="text-slate-900">
                <strong>Phone:</strong> +91 9810924009
              </p>
              <p className="text-slate-900">
                <strong>Address:</strong> H-28 ARV Park G-03, Sector 63, Noida 201301
              </p>
            </div>
          </section>

          <p className="text-sm text-slate-500 pt-8 border-t border-slate-200">
            This disclaimer is effective from November 2025. We reserve the right to modify this disclaimer at any time.
          </p>
        </div>
      </section>
    </div>
  )
}
