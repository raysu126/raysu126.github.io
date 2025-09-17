'use client'

import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-white">
      <div className="container-width section-padding text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="w-24 h-24 mx-auto mb-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-2xl font-medium">
            RS
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl notion-heading mb-6 leading-tight">
            Hi, I'm Raymond Su
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl notion-text mb-12 max-w-3xl mx-auto leading-relaxed">
            UC Berkeley student passionate about computational neuroscience, machine learning,
            and creating intuitive user experiences through thoughtful design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="notion-button px-6 py-3 font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="notion-button px-6 py-3 font-medium"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/raysu126"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/raysu126"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:raymondsu@berkeley.edu"
              className="text-gray-500 hover:text-black transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  )
}