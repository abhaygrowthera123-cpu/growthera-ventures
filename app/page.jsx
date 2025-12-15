import Link from "next/link";
import { ArrowRight, TrendingUp, Users, CheckCircle, Zap } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import Carousel from "@/components/Carousel";
import Counter from "@/components/Counter";

import { HeroSection } from "@/components/home/hero-section";

import AnnouncementBanner from "@/components/AnnouncementBanner";

const services = [
  {
    id: 1,
    title: "Startup India Certificate",
    description: "Government recognition, tax benefits, and funding access",
    image: "/startup-certification.jpg",
    story: "SaaS StartUp secured $2M seed funding after certification",
    slug: "startup-certification",
  },
  {
    id: 2,
    title: "Pitch Deck Creation",
    description: "Investor-ready pitch materials and presentation",
    image: "/pitch-deck-presentation.jpg",
    story: "Tech company impressed 50+ investors with our deck design",
    slug: "pitch-deck",
  },
  {
    id: 3,
    title: "MSME Registration",
    description: "Unlock subsidies and government schemes",
    image: "/business-registration.png",
    story: "E-Commerce MSME achieved 300% growth post-registration",
    slug: "msme-registration",
  },
  {
    id: 4,
    title: "ISO Certification",
    description: "Boost global credibility and market reach",
    image: "/iso-certification.jpg",
    story: "Manufacturing company expanded to 15 countries",
    slug: "iso-certification",
  },
];

const fundingSchemes = [
  { name: "Startup India", amount: "₹10 Cr", color: "bg-[#2F5755]" },
  { name: "MUDRA Loan", amount: "₹10 Lakh", color: "bg-[#A18D6D]" },
  { name: "PMEGP", amount: "₹25 Lakh", color: "bg-[#234C6A]" },
  { name: "Stand-up India", amount: "₹1 Cr", color: "bg-[#5F0F40]" },
  { name: "Digital MSME", amount: "₹15 Lakh", color: "bg-[#002B5B]" },
  { name: "National SC-ST Hub", amount: "₹1 Cr", color: "bg-[#0F828C]" },
  {
    name: "Innovation Grant",
    amount: "₹5 Cr",
    color: "bg-[#2F5755]",
  },
  { name: "Manufacturing", amount: "₹1 Cr", color: "bg-[#53629E]" },
  { name: "Rural Development", amount: "₹25 Lakh", color: "bg-[#1581BF]" },
  { name: "Business Expansion", amount: "₹3 Cr", color: "bg-[#5A9CB5]" },
];

const stats = [
  { label: "Years of Excellence", value: "5+", icon: TrendingUp },
  { label: "Happy Clients", value: "500+", icon: Users },
  { label: "Success Rate", value: "95%", icon: CheckCircle },
  { label: "Projects Delivered", value: "1000+", icon: Zap },
];

const successStories = [
  {
    title: "SaaS Startup",
    achievement: "Secured $2M seed funding",
    image: "/saas-startup-office.jpg",
  },
  {
    title: "E-Commerce MSME",
    achievement: "Achieved 300% growth in 12 months",
    image: "/ecommerce-business-growth.jpg",
  },
  {
    title: "Tech Company",
    achievement: "Expanded into 3 global markets",
    image: "/tech-company-global-expansion.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <AnnouncementBanner /> */}

      {/* Hero Section */}
      {/* <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-orange-600 to-orange-700 text-white py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 animate-rotate-continuous" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 animate-rotate-left" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 animate-slide-in-from-left-lg">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Fueling Ambitions That Drive the Future
              </h1>
              <p className="text-lg sm:text-xl text-orange-50">
                Transform complex data into actionable insights. Stop guessing and start growing faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-bounce hover:animate-none"
                  title="Start your business growth journey with a free consultation"
                >
                  Get Started Free
                  <ArrowRight size={20} className="ml-2" />
                </Link>
                <a
                  href="tel:+919810924009"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
                  title="Call our expert team to discuss your business needs"
                >
                  Call Now: +91 9810924009
                </a>
              </div>
              <p className="text-sm text-orange-100">Mon–Sat • 10:00 AM – 6:00 PM IST</p>
            </div>

            <div className="hidden md:block animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
              <img
                src="/business-growth-consulting.jpg"
                alt="Business Growth"
                className="rounded-2xl shadow-2xl animate-float"
              />
            </div>
          </div>
        </div>
      </section> */}
      <HeroSection />

      {/* Key Stats */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  className="p-6 bg-white rounded-xl border border-slate-200 text-center hover:border-[#8e1822] transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <Icon
                    className="w-8 h-8 text-[#8e1822] mx-auto mb-3 animate-rotate-slow"
                    style={{ animationDuration: "6s" }}
                  />
                  <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}


      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className="p-6 bg-white rounded-xl border border-slate-200 text-center hover:border-[#8e1822] transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <Icon
              className="w-8 h-8 text-[#8e1822] mx-auto mb-3 animate-rotate-slow"
              style={{ animationDuration: "6s" }}
            />

            {/* Elementor-style animated counter */}
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">
              <Counter end={stat.value} duration={2000} />
            </p>

            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* Growth Metrics */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-12 text-balance">
            Why Companies Experience 80x Growth
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                title: "Structured Funding Access",
                desc: "50+ Schemes Worth ₹1000+ Cr",
                // icon: "💰",
              },
              {
                title: "Expert Guidance & Compliance",
                desc: "100% Compliance Guaranteed",
                // icon: "✅",
              },
              {
                title: "Growth Acceleration Programs",
                desc: "7-15 Days Turnaround Time",
                // icon: "🚀",
              },
              {
                title: "Market Expansion Support",
                desc: "500+ Satisfied Clients",
                // icon: "🌍",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-xl border border-slate-200 hover:border-[#8e1822] bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-from-left-lg"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="text-4xl mb-3 animate-tilt-rotate">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 text-balance">
              Featured Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              End-to-end business solutions tailored for your growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            
            {services.map((service, i) => (
              <div
                key={service.id}
                className="animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-[#8e1822] text-white font-bold rounded-lg hover:bg-orange-700 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-bounce"
              title="Explore all 20+ services we offer"
            >
              View All Services
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Funding Schemes Carousel */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-4 text-balance">
            50+ Government-Backed Funding Schemes
          </h2>
          <p className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            Worth ₹1000+ Crores collectively. Find the perfect funding solution
            for your business growth.
          </p>

          <div className="hidden sm:block mb-8">
            <Carousel items={fundingSchemes} />
          </div>

          <div className="sm:hidden grid grid-cols-2 gap-4 mb-8">
            {fundingSchemes.slice(0, 4).map((scheme, i) => (
              <Link
                key={i}
                href="/services"
                className={`p-4 rounded-lg bg-gradient-to-br ${scheme.color} text-white text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 animate-in fade-in slide-in-from-bottom-4`}
                style={{ animationDelay: `${i * 100}ms` }}
                title={`View details about ${scheme.name} funding scheme`}
              >
                <p className="font-bold text-sm">{scheme.name}</p>
                <p className="text-lg font-bold mt-2">{scheme.amount}</p>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-[#8e1822] text-white font-bold rounded-lg hover:bg-[#963339] transition-all transform hover:scale-105 active:scale-95 animate-bounce"
              title="Explore all 50+ government-backed funding schemes"
            >
              Explore All 50+ Schemes
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Success Stories Carousel */}
      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-slate-900 mb-12 text-balance">
            Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {successStories.map((story, i) => (
              <div
                key={i}
                className="group rounded-xl overflow-hidden border border-slate-200 hover:border-[#B52A34] hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-in fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative h-48 overflow-hidden bg-slate-300">
                  <img
                    src={story.image || "/placeholder.svg"}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {story.title}
                  </h3>
                  <p className="text-slate-600">{story.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 text-orange-50">
            Join 500+ businesses that are already experiencing exponential growth
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all duration-300 transform hover:scale-105 active:scale-95 animate-bounce"
            title="Schedule your free consultation with our experts"
          >
            Get Your Free Consultation Today
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section> */}

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#2d2f5a] via-[#191b47] to-[#415A77] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join 500+ businesses already experiencing exponential growth
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-bold rounded-lg hover:scale-105 active:scale-95 shadow-lg transition-all duration-300"
            title="Schedule your free consultation with our experts"
          >
            Get Your Free Consultation Today
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
