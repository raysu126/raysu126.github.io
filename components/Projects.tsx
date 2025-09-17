'use client'

import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI, secure payments, and admin dashboard. Built with React, Node.js, and MongoDB.',
      image: '/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://your-project.com',
      githubLink: 'https://github.com/raysu126/project1',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/project2.jpg',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      liveLink: 'https://your-project.com',
      githubLink: 'https://github.com/raysu126/project2',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides detailed forecasts, interactive maps, and location-based weather alerts.',
      image: '/project3.jpg',
      technologies: ['Vue.js', 'TailwindCSS', 'OpenWeather API'],
      liveLink: 'https://your-project.com',
      githubLink: 'https://github.com/raysu126/project3',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js and deployed on GitHub Pages with CI/CD pipeline.',
      image: '/project4.jpg',
      technologies: ['Next.js', 'TailwindCSS', 'GitHub Pages'],
      liveLink: 'https://your-project.com',
      githubLink: 'https://github.com/raysu126/project4',
      featured: false
    },
    {
      title: 'Social Media API',
      description: 'RESTful API for a social media platform with authentication, file uploads, real-time messaging, and comprehensive testing.',
      image: '/project5.jpg',
      technologies: ['Express.js', 'JWT', 'Socket.io', 'Jest'],
      liveLink: null,
      githubLink: 'https://github.com/raysu126/project5',
      featured: false
    },
    {
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization dashboard with charts, filters, and export functionality for business analytics.',
      image: '/project6.jpg',
      technologies: ['React', 'D3.js', 'Chart.js', 'Python'],
      liveLink: 'https://your-project.com',
      githubLink: 'https://github.com/raysu126/project6',
      featured: false
    }
  ]

  const ProjectCard = ({ project, featured = false }: { project: any, featured?: boolean }) => (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${featured ? 'lg:col-span-2' : ''}`}>
      {/* Project Image Placeholder */}
      <div className={`bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 ${featured ? 'h-64' : 'h-48'} flex items-center justify-center`}>
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
            P
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Project Screenshot
          </p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
            >
              <ExternalLink size={16} className="mr-1" />
              Live Demo
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium"
          >
            <Github size={16} className="mr-1" />
            Code
          </a>
        </div>
      </div>
    </div>
  )

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} featured />
          ))}
        </div>

        {/* Other Projects */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/raysu126"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <Github size={20} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}