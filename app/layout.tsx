import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google'
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import Providers from "@/components/providers"
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})


export const metadata: Metadata = {
  title: "disruptive",
  description: "a platform for disruptive ideas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body
        className={cn(
          'flex min-h-screen flex-col font-sans antialiased',
          inter.variable,
          playfair.variable
        )}
      >
        <Providers>
          <Header />
          <main className="grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
