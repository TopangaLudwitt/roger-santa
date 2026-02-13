import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Snowfall from "@/components/Snowfall";

const inter = Inter({ variable: "--font-sans", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-serif", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roger The Real Bearded Santa | Authentic Holiday Magic",
  description: "Book a premium, real-bearded Santa Claus for your corporate party, community event, mall appearance, or private home visit. CWH Santa School certified. Available nationwide.",
  keywords: ["Santa Claus", "real beard Santa", "hire Santa", "Santa for hire", "Boston Santa", "corporate Santa", "home visit Santa"],
  openGraph: {
    title: "Roger The Real Bearded Santa",
    description: "Authentic. Magical. Unforgettable. Book a real-bearded Santa for your holiday celebration.",
    url: "https://rogertherealbeardedsanta.com",
    siteName: "Roger The Real Bearded Santa",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Snowfall />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
