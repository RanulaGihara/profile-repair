/**
 * Navigation Component
 *
 * React & Next.js Concepts:
 * - 'use client' directive for client-side interactivity
 * - useState for mobile menu toggle
 * - usePathname for active route detection
 * - Link component for client-side navigation
 *
 * Features:
 * - Responsive design (mobile + desktop)
 * - Active link highlighting
 * - Animated mobile menu
 * - Accessible navigation
 */

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Navigation items configuration
// Centralized navigation structure for easy maintenance
const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

export default function Navigation() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Get current path for active link highlighting
  const pathname = usePathname();

  return (
    // Nav Container: w-full: Full width container
    <nav className="w-full">
      {/* 
        Main Navigation Bar:
        flex: Enable flexbox
        justify-between: Space items apart
        items-center: Center items vertically
        w-full: Take full width
      */}
      <div className="flex justify-between items-center w-full">
        {/* 
          Logo Link:
          text-xl: Large text
          font-bold: Bold weight
          text-blue-600: Primary color
          hover:text-blue-700: Darker on hover
          transition-colors: Smooth color transition
        */}
        <Link
          href="/"
          className="text-xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          Portfolio
        </Link>

        {/* 
          Desktop Navigation:
          hidden: Hide by default (mobile)
          md:flex: Show as flex container on medium screens
          gap-6: Space between items
        */}
        <div className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
                py-2 px-4 rounded-lg transition-colors
                ${
                  pathname === item.path
                    ? "bg-blue-50 text-blue-600" // Active state
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50" // Inactive state
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* 
          Mobile Menu Button:
          md:hidden: Hide on medium screens and up
          p-2: Padding for touch target
          focus:outline-none: Clean focus state
        */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> // Menu icon
            )}
          </svg>
        </button>
      </div>

      {/* 
        Mobile Navigation Menu:
        md:hidden: Hide on medium screens and up
        absolute: Position absolutely
        top-16: Position below header
        left-0 right-0: Full width
        bg-white: White background
        border-b: Bottom border
        border-gray-200: Border color
      */}
      {isMenuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 py-2"
          role="menu"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`
                block py-2 px-4 transition-colors
                ${
                  pathname === item.path
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                }
              `}
              onClick={() => setIsMenuOpen(false)}
              role="menuitem"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
