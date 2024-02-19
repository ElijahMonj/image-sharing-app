import '@/app/globals.css'

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
