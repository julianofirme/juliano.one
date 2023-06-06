import './globals.css'
import { Inter } from 'next/font/google'
import LocalFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const calSans = LocalFont({
	src: "../../public/fonts/CalSans-SemiBold.ttf",
	variable: "--font-calsans",
});

export const metadata = {
  title: 'juliano.firme',
  description: 'Software developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={[inter.className, calSans.variable, 'bg-black'].join(" ")}>{children}</body>
    </html>
  )
}
