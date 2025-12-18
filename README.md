# 🎬 YouTube Clone

A modern YouTube-style UI built with **React 19** and **Vite**, featuring a clean feature-based architecture with absolute imports and client-side form validation using React Hook Form and Zod.

> **Status:** UI prototype / demo. No backend integration.

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Architecture](#-architecture)
- [Absolute Imports](#-absolute-imports)
- [Styling & Responsive Design](#-styling--responsive-design)
- [Form Validation](#-form-validation)
- [Contributing](#-contributing)
- [Troubleshooting](#-troubleshooting)
- [License](#-license)

## 🚀 Quick Start

```bash
# Clone and install
git clone <repo-url>
cd youtubeclone
npm install

# Start development server
npm run dev

# Open in browser
# http://localhost:5173
```

## ✨ Features

- ✅ YouTube-inspired UI layout (responsive across all breakpoints)
- ✅ Feature-based component architecture
- ✅ Absolute imports for cleaner code
- ✅ Client-side authentication forms (login & signup)
- ✅ Form validation with **React Hook Form + Zod**
- ✅ Mock video feed with filter categories
- ✅ ESLint configured
- ✅ NPM-only (Yarn removed to avoid conflicts)

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19.1.1 |
| **Build Tool** | Vite 7.1.7 |
| **Form Validation** | React Hook Form 7.68.0 + Zod 4.2.1 |
| **Icons** | Lucide React 0.553.0 |
| **Linting** | ESLint 9.36.0 |
| **Language** | JavaScript (JSX) |
| **Styling** | Global CSS (no CSS-in-JS) |

## 📁 Project Structure

```
youtubeclone/
├── src/
│   ├── assets/                          # Static images, logos, SVGs
│   │   ├── google.svg
│   │   ├── logo.jpg
│   │   ├── poster.jpg
│   │   ├── video_pattern_image.png
│   │   ├── x.svg
│   │   └── YT/                          # YouTube-specific assets
│   │       ├── 32px-YouTube_full-color_icon_(2017).svg.png
│   │       ├── logo.svg
│   │       └── profile.jpg
│   │
│   ├── components/                      # Reusable React components
│   │   ├── common/                      # Container & layout components
│   │   │   ├── BoxWrap.jsx              # Main layout wrapper
│   │   │   ├── Card.jsx                 # YouTube-style video card
│   │   │   ├── ContentFeed.jsx          # Video feed container
│   │   │   ├── ExploreNavigation.jsx
│   │   │   ├── FilterCategories.jsx     # Category filter bar
│   │   │   ├── FooterNavigation.jsx
│   │   │   ├── HomeContent.jsx
│   │   │   ├── LogoContainer.jsx
│   │   │   ├── MoreNavigation.jsx
│   │   │   ├── OptionPageNavigation.jsx
│   │   │   ├── PageNavigation.jsx       # Primary nav (Home, Shorts, Subs)
│   │   │   ├── SearchBarContainer.jsx
│   │   │   ├── SearchToolbarWrapper.jsx
│   │   │   ├── SideNavBar.jsx           # Left sidebar
│   │   │   ├── SubscriptionNavigation.jsx
│   │   │   ├── ToolbarContainer.jsx     # Toolbar (create, notif, profile)
│   │   │   └── TopNavBar.jsx            # Top navigation bar
│   │   │
│   │   └── ui/                          # Atomic UI components
│   │       ├── CreateButton.jsx
│   │       ├── FilterButton.jsx
│   │       ├── MenuButton.jsx           # Hamburger menu
│   │       ├── MicrophoneButton.jsx
│   │       ├── NavButton.jsx
│   │       ├── NotificationButton.jsx
│   │       ├── ProfileButton.jsx
│   │       ├── SearchBar.jsx
│   │       ├── SearchButton.jsx
│   │       └── SubsButton.jsx
│   │
│   ├── features/                        # Feature-based business logic
│   │   ├── authentication/              # Auth forms & validation
│   │   │   ├── login/
│   │   │   │   └── login.jsx           # Login form (Zod validation)
│   │   │   └── signup/
│   │   │       └── sign_up.jsx         # Signup form (Zod validation)
│   │   └── home/
│   │       └── Home.jsx                 # Home page entry
│   │
│   ├── services/                        # Data layer & utilities
│   │   └── videoData.js                 # Mock video data & configs
│   │
│   ├── styles/                          # Global CSS (no modules)
│   │   ├── App.css
│   │   ├── box_wrap.css
│   │   ├── card.css                     # Card styles (responsive)
│   │   ├── content_feed.css
│   │   ├── filter.css
│   │   ├── index.css
│   │   ├── login.css                    # Login form styles
│   │   ├── navigation.css
│   │   ├── page_container.css
│   │   ├── sign_up.css                  # Signup form styles
│   │   ├── side_nav_bar.css
│   │   ├── top_nav_bar.css
│   │   └── wrapper.css
│   │
│   ├── App.jsx                          # Root component
│   ├── App.css
│   ├── main.jsx                         # React entry point
│   └── index.css
│
├── public/                              # Static assets (copied to dist)
├── index.html                           # HTML entry point
├── jsconfig.json                        # Path aliases config
├── vite.config.js                       # Vite build config
├── package.json                         # Dependencies & scripts
├── package-lock.json                    # Lockfile (NPM)
├── eslint.config.js                     # ESLint rules
└── README.md                            # This file
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm** (Yarn is not used in this project)

### Installation & Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev

# Open browser at http://localhost:5173
```

## 📜 Available Scripts

```bash
npm run dev       # Start Vite dev server with hot reload
npm run build     # Create optimized production build
npm run preview   # Preview production build locally
npm run lint      # Run ESLint to check code quality
```

## 🏗 Architecture

This project follows a **feature-based architecture**:

- **Features** are self-contained units under `src/features/<feature>/`
- Each feature contains components, styles, and logic
- Components are split into:
  - **`common/`** — Large container & layout components
  - **`ui/`** — Small reusable UI atoms (buttons, inputs, icons)
- **Services** layer handles data and constants
- **Styles** are global CSS files (no CSS-in-JS)

### Why Feature-Based?

- Scales well as the app grows
- Easier code organization and maintenance
- Clear separation of concerns
- Simple to add new features

## 🔗 Absolute Imports

Clean imports using path aliases (configured in `jsconfig.json` and `vite.config.js`):

```javascript
// Instead of:
import Button from '../../../components/ui/Button'

// Use:
import Button from '@components/ui/Button'
```

**Available aliases:**
- `@components/*` → `src/components/*`
- `@features/*` → `src/features/*`
- `@services/*` → `src/services/*`
- `@assets/*` → `src/assets/*`
- `@styles/*` → `src/styles/*`

## 🎨 Styling & Responsive Design

- **Global CSS** files in `src/styles/` (no CSS modules)
- **Responsive breakpoints** inspired by YouTube:
  - Extra Large (1920px+): 5 columns
  - Large (1366–1919px): 4 columns
  - Medium (768–1365px): 3–4 columns
  - Tablets (481–767px): 2–3 columns
  - Mobile (320–480px): 1 column

Features:
- Hover effects on cards and buttons
- Thumbnail zoom animations
- Dark mode support ready
- Accessibility support (high contrast, reduced motion)

## ✅ Form Validation

Authentication forms (login & signup) use **React Hook Form** with **Zod** for type-safe validation:

**Login Form** (`src/features/authentication/login/login.jsx`):
- Email validation (required, valid email format)
- Password validation (minimum 8 characters)

**Signup Form** (`src/features/authentication/signup/sign_up.jsx`):
- Username validation (3–30 characters)
- Email validation (required, valid format)
- Password validation (minimum 6 characters)
- Confirm password with field matching
- Custom error messages

**Example validation schema (Zod):**
```javascript
const schema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
```

> **Note:** Forms are client-side only. Submissions currently log to console.

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Open an issue** describing the feature or fix
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Keep code clean:**
   - Use absolute imports
   - Keep components focused (single responsibility)
   - Reuse UI atoms where possible
4. **Run linting** before committing:
   ```bash
   npm run lint
   ```
5. **Open a Pull Request** with a clear description

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| **Dev server won't start** | Ensure Node.js v16+, run `npm install`, then `npm run dev` |
| **Import paths failing** | Verify `jsconfig.json` and `vite.config.js` are correct; restart editor |
| **ESLint errors** | Run `npm run lint` to check and understand issues |
| **Lockfile conflicts** | This project uses npm only. Delete any `yarn.lock` if present |
| **Module not found** | Clear `node_modules/` and run `npm install` again |

## 📝 Recent Changes

- ✅ Authentication forms implemented (login & signup)
- ✅ Implemented form validation with **Zod** + React Hook Form
- ✅ Project uses **NPM only** for dependency management
- ✅ Updated README with complete project structure

## 📄 License

This project has no license specified. If you plan to publish or share it, consider adding a `LICENSE` file (e.g., MIT, Apache 2.0).

---

<div align="center">

**Made with ❤️ using React, Vite, and modern web standards**

[⬆ Back to Top](#-youtube-clone)

</div>
