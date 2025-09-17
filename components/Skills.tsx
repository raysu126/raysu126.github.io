'use client'

export default function Skills() {
  const skills = [
    'Python', 'MATLAB', 'JavaScript', 'React', 'TensorFlow', 'PyTorch',
    'MNE-Python', 'NumPy', 'Pandas', 'SciPy', 'scikit-learn', 'Figma',
    'Photoshop', 'EEG Analysis', 'Signal Processing', 'UI/UX Design',
    'PCR & Gel Electrophoresis', 'Western Blotting', 'Arduino', 'HTML/CSS'
  ]

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container-width section-padding">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl notion-heading mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg notion-text max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm border notion-border notion-hover cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}