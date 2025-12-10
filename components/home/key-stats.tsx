import { TrendingUp, Users, CheckCircle, Zap } from "lucide-react"

export function KeyStats() {
  const stats = [
    { label: "5 Years of Excellence", icon: TrendingUp },
    { label: "500+ Happy Clients", icon: Users },
    { label: "99% Success Rate", icon: CheckCircle },
    { label: "1000+ Projects Delivered", icon: Zap },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors"
              >
                <Icon className="w-8 h-8 text-primary mb-3" />
                <p className="font-semibold text-foreground">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
