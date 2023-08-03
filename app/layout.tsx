import '@styles/global.css'
import { Inter } from 'next/font/google'
// import Nav from '../components/Nav'

export const metadata = {
  title: 'Computer Science blocks',
  description: 'From Physics and Mathematics to Computer Science',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" rel="preload">
      <body className=''>
        <div className="gradient"></div>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
