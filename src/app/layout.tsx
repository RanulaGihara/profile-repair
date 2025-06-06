/**
 * Root Layout Component
 *
 * Next.js App Router Concepts:
 * - This is the root layout that wraps all pages
 * - It's a Server Component by default (no 'use client' directive needed)
 * - Applies to all routes in the app
 * - Perfect for:
 *   - Global UI elements (header, footer)
 *   - Global styles
 *   - Global providers
 */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import { MUIProvider } from "@/components/providers/MUIProvider";

// Initialize Inter font
// Next.js built-in font optimization:
// - Automatically self-hosts the font
// - Zero layout shift
// - Optimal loading performance
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Metadata for SEO
// Next.js static metadata
// Applied to all pages unless overridden
export const metadata: Metadata = {
  title: "My Portfolio",
  description:
    "A modern portfolio built with Next.js, Tailwind CSS, and Material-UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      {/* 
        Body Styles:
        min-h-screen: Minimum height of 100vh ensures footer stays at bottom
        flex flex-col: Vertical flex container for header-main-footer layout
        bg-white: White background color
      */}
      <body className="min-h-screen flex flex-col bg-white">
        <MUIProvider>
          {/* 
            Header Styles:
            bg-white: White background
            shadow-sm: Subtle shadow for depth
            sticky top-0: Sticks to top when scrolling
            z-50: High z-index to stay above other content
          */}
          <header className="bg-white shadow-sm sticky top-0 z-50">
            {/* 
              Container Styles:
              container: Max-width container from Tailwind config
              mx-auto: Center horizontally
              px-4: Horizontal padding (1rem)
              h-16: Fixed height (4rem)
              flex items-center: Center content vertically
            */}
            <div className="container mx-auto px-4 h-16 flex items-center">
              <Navigation />
            </div>
          </header>

          {/* 
            Main Content Styles:
            flex-grow: Takes up remaining space
            Renders the current page content
          */}
          <main className="flex-grow">{children}</main>

          {/* 
            Footer Styles:
            bg-gray-50: Light gray background
            border-t: Top border
            border-gray-200: Border color
          */}
          <footer className="bg-gray-50 border-t border-gray-200">
            {/* 
              Footer Container Styles:
              container: Max-width container
              mx-auto: Center horizontally
              px-4: Horizontal padding
              py-6: Vertical padding
              text-center: Center text
              text-gray-600: Medium gray text
            */}
            <div className="container mx-auto px-4 py-6 text-center text-gray-600">
              © {new Date().getFullYear()} My Portfolio
            </div>
          </footer>
        </MUIProvider>
      </body>
    </html>
  );
}
