'use client'

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'TailwindCSS', level: 85 },
        { name: 'Vue.js', level: 75 },
        { name: 'JavaScript', level: 90 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'REST APIs', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 75 },
        { name: 'Jest', level: 80 },
        { name: 'CI/CD', level: 70 }
      ]
    }
  ]

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'TailwindCSS', 'Git', 'Docker', 'AWS', 'Express.js',
    'Vue.js', 'GraphQL', 'Jest', 'Prisma', 'Firebase', 'Vercel'
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
              2+
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Years of Experience
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              25+
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Projects Completed
            </p>
          </div>
          <div className="p-6">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              10+
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Technologies Mastered
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}