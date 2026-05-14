import { CheckCircle, Users, TrendingUp, Award } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: CheckCircle,
      title: "Transparency",
      desc: "Open communication and honest guidance",
    },
    {
      icon: Users,
      title: "Customer Success",
      desc: "Your growth is our priority",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      desc: "Cutting-edge strategies and solutions",
    },
    {
      icon: Award,
      title: "Compliance",
      desc: "100% regulatory compliance guaranteed",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#191b47] via-[#2d2f5a] to-[#8e1822] text-white">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.5),_transparent_60%)]"></div>

          <div className="absolute -top-16 left-0 w-64 h-64 bg-[#963339] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/45 rounded-full blur-3xl"></div>

          <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,_rgba(148,163,184,0.5)_1px,_transparent_1px)] bg-[length:26px_26px]"></div>
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            About Growthera Ventures
          </h1>
          <p className="text-xl text-orange-50">
            Enabling entrepreneurs. Empowering growth.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#191b47] mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-[#2d2f5a] mb-4">
                Growthera Ventures is a next-generation business consulting
                company offering end-to-end support across funding, compliance,
                certifications, IP, and digital growth.
              </p>
              <p className="text-lg text-[#191b47]">
                With 5+ years of experience and 500+ successful clients, we've
                facilitated over ₹50 Crores in funding and delivered 1000+
                projects across multiple sectors.
              </p>
            </div>
            <img
              src="/who_we_are.jpg"
              alt="Our Team"
              className="rounded-xl shadow-lg transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-600">
              <h3 className="text-2xl font-bold text-[#191b47] mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-[#2d2f5a]">
                To create India's most trusted ecosystem for small businesses
                and startups, enabling them to scale globally.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600">
              <h3 className="text-2xl font-bold text-[#191b47] mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-[#191b47]">
                To accelerate business growth through reliable consulting, fast
                execution, and expert-led guidance.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#191b47] mb-8 text-center">
              Our Values
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon;
                return (
                  <div
                    key={i}
                    className="p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#8e1922] hover:shadow-lg transition-all transform hover:scale-105 text-center"
                  >
                    <Icon className="w-12 h-12 text-[#8e1822] mx-auto mb-4" />
                    <h3 className="font-bold text-lg text-[#191b47] mb-2">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 text-sm">{value.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#191b47] mb-12 text-center">
            Our Achievements
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Clients Served", value: "500+" },
              { label: "Success Rate", value: "99%" },
              { label: "Funding Facilitated", value: "₹50+ Cr" },
              { label: "Expert Team", value: "50+" },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-[#8e1822] text-center"
              >
                <p className="text-3xl sm:text-4xl font-bold text-[#8e1822] mb-2">
                  {stat.value}
                </p>
                <p className="text-slate-600 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
