import Link from "next/link"
import { ArrowRight, Zap } from "lucide-react"

const sectors = [
  {
    title: "Agriculture & Food Processing",
    opportunities: "Government subsidies, export benefits, organic certification",
    image: "/agriculture_food.jpg",
  },
  {
    title: "Pharma & Medical Devices",
    opportunities: "Drug approvals, regulatory support, global expansion",
    image: "/pharma.jpg",
  },
  {
    title: "Auto Components",
    opportunities: "Supply chain optimization, quality certifications, exports",
    image: "/auto_component.jpg",
  },
  {
    title: "Logistics & Warehousing",
    opportunities: "Infrastructure funding, automation grants, tech integration",
    image: "/warehousing.jpg",
  },
  {
    title: "Renewable Energy",
    opportunities: "Solar subsidies, green financing, carbon credits",
    image: "/renewable_energy.jpg",
  },
  {
    title: "Handloom & Textile",
    opportunities: "Heritage protection, export promotion, skill development",
    image: "/textile.jpg",
  },
  {
    title: "Electronics & Semiconductors",
    opportunities: "Manufacturing incentives, R&D grants, tech partnerships",
    image: "/telecommunication.jpg",
  },
  {
    title: "IT & ITeS",
    opportunities: "Startup benefits, skill development, global market access",
    image: "/IT_sales.jpg",
  },
  {
    title: "EV Manufacturing",
    opportunities: "Government subsidies, tech innovation funds, tax benefits",
    image: "/EV.jpg",
  },
  {
    title: "Defence & Aerospace",
    opportunities: "Government contracts, tech upgrades, security certifications",
    image: "/defence.jpg",
  },
  {
    title: "Tourism & Hospitality",
    opportunities: "Infrastructure grants, skill training, market promotion",
    image: "/tourism.jpg",
  },
  {
    title: "Startups & Tech",
    opportunities: "Funding access, tax exemptions, incubation support",
    image: "/tech.jpg",
  },
]

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#191b47] via-[#2d2f5a] to-[#8e2822] text-white">
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.5),_transparent_60%)]"></div>
    <div className="absolute -top-20 left-6 w-64 h-64 bg-[#b36267] rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/45 rounded-full blur-3xl"></div>
    <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,_rgba(148,163,184,0.5)_1px,_transparent_1px)] bg-[length:26px_26px]"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
      We Support 20+ High-Growth Sectors
    </h1>
    <p className="text-xl text-orange-50">
      Tailored solutions for every industry
    </p>
  </div>
</section>


      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, i) => (
              <Link
                key={i}
                href="/services"
                className="group rounded-xl overflow-hidden border border-slate-200 hover:border-[#8e1822] bg-white hover:shadow-lg transition-all transform hover:scale-105 animate-in fade-in"
                style={{ animationDelay: `${i * 75}ms` }}
              >
                <div className="relative h-40 overflow-hidden bg-slate-100">
                  <img
                    src={sector.image || "/placeholder.svg"}
                    alt={sector.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-[#8e1822] transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-4">{sector.opportunities}</p>
                  <div className="flex items-center gap-2 text-[#8e1822] font-semibold text-sm">
                    <span>Explore</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#963339] to-[#8e1822] text-white font-bold rounded-lg hover:shadow-lg transition-all transform hover:scale-105"
            >
              <Zap size={20} className="mr-2" />
              Apply for Sector-Specific Funding
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
