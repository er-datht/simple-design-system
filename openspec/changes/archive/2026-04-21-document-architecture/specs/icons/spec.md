## ADDED Requirements

### Requirement: Auto-generated icon components
The system SHALL provide approximately 287 individual icon components in `ui/icons/`, auto-generated from Figma. Each icon component SHALL be a React component rendering an SVG element. Icon files SHALL NOT be edited manually.

#### Scenario: Icon component rendering
- **WHEN** an icon component (e.g., `IconActivity`, `IconAlertCircle`) is rendered
- **THEN** it SHALL render an inline SVG element

#### Scenario: Icon size prop
- **WHEN** an icon component receives a `size` prop
- **THEN** it SHALL render at the specified dimensions

### Requirement: Icon barrel export
The system SHALL export all icon components from a single `ui/icons/index.ts` barrel file for convenient importing.

#### Scenario: Icon import
- **WHEN** a consumer imports an icon
- **THEN** it SHALL be importable from the icons barrel export (e.g., `import { IconActivity } from "../ui/icons"`)

### Requirement: Icon generation from Figma
The system SHALL provide two icon generation scripts:
- `script:icons` — generates icon components from Figma with local caching
- `script:icons:rest` — generates icon components from Figma via fresh REST API call (no cache)

Both scripts SHALL read from Figma using environment variables `FIGMA_ACCESS_TOKEN`, `FIGMA_FILE_KEY`, and `FIGMA_ICONS_BASE` defined in `srcs/web/.env`.

#### Scenario: Cached icon generation
- **WHEN** `yarn web script:icons` is run
- **THEN** icon components SHALL be generated, using cached Figma data when available

#### Scenario: Fresh icon generation
- **WHEN** `yarn web script:icons:rest` is run
- **THEN** icon components SHALL be generated from a fresh Figma API call, bypassing cache

### Requirement: Build optimization for icons
The system SHALL configure Vite to bundle all icon components into a separate "icons" chunk to keep the main bundle size manageable.

#### Scenario: Icons chunk splitting
- **WHEN** the application is built
- **THEN** files matching `/src/ui/icons/` SHALL be placed in a separate "icons" chunk
