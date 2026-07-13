import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Robotics Engineer | Embedded Systems | Product Development',
  description: 'Premium portfolio of a Robotics Engineer specializing in embedded systems, computer vision, autonomous navigation, and product development. L&T funded research, ROS2 development, and AI integration.',
  keywords: ['Robotics Engineer', 'Embedded Systems', 'ROS2', 'Computer Vision', 'Autonomous Systems', 'Product Development', 'Jetson Nano', 'Mechanical Design'],
  generator: 'Next.js 15',
  creator: 'Robotics Engineer',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Robotics Engineer | Embedded Systems Expert',
    description: 'Designing Intelligent Robotics Systems - Portfolio of advanced robotics projects and embedded systems work',
    siteName: 'Robotics Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robotics Engineer | Embedded Systems',
    description: 'Designing Intelligent Robotics Systems',
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
    <html lang="en" className="dark bg-background scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
