import '../styles/globals.css'

interface RottLayoutProps {
  children: React.ReactNode
}

const RootLayout: React.FC<RottLayoutProps> = ({ children }) => {
  return (
    <html lang="pt-br">
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
