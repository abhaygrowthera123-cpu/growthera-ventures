import Link from "next/link";
import { ArrowRight, TrendingUp, Users, CheckCircle, Zap } from "lucide-react";
import Carousel from "@/components/Carousel";
import Counter from "@/components/Counter";
import { HeroSection } from "@/components/home/hero-section";
import TrustedPartners from "../components/TrustedPartners";
import Testimonials from "@/components/Testimonials";

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

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

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


 <TrustedPartners/>


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
              },
              {
                title: "Expert Guidance & Compliance",
                desc: "100% Compliance Guaranteed",
              },
              {
                title: "Growth Acceleration Programs",
                desc: "7-15 Days Turnaround Time",
              },
              {
                title: "Market Expansion Support",
                desc: "500+ Satisfied Clients",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 sm:p-8 rounded-xl border border-slate-200 hover:border-[#8e1822] bg-white hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-slide-in-from-left-lg"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <Testimonials />

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
