import './globals.css'

export const metadata = {
  title: 'The Discipline Code - Your Guide to Success',
  description: 'Master discipline, focus, and the fundamental rules for achieving lasting success',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
