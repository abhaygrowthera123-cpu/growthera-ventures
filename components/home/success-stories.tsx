"use client"

import { TrendingUp } from "lucide-react"
import { AnimatedSlider } from "@/components/ui/animated-slider"

export function SuccessStories() {
  const stories = [
    {
      type: "SaaS Startup",
      achievement: "Secured $2M seed funding",
      desc: "Helped structure pitch deck and navigate investor relations",
      color: "from-blue-500 to-cyan-500",
    },
    {
      type: "E-Commerce MSME",
      achievement: "Achieved 300% growth in 12 months",
      desc: "Digital marketing and market expansion strategy",
      color: "from-orange-500 to-red-500",
    },
    {
      type: "Tech Company",
      achievement: "Expanded into 3 global markets",
      desc: "Compliance and international business setup",
      color: "from-teal-500 to-green-500",
    },
  ]

  const sliderItems = stories.map((story, idx) => (
    <div
      key={idx}
      className={`w-full h-96 rounded-lg bg-gradient-to-br ${story.color} p-8 flex flex-col justify-between text-white shadow-lg`}
    >
      <div>
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-6 h-6 animate-bounce" />
          <p className="text-sm font-semibold uppercase tracking-wider">{story.type}</p>
        </div>
        <h3 className="text-3xl font-bold mb-4">{story.achievement}</h3>
      </div>
      <p className="text-white/90 text-lg">{story.desc}</p>
    </div>
  ))

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-3 text-center animate-fade-in">Success Stories</h2>
          <p className="text-center text-foreground/60 text-lg">See how we've transformed businesses across sectors</p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-2xl">
          <AnimatedSlider items={sliderItems} autoPlay={true} autoPlayInterval={6000} />
        </div>

        {/* Static grid fallback for mobile */}
        <div className="grid md:grid-cols-3 gap-8 mt-8 md:hidden">
          {stories.map((story, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 hover:border-primary/40 transition-all animate-bounce-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-5 h-5 text-primary" />
                <p className="text-sm font-semibold text-primary">{story.type}</p>
              </div>
              <h3 className="text-xl font-bold mb-3">{story.achievement}</h3>
              <p className="text-foreground/70">{story.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
