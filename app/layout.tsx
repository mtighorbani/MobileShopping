import type { Metadata } from 'next'


import Navbar from '@/components/header/Navbar'
import ProductProvider from '@/components/Providers/ProductProvider'


import { Inter } from 'next/font/google'
import './globals.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shopping',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body className={inter.className }>
        <ProductProvider>
      <Navbar/>
        {children}
        </ProductProvider>
        </body>
    </html>
  )
}
