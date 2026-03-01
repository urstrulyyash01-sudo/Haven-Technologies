import type { Metadata } from 'next'
import { Inter, Inter as InterMono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });
const interMono = InterMono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://haventechnologies.in'),
  title: {
    default: 'Haven Technologies - Industrial Water Treatment & Control Panel Solutions | Hyderabad',
    template: '%s | Haven Technologies',
  },
  description:
    'Haven Technologies is a leading manufacturer of RO control panels, contactor-based control panels, smart doser sensors, and water vending machines in Hyderabad, India. 24+ years of expertise in industrial water treatment solutions.',
  keywords: [
    'haven technologies',
    'control panels',
    'water treatment solutions',
    'RO control panels',
    'contactor based control panels',
    'smart doser sensor',
    'water vending machine',
    'water treatment Hyderabad',
    'industrial control panels',
    'reverse osmosis panels',
    'water purification systems',
    'water treatment equipment',
    'Haven Technologies Hyderabad',
    'water conditioning',
    'pump control panels',
  ],
  authors: [{ name: 'Haven Technologies' }],
  creator: 'Haven Technologies',
  publisher: 'Haven Technologies',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://haventechnologies.in',
    siteName: 'Haven Technologies',
    title: 'Haven Technologies - Industrial Water Treatment & Control Panel Solutions',
    description:
      'Leading manufacturer of RO control panels, contactor-based control panels, smart doser sensors, and water vending machines. 24+ years of expertise in water treatment.',
    images: [
      {
        url: '/images/products/ro-panels.png',
        width: 800,
        height: 600,
        alt: 'Haven Technologies - RO Control Panel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haven Technologies - Industrial Water Treatment & Control Panel Solutions',
    description:
      'Leading manufacturer of RO control panels, smart doser sensors, and water vending machines in Hyderabad, India.',
    images: ['/images/products/ro-panels.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://haventechnologies.in',
  },
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
