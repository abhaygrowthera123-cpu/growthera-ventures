import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ChatbotLoader from "@/components/ChatbotLoader"
import AnnouncementBanner from "@/components/AnnouncementBanner"
import ContactModal from "@/components/ContactModal"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Growthera Ventures",
    template: "%s | Growthera Ventures",
  },
  description: "Expert business consulting for funding, compliance, digital growth, and scaling. 500+ happy clients.",
  keywords: "business consulting, startup funding, compliance, digital growth",
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
}


export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ea580c",
  userScalable: true,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        <AnnouncementBanner />
        <Navbar />
        <main>{children}</main>
         <ContactModal openOnMount={true} />
        <Footer />
        <ChatbotLoader />
        <Analytics />
      </body>
    </html>
  )
}
