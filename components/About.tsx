'use client'

import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function About() {
  const sectionRef = useScrollAnimation()

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-white scroll-animate">
      <div className="container-width section-padding">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl notion-heading mb-4 stagger-1">
            About Me
          </h2>
          <p className="text-lg notion-text max-w-2xl mx-auto stagger-2">
            The story behind the brain waves and bad coding habits
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Image Placeholder */}
          <div className="lg:order-first">
            <div className="w-full h-80 bg-gray-50 border notion-border rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gray-100 border notion-border flex items-center justify-center text-gray-600 text-xl font-medium">
                  RS
                </div>
                <p className="notion-text text-sm">
                  Professional Photo
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h3 className="text-2xl notion-heading mb-6">
              Hey there! I'm basically a professional brain-whisperer and pixel-pusher.
            </h3>

            <p className="notion-text leading-relaxed">
              Currently double-majoring in Molecular & Cell Biology and Cognitive Science at UC Berkeley
              because apparently I enjoy pain. But honestly, there's something magical about understanding
              how brains work while making computers do cool stuff.
            </p>

            <p className="notion-text leading-relaxed">
              I spend my days teaching machines to read brain waves (EEG analysis), building AI models
              that probably know more about sleep patterns than I do, and designing interfaces that
              hopefully don't make users question their life choices.
            </p>

            <p className="notion-text leading-relaxed">
              When I'm not debugging code at 3 AM or trying to make sense of squiggly brain signals,
              you'll find me diving into the latest neuroscience papers, probably with too much coffee
              and a concerning number of browser tabs open.
            </p>

            <div className="pt-6">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="notion-button px-6 py-3 font-medium inline-flex items-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}