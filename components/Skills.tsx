'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming & ML',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'MATLAB', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'TensorFlow/Keras', level: 85 },
        { name: 'scikit-learn', level: 90 },
        { name: 'NumPy/Pandas', level: 95 }
      ]
    },
    {
      title: 'Neuroscience & Data',
      skills: [
        { name: 'MNE-Python', level: 90 },
        { name: 'SciPy', level: 85 },
        { name: 'EEG Analysis', level: 90 },
        { name: 'Signal Processing', level: 85 },
        { name: 'PCR & Gel Electrophoresis', level: 80 },
        { name: 'Western Blotting', level: 75 }
      ]
    },
    {
      title: 'Design & Web',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'React', level: 80 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Photoshop', level: 75 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Framer', level: 70 }
      ]
    }
  ]

  const technologies = [
    'Python', 'MATLAB', 'JavaScript', 'React', 'TensorFlow', 'PyTorch',
    'MNE-Python', 'NumPy', 'Pandas', 'SciPy', 'scikit-learn', 'Figma',
    'Photoshop', 'Illustrator', 'HTML/CSS', 'EEG', 'Signal Processing', 'Arduino'
  ]

  const SkillBar = ({ skill }: { skill: { name: string; level: number } }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )

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

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-12 mb-20 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg notion-heading mb-6">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex justify-between items-center py-2 border-b notion-border last:border-b-0">
                    <span className="notion-text text-sm">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cloud */}
        <div className="text-center">
          <h3 className="text-2xl notion-heading mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm border notion-border notion-hover cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
          <div className="p-6">
            <div className="text-3xl notion-heading mb-2">
              3.85
            </div>
            <p className="notion-text text-sm">
              UC Berkeley GPA
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl notion-heading mb-2">
              5+
            </div>
            <p className="notion-text text-sm">
              Research Projects
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl notion-heading mb-2">
              15+
            </div>
            <p className="notion-text text-sm">
              Technologies Used
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}