"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   // Here you would typically send the form data to a backend
  //   console.log("Form submitted:", formData)
  //   setSubmitted(true)
  //   setTimeout(() => {
  //     setFormData({ name: "", email: "", phone: "", service: "", message: "" })
  //     setSubmitted(false)
  //   }, 3000)
  // }

    const handleSubmit = async (e) => {
  e.preventDefault()

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    if (!res.ok) {
      throw new Error("Failed to submit form")
    }

    // Optional: you can read the response JSON
    // const data = await res.json()

    setSubmitted(true)
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })

    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  } catch (error) {
    console.error("Error submitting form:", error)
    alert("There was an error sending your message. Please try again.")
  }
}


  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      {/* <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 to-orange-700 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl text-orange-50">Have questions? Our experts are ready to help</p>
        </div>
      </section> */}

      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-950 via-sky-900 to-orange-600 text-white">

  {/* Background Effects */}
  <div className="absolute inset-0 -z-10">

    {/* Radial highlight blend */}
    <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(248,250,252,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.5),_transparent_60%)]"></div>

    {/* Glow blobs */}
    <div className="absolute -top-20 left-10 w-64 h-64 bg-orange-400/60 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/45 rounded-full blur-3xl"></div>

    {/* Pattern overlay */}
    <div className="absolute inset-0 opacity-15 bg-[linear-gradient(135deg,_rgba(148,163,184,0.5)_1px,_transparent_1px)] bg-[length:26px_26px]"></div>
  </div>

  {/* Text Content */}
  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
      Get In Touch
    </h1>
    <p className="text-xl text-orange-50">
      Have questions? Our experts are ready to help
    </p>
  </div>
</section>


      {/* Contact Info */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a
              href="tel:+919810924009"
              className="p-8 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 border-l-4 border-orange-600 hover:shadow-lg transition-all"
            >
              <Phone className="w-8 h-8 text-orange-600 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">Phone</h3>
              <p className="text-slate-700">+91 9810924009</p>
              <p className="text-sm text-slate-600 mt-2">Mon–Sat • 10 AM – 6 PM IST</p>
            </a>

            <a
              href="mailto:support@growtheraventures.in"
              className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-600 hover:shadow-lg transition-all"
            >
              <Mail className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">Email</h3>
              <p className="text-slate-700">support@growtheraventures.com</p>
              <p className="text-sm text-slate-600 mt-2">We'll respond within 24 hours</p>
            </a>

            <div className="p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-600">
              <MapPin className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="font-bold text-lg text-slate-900 mb-2">Office</h3>
              <p className="text-slate-700 text-sm">H-28 ARV Park G-03, Sector 63, Noida 201301</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  placeholder="+91 9810924009"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Service Interested In</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                >
                  <option value="">Select a service</option>
                  <option value="startup">Startup Certification</option>
                  <option value="funding">Funding & Finance</option>
                  <option value="compliance">Compliance</option>
                  <option value="digital">Digital Growth</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
                  placeholder="Tell us about your business..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 transform hover:scale-105"
              >
                <Send size={20} />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-100 border border-green-500 text-green-700 rounded-lg text-center font-semibold animate-pulse">
                  Thank you! We'll be in touch soon.
                </div>
              )}
            </form>

            {/* Image */}
            <div className="hidden md:block">
              <img src="send_us.jpg" alt="Contact" className="rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
