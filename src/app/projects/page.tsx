import { ProjectCard } from "@/components/ui/ProjectCard";

// This is a server component by default (no 'use client' directive)
// Example projects data - in a real app, this could come from an API or database
const projects = [
  {
    title: "Project 1",
    description:
      "A full-stack web application built with Next.js and TypeScript",
    image: "/project1.jpg",
    github: "https://github.com/yourusername/project1",
    demo: "https://project1.demo",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with real-time updates",
    image: "/project2.jpg",
    github: "https://github.com/yourusername/project2",
    demo: "https://project2.demo",
    tags: ["React", "Node.js", "MongoDB"],
  },
  // Add more projects as needed
];

// Server Component
export default async function ProjectsPage() {
  // You can fetch data here
  // const projects = await fetchProjects();

  return (
    <div className="py-8 container mx-auto px-4">
      {/* Server-rendered content */}
      <h1
        className="
        text-4xl font-bold text-center mb-12
        bg-gradient-to-r from-blue-600 to-purple-600
        text-transparent bg-clip-text
      "
      >
        My Projects
      </h1>

      {/* Grid container using plain HTML/Tailwind */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          // Client-side ProjectCard component
          <div key={index}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
}
