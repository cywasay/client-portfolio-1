import "./globals.css";
import Header from "@/components/Header";
import { Outfit, Monoton } from "next/font/google";

import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  display: "swap",
  variable: "--font-outfit",
});

const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-monoton",
});

export const metadata = {
  title: "Portfolio",
  description: "Neelam's Portfolio",
  icons: {
    icon: "/favicon.ico", // /public path
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${outfit.variable} ${monoton.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
