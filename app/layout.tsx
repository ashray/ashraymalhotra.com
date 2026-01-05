import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Load Inter font - clean, modern, highly readable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// SEO metadata - update these with your actual info
export const metadata: Metadata = {
  title: "Ashray Malhotra",
  description: "Personal website of Ashray Malhotra", // Update with your one-liner
  openGraph: {
    title: "Ashray Malhotra",
    description: "Personal website of Ashray Malhotra",
    url: "https://ashraymalhotra.com",
    siteName: "Ashray Malhotra",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ashray Malhotra",
    description: "Personal website of Ashray Malhotra",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
