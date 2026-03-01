import type { Metadata } from 'next'
import { Inter, Inter as InterMono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });
const interMono = InterMono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Haven Technologies - Industrial Water Treatment & Control P anel Solutions',
  description: 'Leading manufacturer of water treatment systems, control panels, and dosing sensors for industrial applications. Smart solutions for water conditioning and vending.',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
