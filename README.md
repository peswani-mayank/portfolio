<div align="center">

# ⚡ Developer Portfolio

### Modern • Responsive • Interactive • Production-Ready

Built with **React · Vite · Tailwind CSS · Framer Motion · Lucide React**

<br>

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br>

<a href="https://portfolio-fawn-seven-87.vercel.app/">
  <img src="https://img.shields.io/badge/🌐%20Live%20Portfolio-000000?style=for-the-badge" alt="Live Portfolio">
</a>

</div>

---

## ✨ Overview

A modern and production-ready developer portfolio website built to showcase software development projects, technical skills, professional experience, training, certifications, education, and open-source contributions.

The portfolio focuses on a clean developer-centric experience with a responsive layout, smooth animations, interactive project sections, and a recruiter-friendly structure.

### 🎯 Design Goals

- Clean and professional developer interface
- Modern dark-themed experience
- Responsive across all screen sizes
- Smooth and meaningful animations
- Easy content management
- Recruiter-friendly presentation
- Fast and optimized production build

---

## 🚀 Features

### 🎨 User Interface

- Modern dark developer aesthetic
- Responsive design
- Clean typography
- Interactive navigation
- Smooth scrolling
- Hover interactions
- Animated section transitions
- Mobile-friendly layout

### 📂 Portfolio Sections

- Hero
- About
- Technical Skills
- Experience
- Projects
- Open Source Contributions
- Training
- Certifications
- Education
- Resume
- Contact
- Footer

### 💡 Interactive Features

- Interactive project cards
- Detailed project breakdown modals
- Project technology badges
- GitHub repository links
- Live project links
- Framer Motion animations
- Smooth UI transitions

### 📄 Resume

- Resume viewer
- Resume download functionality
- Printable resume interface
- Centralized resume management

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React.js** | Frontend UI development |
| **Vite** | Development and build tooling |
| **JavaScript** | Application logic |
| **Tailwind CSS** | Styling and responsive design |
| **Framer Motion** | Animations and transitions |
| **Lucide React** | UI icons |
| **Git** | Version control |
| **GitHub** | Source code management |
| **Vercel** | Deployment |

---

## 🧠 Architecture

The application follows a **component-based and data-driven architecture**.

```text
                    ┌─────────────────┐
                    │     App.jsx     │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
        ┌───────────┐  ┌───────────┐  ┌───────────┐
        │Components │  │   Data    │  │  Assets   │
        └─────┬─────┘  └─────┬─────┘  └───────────┘
              │              │
       ┌──────┼──────┐   ┌───┼────────────┐
       ▼      ▼      ▼   ▼   ▼            ▼
     Navbar  Hero  About  Projects      Skills
       │      │      │      │             │
       └──────┴──────┴──────┴─────────────┘
                         │
                         ▼
                    Portfolio UI

📂 Project Structure
portfolio/
│
├── public/
│   └── resume/
│       └── Mayank_Peswani_CV.pdf
│
├── src/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Training.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   ├── OpenSource.jsx
│   │   ├── ResumeCTA.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   ├── personalInfo.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── education.js
│   │   └── certifications.js
│   │
│   ├── assets/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
💻 Getting Started
Prerequisites

Make sure the following are installed:

Node.js 18+
npm
Git

Check your installed versions:

node -v
npm -v
git --version
1. Clone the Repository
git clone <repository-url>
2. Navigate to the Project
cd <project-directory>
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev

The application will run at:

http://localhost:5173
🏗️ Production Build

Create an optimized production build:

npm run build

The generated production files will be available inside:

dist/
Preview Production Build
npm run preview
✏️ Customization

The portfolio uses a modular data-driven structure, making it easy to update content without modifying the main UI components.

Personal Information
src/data/personalInfo.js
Projects
src/data/projects.js
Skills
src/data/skills.js
Experience
src/data/experience.js
Education
src/data/education.js
Certifications
src/data/certifications.js

This approach keeps the application organized and makes future updates easier.

🧩 Adding a New Project

Add a project object inside:

src/data/projects.js

Example:

{
  id: "project-id",
  title: "Project Name",
  status: "Live",
  date: "Month Year",
  category: "Full-Stack",
  summary: "Short project summary",
  description: "Detailed project description",

  features: [
    "Feature one",
    "Feature two",
    "Feature three"
  ],

  technicalImplementation: [
    "Technical implementation detail",
    "Architecture decision"
  ],

  technologies: [
    "React.js",
    "Node.js",
    "MongoDB"
  ],

  github: "",
  liveDemo: ""
}
📄 Resume Setup

Place the resume PDF inside:

public/
└── resume/
    └── Mayank_Peswani_CV.pdf

The resume can then be accessed using:

/resume/Mayank_Peswani_CV.pdf

This enables the portfolio to provide resume viewing and downloading functionality.

🌐 Deployment
▲ Vercel

The portfolio is optimized for deployment on Vercel.

Push the repository to GitHub.
Open Vercel.
Select Add New → Project.
Import the GitHub repository.
Vercel automatically detects the Vite configuration.
Click Deploy.
Build Command
npm run build
Output Directory
dist
🌐 Live Portfolio

View Live Portfolio →

⚡ Performance

The project follows modern frontend performance practices:

Vite production builds
Optimized assets
Reusable React components
Lightweight animations
Minimal unnecessary dependencies
Responsive layouts
Efficient rendering
Production-optimized bundle
♿ Accessibility

The interface follows common accessibility practices:

Semantic HTML
Proper heading hierarchy
Keyboard-friendly interactions
Accessible navigation
Visible focus states
Descriptive labels
Responsive typography
Reduced-motion considerations
Accessible UI components
🔍 SEO

The project is structured with SEO considerations including:

Semantic HTML
Descriptive page title
Meta description
Proper heading hierarchy
Open Graph metadata
Favicon support
Search-engine-friendly structure
🔮 Future Improvements
 GitHub API integration
 Dynamic GitHub contribution statistics
 Project filtering
 Developer blog
 Contact form backend
 Email notifications
 Custom domain
 Analytics integration
 Additional project case studies
 Dark / Light theme toggle
🤝 Contributing

This is primarily a personal portfolio project, but suggestions and improvements are welcome.

If you discover an issue:

Open an issue.
Describe the problem clearly.
Include relevant screenshots or details.
Suggest a possible improvement if applicable.
📜 License

This project is intended for personal portfolio use.

© 2026 All Rights Reserved.

<div align="center">
⭐ Like this project?

Give the repository a star if you find it useful!

<br>

Built with React, creativity, and continuous learning.

</div> ```
