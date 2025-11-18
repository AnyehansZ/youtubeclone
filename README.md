# ytube_clone

A YouTube-style UI clone built with React and Vite using a feature-based directory structure with absolute imports.

## Quick Summary

- **Framework:** React v19
- **Bundler / Dev:** Vite
- **Languages:** JavaScript (JSX) + CSS
- **Architecture:** Feature-based with absolute imports
- **Status:** UI prototype / demo (no backend)

## Requirements

- Node.js (v16+) and npm

## Setup & Run

1. Clone the repo
2. Install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open http://localhost:5173

## Available Scripts

- `npm run dev` — start Vite dev server (hot reload)
- `npm run build` — create production build
- `npm run preview` — preview production build locally
- `npm run lint` — run ESLint

## Project Structure

src/
├── assets/                    # Static images, logos
├── components/
│   ├── common/               # Layout & container components
│   └── ui/                   # Small reusable UI atoms
├── features/                 # Feature-based code
│   └── home/
├── services/                 # Data & constants
├── hooks/                    # Custom hooks (future)
├── utils/                    # Utilities (future)
├── styles/                   # Global CSS
├── App.jsx
└── main.jsx

## Absolute Imports

This project uses path aliases for clean imports:

Available aliases:
- @components/* → src/components/*
- @features/* → src/features/*
- @services/* → src/services/*
- @hooks/* → src/hooks/*
- @utils/* → src/utils/*
- @assets/* → src/assets/*
- @styles/* → src/styles/*

## Architecture

### Feature-Based Organization
- Code organized by feature, not by type
- /src/features/home/ contains all home page code

### Components
- **components/common/** — Layout & container components
- **components/ui/** — Tiny, reusable UI atoms

### Services
- services/videoData.js holds sample data and filter configs

## Styling

### Responsive Breakpoints
- Extra Large (1920px+): 5 columns
- Large (1366-1919px): 4 columns
- Medium (768-1365px): 3-4 columns
- Small Tablets (481-767px): 2-3 columns
- Mobile (320-480px): 1 column

### Features
- YouTube-style video cards with hover effects
- Thumbnail zoom animation
- Circular channel avatars
- Dark mode support
- High contrast mode support
- Reduced motion support
- Keyboard navigation support

## Contributing

When adding code:
1. Keep components small with one purpose
2. Use absolute imports
3. Co-locate related code together
4. Follow the folder structure
5. Run npm run lint before committing

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Dev server won't start | Check Node.js (16+), run npm install |
| Import errors | Restart VS Code, verify jsconfig.json |
| Absolute imports failing | Check vite.config.js resolve.alias |
| ESLint errors | Run npm run lint |

## Tech Stack

- React 19.1.1
- Vite 7.1.7
- Lucide React 0.553.0
- ESLint 9.36.0

## License

No license specified. Add a LICENSE file (MIT, Apache 2.0, etc.).

---

Made with ❤️ using React, Vite, and modern web standards.
