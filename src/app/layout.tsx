import { Poppins } from 'next/font/google'

import "./globals.css";
import { Header } from '@/components/header';
import { TopBar } from '@/components/topBar';
import { Hero } from '@/components/hero';
import { NavigationBottom } from '@/components/navigationBottom';
import { Footer } from '@/components/footer';

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={poppins.variable}>
      <body className='antialiased'>
        <TopBar/>
        <Header/>
        {children}
        <NavigationBottom />
        <Footer />
      </body>
    </html>
  );
}
