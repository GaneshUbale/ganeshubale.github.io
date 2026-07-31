# 🚀 Elegant Modern Resume for GitHub Pages

An ultra-attractive, modern, glassmorphism-styled interactive resume and portfolio webpage built to be hosted on **GitHub Pages**.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

---

## ✨ Features

- 🎨 **Modern Design Aesthetics**: Glassmorphism cards, glowing ambient neon accents, dark & light theme toggle.
- ⚡ **Interactive Elements**: Typewriter text header, particle canvas background, project category filter buttons, animated skill bars.
- 📄 **PDF Export / Print Ready**: Press `PDF` or `Ctrl+P / Cmd+P` to generate a clean, printer-friendly PDF resume automatically formatted via `@media print` CSS.
- 📱 **100% Fully Responsive**: Pixel-perfect layout across mobile, tablet, and desktop screens with custom slide-out navigation.
- ⚙️ **Centralized Configuration**: Easily edit all your content (Name, Experience, Skills, Projects, Social links, Contact info) in a single clean file: `resume-data.js`.
- 🌐 **Zero Dependencies / No Build Step**: Uses pure HTML5, CSS3, and JavaScript — perfect for instant deployment on GitHub Pages!

---

## 🛠️ How to Customize Your Resume

All content is managed in [`resume-data.js`](file:///Users/ganesh.ubale/Documents/antigravity/elegant-chandrasekhar/resume-data.js):

1. **Personal Info**: Update your Name, Job Titles, Bio, Location, Email, and Social links.
2. **Work Experience**: Add your work history, achievements bullet points, and tech stack tags.
3. **Skills**: Add or modify categories and skill progress percentages.
4. **Projects**: List your key projects, descriptions, live demo links, and GitHub repository links.
5. **Education & Certifications**: Update your academic degrees and professional certifications.

---

## 🌐 How to Publish on GitHub Pages

1. **Initialize & Push your repository to GitHub**:
   ```bash
   git add .
   git commit -m "Deploy elegant resume webpage"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your GitHub Repository -> **Settings**.
   - Click on **Pages** in the left sidebar menu.
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
   - Choose **Branch: `main`** and **Folder: `/ (root)`**, then click **Save**.

3. **Enjoy your live URL!**
   Your webpage will be live in ~60 seconds at:
   `https://<your-github-username>.github.io/<your-repo-name>/`
