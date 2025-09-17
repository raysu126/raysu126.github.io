'use client'


export default function About() {

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl notion-heading mb-4">
            About Me
          </h2>
          <p className="text-lg notion-text max-w-2xl mx-auto">
            Get to know me better and learn about my journey as a researcher
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
              Hello! I'm a computational neuroscience researcher and UI/UX designer.
            </h3>

            <p className="notion-text leading-relaxed">
              I'm currently pursuing dual Bachelor's degrees in Molecular & Cell Biology and
              Cognitive Science at UC Berkeley. My passion lies at the intersection
              of neuroscience, machine learning, and user experience design.
            </p>

            <p className="notion-text leading-relaxed">
              I specialize in EEG signal processing, deep learning for neural data, and creating
              intuitive user interfaces. My research focuses on brain age prediction using
              advanced ML models and understanding electrophysiological patterns in sleep disorders.
            </p>

            <p className="notion-text leading-relaxed">
              When I'm not in the lab or designing interfaces, I enjoy exploring the latest
              developments in computational neuroscience, contributing to research projects,
              and building tools that bridge the gap between complex science and accessible design.
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