import { ReactNode } from "react";
import Navigation from "./Navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    // min-h-screen: Sets minimum height to 100vh (full viewport height)
    // flex: Enables flexbox layout
    // flex-col: Sets flex direction to column
    <div className="min-h-screen flex flex-col">
      {/* 
        bg-white: Sets background color to white
        shadow-sm: Adds a small shadow
        sticky: Makes the header stick to the top
        top-0: Positions the sticky header at the top
        z-50: Sets a high z-index to keep header above other content
      */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        {/* 
          container: Sets a responsive max-width and centers the content
          mx-auto: Centers the container with auto margins
          px-4: Adds horizontal padding (1rem)
          h-16: Sets height to 4rem (64px)
          flex: Enables flexbox
          items-center: Centers items vertically
        */}
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Navigation />
        </div>
      </header>

      {/* 
        flex-grow: Takes up remaining space
        container: Sets max-width and centers
        mx-auto: Centers horizontally
        px-4: Horizontal padding
        py-8: Vertical padding (2rem)
      */}
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

      {/* 
        bg-gray-50: Light gray background
        border-t: Top border
        border-gray-200: Border color
        mt-auto: Pushes footer to bottom when content is short
      */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} My Portfolio
        </div>
      </footer>
    </div>
  );
}
