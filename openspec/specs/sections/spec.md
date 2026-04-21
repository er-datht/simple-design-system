## Purpose

Composed page sections built from primitives and typography for full-page layouts.

## Requirements

### Requirement: Hero section variants
The system SHALL provide five hero section components: HeroBasic, HeroImage, HeroForm, HeroNewsletter, and HeroAction. Each hero SHALL compose primitives and typography components for a full-width landing section.

#### Scenario: HeroBasic rendering
- **WHEN** HeroBasic is rendered with a title and subtitle
- **THEN** it SHALL display a centered hero section with text content

#### Scenario: HeroForm rendering
- **WHEN** HeroForm is rendered
- **THEN** it SHALL display a hero section with an embedded form component

#### Scenario: HeroNewsletter rendering
- **WHEN** HeroNewsletter is rendered
- **THEN** it SHALL display a hero section with a newsletter signup form

### Requirement: Header and footer sections
The system SHALL provide Header, HeaderAuth, and Footer section components. Header SHALL include navigation links and theme toggle. HeaderAuth SHALL provide authentication-specific header content. Footer SHALL include navigation links and site information.

#### Scenario: Header navigation
- **WHEN** Header is rendered
- **THEN** it SHALL display navigation links corresponding to application routes

#### Scenario: Footer navigation
- **WHEN** Footer is rendered
- **THEN** it SHALL display site links and information in a footer layout

### Requirement: Card grid sections
The system SHALL provide six card grid section components: CardGridTestimonials, CardGridReviews, CardGridPricing, CardGridImage, CardGridIcon, and CardGridContentList. Each SHALL compose the corresponding card primitives into a responsive grid layout.

#### Scenario: Card grid responsive layout
- **WHEN** a CardGrid section is rendered with multiple cards
- **THEN** it SHALL display cards in a responsive grid that adapts to viewport width

#### Scenario: Pricing grid
- **WHEN** CardGridPricing is rendered
- **THEN** it SHALL display PricingCard components in a comparative layout

### Requirement: Page content sections
The system SHALL provide PageAccordion, PageNewsletter, PageProductResults, and PageProductDetail section components. PageProductResults SHALL support product filtering.

#### Scenario: PageAccordion rendering
- **WHEN** PageAccordion is rendered
- **THEN** it SHALL display expandable/collapsible content sections using Accordion primitives

#### Scenario: PageProductResults filtering
- **WHEN** PageProductResults is rendered with products
- **THEN** it SHALL support filtering and display results in a product grid

#### Scenario: PageProductDetail rendering
- **WHEN** PageProductDetail is rendered for a specific product
- **THEN** it SHALL display full product information including images, description, and pricing

### Requirement: Image and panel sections
The system SHALL provide ImageSection and PanelImageDouble section components for image-focused content layouts.

#### Scenario: Image section display
- **WHEN** ImageSection is rendered
- **THEN** it SHALL display image content within a styled section container

#### Scenario: Double image panel
- **WHEN** PanelImageDouble is rendered
- **THEN** it SHALL display two images in a side-by-side panel layout
