import Navigation from '@/components/Navigation'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Users UI',
  description: 'Data for Users',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://bootswatch.com/5/vapor/bootstrap.min.css" />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        </body>
    </html>
  )
}
