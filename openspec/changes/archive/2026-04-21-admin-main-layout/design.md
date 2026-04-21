## Context

The admin app (`srcs/admin/`) has React 19, TypeScript, Vite 7, and Tailwind CSS 4 — but zero layout components. App.tsx renders a centered "Welcome" heading. We need the foundational layout shell before any admin features can be built.

## Goals / Non-Goals

**Goals:**
- Create a responsive admin layout with header, collapsible sidebar, and footer
- Use only Tailwind CSS utility classes — no custom CSS files needed
- Keep components simple and extensible for future features

**Non-Goals:**
- Routing (will be added in a separate change)
- Authentication UI
- Sharing components with the web app
- Design token integration (admin uses Tailwind defaults for now)

## Decisions

**Tailwind-only styling:** All components use Tailwind utility classes directly. The admin app doesn't have the web app's design token system, and adding it would be unnecessary coupling.
- *Alternative: import web app's theme.css* — rejected because apps are independent per CLAUDE.md.

**Sidebar with collapsible state via React useState:** Simple local state for sidebar collapse toggle. No context or state management library needed for a single boolean.
- *Alternative: React Context for layout state* — over-engineering for a single toggle.

**File structure — `src/layout/` directory:** All layout components live in `src/layout/` (Header.tsx, Sidebar.tsx, Footer.tsx, MainLayout.tsx). Flat structure, no nested directories — the admin app is small.
- *Alternative: one component per directory (like web app)* — unnecessary overhead for simple components at this stage.

## Risks / Trade-offs

**[Tailwind defaults may diverge from design system]** → Acceptable for now. When admin needs design system tokens, a dedicated change can introduce them. Premature integration adds coupling.
