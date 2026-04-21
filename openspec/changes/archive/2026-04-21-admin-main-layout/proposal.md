## Why

The admin app is a bare scaffold with a single "Welcome" heading and no layout structure. It needs a main layout with header, sidebar, and footer to serve as the shell for all future admin features.

## What Changes

- Add a `MainLayout` component that composes Header, Sidebar, and Footer
- Add a `Header` component with app title and basic controls
- Add a `Sidebar` component with collapsible navigation
- Add a `Footer` component with minimal branding
- Wire `MainLayout` into `App.tsx` as the root layout shell
- Use Tailwind CSS utility classes (already available) for all styling

## Capabilities

### New Capabilities

- `admin-layout`: Main layout shell for the admin app — Header (top bar), Sidebar (left nav, collapsible), Footer (bottom bar), and content area

### Modified Capabilities

_None._

## Impact

- **Affected code**: `srcs/admin/src/App.tsx`, new files under `srcs/admin/src/layout/`
- **Dependencies**: None — uses only Tailwind CSS (already installed)
- **No changes to web app**
