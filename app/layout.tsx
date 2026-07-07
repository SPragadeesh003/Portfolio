import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Readex_Pro } from 'next/font/google'
import { LenisProvider } from '@/components/lenis-provider'
import './globals.css'

const googleSans = Readex_Pro({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pragadeesh - AI Full Stack Developer',
  description: 'Portfolio of Pragadeesh, AI Enthusiast & Full Stack Developer.',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${googleSans.variable} bg-black`}>
      <body className="font-sans antialiased text-white bg-black selection:bg-white selection:text-black">
        <LenisProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LenisProvider>
      </body>
    </html>
  )
}
