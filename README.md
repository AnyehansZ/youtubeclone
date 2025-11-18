# ytube_clone

A small YouTube-style UI clone built with React and Vite. The project is a UI-focused playground containing components for navigation, feed, search bar, filters and a simple data set of example videos.

This README documents how to set up the project locally, what scripts are available, and where the important sources live.

## Quick summary

- Framework: React (v19)
- Bundler / Dev server: Vite
- Languages: JavaScript (JSX) + CSS
- Status: UI prototype / demo (no backend)

## Requirements

- Node.js (v16+ recommended) and npm or a compatible package manager

## Install

1. Clone the repo
2. Install dependencies

```powershell
npm install
```

## Available scripts

The project `package.json` exposes a few useful scripts:

- `npm run dev` — start the Vite dev server (hot reload)
- `npm run build` — create a production build with Vite
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the project

Run the dev server:

```powershell
npm run dev
```

Open http://localhost:5173 (or the port Vite outputs) to view the app.

## Project structure (important files)

- `index.html` — single HTML entry with the `#root` container
- `package.json` — scripts and dependencies
- `vite.config.js` — Vite configuration
- `src/main.jsx` — React entry, mounts `<App />`
- `src/App.jsx` — top-level app component, renders `<Home />`
- `src/pages/home.jsx` — home page (contains main layout and feed)
- `src/data.js` — sample data and filter options used by the UI
- `src/components/` — reusable components (navigation, feed, filters, etc.)
- `src/styles/` — CSS files for layout and components
- `public/` — static assets

From root, notable component files include:

- `src/components/top_nav_bar.jsx` — top navigation and search
- `src/components/side_nav_bar.jsx` — left navigation
- `src/components/content_feed.jsx` — main feed rendering cards

There are many small components under `src/tiny_builds/` such as `search_bar.jsx`, `menu_btn.jsx`, `profile_btn.jsx` used to compose the UI.

## Styling

The app uses plain CSS with module files under `src/styles/` (e.g., `wrapper.css`, `content_feed.css`, etc.). To change the look, edit those files or swap to a CSS preprocessor or CSS-in-JS approach.

### Example: making the microphone button a perfect circle

In `src/styles/wrapper.css` there is a rule for `.microph_btn`. To ensure a perfectly rounded button regardless of content, use equal height and width and `border-radius: 50%;` (this project already uses that). Example:

```css
.microph_btn{
	height: 3.3rem;
	width: 3.3rem;
	border-radius: 50%;
	background-color: #212121;
	border: none;
}
```

If you ever see a non-circular button, check padding, border, or box-sizing rules that might change the rendered size.

## Contribution notes

- This repo is structured as a small front-end demo. If you plan to contribute, follow these guidelines:
	- Keep components small and focused.
	- Reuse styles where appropriate in `src/styles/`.
	- Run `npm run lint` before creating a PR.

## Troubleshooting

- If the dev server won't start, ensure you have a supported Node.js version and that dependencies installed correctly.
- If you get ESLint errors, run `npm run lint` and follow the messages to fix them.

## License

No license is specified in the repository. If you want to add one, add a `LICENSE` file at the project root (for example, `MIT`).
