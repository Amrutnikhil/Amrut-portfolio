import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Amrut B Nargund | Robotics & Embedded Systems Engineer',
  description: 'Portfolio of Amrut B Nargund — Robotics and Embedded Systems Engineer specializing in ROS, autonomous systems, mechanical design, computer vision, and product development. PES University, Bengaluru.',
  keywords: [
    'Amrut B Nargund',
    'Robotics Engineer',
    'Embedded Systems Engineer',
    'ROS Developer',
    'Product Development',
    'Computer Vision',
    'Jetson Nano',
    'PES University',
    'CAD Design',
    'Mechanical Design',
  ],
  generator: 'Next.js 15',
  creator: 'Amrut B Nargund',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://amrut.dev',
    title: 'Amrut B Nargund | Robotics & Embedded Systems Engineer',
    description: 'Portfolio of a Robotics and Embedded Systems Engineer specializing in ROS, autonomous systems, and mechanical design',
    siteName: 'Amrut Nargund',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amrut B Nargund | Robotics Engineer',
    description: 'Robotics and Embedded Systems Engineer | Product Development | Computer Vision',
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

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: [{ color: '#050505' }],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#050505] text-white overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
