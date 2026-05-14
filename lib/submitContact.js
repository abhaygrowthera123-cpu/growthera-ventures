/**
 * Client-side contact form submission.
 * Posts directly to the Google Sheets webhook — works on any hosting.
 * Also tries the /api/contact route for email notifications (non-blocking).
 */

const GOOGLE_SHEET_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbwykLGaVs-k__b0q5p6tsfmdpKFR_hc04l-2zf7CkR0O9D6t4Ge6ENq6RA3CyBusvTc/exec"
const GOOGLE_SHEET_WEBHOOK_SECRET = "growthera_2026_webhook_key"

export async function submitContactForm(payload) {
  const { name, email, phone, service, message } = payload

  if (!name || !email || !phone) {
    throw new Error("Name, email, and phone are required.")
  }

  // 1. Send directly to Google Sheets (primary — must succeed)
  const sheetRes = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "text/plain" },
    body: JSON.stringify({
      secret: GOOGLE_SHEET_WEBHOOK_SECRET,
      name: String(name),
      email: String(email),
      phone: String(phone),
      service: String(service || ""),
      message: String(message || ""),
    }),
  })

  if (!sheetRes.ok) {
    const text = await sheetRes.text().catch(() => "")
    throw new Error(text || "Failed to submit form. Please try again.")
  }

  // 2. Try the API route for email notifications (fire-and-forget)
  try {
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {})
  } catch {
    // Silently ignore — email is a bonus, not critical
  }

  return { success: true }
}
