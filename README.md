# ytube_clone

A YouTube-style UI clone built with React and Vite using a feature-based directory structure with absolute imports.

## Table of Contents

- [Quick Summary](#quick-summary)
- [Requirements](#requirements)
- [Setup & Run](#setup--run)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Absolute Imports](#absolute-imports)
- [Architecture](#architecture)
- [Styling](#styling)
- [Contributing](#contributing)
- [Troubleshooting](#troubleshooting)
- [Tech Stack](#tech-stack)
- [License](#license)

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

```
ytube_clone/
├── src/
│   ├── assets/                      # Static images and logos
│   │   ├── logo.jpg                 # Generic logo image
│   │   ├── poster.jpg               # Video poster/thumbnail placeholder
│   │   └── YT/                      # YouTube-specific assets
│   │       ├── logo.svg             # YouTube logo (used in TopNavBar)
│   │       ├── profile.jpg          # Channel profile images
│   │       └── 32px-YouTube_full-color_icon_(2017).svg.png  # Favicon
│   │
│   ├── components/                  # Reusable React components
│   │   ├── common/                  # Large layout & container components
│   │   │   ├── TopNavBar.jsx        # Top navigation (logo, search, toolbar)
│   │   │   ├── SideNavBar.jsx       # Left sidebar with navigation
│   │   │   ├── BoxWrap.jsx          # Main layout wrapper (sidebar + content)
│   │   │   ├── ContentFeed.jsx      # Feed container with filter
│   │   │   ├── Card.jsx             # YouTube-style video card (RESPONSIVE)
│   │   │   ├── FilterCategories.jsx # Category filter bar
│   │   │   ├── SearchBarContainer.jsx # Search bar wrapper
│   │   │   ├── ToolbarContainer.jsx # Toolbar (create, notif, profile)
│   │   │   ├── PageNavigation.jsx   # Primary nav (Home, Shorts, Subs)
│   │   │   ├── OptionPageNavigation.jsx # User options (History, Playlist)
│   │   │   ├── SubscriptionNavigation.jsx # Subscriptions list
│   │   │   ├── ExploreNavigation.jsx # Explore categories
│   │   │   ├── MoreNavigation.jsx   # Additional options
│   │   │   ├── FooterNavigation.jsx # Footer links
│   │   │   ├── SearchToolbarWrapper.jsx # Search + toolbar combo
│   │   │   └── LogoContainer.jsx    # Logo + menu button
│   │   │
│   │   └── ui/                      # Small reusable UI components (atoms)
│   │       ├── MenuButton.jsx       # Hamburger menu icon
│   │       ├── SearchBar.jsx        # Search input field
│   │       ├── SearchButton.jsx     # Search icon button
│   │       ├── MicrophoneButton.jsx # Voice search button (perfect circle)
│   │       ├── FilterButton.jsx     # Individual filter category buttons
│   │       ├── NavButton.jsx        # Base navigation button
│   │       ├── CreateButton.jsx     # Create/upload video button
│   │       ├── NotificationButton.jsx # Notifications bell icon
│   │       ├── ProfileButton.jsx    # Profile/account dropdown
│   │       └── SubsButton.jsx       # Subscription channel buttons
│   │
│   ├── features/                    # Feature-based business logic
│   │   └── home/
│   │       └── Home.jsx             # Home page main entry point
│   │
│   ├── services/                    # Data, API calls, constants
│   │   └── videoData.js             # Sample video data (9 videos)
│   │                                # Filter configurations
│   │                                # Categories and metadata
│   │
│   ├── hooks/                       # Custom React hooks (future use)
│   │
│   ├── utils/                       # Utility functions (future use)
│   │
│   ├── styles/                      # Global CSS files (NO CSS modules)
│   │   ├── card.css                 # YouTube-style cards (9 breakpoints)
│   │   ├── content_feed.css         # Feed grid layout (responsive)
│   │   ├── wrapper.css              # Buttons, toolbar, search styles
│   │   ├── navigation.css           # Nav buttons & sidebar styles
│   │   ├── filter.css               # Filter bar styles
│   │   ├── page_container.css       # Page layout container
│   │   ├── box_wrap.css             # Main wrapper layout
│   │   ├── top_nav_bar.css          # Top bar styles
│   │   ├── side_nav_bar.css         # Sidebar styles
│   │   ├── App.css                  # Root app styles
│   │   └── index.css                # Global styles
│   │
│   ├── App.jsx                      # Root component
│   ├── App.css
│   ├── main.jsx                     # React entry point (renders App)
│   └── index.css
│
├── public/                          # Static files served directly
│   └── 32px-YouTube_full-color_icon_(2017).svg.png  # Favicon
│
├── index.html                       # Single HTML entry point
├── jsconfig.json                    # Absolute import path aliases
├── vite.config.js                   # Vite build configuration
├── package.json                     # Dependencies & npm scripts
├── package-lock.json                # Dependency lock file
├── eslint.config.js                 # ESLint configuration
└── README.md                        # This file
```

### Key Directories Explained

**`src/components/common/`** — Container & layout components
- Large, composed components that represent major UI sections
- Examples: TopNavBar, SideNavBar, Card, ContentFeed
- Import and orchestrate smaller UI components

**`src/components/ui/`** — Atomic UI components
- Small, single-purpose components (buttons, inputs, icons)
- Reusable across multiple container components
- Examples: MenuButton, SearchBar, CreateButton

**`src/features/home/`** — Feature entry point
- Currently contains Home.jsx (home page)
- Extensible: add more features like `src/features/search/`, `src/features/watch/`, etc.
- Each feature contains its own logic and component orchestration

**`src/services/`** — Data & API layer
- videoData.js contains mock data and configurations
- Ready to replace with real API calls
- Centralized data source for all components

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
