import '@/app/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Suspense } from 'react'
import LoadingSkeleton from '../Components/LoadingSkeleton'
import HeaderNav from '../HeaderNav'
import SideNav from '../SideNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
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
      <head></head>
      <body className={inter.className}>
        <HeaderNav/>
        
        <div className="flex justify-between w-full">  
            <SideNav/> 
            <Suspense fallback={<LoadingSkeleton/>}>
            {children}
            </Suspense>
        </div>
            
        </body>
    </html>
  )
}
