import { Navbar } from '@/components/ui'
import { Inter } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/ui'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <div className={inter.className}>

      <Navbar />
        {children}
        <Footer />
      </div>
  )
}
