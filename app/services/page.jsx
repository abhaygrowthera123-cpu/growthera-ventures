"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import ServiceCard from "@/components/ServiceCard"

const serviceCategories = [
  {
    id: "funding",
    name: "Funding & Finance",
    // icon: "💰",
    description: "Access structured funding and financial solutions",
    services: [
      {
        id: 1,
        title: "Startup Funding",
        description: "Investor-ready pitch materials and funding facilitation",
        image: "startup_funding.png",
        story: "SaaS StartUp secured $2M seed funding",
        slug: "startup-funding",
      },
      {
        id: 2,
        title: "Government Loans",
        description: "Access collateral-free loans under MUDRA, PMEGP schemes",
        image: "Government_Loans.png",
        story: "MSME secured ₹1 Cr loan under government scheme",
        slug: "government-loans",
      },
      {
        id: 3,
        title: "Pitch Deck Creation",
        description: "Professional investor-ready presentations",
        image: "pitch_deck_creation.png",
        story: "Tech company impressed 50+ investors",
        slug: "pitch-deck",
      },
      {
        id: 4,
        title: "DPR Creation",
        description: "Detailed project reports for government schemes",
        image: "dpr_creation.png",
        story: "Manufacturing unit secured ₹5 Cr subsidy",
        slug: "dpr-creation",
      },
    ],
  },
  {
    id: "registration",
    name: "Business Registration",
    // icon: "📋",
    description: "Complete registration and compliance solutions",
    services: [
      {
        id: 5,
        title: "Pvt Ltd Company",
        description: "Complete company registration process",
        image: "pvtltd.png",
        story: "E-Commerce MSME achieved 300% growth post-registration",
        slug: "pvt-ltd-registration",
      },
      {
        id: 6,
        title: "MSME Registration",
        description: "Unlock subsidies and government schemes",
        image: "MSME_registration.png",
        story: "Business accessed ₹50 Lakh subsidy",
        slug: "msme-registration",
      },
      {
        id: 7,
        title: "Partnership Firm",
        description: "Register partnership business easily",
        image: "partnership_firm.png",
        story: "Startup scaled from ₹10L to ₹1Cr",
        slug: "partnership-firm",
      },
      {
        id: 8,
        title: "OPC Registration",
        description: "One Person Company registration",
        image: "OPC_registration.png",
        story: "Solo entrepreneur protected personal assets",
        slug: "opc-registration",
      },
    ],
  },
  {
    id: "certifications",
    name: "Certifications & IP",
    // icon: "✅",
    description: "Build credibility and protect intellectual property",
    services: [
      {
        id: 9,
        title: "Startup India Certificate",
        description: "Government recognition with tax benefits",
        image: "startup-certification-document.jpg",
        story: "Certificate unlock ₹10 Cr funding access",
        slug: "startup-certification",
      },
      {
        id: 10,
        title: "ISO Certification",
        description: "Boost global credibility",
        image: "/iso-certification.jpg",
        story: "Manufacturing expanded to 15 countries",
        slug: "iso-certification",
      },
      {
        id: 11,
        title: "Trademark Registration",
        description: "Protect your brand identity",
        image: "trademark_creation.png",
        story: "E-commerce brand protected assets worth ₹5 Cr",
        slug: "trademark-registration",
      },
      {
        id: 12,
        title: "Patent Filing",
        description: "Safeguard your innovation",
        image: "patent-filing-innovation.jpg",
        story: "Tech startup filed 3 patents and secured investments",
        slug: "patent-filing",
      },
    ],
  },
  {
    id: "compliance",
    name: "Tax & Compliance",
    // icon: "📊",
    description: "Simplify tax filing and regulatory compliance",
    services: [
      {
        id: 13,
        title: "GST Registration",
        description: "Simplify tax compliance and billing",
        image: "gst-tax-compliance.jpg",
        story: "Business scaled from ₹50L to ₹5Cr post-GST",
        slug: "gst-registration",
      },
      {
        id: 14,
        title: "ITR Filing",
        description: "Complete income tax return filing",
        image: "ITR_filling.png",
        story: "Business maintained 100% compliance record",
        slug: "itr-filing",
      },
      {
        id: 15,
        title: "TDS Compliance",
        description: "Tax deducted at source management",
        image: "TDS_compliance.png",
        story: "Company avoided penalties with proper TDS filing",
        slug: "tds-compliance",
      },
      {
        id: 16,
        title: "Accounting Services",
        description: "Professional bookkeeping and accounting",
        image: "accounting.png",
        story: "Automated accounting reduced errors by 95%",
        slug: "accounting-services",
      },
    ],
  },
  {
    id: "digital",
    name: "Digital Growth",
    // icon: "🚀",
    description: "Digital marketing and online presence solutions",
    services: [
      {
        id: 17,
        title: "Website Development",
        description: "Professional website creation",
        image: "web_development.jpg",
        story: "Website increased leads by 250%",
        slug: "website-development",
      },
      {
        id: 18,
        title: "Digital Marketing",
        description: "SEO, SEM, social media marketing",
        image: "Digital_Marketing.jpg",
        story: "Campaign reached 100K+ customers",
        slug: "digital-marketing",
      },
      {
        id: 19,
        title: "Branding",
        description: "Complete brand identity creation",
        image: "branding.jpg",
        story: "Brand recognition increased by 300%",
        slug: "branding-services",
      },
      {
        id: 20,
        title: "SEO Optimization",
        description: "Search engine optimization services",
        image: "SEO.jpg",
        story: "Website ranked #1 for target keywords",
        slug: "seo-services",
      },
    ],
  },
  {
    id: "funding-schemes",
    name: "Government Funding Schemes",
    // icon: "💵",
    description: "50+ government-backed schemes worth ₹1000+ Crores",
    services: [
      {
        id: 101,
        title: "Startup India",
        description: "₹10 Cr early stage funding with mentor support",
        image: "startup_india.png",
        story: "SaaS startup secured $2M seed using this scheme",
        slug: "startup-india",
      },
      {
        id: 102,
        title: "MUDRA Loan",
        description: "₹10 Lakh micro enterprise loans with low interest",
        image: "mudra_loan.png",
        story: "MSME scaled from ₹5L to ₹2Cr using MUDRA",
        slug: "mudra-loan",
      },
      {
        id: 103,
        title: "PMEGP",
        description: "₹25 Lakh with 35% subsidy for unemployed youth",
        image: "PMEGP.png",
        story: "Manufacturing unit got ₹5Cr subsidy support",
        slug: "pmegp",
      },
      {
        id: 104,
        title: "Stand-up India",
        description: "₹1 Cr for SC/ST & women entrepreneurs",
        image: "Standup_india.png",
        story: "Women-led startup raised ₹50L in 30 days",
        slug: "standup-india",
      },
      {
        id: 105,
        title: "Digital MSME",
        description: "₹15 Lakh for digital transformation",
        image: "MSME.png",
        story: "E-commerce business expanded to 5 countries",
        slug: "digital-msme",
      },
      {
        id: 106,
        title: "National SC-ST Hub",
        description: "₹1 Cr with mentorship for SC/ST businesses",
        image: "National_SC_ST_Hub.png",
        story: "Startup received ₹75L with expert guidance",
        slug: "national-sc-st",
      },
      {
        id: 107,
        title: "Innovation Grant",
        description: "₹5 Cr for tech startups & innovators",
        image: "Innovation_Grant.png",
        story: "Tech firm funded R&D for 3 patents",
        slug: "innovation-grant",
      },
      {
        id: 108,
        title: "Women Entrepreneur Fund",
        description: "₹40 Lakh with priority approval",
        image: "Women_Entrepreur.png",
        story: "Female founder scaled business to ₹3Cr revenue",
        slug: "women-entrepreneur",
      },
    ],
  },
]

const ServicesPage = () => {
  const [active, setActive] = useState("funding")
  const [searchScheme, setSearchScheme] = useState("")
  const [filteredSchemes, setFilteredSchemes] = useState([])

  const handleSchemeSearch = (e) => {
    const query = e.target.value.toLowerCase()
    setSearchScheme(query)
    const fundingCat = serviceCategories.find((cat) => cat.id === "funding-schemes")
    if (fundingCat) {
      setFilteredSchemes(
        fundingCat.services.filter(
          (scheme) => scheme.title.toLowerCase().includes(query) || scheme.description.toLowerCase().includes(query),
        ),
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-top-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Comprehensive Business Solutions
          </h1>
          <p className="text-xl text-orange-50 max-w-2xl mx-auto">
            6 Categories. 50+ Schemes. 20+ Services. Tailored for every growth stage.
          </p>
        </div>
      </section> */}

      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2d2f5a] via-[#191b47] to-[#8e1822] text-white">
  <div className="absolute inset-0 -z-10">

    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.5),_transparent_60%)]"></div>

    <div className="absolute -top-24 left-4 w-72 h-72 bg-orange-400/60 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/45 rounded-full blur-3xl"></div>

    <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,_rgba(148,163,184,0.5)_1px,_transparent_1px)] bg-[length:26px_26px]"></div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in fade-in slide-in-from-top-4">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
      Comprehensive Business Solutions
    </h1>
    <p className="text-xl text-[#ffff] max-w-2xl mx-auto">
      6 Categories. 50+ Schemes. 20+ Services. Tailored for every growth stage.
    </p>
  </div>
</section>


      {/* Category Tabs */}
      <section className="py-8 sm:py-12 bg-slate-50 sticky top-20 z-40">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActive(category.id)
                  if (category.id === "funding-schemes") {
                    setFilteredSchemes(category.services)
                  }
                }}
                className={`px-2 sm:px-2 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-80 ${
                  active === category.id
                    ? "bg-[#8e1822] text-white shadow-lg animate-bounce"
                    : "bg-white text-slate-900 border border-slate-200 hover:border-[#8e1822] hover:shadow-md"
                }`}
                title={`View ${category.name}`}
              >
                <span
                  className={`mr-2 inline-block ${active === category.id ? "animate-single-rotate" : "animate-tilt-rotate"}`}
                >
                  {category.icon}
                </span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Search for Funding Schemes */}
      {active === "funding-schemes" && (
        <section className="py-6 sm:py-8 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative animate-slide-in-from-left-lg">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 animate-rotate-slow text-lg">
                🔍
              </span>
              <input
                type="text"
                value={searchScheme}
                onChange={handleSchemeSearch}
                placeholder="Search schemes by name or features..."
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:border-[#8e1822] focus:ring-2 focus:ring-[#B36267] transition-all"
              />
            </div>
          </div>
        </section>
      )}

      {/* Services Grid by Category */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className={active === category.id ? "block animate-in fade-in slide-in-from-bottom-4" : "hidden"}
            >
              <div className="mb-8 animate-slide-in-from-left-lg">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                  <span className="inline-block animate-single-rotate text-4xl">{category.icon}</span>
                  {category.name}
                </h2>
                <p className="text-slate-600 max-w-2xl">{category.description}</p>
              </div>

              {active === "funding-schemes" ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4">
                  {(searchScheme ? filteredSchemes : category.services).map((service, i) => (
                    <div
                      key={service.id}
                      className="animate-in fade-in slide-in-from-bottom-4"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <ServiceCard {...service} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4">
                  {category.services.map((service, i) => (
                    <div
                      key={service.id}
                      className="animate-in fade-in slide-in-from-bottom-4"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <ServiceCard {...service} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-slide-in-from-left-lg">Need Multiple Services?</h2>
          <p className="text-lg mb-8 text-orange-50 animate-in fade-in slide-in-from-right-4">
            Get a customized package tailored to your business needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-orange-600 font-bold rounded-lg hover:bg-orange-50 transition-all transform hover:scale-105 active:scale-95 animate-bounce"
            title="Get a free consultation for a custom service package"
          >
            Get Free Consultation
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section> */}

        {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#0D1B2A] via-[#1B263B] to-[#415A77] text-white">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-slide-in-from-left-lg text-balance">
      Need Multiple Services?
    </h2>
    
    <p className="text-lg mb-8 opacity-90 animate-in fade-in slide-in-from-right-4">
      Get a customized package tailored to your business needs
    </p>

    <Link
      href="/contact"
      className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-400 
                 text-white font-bold rounded-lg hover:scale-105 active:scale-95 
                 shadow-lg transition-all duration-300"
      title="Get a free consultation for a custom service package"
    >
      Get Free Consultation
      <ArrowRight size={20} className="ml-2" />
    </Link>

  </div>
</section> */}

 <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-[#191b47] via-[#2d2f5a] to-[#276F85] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-slide-in-from-left-lg">
            Need Multiple Services?
          </h2>
          <p className="text-lg mb-8 opacity-90 animate-in fade-in slide-in-from-right-4">
            Get a customized package tailored to your business needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-[#8e1822] text-white font-bold rounded-lg hover:bg-[#8e1800] transition-all transform hover:scale-105 active:scale-95 shadow-lg"
            title="Get a free consultation for a custom service package"
          >
            Get Free Consultation
            <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>

    </div>
  )
}

export default ServicesPage
