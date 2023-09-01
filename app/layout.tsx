import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viluan",
  description: "Centro médico y odontológico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <Navbar />
        <main className="mt-[68px] min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
