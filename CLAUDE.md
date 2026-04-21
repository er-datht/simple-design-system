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

## Workflow

### Principles

The workflow follows four OpenSpec principles:

- **Fluid not rigid** — Artifacts can be created in any order. Don't force a linear phase gate when a different sequence makes more sense for the change at hand.
- **Iterative not waterfall** — Requirements change as understanding deepens. Revisit and revise artifacts at any point.
- **Easy not complex** — Scale process to the change. A one-line fix gets a one-line proposal — not the same ceremony as a new feature.
- **Brownfield-first** — This is an existing codebase. Read the code, understand what's there, then specify *deltas* — not green-field descriptions.

### Right-Sizing the Process

Match the process to the change. Use judgment, not a checklist.

**Small changes** (typos, renames, one-line fixes, config tweaks):
- Use `opsx:propose` to create a brief proposal (can be minimal for obvious changes).
- Read the relevant code, make the change, verify it works (`yarn web build`, `yarn web lint` or `yarn admin build`, `yarn admin lint`).

**Medium changes** (new component/module, bug fix spanning multiple files, refactor):
- Review existing specs and code first to understand context.
- Use `opsx:propose` to plan the change.
- Implement, write tests where appropriate, verify.

**Large changes** (new page/feature, cross-cutting refactor):
- Full workflow: context review → `opsx:propose` → review proposal → implement → `opsx:verify` → `opsx:archive`.
- Use `opsx:verify` before archiving to validate implementation matches specs.
- Update the "Existing specs" list below when archiving.

**Multi-app changes** (change spans both admin and web apps):
- Prefix the change name with `shared/` (e.g., `shared/update-auth-flow`).
- List all affected apps in the proposal's Impact section.
- Read per-app conventions in CLAUDE.md before implementing.

### When to Use OpenSpec

Always use `opsx:propose` before implementing any change. The proposal scales to the change — a simple fix gets a brief proposal, a new feature gets a thorough one.

**OpenSpec commands:**
- `/opsx:propose "description"` — Plan a change (proposal, design, specs, tasks)
- `/opsx:apply [change-name]` — Implement tasks from a change
- `/opsx:archive [change-name]` — Archive a completed change
- `/opsx:explore [topic]` — Think through ideas (read-only)

[OpenSpec](https://github.com/Fission-AI/OpenSpec) specs live in `openspec/`.

### Change Scoping (Mono Repo)

All changes live in root `openspec/changes/`, scoped by naming convention:

| Change Scope | Naming Convention | Example |
|-------------|-------------------|---------|
| Single app | `{app-name}/{change-desc}` | `admin/add-user-mgmt`, `web/redesign-hero` |
| Shared / cross-app | `shared/{change-desc}` | `shared/update-auth-flow` |
| Infrastructure / CI | `infra/{change-desc}` | `infra/add-ci-pipeline` |

### When Requirements Change Mid-Implementation

Requirements change — this is normal. The change directory (`openspec/changes/{change-name}/`) and all its artifacts (`.openspec.yaml`, `proposal.md`, `design.md`, `tasks.md`, `specs/`) must be preserved and updated in place. Never delete a change and start over unless the direction fundamentally changed.

**Before implementation starts** (proposal exists, `opsx:apply` not yet run):
- Update the existing artifacts in place (proposal, specs, design, tasks)
- No need to create a new change

**During implementation** (some tasks done, others pending):
1. Pause implementation
2. Assess impact — which completed tasks are still valid?
3. Update `specs/` and `tasks.md` to reflect new requirements
4. Update `design.md` if technical approach changed
5. Continue implementation from where it makes sense

**After implementation** (result isn't what was wanted):
- Small adjustment: make the edit directly, update `tasks.md`
- Bigger rework: revise `specs/` first, add/update tasks in `tasks.md`, re-implement affected parts

**Completely different direction**:
- Archive or discard the current change
- Create a new change — but use the old change's artifacts as context (lessons learned, edge cases discovered)

**Key rule**: Always update artifacts to match the current truth. Specs, tasks, and design should reflect what IS being built, not the original plan.

### Archive Maintenance

When archive exceeds ~50 changes, sync all to main specs (`opsx:sync`), keep the 20 most recent archives, delete the rest. Git preserves the full history.

### Non-Code Actions (No Workflow Needed)

- Pure questions or explanations
- Git operations, running dev server, config lookups, reading files
- When the user explicitly invokes a specific `/opsx:` command directly

**Existing specs** (archived in `openspec/changes/archive/`):
[List will grow as changes are archived]
