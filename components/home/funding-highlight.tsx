import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function FundingHighlight() {
  const schemes = [
    { title: "Business Expansion", limit: "Up to ₹3 Cr" },
    { title: "Women Entrepreneur Fund", limit: "Up to ₹40L" },
    { title: "Tech Acceleration", limit: "Up to ₹60L" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Available Funding Schemes</h2>
        <p className="text-center text-foreground/70 mb-12">Explore 50+ government-backed schemes</p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {schemes.map((scheme, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-white border border-primary/20 hover:border-primary/40 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{scheme.title}</h3>
              <p className="text-2xl font-bold text-primary">{scheme.limit}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/funding-schemes"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore All 50+ Schemes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
