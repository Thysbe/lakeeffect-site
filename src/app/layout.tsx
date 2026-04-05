import type { Metadata } from "next";
import { Barlow_Condensed, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const barlow = Barlow_Condensed({
  weight: ["700", "800"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});

const space = Space_Grotesk({
  weight: ["400", "500", "600"],
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lake Effect Records",
  description: "Gyration music from Chicago, Illinois. Open air parties, custom soundsystem, choice venue excursions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${barlow.variable} ${space.variable}`}>
      <body className="min-h-screen flex flex-col bg-night text-snow">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
