import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        className="font-sans"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
