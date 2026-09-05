# Mayank Peswani — Software Developer Portfolio

A production-quality personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**. Designed specifically for technical recruiters and engineering managers, featuring a clean developer aesthetic, dark theme, interactive project breakdown modals, and an in-browser printable resume viewer.

---

## 🚀 Quick Start

### 1. Prerequisites
Ensure [Node.js](https://nodejs.org/) (v18+ recommended) is installed on your machine.

### 2. Installation
Clone or navigate to the project directory and install the dependencies:
```bash
npm install
```

### 3. Start Local Development Server
Launch the Vite hot-reloading development server:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173/`.

### 4. Build for Production
Generate optimized static production assets inside the `dist/` directory:
```bash
npm run build
```

To preview the production bundle locally:
```bash
npm run preview
```

---

## 🛠️ How to Customize Your Portfolio

All data is structured modularly inside `src/data/` so you never have to edit JSX markup directly to change content.

### 1. How to Change Personal Information & Social Links
Open [`src/data/personalInfo.js`](./src/data/personalInfo.js):
```javascript
export const personalInfo = {
  name: "Mayank Peswani",
  primaryTitle: "Software Developer",
  headline: "Software Developer | Full-Stack Developer | Open Source Contributor",
  location: "Sikar, Rajasthan, India",
  academicLocation: "Phagwara, Punjab, India",
  email: "peswani.mayank11@gmail.com",
  phone: "+91 8302005875",
  linkedin: "https://www.linkedin.com/in/mayank-peswani/",
  github: "https://github.com/peswani-mayank",
  resumePath: "/resume/Mayank_Peswani_CV.pdf",
  bio: "...",
  // ...
};
```
Editing this updates your Navbar, Hero, About, Contact cards, and Resume modal across the entire website.

### 2. How to Add or Edit Projects
Open [`src/data/projects.js`](./src/data/projects.js). Add a new project object to the array:
```javascript
{
  id: "new-project-id",
  title: "Project Title",
  status: "Live", // or "In Development"
  date: "Month Year",
  category: "Full-Stack & AI",
  summary: "Brief one-line summary",
  description: "Detailed description of the problem and solution...",
  features: [
    "Key feature 1",
    "Key feature 2"
  ],
  technicalImplementation: [
    "Architecture decision 1...",
    "Database schema and caching details..."
  ],
  technologies: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
  github: "https://github.com/peswani-mayank/your-repo",
  liveDemo: "https://your-deployment.vercel.app", // leave empty "" if not deployed yet
  themeColor: "from-cyan-500/20 to-blue-600/20",
  accentBadge: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  visualType: "travel" // or "ai-terminal"
}
```

### 3. How to Add Your Resume PDF
1. Save your resume PDF file as:
   ```
   Mayank_Peswani_CV.pdf
   ```
2. Place it directly inside the `public/resume/` directory:
   ```
   public/
   └── resume/
       └── Mayank_Peswani_CV.pdf
   ```
The portfolio's "Download Resume" buttons and links will automatically point to `/resume/Mayank_Peswani_CV.pdf`. If the file is not yet uploaded, visitors can still click "View Resume" to see and print your full interactive resume on screen!

### 4. How to Add or Update Certifications
Open [`src/data/certifications.js`](./src/data/certifications.js):
```javascript
{
  id: "certification-id",
  title: "Certification Title",
  issuer: "Issuing Organization",
  date: "Month Year",
  credentialType: "Professional Certification",
  skills: ["Skill 1", "Skill 2"],
  badgeColor: "from-amber-500/20 to-orange-500/20",
  badgeBorder: "border-amber-500/30",
  badgeText: "text-amber-400"
}
```

### 5. How to Add or Update Skills
Open [`src/data/skills.js`](./src/data/skills.js) to add or adjust competencies under:
- `Programming Languages`
- `Frameworks & Libraries`
- `Databases & Tools`
- `Core Concepts`
- `AI / ML`
- `Soft Skills`

---

## 🌐 Deployment Guide

### Deploying to Vercel (Recommended)
1. Push your repository to your GitHub account: `github.com/peswani-mayank/portfolio`.
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Click **Deploy**. Your portfolio will be live with free global CDN and SSL in less than 60 seconds!

### Deploying to Netlify
1. Go to [Netlify](https://www.netlify.com/) and click **"Import from Git"**.
2. Select your repository.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy**.

### Deploying to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install gh-pages --save-dev
   ```
2. In `vite.config.js`, set `base: '/portfolio/'` (matching your repo name).
3. Add deploy script in `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run:
   ```bash
   npm run deploy
   ```

---

## 📄 License & Attribution
Designed and developed for Mayank Peswani. All rights reserved © 2026.
