import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Samisha - Developer",
  description: "Full Stack Developer diving deep into Solana and Rust. Crafting innovative decentralized applications and pushing the boundaries of web3 development.",
  openGraph: {
    title: "Samisha - Developer",
    description: "Full Stack Developer diving deep into Solana and Rust. Crafting innovative decentralized applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samisha - Developer",
    description: "Full Stack Developer diving deep into Solana and Rust. Crafting innovative decentralized applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
