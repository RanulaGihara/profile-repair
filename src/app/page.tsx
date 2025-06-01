// Automatic Rendering: Next.js will automatically wrap your pages with the nearest layout. 
// This means you don't need to explicitly import the Layout component.

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="
        container mx-auto
        min-h-[80vh]
        flex items-center justify-center
        bg-gradient-to-br from-blue-50 to-purple-50
      "
      >
        <div className="text-center max-w-3xl mx-auto px-4">
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

          <p
            className="
            text-xl md:text-2xl
            text-gray-600
            mb-8
          "
          >
            Frontend Developer specializing in React, Next.js, and modern UI
            design
          </p>

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

      {/* Content Section */}
      <section className="container mx-auto px-4 py-20">
        <h2
          className="
          text-3xl md:text-4xl
          font-bold
          text-center
          mb-12
          text-gray-800
        "
        >
          What I Do
        </h2>

        <div
          className="
          grid
          grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-8
        "
        >
          {/* We'll add service cards in the next step */}
        </div>
      </section>
    </>
  );
}
