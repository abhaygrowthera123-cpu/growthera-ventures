// // "use client"

// // import { useState } from "react"
// // import { Send } from "lucide-react"

// // export default function ContactModal({ open, onClose }) {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     service: "",
// //     message: "",
// //   })
// //   const [loading, setLoading] = useState(false)
// //   const [submitted, setSubmitted] = useState(false)
// //   const [errorMsg, setErrorMsg] = useState("")

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData((p) => ({ ...p, [name]: value }))
// //   }

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()
// //     setLoading(true)
// //     setErrorMsg("")

// //     try {
// //       const res = await fetch("/api/contact", {
// //         method: "POST",
// //         headers: { "Content-Type": "application/json" },
// //         body: JSON.stringify(formData),
// //       })

// //       if (!res.ok) {
// //         const body = await res.json().catch(() => ({}))
// //         throw new Error(body?.error || "Failed to send form")
// //       }

// //       setSubmitted(true)
// //       setFormData({ name: "", email: "", phone: "", service: "", message: "" })

// //       // auto-close after a short delay
// //       setTimeout(() => {
// //         setSubmitted(false)
// //         onClose()
// //       }, 1800)
// //     } catch (err) {
// //       console.error(err)
// //       setErrorMsg(err.message || "Error sending message")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   if (!open) return null

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center">
// //       {/* overlay */}
// //       <div
// //         className="absolute inset-0 bg-black/50 backdrop-blur-sm"
// //         onClick={onClose}
// //       />
// //       {/* modal */}
// //       <div className="relative w-[90%] max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-8">
// //         <button
// //           onClick={onClose}
// //           className="absolute right-4 top-4 text-gray-600 hover:text-gray-900 text-2xl"
// //           aria-label="Close"
// //         >
// //           ×
// //         </button>

// //         <h3 className="text-sm font-semibold text-orange-600 flex items-center gap-2 mb-2">
// //           GROW WITH US
// //         </h3>
// //         <h2 className="text-3xl font-bold text-gray-900 mb-6">
// //           Connect with an <span className="text-orange-500">expert</span>
// //         </h2>

// //         <form className="space-y-4" onSubmit={handleSubmit}>
// //           <input
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter Your Full Name"
// //             className="w-full px-4 py-3 rounded-lg border border-gray-200"
// //           />
// //           <input
// //             name="phone"
// //             value={formData.phone}
// //             onChange={handleChange}
// //             required
// //             placeholder="Enter Your Mobile Number"
// //             className="w-full px-4 py-3 rounded-lg border border-gray-200"
// //           />
// //           <input
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //             type="email"
// //             placeholder="Enter Your Email"
// //             className="w-full px-4 py-3 rounded-lg border border-gray-200"
// //           />

// //           <select
// //             name="service"
// //             value={formData.service}
// //             onChange={handleChange}
// //             className="w-full px-4 py-3 rounded-lg border border-gray-200"
// //           >
// //             <option value="">Select Service</option>
// //             <option value="New Company Registration">New Company Registration</option>
// //             <option value="Certification">Certification</option>
// //             <option value="CGTMSE Loan">CGTMSE Loan</option>
// //             <option value="Seed Support Scheme">Seed Support Scheme</option>
// //             <option value="PMEGP">PMEGP</option>
// //             <option value="MSME">MSME</option>
// //             <option value="PMFME">PMFME</option>
// //             <option value="Other">Other</option>
// //           </select>

// //           <textarea
// //             name="message"
// //             value={formData.message}
// //             onChange={handleChange}
// //             rows={4}
// //             required
// //             placeholder="Tell us about your business..."
// //             className="w-full px-4 py-3 rounded-lg border border-gray-200"
// //           />

// //           {errorMsg && <div className="text-red-600 font-medium">{errorMsg}</div>}
// //           {submitted && (
// //             <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700">
// //               Thank you! We'll be in touch soon.
// //             </div>
// //           )}

// //           <div className="pt-2">
// //             <button
// //               type="submit"
// //               disabled={loading}
// //               className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-orange-600 text-white font-semibold hover:scale-[1.02] transition-transform"
// //             >
// //               <Send size={16} />
// //               {loading ? "Sending..." : "Consult Now"}
// //             </button>
// //           </div>
// //         </form>
// //       </div>
// //     </div>
// //   )
// // }
// "use client"

// import { useEffect, useState } from "react"
// import { Send } from "lucide-react"

// export default function ContactModal({ open, onClose, openOnMount = false }) {
//   const isControlled = typeof open === "boolean"
//   const [internalOpen, setInternalOpen] = useState(false)
//   const isOpen = isControlled ? open : internalOpen

//   useEffect(() => {
//     console.log("ContactModal mounted — isControlled:", isControlled, "openOnMount:", openOnMount)
//     if (!isControlled && openOnMount) setInternalOpen(true)
//   }, [isControlled, openOnMount])

//   // ... rest of your form state and functions (same as before)
//   const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" })
//   const [loading, setLoading] = useState(false)
//   const [submitted, setSubmitted] = useState(false)
//   const [errorMsg, setErrorMsg] = useState("")

//   const close = () => {
//     if (isControlled) {
//       if (onClose) onClose()
//     } else {
//       setInternalOpen(false)
//       if (onClose) onClose()
//     }
//   }

//   // handleChange and handleSubmit same as previously provided
//   // ...

//   if (!isOpen) return null

//   return (
//     <div className="fixed inset-0 z-[99999] flex items-center justify-center">
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
//       <div className="relative w-[92%] max-w-2xl bg-white rounded-2xl shadow-2xl p-6 md:p-8">
//         {/* modal content */}
//       </div>
//     </div>
//   )
// }


// components/ContactModal.jsx
"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";

export default function ContactModal({ open, onClose, openOnMount = false }) {
  const isControlled = typeof open === "boolean";
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isControlled ? open : internalOpen;

  useEffect(() => {
    console.log("ContactModal mounted — isControlled:", isControlled, "openOnMount:", openOnMount);
    if (!isControlled && openOnMount) setInternalOpen(true);
  }, [isControlled, openOnMount]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const close = () => {
    if (isControlled) {
      if (onClose) onClose();
    } else {
      setInternalOpen(false);
      if (onClose) onClose();
    }
  };

  useEffect(() => {
    console.log("ContactModal isOpen:", isOpen);
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error || "Failed to send form");
      }

      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
        close();
      }, 1400);
    } catch (err) {
      console.error("ContactModal submit error:", err);
      setErrorMsg(err.message || "Error sending message");
    } finally {
      setLoading(false);
    }
  };

  // nothing to render when closed
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center">
      {/* overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
        data-debug="contact-overlay"
      />

      {/* modal card */}
      <div
        className="relative w-[92%] h-[80%] max-w-md bg-white rounded-xl shadow-2xl p-6"
        data-debug="contact-card"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={close}
          className="absolute right-4 top-4 text-gray-700 hover:text-[#191b47] text-2xl"
          aria-label="Close"
        >
          ×
        </button>

        <div className="mb-4">
          <h3 className="text-sm font-semibold text-[#8e1822]">GROW WITH US</h3>
          <h2 className="text-3xl font-bold text-[#191b47]">
            Connect with an <span className="text-[#8e1822]">expert</span>
          </h2>
          {/* <p className="text-sm text-gray-600 mt-2">(onnect with us)</p> */}
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* NOTE: these inputs use explicit utility classes to avoid being hidden by global CSS */}
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full block px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#191b47] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-200"
            data-debug="input-name"
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full block px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#191b47] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-200"
            data-debug="input-phone"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full block px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#191b47] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-200"
            data-debug="input-email"
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full block px-4 py-3 rounded-lg border border-gray-300 bg-white text-[@191b47] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-200"
            data-debug="select-service"
          >
            <option value="">Select service</option>
            <option>New Company Registration</option>
            <option>Certification</option>
            <option>MSME</option>
            <option>Other</option>
          </select>

          {/* <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about your business..."
            className="w-full block px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-200"
            data-debug="textarea-message"
            required
          /> */}

          {errorMsg && <div className="text-[#8e1822] font-medium">{errorMsg}</div>}
          {submitted && (
            <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700">Thank you! We'll be in touch soon.</div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8e1822] text-white font-semibold hover:scale-[1.02] transition-transform"
              data-debug="submit-button"
            >
              <Send size={16} />
              {loading ? "Sending..." : "Consult Now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
