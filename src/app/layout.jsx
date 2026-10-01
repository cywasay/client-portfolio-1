import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: {
    default: "Neelam Nasir | Educator & Educational Leader",
    template: "%s | Neelam Nasir",
  },
  description:
    "The portfolio of Neelam Nasir—educator, school leader, mentor, and advocate for purposeful learning.",
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
