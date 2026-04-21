## Purpose

Application routing with React Router v7, route constants, layout wrapper, and page components.

## Requirements

### Requirement: Route constants
The system SHALL define route paths as a `ROUTES` constant object in `routes/index.ts`. The following routes SHALL be defined: HOME ("/"), COMPONENTS ("/components"), PRODUCTS ("/products"), SOLUTIONS ("/solutions"), COMMUNITY ("/community"), RESOURCES ("/resources"), PRICING ("/pricing"), ABOUT ("/about"), CONTACT ("/contact"), WAITLIST ("/waitlist"), LANDING ("/landing"), ARTICLE ("/article"), SHOP ("/shop"), PRODUCT ("/product/:id"), and NOT_FOUND ("*").

#### Scenario: Route constant usage
- **WHEN** a component references a route path
- **THEN** it SHALL use the ROUTES constant (e.g., `ROUTES.HOME`) rather than a hardcoded string

#### Scenario: Dynamic product route
- **WHEN** navigating to a product detail page
- **THEN** the PRODUCT route SHALL accept a dynamic `:id` parameter

### Requirement: Route configuration with layout wrapper
The system SHALL configure routes using React Router v7's `createBrowserRouter`. All page routes (except NotFound) SHALL be nested under a parent route that renders the `Container` component with `withLayout` prop, providing consistent Header and Footer across pages. The NotFoundPage SHALL render without the layout wrapper.

#### Scenario: Pages render within layout
- **WHEN** a user navigates to any defined route (e.g., "/about", "/pricing")
- **THEN** the page SHALL render within the Container layout with Header and Footer

#### Scenario: Not found page renders without layout
- **WHEN** a user navigates to an undefined route
- **THEN** the NotFoundPage SHALL render without the Container layout

### Requirement: Page components
The system SHALL provide 11 page components mapped to routes: HomePage (HOME), DemosPage (COMPONENTS), AboutPage (ABOUT), ContactUsPage (CONTACT), PricingPage (PRICING), WaitlistPage (WAITLIST), LandingPage (LANDING), ArticlePage (ARTICLE), ShopPage (SHOP), ProductDetailPage (PRODUCT), and NotFoundPage (NOT_FOUND).

#### Scenario: Route-to-page mapping
- **WHEN** a user navigates to a route
- **THEN** the corresponding page component SHALL be rendered

### Requirement: Container layout component
The system SHALL provide a Container component in `ui/layout/Container/` that serves as the root layout wrapper. When rendered with `withLayout` prop, it SHALL include the Header and Footer sections around the page content.

#### Scenario: Layout with header and footer
- **WHEN** Container is rendered with `withLayout={true}`
- **THEN** it SHALL render Header above and Footer below the child content
