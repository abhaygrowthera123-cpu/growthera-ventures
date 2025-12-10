import { CheckCircle, Calendar, DollarSign, Zap } from "lucide-react"
import Link from "next/link"

export default function ProcessPage() {
  const steps = [
    {
      num: 1,
      title: "Pick a Service",
      desc: "Browse our comprehensive suite of business solutions and select what fits your needs",
      icon: CheckCircle,
    },
    {
      num: 2,
      title: "Book an Appointment",
      desc: "Schedule a free consultation with our experts online or visit our office",
      icon: Calendar,
    },
    {
      num: 3,
      title: "Make Payment",
      desc: "Choose flexible payment options - we offer quick & secure transaction methods",
      icon: DollarSign,
    },
    {
      num: 4,
      title: "Enjoy the Service",
      desc: "Receive our premium service delivered with speed, accuracy, and transparency",
      icon: Zap,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-orange-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Simple, Fast & Transparent Process
          </h1>
          <p className="text-xl text-orange-50">Get expert help in just 4 easy steps</p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <div
                  key={i}
                  className="flex gap-6 sm:gap-8 animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 text-white text-2xl font-bold shadow-lg">
                      {step.num}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-start gap-3 mb-3">
                      <Icon className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                      <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-lg text-slate-600">{step.desc}</p>
                  </div>

                  {/* Connector */}
                  {i < steps.length - 1 && (
                    <div className="hidden sm:block absolute left-1/2 h-16 w-1 bg-gradient-to-b from-orange-300 to-transparent transform -translate-x-1/2" />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">Typical Timeline</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { phase: "Consultation", time: "1-2 Days" },
              { phase: "Documentation", time: "3-5 Days" },
              { phase: "Processing", time: "7-10 Days" },
              { phase: "Delivery", time: "15-20 Days" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl border-l-4 border-orange-500 hover:shadow-lg transition-all transform hover:scale-105"
              >
                <p className="text-slate-600 font-semibold mb-2">{item.phase}</p>
                <p className="text-3xl font-bold text-orange-600">{item.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Do I need to visit your office?",
                a: "No, you can complete everything online. We also offer in-office consultations if you prefer.",
              },
              {
                q: "What documents do I need?",
                a: "Our experts will guide you through the exact documentation needed for your service.",
              },
              {
                q: "Is there a hidden charges?",
                a: "100% transparent pricing. All costs are communicated upfront with no surprise charges.",
              },
              {
                q: "Can I get a refund?",
                a: "We offer refunds based on our refund policy. Check our refund policy page for details.",
              },
            ].map((item, i) => (
              <details
                key={i}
                className="p-6 rounded-lg border border-slate-200 hover:border-orange-500 transition-all cursor-pointer group"
              >
                <summary className="font-bold text-lg text-slate-900 flex items-center justify-between">
                  {item.q}
                  <span className="group-open:rotate-180 transition-transform">+</span>
                </summary>
                <p className="mt-4 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all transform hover:scale-105"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
