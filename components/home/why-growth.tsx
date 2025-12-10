"use client"

import { CheckCircle } from "lucide-react"

export function WhyGrowth() {
  const reasons = [
    "Structured Funding Access: 50+ Schemes Worth ₹1000+ Cr",
    "Expert Guidance & Compliance",
    "Growth Acceleration Programs",
    "Market Expansion Support",
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Companies Experience 80x Growth</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg">{reason}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
