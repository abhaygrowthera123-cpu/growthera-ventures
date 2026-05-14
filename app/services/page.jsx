"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"
import { serviceCategories } from "@/app/data/serviceData"

export default function ServicesPage() {
  const [active, setActive] = useState(serviceCategories[0].id)

  return (
    <div className="min-h-screen bg-white">

      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2d2f5a] via-[#191b47] to-[#8e1822] text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.5),_transparent_60%)]" />
          <div className="absolute -top-24 left-4 w-72 h-72 bg-orange-400/60 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/45 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Comprehensive Business Solutions
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">
            Expert services across funding, compliance, registrations & digital growth
          </p>
        </div>
      </section>

      <section className="py-8 bg-slate-50 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {serviceCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActive(category.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  active === category.id
                    ? "bg-[#8e1822] text-white shadow-lg"
                    : "bg-white border border-slate-200 hover:border-[#8e1822]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4">
          {serviceCategories.map(category => (
            <div
              key={category.id}
              className={active === category.id ? "block" : "hidden"}
            >
              <div className="mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                  {category.name}
                </h2>
                <p className="text-slate-600 max-w-2xl">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service, i) => (
                  <div
                    key={service.id}
                    style={{ animationDelay: `${i * 100}ms` }}
                    className="animate-in fade-in slide-in-from-bottom-4"
                  >
                    <ServiceCard {...service} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#191b47] via-[#2d2f5a] to-[#276F85] text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Need Multiple Services?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Get a customized package tailored to your business needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#8e1822] rounded-lg font-bold hover:scale-105 transition"
          >
            Get Free Consultation
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

    </div>
  )
}
