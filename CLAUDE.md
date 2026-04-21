# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Monorepo Structure

Yarn workspaces monorepo with two independent apps under `srcs/`:

- **`srcs/admin/`** — Admin app (Vite + React 19 + TypeScript + Tailwind CSS 4) — empty scaffold
- **`srcs/web/`** — Design system showcase app (Vite + React 19 + TypeScript + Tailwind CSS 4)

No shared packages — each app is fully independent.

## Commands

```bash
# Workspace commands (run from root)
yarn admin dev           # Start admin dev server
yarn admin build         # Build admin (tsc + vite build)
yarn admin lint          # Lint admin
yarn web dev             # Start web dev server
yarn web build           # Build web
yarn web lint            # Lint web

# Install all dependencies
yarn install

# Web-specific Figma scripts
yarn web script:icons          # Generate icon components from Figma (cached)
yarn web script:icons:rest     # Generate icon components from Figma (fresh API call)
yarn web script:figma-publish  # Publish Code Connect to Figma
```

## Web App Architecture (`srcs/web/`)

### Component Hierarchy

- **`src/ui/primitives/`** — Base components (Button, Card, Avatar, Input, Tag, Accordion, Tabs, etc.). Each uses a props interface extending HTML attributes, supports `className` via `cn()` utility, and has variant/size props.
- **`src/ui/sections/`** — Composed page sections (Hero variants, Footer, CardGrid variants) built from primitives.
- **`src/ui/typography/`** — Semantic text components (TextHeading, TextSubtitle, TextPrice, TextLink, etc.).
- **`src/ui/forms/`** — Complete form components (FormContact, FormLogIn, FormRegister, etc.) with Zod schemas in `schemas.ts`.
- **`src/ui/forms-rhf/`** — React Hook Form wrappers around primitive inputs.
- **`src/ui/icons/`** — 290+ auto-generated icon components from Figma. Do not edit manually.
- **`src/ui/layout/Container/`** — Root layout component wrapping routes with Header and Footer.

### Pages and Routing

- Routes defined in `src/routes/index.ts` (ROUTES constants) and configured in `src/routes/useRoute.tsx`.
- All routed pages live in `src/pages/`.
- `src/components/` contains `*Demo.tsx` files for the DemosPage.

### Key Patterns

- `cn()` from `src/utils/cn.ts` (wraps `classnames`) for conditional CSS class merging.
- `ThemeContext` in `src/utils/ThemeContext.tsx` for light/dark theme toggling.
- Forms use React Hook Form + Zod resolvers; schemas in `src/ui/forms/schemas.ts`.
- Design tokens as CSS custom properties in `src/theme.css` (`--sds-*` naming).
- Figma Code Connect files in `src/figma/` directory.

## Admin App (`srcs/admin/`)

Minimal scaffold — Vite + React + TypeScript + Tailwind CSS.

## Environment Variables

Required for web Figma scripts only (place in `srcs/web/.env`):
- `FIGMA_ACCESS_TOKEN`
- `FIGMA_FILE_KEY`
- `FIGMA_ICONS_BASE`
