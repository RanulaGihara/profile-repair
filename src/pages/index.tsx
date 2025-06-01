export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="
        min-h-[80vh] // Minimum height of 80% of viewport height
        flex items-center justify-center // Center content both vertically and horizontally
        bg-gradient-to-br from-blue-50 to-purple-50 // Gradient background
        -mx-4 // Negative margin to extend background to edges
        px-4 // Padding to maintain content width
      "
      >
        <div className="text-center max-w-3xl mx-auto">
          <h1
            className="
            text-4xl md:text-6xl // Responsive font size
            font-bold
            mb-6 // Bottom margin
            bg-gradient-to-r from-blue-600 to-purple-600 // Text gradient
            text-transparent bg-clip-text // Make text transparent to show gradient
          "
          >
            Welcome to My Portfolio
          </h1>

          <p
            className="
            text-xl md:text-2xl // Responsive font size
            text-gray-600
            mb-8 // Bottom margin
          "
          >
            Frontend Developer specializing in React, Next.js, and modern UI
            design
          </p>

          <button
            className="
            bg-blue-600 // Background color
            hover:bg-blue-700 // Hover state
            text-white // Text color
            px-8 py-3 // Padding
            rounded-lg // Rounded corners
            text-lg // Font size
            transition-colors // Smooth color transition
            shadow-md // Add shadow
            hover:shadow-lg // Larger shadow on hover
          "
          >
            View My Work
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <h2
          className="
          text-3xl md:text-4xl // Responsive font size
          font-bold
          text-center
          mb-12 // Bottom margin
          text-gray-800
        "
        >
          What I Do
        </h2>

        {/* Grid layout for services/skills */}
        <div
          className="
          grid // Enable grid layout
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3 // Responsive grid columns
          gap-8 // Gap between grid items
        "
        >
          {/* You can add your service/skill cards here */}
        </div>
      </section>
    </div>
  );
}
