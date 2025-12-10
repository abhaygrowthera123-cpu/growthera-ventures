"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ServicesOverview() {
  const services = [
    { category: "Funding & Finance", items: ["Startup Certification", "Pitch Deck Creation", "Funding Strategy"] },
    { category: "Compliance", items: ["IP & Registration", "Business Setup", "Tax Filing"] },
    { category: "Digital Growth", items: ["Website & App", "Digital Marketing", "Branding"] },
  ]

  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Services Overview</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-lg bg-white border border-primary/10">
              <h3 className="text-2xl font-bold mb-4">{service.category}</h3>
              <ul className="space-y-2 mb-6">
                {service.items.map((item, i) => (
                  <li key={i} className="text-foreground/70">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
