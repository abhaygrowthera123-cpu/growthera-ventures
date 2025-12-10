import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, message } = body

    // 1️⃣ Create transporter (SMTP details from .env.local)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // e.g. smtp.gmail.com
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // 2️⃣ Email content
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_USER}>`,
      to: "support@growtheraventures.com", // where YOU receive the mail
      subject: `New contact form submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service || "Not specified"}

Message:
${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    })

    console.log("✅ Email sent successfully")

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("❌ Contact form error:", err)
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    )
  }
}
