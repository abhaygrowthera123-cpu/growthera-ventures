"use client"

import { Shield, Zap, Users, Award } from "lucide-react"

export function WhyChoose() {
  const reasons = [
    { icon: Shield, title: "100% Compliance Guaranteed", desc: "Complete regulatory peace of mind" },
    { icon: Zap, title: "Fast Turnaround (7–15 Days)", desc: "Quick and efficient service delivery" },
    { icon: Users, title: "Dedicated Expert Team", desc: "50+ industry specialists" },
    { icon: Award, title: "500+ Satisfied Clients", desc: "Proven track record" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Why Choose Growthera Ventures</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={index}
                className="p-6 rounded-lg bg-white border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg"
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
