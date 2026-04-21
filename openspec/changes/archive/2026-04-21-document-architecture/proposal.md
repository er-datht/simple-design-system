## Why

The codebase has a rich design system with 16+ primitive component families, 18 typography components, 14+ composed sections, a full forms system, 287 icons, design tokens, theming, and Figma integration — but none of this is captured as formal specifications. Documenting the existing architecture as OpenSpec specs creates a living reference that guides future changes, onboards new contributors, and ensures consistency as the system evolves.

## What Changes

- Create spec files documenting each major capability of the existing system
- No code changes — this is a documentation-only change
- Specs describe current behavior and contracts, not aspirational design

## Capabilities

### New Capabilities

- `design-tokens`: CSS custom property system (`--sds-*` naming), color primitives (8 families x 10 shades), semantic color variables (background, border, icon, text), light/dark theme mapping, global layout/typography variables
- `theming`: ThemeContext provider, light/dark toggle, localStorage persistence, `data-theme` attribute on HTML, `useTheme()` hook
- `primitives`: Base component library — Button (4 variants), Input (9 types), Card (5 types), Avatar (3), Navigation (2), Accordion, Tabs, Tags (3), Image, Icon, TestimonialCard. Props interfaces extending HTML attributes, `cn()` class merging, variant/size props
- `typography`: 18 semantic text components (TextHeading, TextSubtitle, TextPrice, TextLink, TextCode, etc.) with design token integration
- `sections`: Composed page sections built from primitives — Hero (5 variants), Header/Footer, CardGrid (6 types), PageAccordion, PageNewsletter, PageProductResults, PageProductDetail, ImageSection, PanelImageDouble
- `forms`: Two-layer form system — primitive inputs, React Hook Form wrappers (`*RHF` components with Controller pattern), complete form components (Newsletter, Login, Register, Contact, Shipping, ForgotPassword), Zod validation schemas
- `routing`: React Router v7 configuration, ROUTES constants (13 routes), Container layout wrapper, 11 page components
- `icons`: 287 auto-generated Feather icon components from Figma, generation scripts (cached + REST modes), individual size-prop components
- `figma-integration`: Code Connect files mirroring component hierarchy, publish scripts, icon generation pipeline, environment variables (FIGMA_ACCESS_TOKEN, FIGMA_FILE_KEY, FIGMA_ICONS_BASE)
- `build-tooling`: Vite 7 + React plugin + Tailwind CSS 4 vite plugin, chunk optimization strategy (react vendor, other vendor, icons, UI primitives), TypeScript strict mode (ES2022), ESLint 9 flat config, Yarn workspaces monorepo structure

### Modified Capabilities

_None — all specs are new._

## Impact

- **New files**: 10 spec files under `openspec/specs/`
- **No code changes**: Existing source code is unaffected
- **Future changes**: All subsequent OpenSpec changes can reference these specs for context and delta tracking
