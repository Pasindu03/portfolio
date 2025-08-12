import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "900"], // You can adjust as needed
})

export const metadata: Metadata = {
  title: "Pasindu Yapa - Software Engineer",
  description:
      "Full-stack software engineer specializing in scalable web applications and modern development practices.",
  generator: "v0.app",
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" className={`${poppins.variable} antialiased`}>
      <body>{children}</body>
      </html>
  )
}
