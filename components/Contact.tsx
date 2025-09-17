'use client'

import { useState } from 'react'
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Contact() {
  const sectionRef = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: 'raymondsu@berkeley.edu',
      link: 'mailto:raymondsu@berkeley.edu'
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Phone',
      value: 'Available upon request',
      link: null
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Location',
      value: 'Oakland, CA',
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub',
      link: 'https://github.com/raysu126'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/raysu126'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      label: 'Twitter',
      link: 'https://twitter.com/raysu126'
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Create mailto link with form data
    const subject = encodeURIComponent(`${formData.subject} - from ${formData.name}`)
    const body = encodeURIComponent(`Hi Raymond,

${formData.message}

Best regards,
${formData.name}
${formData.email}`)

    const mailtoLink = `mailto:raymondsu@berkeley.edu?subject=${subject}&body=${body}`
    window.location.href = mailtoLink

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-white scroll-animate">
      <div className="container-width section-padding">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl notion-heading mb-4">
            Let's Be Friends! ◈
          </h2>
          <p className="text-lg notion-text max-w-2xl mx-auto">
            Got a cool project? Need a brain to pick? Or just want to geek out about neural networks?
            Hit me up – I promise I'm more fun than my EEG data suggests!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl notion-heading mb-6">
              Slide Into My DMs
            </h3>
            <p className="notion-text mb-8 leading-relaxed">
              Whether you want to collaborate on something awesome, need help with brain-computer
              interfaces (I know, oddly specific), or just want to chat about why Python is obviously
              the best programming language – I'm your person!
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center border notion-border">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium notion-heading text-sm">
                      {item.label}
                    </p>
                    {item.link ? (
                      <a
                        href={item.link}
                        className="notion-text hover:text-black transition-colors text-sm"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="notion-text text-sm">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="notion-heading mb-4 text-sm">
                Stalk me on the internet (in a friendly way)
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 text-gray-600 notion-hover rounded-lg flex items-center justify-center border notion-border"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="notion-card p-8">
            <h3 className="text-2xl notion-heading mb-6">
              Drop me a line!
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm notion-heading mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border notion-border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white text-black"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm notion-heading mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border notion-border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white text-black"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm notion-heading mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border notion-border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white text-black"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm notion-heading mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border notion-border rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400 bg-white text-black resize-vertical"
                  placeholder="Tell me about your wild ideas, confess your coding sins, or just say hi!"
                />
              </div>

              <button
                type="submit"
                className="w-full notion-button px-6 py-3 font-medium flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t notion-border text-center">
          <p className="notion-text text-sm">
            © 2025 Raymond Su. Built with Next.js and TailwindCSS. Deployed on GitHub Pages.
          </p>
        </div>
      </div>
    </section>
  )
}