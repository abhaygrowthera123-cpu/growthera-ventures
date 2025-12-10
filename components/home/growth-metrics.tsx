"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const revenueData = [
  { month: "Jan", revenue: 10, customers: 5 },
  { month: "Jun", revenue: 25, customers: 50 },
  { month: "Dec", revenue: 80, customers: 450 },
]

export function GrowthMetrics() {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Why Companies Experience 80x Growth</h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          Our structured approach combines expert guidance with proven growth strategies
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Revenue & Customer Growth</h3>
            <p className="text-foreground/70">From ₹10L to ₹80L in 24 months | Customer Base: 5 to 450+</p>
            <div className="bg-white rounded-lg p-4 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="revenue" stroke="#ea580c" name="Revenue (₹L)" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Key Growth Drivers</h3>
            <div className="space-y-3">
              <div className="p-4 bg-white rounded-lg border-l-4 border-primary">
                <p className="font-semibold mb-1">Structured Funding Access</p>
                <p className="text-sm text-foreground/70">50+ Schemes Worth ₹1000+ Cr</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-l-4 border-accent">
                <p className="font-semibold mb-1">Expert Guidance & Compliance</p>
                <p className="text-sm text-foreground/70">Complete regulatory support</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-l-4 border-primary">
                <p className="font-semibold mb-1">Growth Acceleration Programs</p>
                <p className="text-sm text-foreground/70">Proven strategies for scale</p>
              </div>
              <div className="p-4 bg-white rounded-lg border-l-4 border-accent">
                <p className="font-semibold mb-1">Market Expansion Support</p>
                <p className="text-sm text-foreground/70">Global reach strategies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
