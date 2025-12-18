import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ChatbotLoader from "@/components/ChatbotLoader"
import AnnouncementBanner from "@/components/AnnouncementBanner"
import ContactModal from "@/components/ContactModal";
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

// export const metadata = {
//   title: "Growthera Ventures - Transform Your Business Today",
//   description: "Expert business consulting for funding, compliance, digital growth, and scaling. 500+ happy clients.",
//   keywords: "business consulting, startup funding, compliance, digital growth",
//     // generator: 'v0.app'
// }
export const metadata = {
  title: "Growthera Ventures - Transform Your Business Today",
  description: "Expert business consulting for funding, compliance, digital growth, and scaling. 500+ happy clients.",
  keywords: "business consulting, startup funding, compliance, digital growth",
  icons: {
    icon: "lg.png",         
    shortcut: "/favicon.ico",
    apple: "lg.png.png",    
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
      <body className={`font-sans antialiased`}>
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
