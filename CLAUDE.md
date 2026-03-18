# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (Vite)
npm run build      # Type-check + production build (tsc -b && vite build)
npm run lint       # Run ESLint
npm run preview    # Preview production build locally
```

## Architecture

**Velvet Whisk** is a static React 19 + TypeScript website for a bakery concept. No backend — all data lives in JSON files.

### Tech Stack
- **React 19** + **TypeScript** (strict mode)
- **Vite 7** for bundling
- **Tailwind CSS 4** for styling
- **React Router 7** for client-side routing

### Data Flow
All content is driven by static JSON files in `src/assets/data/`:
- `menu.json` — menu items with slugs, descriptions, prices, categories
- `reviews.json` — customer testimonials
- `locations.json` — store locations

No global state management. Components use local `useState`/`useEffect` for filtering. The Product detail page (`/menu/:itemSlug`) uses React Router's **loader pattern** to fetch from `menu.json` by slug.

### Routing (App.tsx)
All pages are nested under `MainLayout` (which provides Header/Footer via `<Outlet />`):

| Route | Component |
|---|---|
| `/` | LandingPage |
| `/about` | AboutUs |
| `/menu` | Menu (category filtering) |
| `/menu/:itemSlug` | Product (loader-based) |
| `/reviews` | Testimonials |
| `/order` | Order |
| `*` | PageNotFound |

### Component Conventions
- Pages in `src/pages/`, reusable UI in `src/components/`, route layout in `src/layouts/`
- TypeScript types for data shapes are in `src/types/dataTypes.d.ts`
- `ScrollToTop.tsx` is rendered in the router to reset scroll position on navigation
