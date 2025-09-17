'use client'

import { ExternalLink, Github } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Projects() {
  const sectionRef = useScrollAnimation()
  const handleProjectClick = (project: any) => {
    // For now, just scroll to the project or open link
    if (project.liveLink) {
      window.open(project.liveLink, '_blank')
    } else if (project.githubLink) {
      window.open(project.githubLink, '_blank')
    }
  }

  const projects = [
    {
      title: 'EEG Brain Age Prediction',
      description: 'Deep learning pipeline for brain age prediction from EEG data in REM Sleep Behavior Disorder patients. Implemented CNN-Transformer hybrid models and spectral power analysis using MNE-Python.',
      image: '/project1.jpg',
      technologies: ['Python', 'TensorFlow', 'MNE-Python', 'scikit-learn'],
      liveLink: null,
      githubLink: 'https://github.com/raysu126/eeg-brain-age',
      featured: true
    },
    {
      title: 'Mindful Movies - AI Phobia Filter',
      description: 'AI-powered mobile app providing phobia-sensitive content filtering for movies. Features personalized trigger detection and anxiety-free entertainment recommendations using behavioral psychology insights.',
      image: '/project2.jpg',
      technologies: ['React', 'JavaScript', 'AI/ML', 'Mobile Design'],
      liveLink: 'https://mindful-movies.app',
      githubLink: 'https://github.com/raysu126/mindful-movies',
      featured: true
    },
    {
      title: 'Brain-Machine Interface Review',
      description: 'Comprehensive literature review on neural recording technologies, signal processing methodologies, and material innovations in BMI systems. Focus on EEG, ECoG, and fiber-based interfaces.',
      image: '/project4.jpg',
      technologies: ['Research', 'Neuroscience', 'Signal Processing', 'Academic Writing'],
      liveLink: null,
      githubLink: 'https://github.com/raysu126/bmi-review',
      featured: false
    },
    {
      title: 'Proteomics LC-MS/MS Analysis',
      description: 'High-resolution DIA data analysis pipeline for protein identification and quantification. Automated QC workflows and sample preparation protocols achieving >98% instrument uptime.',
      image: '/project5.jpg',
      technologies: ['Python', 'Mass Spectrometry', 'Data Analysis', 'QC Automation'],
      liveLink: null,
      githubLink: 'https://github.com/raysu126/proteomics-pipeline',
      featured: false
    },
  ]

  const ProjectCard = ({ project, onClick }: { project: any, onClick: () => void }) => (
    <div
      className="notion-card p-6 notion-hover transition-all cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg notion-heading mb-3">{project.title}</h3>
      <p className="notion-text mb-4 leading-relaxed text-sm">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full border notion-border"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex space-x-4 text-sm">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-black font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} className="mr-1" />
            Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-black font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} className="mr-1" />
            Code
          </a>
        )}
      </div>
    </div>
  )

  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-white scroll-animate">
      <div className="container-width section-padding">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl notion-heading mb-4">
            Featured Projects ◆
          </h2>
          <p className="text-lg notion-text max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* All Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <p className="notion-text mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/raysu126"
            target="_blank"
            rel="noopener noreferrer"
            className="notion-button px-6 py-3 font-medium inline-flex items-center"
          >
            <Github size={16} className="mr-2" />
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}