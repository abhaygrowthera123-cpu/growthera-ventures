import nodemailer from "nodemailer"
import { NextResponse } from "next/server"
import { appendLeadToGoogleSheet } from "@/lib/appendLeadToGoogleSheet"

function smtpConfigured() {
  return (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  )
}

function sheetConfigured() {
  return (
    process.env.GOOGLE_SHEET_WEBHOOK_URL &&
    process.env.GOOGLE_SHEET_WEBHOOK_SECRET
  )
}

export async function POST(request) {
  const hasSmtp = smtpConfigured()
  const hasSheet = sheetConfigured()

  if (!hasSmtp && !hasSheet) {
    console.error(
      "Contact API: configure SMTP and/or GOOGLE_SHEET_WEBHOOK_URL + GOOGLE_SHEET_WEBHOOK_SECRET"
    )
    return NextResponse.json(
      {
        success: false,
        error:
          "Contact form is not configured on the server. Please try again later.",
      },
      { status: 503 }
    )
  }

  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Name, email, and phone are required." },
        { status: 400 }
      )
    }

    if (hasSheet) {
      await appendLeadToGoogleSheet({
        name,
        email,
        phone,
        service,
        message,
      })
    }

    if (hasSmtp) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 587,
        secure: false,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: `"Website Contact" <${process.env.SMTP_USER}>`,
        to: "support@growtheraventures.com",
        subject: `New contact form submission from ${name}`,
        text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service || "Not specified"}

Message:
${message || "(none)"}
      `,
        html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(String(name))}</p>
        <p><strong>Email:</strong> ${escapeHtml(String(email))}</p>
        <p><strong>Phone:</strong> ${escapeHtml(String(phone))}</p>
        <p><strong>Service:</strong> ${escapeHtml(String(service || "Not specified"))}</p>
        <p><strong>Message:</strong><br/>${escapeHtml(String(message || "")).replace(/\n/g, "<br/>")}</p>
      `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Contact form error:", err)
    return NextResponse.json(
      {
        success: false,
        error:
          err?.message?.includes("Sheet") || err?.message?.includes("webhook")
            ? "Failed to save your submission. Please try again."
            : "Failed to send your message. Please try again.",
      },
      { status: 500 }
    )
  }
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}
