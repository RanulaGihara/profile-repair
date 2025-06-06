import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-[60vh] py-12">
      {/* Hero Section - Centered with Flex */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            About Me
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A passionate developer exploring the intersections of design and
            technology
          </p>
        </div>
      </section>

      {/* Profile Section - Side by Side with Flex */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
          {/* Left: Image */}
          <div className="flex justify-start">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/Ranula_Gihara.jpg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Right: Content */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl font-bold">Who I Am</h2>
            <p className="text-gray-600">
              I'm a full-stack developer with a passion for creating beautiful
              and functional web applications. With expertise in modern
              technologies like React, Next.js, and Node.js.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700">
                Resume
              </button>
              <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50">
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - Flex Wrap */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "Tailwind CSS",
            "MongoDB",
          ].map((skill) => (
            <div
              key={skill}
              className="flex items-center justify-center px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Cards - Flex Grid Layout */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="flex flex-wrap gap-8">
          {/* Experience Card 1 */}
          <div className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-6 bg-white rounded-xl shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Senior Developer</h3>
              <span className="text-purple-600">2020-Present</span>
            </div>
            <p className="text-gray-600 flex-grow">
              Led development of multiple web applications using modern
              technologies.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                Next.js
              </span>
            </div>
          </div>

          {/* Experience Card 2 */}
          <div className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-6 bg-white rounded-xl shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Full Stack Developer</h3>
              <span className="text-purple-600">2018-2020</span>
            </div>
            <p className="text-gray-600 flex-grow">
              Developed and maintained multiple client projects and internal
              tools.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                JavaScript
              </span>
            </div>
          </div>

          {/* Experience Card 3 */}
          <div className="flex flex-col w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-6 bg-white rounded-xl shadow-md">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <span className="text-purple-600">2016-2018</span>
            </div>
            <p className="text-gray-600 flex-grow">
              Specialized in creating responsive and accessible web interfaces.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm">
                HTML/CSS
              </span>
              <span className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm">
                jQuery
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Flex with Equal Widths */}
      <section className="container mx-auto px-4 mb-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 flex flex-col items-center p-6 text-center">
            <span className="text-4xl font-bold text-purple-600">5+</span>
            <span className="text-gray-600 mt-2">Years Experience</span>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center p-6 text-center">
            <span className="text-4xl font-bold text-purple-600">50+</span>
            <span className="text-gray-600 mt-2">Projects Completed</span>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center p-6 text-center">
            <span className="text-4xl font-bold text-purple-600">30+</span>
            <span className="text-gray-600 mt-2">Happy Clients</span>
          </div>
          <div className="w-full md:w-1/4 flex flex-col items-center p-6 text-center">
            <span className="text-4xl font-bold text-purple-600">100%</span>
            <span className="text-gray-600 mt-2">Success Rate</span>
          </div>
        </div>
      </section>

      {/* Contact CTA - Centered with Flex */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-600 mb-8">
            Interested in collaborating? Let's schedule a time to chat about
            your project.
          </p>
          <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}
