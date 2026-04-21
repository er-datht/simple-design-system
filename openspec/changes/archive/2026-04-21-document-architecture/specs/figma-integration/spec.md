## ADDED Requirements

### Requirement: Figma Code Connect files
The system SHALL maintain Figma Code Connect files in `src/figma/` that mirror the component hierarchy (primitives, sections, typography, forms, icons). Each Code Connect file (`.figma.tsx`) SHALL map a Figma component to its React implementation.

#### Scenario: Code Connect structure
- **WHEN** a new component is added to the design system
- **THEN** a corresponding `.figma.tsx` file SHALL be created in the `src/figma/` directory following the same organizational structure

### Requirement: Figma publish script
The system SHALL provide a `script:figma-publish` command that publishes Code Connect files to Figma, enabling designers to see live code references alongside their designs.

#### Scenario: Publishing Code Connects
- **WHEN** `yarn web script:figma-publish` is run
- **THEN** all Code Connect definitions SHALL be published to the Figma file

### Requirement: Figma environment variables
The system SHALL require three environment variables for Figma integration, stored in `srcs/web/.env`:
- `FIGMA_ACCESS_TOKEN` — authentication token for Figma API
- `FIGMA_FILE_KEY` — identifier of the Figma design file
- `FIGMA_ICONS_BASE` — base node identifier for the icon set in Figma

#### Scenario: Missing environment variables
- **WHEN** a Figma script is run without required environment variables
- **THEN** the script SHALL fail with a clear error indicating which variables are missing
