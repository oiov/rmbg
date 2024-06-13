import "@/styles/globals.css"
import { Metadata, type Viewport } from "next"
import { GoogleAnalytics } from "@next/third-parties/google"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/site-header"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

export const runtime = "edge"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,

  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: siteConfig.name,
    // startUpImage: [],
  },
  manifest: "/manifest.json",
  openGraph: {
    images: [
      {
        url: "https://removerized.pages.dev/og.png",
      },
    ],
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <main className="relative flex h-screen min-h-screen flex-col">
              <SiteHeader />

              <div className="flex-1">{children}</div>
              <Toaster></Toaster>
              <Footer></Footer>
            </main>
            <TailwindIndicator />
          </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-20G8R0K6W9" />
      </html>
    </>
  )
}
