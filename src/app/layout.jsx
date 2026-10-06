import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: {
    default: "Neelam Nisar | Educator & Educational Leader",
    template: "%s | Neelam Nisar",
  },
  description:
    "The portfolio of Neelam Nisar—educator, school leader, mentor, and advocate for purposeful learning.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        {children}
      </body>
    </html>
  );
}
