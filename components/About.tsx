'use client'

import { Code, Coffee, Users, Zap } from 'lucide-react'

export default function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Research Excellence',
      description: 'Advanced EEG analysis and machine learning research'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Technical Innovation',
      description: 'Building cutting-edge neural signal processing tools'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Interdisciplinary',
      description: 'Bridging neuroscience, ML, and user experience'
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: 'Problem Solver',
      description: 'Passionate about solving complex scientific challenges'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know me better and learn about my journey as a developer
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">
              Hello! I'm a computational neuroscience researcher and UI/UX designer.
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm currently pursuing dual Bachelor's degrees in Molecular & Cell Biology and
              Cognitive Science at UC Berkeley (GPA: 3.85). My passion lies at the intersection
              of neuroscience, machine learning, and user experience design.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              I specialize in EEG signal processing, deep learning for neural data, and creating
              intuitive user interfaces. My research focuses on brain age prediction using
              advanced ML models and understanding electrophysiological patterns in sleep disorders.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not in the lab or designing interfaces, I enjoy exploring the latest
              developments in computational neuroscience, contributing to research projects,
              and building tools that bridge the gap between complex science and accessible design.
            </p>

            <div className="pt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="lg:order-first">
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
                    RS
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your Professional Photo
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="mt-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}