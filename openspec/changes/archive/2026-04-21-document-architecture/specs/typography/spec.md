## ADDED Requirements

### Requirement: Semantic text components
The system SHALL provide 18 typography components organized by semantic purpose. Each component SHALL integrate with design tokens for consistent styling and SHALL accept an optional `className` prop.

#### Scenario: Typography component list
- **WHEN** the typography module is imported
- **THEN** the following components SHALL be available: Text, TextSmall, TextCode, TextEmphasis, TextStrong, TextHeading, TextSubheading, TextLink, TextLinkList, TextLinkListItem, TextList, TextListItem, TextPrice, TextTitleHero, TextTitlePage, TextSubtitle, TextContentHeading, TextContentTitle

### Requirement: Body text components
Text SHALL render body-level text. TextSmall SHALL render smaller body text. TextCode SHALL render inline code with monospace font. TextEmphasis SHALL render emphasized (italic) text. TextStrong SHALL render strong (bold) text.

#### Scenario: Body text rendering
- **WHEN** Text receives children content
- **THEN** it SHALL render with the base body font and line height

#### Scenario: Code text rendering
- **WHEN** TextCode receives children content
- **THEN** it SHALL render with the code font (`--sds-font-body-code`)

### Requirement: Heading components
TextHeading SHALL render section headings. TextSubheading SHALL render secondary headings. TextTitleHero SHALL render large hero-level titles. TextTitlePage SHALL render page-level titles. TextContentHeading and TextContentTitle SHALL render content section headings.

#### Scenario: Heading hierarchy
- **WHEN** heading components are rendered
- **THEN** TextTitleHero SHALL be visually largest, followed by TextTitlePage, TextHeading, TextSubheading, TextContentHeading, TextContentTitle in decreasing prominence

### Requirement: Link components
TextLink SHALL render navigable links. TextLinkList SHALL render a list of links. TextLinkListItem SHALL render individual items within a TextLinkList.

#### Scenario: Link rendering
- **WHEN** TextLink receives an `href` or routing target
- **THEN** it SHALL render as a navigable anchor element

### Requirement: List components
TextList SHALL render ordered or unordered lists. TextListItem SHALL render individual list items within a TextList.

#### Scenario: List rendering
- **WHEN** TextList receives TextListItem children
- **THEN** it SHALL render a structured list

### Requirement: Price component
TextPrice SHALL render monetary values with appropriate formatting and styling for e-commerce contexts.

#### Scenario: Price display
- **WHEN** TextPrice receives a price value
- **THEN** it SHALL render with price-specific typography styling

### Requirement: Subtitle component
TextSubtitle SHALL render subtitle text, typically used beneath titles or headings for supporting context.

#### Scenario: Subtitle rendering
- **WHEN** TextSubtitle receives content
- **THEN** it SHALL render with subtitle-specific styling distinct from body text
