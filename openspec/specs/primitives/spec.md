## Purpose

Base UI component library providing foundational interactive and display elements.

## Requirements

### Requirement: Component props pattern
All primitive components SHALL define a props interface that extends the corresponding HTML element attributes (e.g., `ButtonHTMLAttributes<HTMLButtonElement>`). Each component SHALL accept an optional `className` prop for custom styling via the `cn()` utility. Components SHALL spread remaining props onto the root HTML element.

#### Scenario: Custom className merging
- **WHEN** a primitive component receives a `className` prop
- **THEN** it SHALL merge the custom class with component classes using `cn()`

#### Scenario: HTML attribute passthrough
- **WHEN** a primitive component receives standard HTML attributes (e.g., `aria-label`, `onClick`)
- **THEN** those attributes SHALL be passed through to the root HTML element

### Requirement: Button components
The system SHALL provide four button components: Button, ButtonDanger, IconButton, and ButtonGroup.

Button SHALL support `variant` prop with values "primary" (default), "neutral", "subtle" and `size` prop with values "sm", "md" (default). Button SHALL accept `iconStart` and `iconEnd` ReactNode props for icon placement. Button SHALL support a `disabled` prop that applies disabled styling and prevents interaction.

#### Scenario: Button default rendering
- **WHEN** a Button is rendered without explicit variant or size
- **THEN** it SHALL render with variant "primary" and size "md"

#### Scenario: Button with icons
- **WHEN** a Button receives `iconStart` or `iconEnd` props
- **THEN** it SHALL render the icons inline alongside the button text

#### Scenario: Disabled button
- **WHEN** a Button has `disabled={true}`
- **THEN** it SHALL apply disabled styling and the HTML `disabled` attribute

### Requirement: Input components
The system SHALL provide input primitives: InputField, CheckboxField, CheckboxGroup, RadioField, RadioGroup, SelectField, SearchField, TextareaField, SliderField, and SwitchField. Each input SHALL support `label`, `placeholder`, `disabled`, `errorMessage`, and `hasError` props as applicable.

#### Scenario: Input with error state
- **WHEN** an input component receives `hasError={true}` and an `errorMessage`
- **THEN** it SHALL display the error message and apply error styling

#### Scenario: Disabled input
- **WHEN** an input component receives `disabled={true}`
- **THEN** it SHALL prevent user interaction and apply disabled styling

### Requirement: Card components
The system SHALL provide Card, PricingCard, ProductInfoCard, ReviewCard, and StatsCard components. Each card variant SHALL accept content-specific props appropriate to its purpose.

#### Scenario: Card renders content
- **WHEN** a Card component receives children
- **THEN** it SHALL render the content within a styled card container

### Requirement: Avatar components
The system SHALL provide Avatar, AvatarBlock, and AvatarGroup components. Avatar SHALL display a user image or fallback. AvatarGroup SHALL display multiple avatars in an overlapping layout.

#### Scenario: Avatar group display
- **WHEN** AvatarGroup receives multiple avatar items
- **THEN** it SHALL render them in an overlapping stack

### Requirement: Navigation components
The system SHALL provide NavigationList and NavigationPillList components for rendering lists of navigation links with different visual styles.

#### Scenario: Navigation rendering
- **WHEN** NavigationList or NavigationPillList receives navigation items
- **THEN** it SHALL render each item as a navigable link

### Requirement: Accordion component
The system SHALL provide Accordion and AccordionItem components. AccordionItem SHALL support expand/collapse behavior with a title and content section.

#### Scenario: Accordion toggle
- **WHEN** a user interacts with an AccordionItem
- **THEN** it SHALL toggle between expanded and collapsed states

### Requirement: Tab component
The system SHALL provide a Tabs component for switching between tabbed content panels.

#### Scenario: Tab selection
- **WHEN** a user selects a tab
- **THEN** the corresponding content panel SHALL be displayed

### Requirement: Tag components
The system SHALL provide Tag (static label), TagToggle (toggleable tag), and TagToggleGroup (group of toggleable tags) components.

#### Scenario: Tag toggle interaction
- **WHEN** a user clicks a TagToggle
- **THEN** it SHALL toggle between selected and unselected states

### Requirement: Image component
The system SHALL provide an Image component that wraps the HTML `<img>` element with consistent styling.

#### Scenario: Image rendering
- **WHEN** Image receives a `src` prop
- **THEN** it SHALL render an `<img>` element with the provided source

### Requirement: Icon component
The system SHALL provide a base Icon component that accepts an icon component and optional `size` prop for rendering SVG icons.

#### Scenario: Icon sizing
- **WHEN** Icon receives a `size` prop
- **THEN** it SHALL render the icon at the specified dimensions

### Requirement: TestimonialCard component
The system SHALL provide a TestimonialCard component for displaying user testimonials with quote text and attribution.

#### Scenario: Testimonial rendering
- **WHEN** TestimonialCard receives testimonial content
- **THEN** it SHALL display the quote and author information
