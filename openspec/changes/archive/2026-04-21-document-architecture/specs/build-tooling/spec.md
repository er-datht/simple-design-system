## ADDED Requirements

### Requirement: Yarn workspaces monorepo
The system SHALL use Yarn workspaces with two packages: `srcs/admin` and `srcs/web`. The root `package.json` SHALL define workspace scripts (`yarn admin <cmd>` and `yarn web <cmd>`) that target the respective workspace. The root package SHALL be marked as private.

#### Scenario: Workspace command execution
- **WHEN** `yarn web dev` is run from the project root
- **THEN** the `dev` script in `srcs/web/package.json` SHALL execute

#### Scenario: Independent dependency installation
- **WHEN** `yarn install` is run from the project root
- **THEN** dependencies for both workspaces SHALL be installed

### Requirement: Vite build configuration
The web app SHALL use Vite 7 with `@vitejs/plugin-react` and `@tailwindcss/vite` plugins. The build configuration SHALL include manual chunk splitting: "react-vendor" (react + react-dom), "vendor" (other node_modules), "icons" (`/src/ui/icons/`), and "ui-primitives" (`/src/ui/primitives/`). The chunk size warning limit SHALL be set to 1000 KB.

#### Scenario: Build produces optimized chunks
- **WHEN** `yarn web build` is run
- **THEN** the output SHALL contain separate chunks for react-vendor, vendor, icons, and ui-primitives

#### Scenario: Admin build configuration
- **WHEN** `yarn admin build` is run
- **THEN** it SHALL use Vite with React and Tailwind plugins (no custom chunk splitting)

### Requirement: TypeScript configuration
Both apps SHALL use TypeScript with strict mode enabled, targeting ES2022 with ESNext modules and bundler module resolution. Strict checks SHALL include `noUnusedLocals`, `noUnusedParameters`, and `noFallthroughCasesInSwitch`.

#### Scenario: Type checking on build
- **WHEN** `yarn web build` is run
- **THEN** TypeScript type checking (`tsc -b`) SHALL execute before the Vite build

### Requirement: ESLint configuration
Both apps SHALL use ESLint 9 with flat config format, extending `@eslint/js`, `typescript-eslint`, `react-hooks`, and `react-refresh` plugins. The configuration SHALL target browser globals and ECMAScript 2020.

#### Scenario: Lint check
- **WHEN** `yarn web lint` is run
- **THEN** ESLint SHALL check all source files against the configured rules

### Requirement: CSS architecture
The web app SHALL use Tailwind CSS 4 via its Vite plugin. Styles SHALL be organized as: `index.css` (entry point) importing `tailwindcss`, `reset.css`, `theme.css`, `icons.css`, and component-specific CSS files (`button.css`, `tabs.css`, `navigation.css`, `container.css`). Component CSS SHALL use `@layer components` for Tailwind integration.

#### Scenario: CSS import chain
- **WHEN** the application loads
- **THEN** styles SHALL load in order: Tailwind base, reset, theme tokens, icons, component styles

#### Scenario: Component CSS layers
- **WHEN** component-specific styles are defined (e.g., button.css)
- **THEN** they SHALL use `@layer components` to integrate with Tailwind's cascade
