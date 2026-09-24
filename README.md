# Abdulrahman Saeed Elshafie — Personal Portfolio Website

Production-ready personal portfolio website for **Abdulrahman Saeed Elshafie**, Backend & AI Engineer. Built with **Astro**, Vanilla CSS, and modern web design principles to communicate a clear chain:

```
Business Problem → User Need → Strategy → Backend / AI System → Automation → Outcome
```

---

## 1. Positioning & Strategy

The portfolio deliberately positions Abdulrahman around his core identity and key differentiators:

- **Primary Identity:** Backend & AI Engineer
- **Differentiators:** Digital marketing background, business/user-oriented thinking, backend engineering (Django, DRF, PostgreSQL), LLM/AI workflows, and resilient automation (OpenCV, state machines).
- **Core Message:** *"I build backend systems, AI workflows, and automation around real user and business problems."*

---

## 2. Technology Stack

- **Framework:** [Astro v5](https://astro.build/) (Static Site Generation)
- **Styling:** Custom Vanilla CSS Design System (no Tailwind bloat, maximum performance and design control)
- **Typography:** Inter (Sans) & JetBrains Mono (Code/System Annotations)
- **SEO & Metadata:** Automated XML Sitemap (`@astrojs/sitemap`), Open Graph, Twitter Cards, Schema.org JSON-LD (Person, WebSite, Breadcrumbs, SoftwareSourceCode)
- **Hosting & CI/CD:** GitHub Pages with automated GitHub Actions workflow

---

## 3. Project Structure

```
d:\Elshafie\
├── .github/
│   └── workflows/
│       └── deploy.yml              # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── assets/
│   │   └── resume-abdulrahman-elshafie.pdf   # Resume PDF download
│   ├── og/
│   │   └── og-image.svg            # Open Graph social preview asset
│   ├── CNAME                       # Custom domain (abdulrahman-saeed-elshafie.com)
│   ├── favicon.svg                 # SVG favicon
│   └── robots.txt                  # Search engine crawlers config
├── src/
│   ├── components/
│   │   ├── CTASection.astro        # High-conversion contextual CTA
│   │   ├── ExperienceCard.astro    # Career timeline & verified achievements
│   │   ├── Footer.astro            # Site footer & contact channels
│   │   ├── Header.astro            # Sticky navigation & mobile menu
│   │   ├── ProjectCard.astro       # Problem-System-Outcome mini case study
│   │   ├── SEOHead.astro           # Meta tags & JSON-LD structured data
│   │   ├── SkillCluster.astro      # Competencies mapped to project evidence
│   │   └── SystemDiagram.astro     # Architectural flow visual
│   ├── data/
│   │   ├── experience.ts           # Career history data (Soda Marketing AI, etc.)
│   │   ├── profile.ts              # Authoritative personal profile & contact info
│   │   ├── projects.ts             # In-depth case studies (AutoWA, DocManager, Autowritey)
│   │   └── skills.ts               # 4 categorized skill clusters with evidence links
│   ├── layouts/
│   │   └── BaseLayout.astro        # Base HTML document shell
│   ├── pages/
│   │   ├── index.astro             # Homepage
│   │   ├── about.astro             # About, education, certifications & philosophy
│   │   ├── contact.astro           # Direct contact channels & inquiry checklist
│   │   └── work/
│   │       ├── index.astro         # Case studies directory
│   │       ├── autowa.astro        # AutoWA WhatsApp automation case study
│   │       ├── docmanager.astro    # DocManager Django API case study
│   │       └── autowritey.astro    # Autowritey 11-stage LLM pipeline case study
│   └── styles/
│       └── global.css              # Design tokens, typography, and utility classes
├── astro.config.mjs                # Astro configuration (site URL & sitemap)
├── package.json
└── README.md
```

---

## 4. Local Development

### Prerequisites

- **Node.js:** v18.20.8+, v20.3.0+, or v22.0.0+ (Tested on v22.11.0)
- **NPM:** 9.6.5+

### Installation & Run

1. Clone or navigate to the repository:
   ```bash
   cd d:\Elshafie
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   *As per repository guidelines, to run in background mode: `astro dev --background`*

4. Open `http://localhost:4321/` in your browser.

---

## 5. Building for Production

To generate the static bundle in `./dist`:

```bash
npm run build
```

To preview the built static output locally:

```bash
npm run preview
```

---

## 6. Deployment to GitHub Pages

The repository includes a ready-to-run GitHub Actions workflow in `.github/workflows/deploy.yml`.

### Deployment Steps:

1. Push your repository to GitHub (`main` or `master` branch):
   ```bash
   git add .
   git commit -m "feat: complete portfolio design and build"
   git push origin main
   ```

2. In your GitHub repository settings:
   - Navigate to **Settings** → **Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions**.

3. The GitHub Actions workflow will automatically:
   - Install dependencies with `npm ci`.
   - Run `npm run build` to statically compile all HTML, CSS, assets, and sitemaps into `./dist`.
   - Deploy the static artifact to GitHub Pages.

### Custom Domain Configuration

- The domain is set to `abdulrahman-saeed-elshafie.com`.
- `public/CNAME` already contains `abdulrahman-saeed-elshafie.com` and is automatically copied to `dist/CNAME` during build.
- Configure your DNS provider:
  - Add an `A` record pointing to GitHub Pages IPs (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
  - Or add a `CNAME` record pointing to `<username>.github.io`.

---

## 7. Content Management Guide

All content is cleanly separated from layout components for effortless updates:

### Updating Profile & Contact Details
- Edit [`src/data/profile.ts`](file:///d:/Elshafie/src/data/profile.ts) to update phone, email, bio, LinkedIn, GitHub, or education records.

### Updating Case Studies & Projects
- Edit [`src/data/projects.ts`](file:///d:/Elshafie/src/data/projects.ts) to add or refine project case studies, technical decisions, architecture steps, or repository links.

### Updating Work Experience
- Edit [`src/data/experience.ts`](file:///d:/Elshafie/src/data/experience.ts) to adjust career timeline entries, verified achievements, and metrics.

### Updating Skills & Proof Links
- Edit [`src/data/skills.ts`](file:///d:/Elshafie/src/data/skills.ts) to add competencies and link them to projects.

### Updating the Resume File
- Place your final compiled resume PDF at:
  ```
  public/assets/resume-abdulrahman-elshafie.pdf
  ```
  *(A valid placeholder exists at this path)*.

---

## 8. SEO, Accessibility & Performance Standards

- **Semantic Hierarchy:** Single `<h1>` per page, clean `<h2>`/`<h3>` hierarchy.
- **Structured Data:** Full JSON-LD schema for `Person`, `WebSite`, `BreadcrumbList`, and `SoftwareSourceCode`.
- **Accessibility:** WCAG 2.2 AA compliant contrast, native skip-to-content link, keyboard navigable controls, and `prefers-reduced-motion` support.
- **Zero Client Hydration Bloat:** Fully static generation with zero unnecessary client-side JavaScript.
