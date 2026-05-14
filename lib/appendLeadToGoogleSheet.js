/**
 * Appends a lead row via Google Apps Script Web App (see scripts/google-sheet-contact-webhook.gs).
 * Returns { ok: true } if skipped (env not set), or { ok: true } after successful append.
 * Throws on misconfiguration or failed append.
 */
export async function appendLeadToGoogleSheet({ name, email, phone, service, message }) {
  const url = process.env.GOOGLE_SHEET_WEBHOOK_URL
  const secret = process.env.GOOGLE_SHEET_WEBHOOK_SECRET

  if (!url && !secret) {
    return { skipped: true }
  }
  if (!url || !secret) {
    throw new Error(
      "Google Sheet webhook is partially configured: set both GOOGLE_SHEET_WEBHOOK_URL and GOOGLE_SHEET_WEBHOOK_SECRET."
    )
  }

  const res = await fetch(url, {
    method: "POST",
    redirect: "follow",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret,
      name: String(name || ""),
      email: String(email || ""),
      phone: String(phone || ""),
      service: String(service || ""),
      message: String(message || ""),
    }),
  })

  const text = await res.text()
  let data = {}
  try {
    data = JSON.parse(text)
  } catch {
    /* Apps Script may return non-JSON on rare errors */
  }

  if (!res.ok || data.ok === false) {
    throw new Error(data.error || `Sheet webhook failed (${res.status})`)
  }

  return { skipped: false }
}
