/**
 * Client-side contact form submission.
 * Sends leads only to the server so CRM routing, email, and Google Sheet secrets
 * stay out of the browser bundle.
 */

export async function submitContactForm(payload) {
  const { name, email, phone } = payload

  if (!name || !email || !phone) {
    throw new Error("Name, email, and phone are required.")
  }

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const data = await response.json().catch(() => ({}))
    throw new Error(data.error || "Failed to submit form. Please try again.")
  }

  return { success: true }
}
