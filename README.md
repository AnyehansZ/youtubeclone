# ytube_clone# ytube_clone



A YouTube-style UI clone built with React and Vite using a **feature-based directory structure** with absolute imports. This project demonstrates modern React patterns with organized, maintainable code.A small YouTube-style UI clone built with React and Vite. The project is a UI-focused playground containing components for navigation, feed, search bar, filters and a simple data set of example videos.



## Quick summaryThis README documents how to set up the project locally, what scripts are available, and where the important sources live.



- **Framework:** React v19## Quick summary

- **Bundler / Dev:** Vite

- **Languages:** JavaScript (JSX) + CSS- Framework: React (v19)

- **Architecture:** Feature-based with absolute imports- Bundler / Dev server: Vite

- **Status:** UI prototype / demo (no backend)- Languages: JavaScript (JSX) + CSS

- Status: UI prototype / demo (no backend)

## Requirements

## Requirements

- Node.js (v16+) and npm

- Node.js (v16+ recommended) and npm or a compatible package manager

## Setup & Run

## Install

1. Clone the repo

2. Install dependencies:1. Clone the repo

   ```powershell2. Install dependencies

   npm install

   ``````powershell

3. Start the dev server:npm install

   ```powershell```

   npm run dev

   ```## Available scripts

4. Open http://localhost:5173 in your browser

The project `package.json` exposes a few useful scripts:

## Available scripts

- `npm run dev` — start the Vite dev server (hot reload)

- `npm run dev` — start Vite dev server (hot reload on file changes)- `npm run build` — create a production build with Vite

- `npm run build` — create production build- `npm run preview` — locally preview the production build

- `npm run preview` — preview the production build locally- `npm run lint` — run ESLint across the project

- `npm run lint` — run ESLint across the project

Run the dev server:

## Project structure

```powershell

```npm run dev

src/```

├── assets/                          # Static images, icons, logos

│   └── YT/Open http://localhost:5173 (or the port Vite outputs) to view the app.

│       └── logo.svg

├── components/                      # Reusable UI components## Project structure (important files)

│   ├── common/                      # Larger layout & container components

│   │   ├── TopNavBar.jsx- `index.html` — single HTML entry with the `#root` container

│   │   ├── SideNavBar.jsx- `package.json` — scripts and dependencies

│   │   ├── BoxWrap.jsx- `vite.config.js` — Vite configuration

│   │   ├── ContentFeed.jsx- `src/main.jsx` — React entry, mounts `<App />`

│   │   ├── Card.jsx- `src/App.jsx` — top-level app component, renders `<Home />`

│   │   ├── FilterCategories.jsx- `src/pages/home.jsx` — home page (contains main layout and feed)

│   │   ├── SearchBarContainer.jsx- `src/data.js` — sample data and filter options used by the UI

│   │   ├── ToolbarContainer.jsx- `src/components/` — reusable components (navigation, feed, filters, etc.)

│   │   ├── PageNavigation.jsx- `src/styles/` — CSS files for layout and components

│   │   └── ...- `public/` — static assets

│   └── ui/                          # Small button & icon components

│       ├── MenuButton.jsxFrom root, notable component files include:

│       ├── SearchBar.jsx

│       ├── MicrophoneButton.jsx- `src/components/top_nav_bar.jsx` — top navigation and search

│       ├── FilterButton.jsx- `src/components/side_nav_bar.jsx` — left navigation

│       └── ...- `src/components/content_feed.jsx` — main feed rendering cards

├── features/                        # Feature-based business logic

│   └── home/There are many small components under `src/tiny_builds/` such as `search_bar.jsx`, `menu_btn.jsx`, `profile_btn.jsx` used to compose the UI.

│       └── Home.jsx                 # Home page entry point

├── services/                        # Data, API calls, constants## Styling

│   └── videoData.js                 # Sample video data & filters

├── hooks/                           # Custom React hooks (future expansion)The app uses plain CSS with module files under `src/styles/` (e.g., `wrapper.css`, `content_feed.css`, etc.). To change the look, edit those files or swap to a CSS preprocessor or CSS-in-JS approach.

├── utils/                           # Utility functions (future expansion)

├── styles/                          # Global CSS files### Example: making the microphone button a perfect circle

│   ├── wrapper.css

│   ├── navigation.cssIn `src/styles/wrapper.css` there is a rule for `.microph_btn`. To ensure a perfectly rounded button regardless of content, use equal height and width and `border-radius: 50%;` (this project already uses that). Example:

│   ├── content_feed.css

│   ├── box_wrap.css```css

│   └── ....microph_btn{

├── App.jsx                          # Root component	height: 3.3rem;

├── App.css	width: 3.3rem;

├── main.jsx                         # React entry point	border-radius: 50%;

└── index.css	background-color: #212121;

	border: none;

index.html                           # Single HTML entry point}

jsconfig.json                        # Absolute import path aliases```

vite.config.js                       # Vite configuration

package.json                         # Dependencies & scriptsIf you ever see a non-circular button, check padding, border, or box-sizing rules that might change the rendered size.

```

## Contribution notes

## Absolute imports (no more `../../../`)

- This repo is structured as a small front-end demo. If you plan to contribute, follow these guidelines:

This project uses **path aliases** configured in `jsconfig.json`. All imports use clean absolute paths:	- Keep components small and focused.

	- Reuse styles where appropriate in `src/styles/`.

```javascript	- Run `npm run lint` before creating a PR.

// Instead of this mess:

// import Button from '../../../components/ui/Button'## Troubleshooting

// import styles from '../../../../styles/wrapper.css'

- If the dev server won't start, ensure you have a supported Node.js version and that dependencies installed correctly.

// You can write clean imports:- If you get ESLint errors, run `npm run lint` and follow the messages to fix them.
import Button from '@components/ui/Button';
import '@styles/wrapper.css';
import { videos } from '@services/videoData';
import TopNavBar from '@components/common/TopNavBar';
```

### Available aliases
- `@components/*` → `src/components/*`
- `@features/*` → `src/features/*`
- `@services/*` → `src/services/*`
- `@hooks/*` → `src/hooks/*`
- `@utils/*` → `src/utils/*`
- `@assets/*` → `src/assets/*`
- `@styles/*` → `src/styles/*`

## Architecture decisions

### Feature-based structure
Code is organized by feature, not by type. Related components, logic, and styles live together:
- `/src/features/home/` contains all home page code
- Easier to find, modify, and maintain related code
- Scales better as the app grows

### Components organization
- **`components/common/`** — Layout & container components (TopNavBar, SideNavBar, etc.)
- **`components/ui/`** — Tiny, reusable UI atoms (buttons, inputs, etc.)
- Keeps concerns separated and promotes reusability

### Services layer
- `services/videoData.js` holds sample data and filter configurations
- Centralized data source for components

## Styling

The project uses **plain CSS** in `src/styles/`. Each major component or layout has its own CSS file:
- `wrapper.css` — buttons, toolbars, input styles
- `navigation.css` — nav buttons, sidebar styles
- `content_feed.css` — video card layout
- etc.

### Example: Perfect circular button

The `.microph_btn` class (in `wrapper.css`) uses these properties for a perfect circle:

```css
.microph_btn {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-radius: 50%;
  height: 3.3rem;
  width: 3.3rem;
  background-color: #212121;
  border: none;
  overflow: hidden;
}
```

**Key points for circular buttons:**
- Equal `width` and `height`
- `border-radius: 50%`
- `box-sizing: border-box` to prevent padding from increasing size
- `display: inline-flex` with centering for content

## Contributing

When adding new code:
1. **Keep components small** — each component should have one clear purpose
2. **Use absolute imports** — no relative `../../` paths
3. **Co-locate related code** — group components that change together
4. **Respect the structure:**
   - Add new UI atoms to `components/ui/`
   - Add containers to `components/common/`
   - New features go in `features/[feature-name]/`
   - Shared data/constants go to `services/`
5. **Run `npm run lint`** before committing

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Dev server won't start | Check Node.js version (16+), run `npm install` |
| Import errors (red squiggles) | Restart VS Code, check path aliases in `jsconfig.json` |
| ESLint errors | Run `npm run lint` and fix reported issues |
| Absolute imports not working | Verify `jsconfig.json` path aliases are correct |

## License

No license specified. Add a `LICENSE` file (e.g., MIT) if needed.

---

**Next steps:** Add more features by creating new folders in `src/features/`, organize new components in `components/`, and keep the import paths clean using the aliases!
