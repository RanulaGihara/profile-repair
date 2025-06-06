/**
 * Home Page Component
 *
 * Next.js App Router Concepts:
 * - Page component automatically becomes the route
 * - Server Component by default
 * - Automatically handles static generation
 * - Can be made interactive with 'use client'
 *
 * Layout Structure:
 * - Hero section with gradient background
 * - "What I Do" section with grid layout
 */

export default function Home() {
  return (
    <>
      {/* 
        Hero Section:
        container mx-auto: Centered container with max-width
        min-h-[80vh]: Minimum height of 80% viewport height
        flex items-center justify-center: Center content both vertically and horizontally
        bg-gradient-to-br: Background gradient from top-left to bottom-right
        from-blue-50 to-purple-50: Gradient colors
      */}
      <section
        className="
        container mx-auto
        min-h-[80vh]
        flex items-center justify-center
        bg-gradient-to-br from-blue-50 to-purple-50
      "
      >
        {/* 
          Content Container:
          text-center: Center text
          max-w-3xl: Maximum width for readability
          mx-auto: Center horizontally
          px-4: Horizontal padding
        */}
        <div className="text-center max-w-3xl mx-auto px-4">
          {/* 
            Main Heading:
            text-4xl md:text-6xl: Responsive font size
            font-bold: Bold weight
            mb-6: Bottom margin
            bg-gradient-to-r: Text gradient direction
            from-blue-600 to-purple-600: Gradient colors
            text-transparent bg-clip-text: Make text show gradient
          */}
          <h1
            className="
            text-4xl md:text-6xl
            font-bold
            mb-6
            bg-gradient-to-r from-blue-600 to-purple-600
            text-transparent bg-clip-text
          "
          >
            Welcome to My Portfolio
          </h1>

          {/* 
            Subtitle:
            text-xl md:text-2xl: Responsive font size
            text-gray-600: Medium gray color
            mb-8: Bottom margin
          */}
          <p
            className="
            text-xl md:text-2xl
            text-gray-600/60
            mb-8
          "
          >
            Frontend Developer specializing in React, Next.js, and modern UI
            design
          </p>

          {/* 
            Call to Action Button:
            inline-block: Inline block display
            bg-blue-600: Blue background
            hover:bg-blue-700: Darker blue on hover
            text-white: White text
            px-8 py-3: Horizontal and vertical padding
            rounded-lg: Rounded corners
            text-lg: Large text
            transition-colors: Smooth color transition
            shadow-md: Medium shadow
            hover:shadow-lg: Larger shadow on hover
          */}
          <a
            href="/projects"
            className="
              inline-block
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8 py-3
              rounded-lg
              text-lg
              transition-colors
              shadow-md
              hover:shadow-lg
            "
          >
            View My Work
          </a>
        </div>
      </section>

      {/* 
        Content Section:
        container mx-auto: Centered container
        px-4: Horizontal padding
        py-20: Vertical padding
      */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <div
          className="
          flex 
          flex-row
          gap-12
          items-start
          relative            /* For pseudo-element */
        "
        >
          {/* Left Column */}
          <div
            className="
            flex 
             flex-row
            md:pr-12          /* Right padding */
          "
          >
            <h1
              className="
              text-3xl md:text-4xl
              font-bold
              text-end
              mb-12
              bg-gradient-to-r from-purple-600 to-fuchsia-100
              text-transparent bg-clip-text
            "
            >
              What I Do
            </h1>
            <h1
              className="
              text-3xl md:text-4xl
              font-bold
              text-end
              mb-12
              bg-gradient-to-r from-purple-600 to-fuchsia-100
              text-transparent bg-clip-text
            "
            >
              What I Do
            </h1>
          </div>

          {/* Vertical Divider (visible only on desktop) */}
          <div
            className="
            hidden md:block absolute
            left-1/2
            top-0
            bottom-0
            w-px
            bg-gray-200
          "
          ></div>

          {/* Right Column 
          Grid Container:
          grid: Enable grid layout
          grid-cols-1: Single column on mobile
          md:grid-cols-2: Two columns on medium screens
          lg:grid-cols-3: Three columns on large screens
          gap-8: Gap between grid items*/}
          <div
            className="
            w-full md:w-1/2
            flex flex-col
            gap-8
            md:pl-12          /* Left padding */
          "
          >
            <p>navItems</p>
            <p>navItems</p>
            <p>navItemss</p>
          </div>
        </div>
      </section>
    </>
  );
}
