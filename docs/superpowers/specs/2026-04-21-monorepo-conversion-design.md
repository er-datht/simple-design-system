# Monorepo Conversion Design

Convert the single-package Vite + React design system project into a Yarn workspaces monorepo containing two independent apps: `web` (current project) and `admin` (new scaffold).

## Decisions

- **Monorepo tool:** Yarn workspaces (no Turborepo)
- **App directory:** `srcs/` (not `apps/` or `src/`)
- **Web app:** Current codebase moved as-is into `srcs/web/`
- **Admin app:** New minimal Vite + React + TypeScript + Tailwind scaffold in `srcs/admin/`
- **Shared packages:** None — each app is fully independent
- **Framework:** Both apps stay as Vite + React SPA (no Next.js migration)

## Target Structure

```
simple-design-system/
├── package.json              # root workspace config
├── .gitignore                # updated for monorepo
├── CLAUDE.md                 # updated for monorepo
├── srcs/
│   ├── admin/
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   ├── tsconfig.app.json
│   │   ├── tsconfig.node.json
│   │   ├── eslint.config.js
│   │   ├── index.html
│   │   └── src/
│   │       ├── main.tsx
│   │       ├── App.tsx
│   │       └── index.css
│   └── web/
│       ├── package.json
│       ├── vite.config.ts
│       ├── tsconfig.json
│       ├── tsconfig.app.json
│       ├── tsconfig.node.json
│       ├── eslint.config.js
│       ├── index.html
│       ├── figma.config.json
│       ├── src/              # all current src/ contents
│       ├── scripts/          # all current scripts/
│       ├── docs/             # all current docs/ (icon-system, figma, api guide)
│       └── public/           # all current public/
```

## Root `package.json`

```json
{
  "name": "simple-design-system",
  "private": true,
  "workspaces": ["srcs/*"],
  "scripts": {
    "admin": "yarn workspace admin",
    "web": "yarn workspace web"
  }
}
```

Usage:
- `yarn admin dev` — start admin dev server
- `yarn web dev` — start web dev server
- `yarn admin build` — build admin
- `yarn web build` — build web

## Web App (`srcs/web/`)

The current project relocated into `srcs/web/` with no code changes. All files move:
- `src/` → `srcs/web/src/`
- `scripts/` → `srcs/web/scripts/`
- `docs/` → `srcs/web/docs/`
- `public/` → `srcs/web/public/`
- Config files (`vite.config.ts`, `tsconfig*.json`, `eslint.config.js`, `index.html`, `figma.config.json`) → `srcs/web/`
- `package.json` → `srcs/web/package.json` (add `"name": "web"`)

Files that stay at root or are updated:
- `.gitignore` — stays at root, updated
- `CLAUDE.md` — stays at root, updated
- `.env.example` — moves to `srcs/web/.env.example`

Files deleted from root after move:
- `src/`, `scripts/`, `docs/`, `public/`
- `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`, `index.html`
- `figma.config.json`
- Old `package.json` (replaced with workspace config)
- `yarn.lock` (will be regenerated)

## Admin App (`srcs/admin/`)

Minimal scaffold with:
- **React 19** + **TypeScript 5** + **Vite 7** + **Tailwind CSS 4**
- Same versions as web to keep consistency
- Bare minimum files: `main.tsx`, `App.tsx`, `index.css`
- `App.tsx` renders a simple "Welcome" placeholder

### `srcs/admin/package.json`

```json
{
  "name": "admin",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "tailwindcss": "^4.1.16"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@tailwindcss/vite": "^4.1.16",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "typescript": "~5.9.3",
    "typescript-eslint": "^8.45.0",
    "vite": "^7.1.7"
  }
}
```

## `.gitignore` Updates

Updated root `.gitignore` to cover both apps:
- `node_modules` (covers all via glob)
- `dist` in each app
- `.env` in each app
- Keep ignoring `.claude/`

## What Does NOT Change

- No code modifications inside web (paths, imports, configs all stay the same)
- No shared packages or cross-app dependencies
- No migration to a different framework
- Figma integration stays in web only
