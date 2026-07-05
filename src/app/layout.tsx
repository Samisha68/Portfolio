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

const siteUrl = "https://portfolio-samisha.vercel.app";
const title = "Samisha — Developer";
const description =
  "Developer building on Solana. Lead Developer at EVORA, working on smart contracts, wallets, and Solana integrations. Contributor to Solana open-source tooling.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Samisha",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/avatar.jpg",
        width: 399,
        height: 399,
        alt: "Samisha — pixel-art avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    creator: "@samisha_x",
    images: ["/avatar.jpg"],
  },
};

export const viewport = {
  themeColor: "#fcfcfa",
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
