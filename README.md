# Malik NAIRI — Portfolio

Portfolio personnel de **Malik NAIRI**, Ingénieur Backend & Intégration (Banque & Assurance, Transformation Digitale). Site bilingue (FR par défaut / EN), construit avec Next.js, Tailwind CSS et Framer Motion.

/ Personal portfolio of **Malik NAIRI**, Backend & Integration Engineer (Banking & Insurance, Digital Transformation). Bilingual site (French default / English), built with Next.js, Tailwind CSS and Framer Motion.

## Features

- 🌍 Bilingue FR/EN (next-intl) — le français est la langue par défaut
- 🌙 Thème clair/sombre
- ✨ Animations fluides (Framer Motion)
- 📱 Design responsive
- ⚡ Performances optimisées

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **i18n:** next-intl
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the site opens in French by default; use the language switcher for English.

## Content & Customization

Content is stored in localization files (keep both in sync):

- `src/i18n/locales/fr.json` — French (source of truth)
- `src/i18n/locales/en.json` — English

Some sections also hold hardcoded data in their components — when you change a key/count in the JSON, update the matching array in the component:

- `src/components/skills.tsx` — skill categories + soft-skills index loop
- `src/components/experience.tsx` — `descriptionCounts`
- `src/components/projects.tsx` — `projectsData` (keys, technologies, images)
- `src/components/certifications.tsx` — certifications, education, involvement
- `src/components/about.tsx` — stat values + daily-tech tags

### Project screenshots

1. Add images to `public/images/projects/<project>/`
2. Set the `image` property on the matching entry in `src/components/projects.tsx`

### CV

The CV PDF lives in `public/images/` and is served by the CV button.

## Deployment

Deployed on Vercel — pushed builds deploy automatically.

## Contact

- **Email:** nairimalek10@gmail.com
- **LinkedIn:** [linkedin.com/in/malik-nairi-388129172](https://linkedin.com/in/malik-nairi-388129172)

## License

MIT License.
