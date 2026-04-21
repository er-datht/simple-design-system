## ADDED Requirements

### Requirement: Color primitive tokens
The system SHALL define CSS custom properties for color primitives using the naming convention `--sds-color-{family}-{shade}`. Color families SHALL include: black, brand, gray, green, pink, red, slate, white, and yellow. Each family SHALL provide shades at 100, 200, 300, 400, 500, 600, 700, 800, 900, and 1000.

#### Scenario: Color primitive availability
- **WHEN** the application loads theme.css
- **THEN** all 90 color primitive tokens (9 families x 10 shades) SHALL be defined on `:root`

#### Scenario: Token naming format
- **WHEN** referencing a color primitive
- **THEN** the token name SHALL follow the pattern `--sds-color-{family}-{shade}` where family is lowercase and shade is a multiple of 100 up to 1000

### Requirement: Semantic color tokens
The system SHALL define semantic color tokens that map to color primitives. Semantic tokens SHALL be organized by usage category (background, border, icon, text) and intent (brand, danger, default, disabled, neutral, positive, utilities, warning). Each category-intent combination SHALL provide default, hover, secondary, and tertiary variants where applicable.

#### Scenario: Semantic token indirection
- **WHEN** a component uses a semantic token like `--sds-color-background-brand-default`
- **THEN** the token SHALL resolve to a color primitive value (e.g., `var(--sds-color-brand-800)` in light theme)

#### Scenario: Background tokens
- **WHEN** the light theme is active
- **THEN** background tokens SHALL be defined for intents: brand, danger, default, disabled, neutral, positive, utilities, and warning

#### Scenario: Border tokens
- **WHEN** the light theme is active
- **THEN** border tokens SHALL be defined for intents: brand, danger, default, disabled, neutral, positive, utilities, and warning

#### Scenario: Icon tokens
- **WHEN** the light theme is active
- **THEN** icon tokens SHALL be defined with `on-{intent}` variants for use on colored backgrounds

#### Scenario: Text tokens
- **WHEN** the light theme is active
- **THEN** text tokens SHALL be defined for intents: brand, danger, default, disabled, neutral, positive, and warning

### Requirement: Light and dark theme token sets
The system SHALL define light theme semantic tokens on `:root` and `html[data-theme="light"]`. The system SHALL define dark theme semantic tokens on `html[data-theme="dark"]`. Dark theme tokens SHALL invert the shade mappings (e.g., light backgrounds use light shades, dark backgrounds use dark shades).

#### Scenario: Light theme activation
- **WHEN** `data-theme="light"` is set on the HTML element (or no data-theme is set)
- **THEN** semantic tokens SHALL resolve to light-appropriate color primitive values

#### Scenario: Dark theme activation
- **WHEN** `data-theme="dark"` is set on the HTML element
- **THEN** semantic tokens SHALL resolve to dark-appropriate color primitive values with inverted shade mappings

### Requirement: Global layout and typography variables
The system SHALL define global CSS variables for layout constraints and typography defaults in index.css. These SHALL include: `--global-focus-ring-size`, `--global-focus-ring-color`, `--global-line-height-body` (1.6), `--global-line-height-paragraph` (1.4), `--global-container-max-width` (75rem), `--global-dialog-max-width` (32rem), z-index layers (`--global-stack-top`, `--global-stack-focus`, `--global-stack-dialog-backdrop`, `--global-stack-dialog-container`), and font stacks (`--sds-font-body-base`, `--sds-font-heading`, `--sds-font-body-code`).

#### Scenario: Container max width
- **WHEN** a layout container is rendered
- **THEN** `--global-container-max-width` SHALL be 75rem

#### Scenario: Z-index layering
- **WHEN** multiple overlapping elements are rendered
- **THEN** z-index layers SHALL follow the order: top (999) < dialog-backdrop (9999) < dialog-container (99999)
