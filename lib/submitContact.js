/**
 * Shared client-side contact form POST to the Next.js API route.
 */
export async function submitContactForm(payload) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })
  const body = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(body?.error || "Failed to send message")
  }
  return body
}
