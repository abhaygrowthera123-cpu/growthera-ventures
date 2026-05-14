"use client";

import { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { submitContactForm } from "@/lib/submitContact";

const CONTACT_MODAL_SESSION_KEY = "growthera_contact_modal_shown";

export default function ContactModal({ open, onClose, openOnMount = false }) {
  const isControlled = typeof open === "boolean";
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = isControlled ? open : internalOpen;

  useEffect(() => {
    if (isControlled || !openOnMount) return;
    try {
      if (sessionStorage.getItem(CONTACT_MODAL_SESSION_KEY) === "1") return;
      setInternalOpen(true);
      sessionStorage.setItem(CONTACT_MODAL_SESSION_KEY, "1");
    } catch {
      setInternalOpen(true);
    }
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      await submitContactForm(formData);

      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      setTimeout(() => {
        setSubmitted(false);
        close();
      }, 1400);
    } catch (err) {
      setErrorMsg(err.message || "Error sending message");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={close}
      />

      <div
        className="relative w-[92%] h-[80%] max-w-md bg-white rounded-xl shadow-2xl p-6"
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
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className="w-full block px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#191b47] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-200"
            required
          />

          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className="w-full block px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#191b47] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-200"
            required
          />

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            type="email"
            className="w-full block px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#191b47] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-200"
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full block px-4 py-3 rounded-lg border border-gray-300 bg-white text-[#191b47] placeholder-gray-400 shadow-sm focus:ring-2 focus:ring-orange-200"
          >
            <option value="">Select service</option>
            <option>New Company Registration</option>
            <option>Certification</option>
            <option>MSME</option>
            <option>Other</option>
          </select>

          {errorMsg && <div className="text-[#8e1822] font-medium">{errorMsg}</div>}
          {submitted && (
            <div className="p-3 bg-green-50 border border-green-200 rounded text-green-700 font-semibold text-center animate-pulse">Thank you! We'll be in touch soon.</div>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8e1822] text-white font-semibold hover:scale-[1.02] transition-transform"
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
