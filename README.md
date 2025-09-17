# Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS, deployed on GitHub Pages.

## Features

- ✨ Modern and clean design
- 🌙 Dark/Light mode toggle
- 📱 Fully responsive layout
- ⚡ Fast loading with Next.js optimization
- 🎨 Beautiful animations and transitions
- 📝 Contact form functionality
- 🚀 Deployed on GitHub Pages with CI/CD

## Technologies Used

- **Frontend**: Next.js, React, TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## Sections

1. **Hero** - Introduction with call-to-action buttons
2. **About** - Personal story and professional highlights
3. **Projects** - Showcase of featured and other projects
4. **Skills** - Technical skills with progress indicators
5. **Contact** - Contact form and social links

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/raysu126/raysu126.github.io.git
cd raysu126.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

This will generate a static export in the `out` folder.

## Customization

### Personal Information

Update the following files with your information:

1. **Personal Details**: Update name, title, and bio in components
2. **Contact Information**: Update email, phone, and social links in `components/Contact.tsx`
3. **Projects**: Add your projects in `components/Projects.tsx`
4. **Skills**: Update your skills in `components/Skills.tsx`
5. **Images**: Add your photos to the `public` folder
6. **Resume**: Add your resume PDF to the `public` folder

### Colors and Styling

The website uses TailwindCSS for styling. You can customize:

- **Colors**: Update the gradient colors in `tailwind.config.js`
- **Fonts**: Change the font in `app/layout.tsx`
- **Animations**: Modify animations in `tailwind.config.js`

### Metadata

Update SEO metadata in `app/layout.tsx`:

- Title
- Description
- Keywords
- Open Graph data

## Deployment

The website is automatically deployed to GitHub Pages when you push to the main branch.

### Setup Instructions

1. Create a repository named `raysu126.github.io`
2. Push this code to the repository
3. Enable GitHub Pages in repository settings
4. The website will be available at `https://raysu126.github.io`

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you find this template helpful, please give it a ⭐ on GitHub!