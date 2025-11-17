import "./globals.css";
import Header from "@/components/Header";
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata = {
  title: "Portfolio",
  description: "Neelam's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}