import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Swiftsnap',
  description: 'An Image Sharing App',
  icons: {
    icon: '/icon.ico', // /public path
    },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="corporate">
      <body>{children}</body>
    </html>
  )
}
