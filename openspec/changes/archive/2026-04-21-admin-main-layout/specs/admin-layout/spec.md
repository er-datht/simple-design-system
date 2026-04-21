## ADDED Requirements

### Requirement: MainLayout composes Header, Sidebar, and Footer
The MainLayout component SHALL render a full-viewport layout with Header at the top, Sidebar on the left, a scrollable content area, and Footer at the bottom. The layout SHALL fill the full viewport height.

#### Scenario: Layout structure
- **WHEN** MainLayout is rendered with children
- **THEN** it SHALL display Header spanning the full width at top, Sidebar on the left side, children in the main content area, and Footer at the bottom of the content area

#### Scenario: Content area scrolling
- **WHEN** the content exceeds the viewport height
- **THEN** the main content area SHALL scroll independently while Header and Sidebar remain fixed

### Requirement: Header displays app title and sidebar toggle
The Header component SHALL render a top bar with a hamburger/toggle button to collapse/expand the sidebar and the application title "Admin". It SHALL be fixed at the top of the viewport.

#### Scenario: Header rendering
- **WHEN** Header is rendered
- **THEN** it SHALL display a sidebar toggle button and the text "Admin"

#### Scenario: Sidebar toggle click
- **WHEN** the user clicks the sidebar toggle button in the Header
- **THEN** it SHALL invoke the onToggleSidebar callback

### Requirement: Sidebar with collapsible navigation
The Sidebar component SHALL render a vertical navigation panel on the left side. It SHALL support collapsed and expanded states. When expanded, it SHALL show icon and label for each nav item. When collapsed, it SHALL show only the icon.

#### Scenario: Expanded sidebar
- **WHEN** the sidebar is in expanded state
- **THEN** it SHALL display navigation items with both icon and label text, with a width of approximately 16rem

#### Scenario: Collapsed sidebar
- **WHEN** the sidebar is in collapsed state
- **THEN** it SHALL display navigation items with only icons, with a narrow width of approximately 4rem

#### Scenario: Default navigation items
- **WHEN** the Sidebar is rendered without custom items
- **THEN** it SHALL display default navigation items: Dashboard, Users, Settings

### Requirement: Footer displays branding
The Footer component SHALL render a bottom bar within the content area displaying copyright text.

#### Scenario: Footer rendering
- **WHEN** Footer is rendered
- **THEN** it SHALL display copyright text "© 2026 Admin Panel"

### Requirement: App.tsx uses MainLayout
App.tsx SHALL render MainLayout as the root layout shell with placeholder content in the main content area.

#### Scenario: App renders with layout
- **WHEN** the admin app loads
- **THEN** it SHALL display the full layout (Header, Sidebar, Footer) with placeholder content
