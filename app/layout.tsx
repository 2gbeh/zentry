import "./globals.css"

import type { Metadata } from "next"
import { Geist_Mono, Inter } from "next/font/google"
import { TooltipProvider } from "@/components/shadcn/ui/tooltip"
import { cn } from "@/components/shadcn/utils"
import { META } from "@/constants/META"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = META

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable
      )}
    >
      <body>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  )
}
