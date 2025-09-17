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
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container-width section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories with Progress Bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:from-blue-200 hover:to-purple-200 dark:hover:from-blue-800 dark:hover:to-purple-800 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Summary */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              3.85
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              UC Berkeley GPA
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              5+
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Research Projects
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              15+
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Technologies Used
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}