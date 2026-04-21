## Purpose

Light/dark theme management with React Context, localStorage persistence, and data-theme attribute.

## Requirements

### Requirement: Theme type constraint
The system SHALL support exactly two themes: "light" and "dark". The Theme type SHALL be a union of these two string literals.

#### Scenario: Valid theme values
- **WHEN** setting a theme value
- **THEN** only "light" or "dark" SHALL be accepted

### Requirement: ThemeProvider component
The system SHALL provide a `ThemeProvider` React component that wraps the application and provides theme context to all descendants. It SHALL accept a `children: ReactNode` prop.

#### Scenario: Provider renders children
- **WHEN** ThemeProvider wraps child components
- **THEN** children SHALL render with access to theme context

#### Scenario: Default theme
- **WHEN** ThemeProvider initializes with no stored preference
- **THEN** the theme SHALL default to "light"

### Requirement: Theme persistence
The system SHALL persist the selected theme to localStorage under the key "theme-preference". On initialization, the system SHALL read from localStorage and restore the previously selected theme. If localStorage is unavailable or contains an invalid value, the system SHALL fall back to the default theme.

#### Scenario: Theme persists across page loads
- **WHEN** a user selects "dark" theme and reloads the page
- **THEN** the theme SHALL be "dark" after reload

#### Scenario: Invalid stored value
- **WHEN** localStorage contains an invalid theme value (not "light" or "dark")
- **THEN** the system SHALL fall back to "light"

#### Scenario: localStorage unavailable
- **WHEN** localStorage is not available (e.g., private browsing restrictions)
- **THEN** the system SHALL use the default theme without errors

### Requirement: Theme application via data attribute
The system SHALL apply the active theme by setting `data-theme` on `document.documentElement`. This attribute SHALL update whenever the theme changes.

#### Scenario: Theme attribute set on change
- **WHEN** the theme changes from "light" to "dark"
- **THEN** `document.documentElement` SHALL have `data-theme="dark"`

### Requirement: useTheme hook
The system SHALL provide a `useTheme()` hook that returns `{ theme, setTheme, toggleTheme }`. The hook SHALL throw an error if used outside of ThemeProvider.

#### Scenario: Hook returns current theme
- **WHEN** `useTheme()` is called within ThemeProvider
- **THEN** it SHALL return the current theme value, a `setTheme` function, and a `toggleTheme` function

#### Scenario: Hook outside provider
- **WHEN** `useTheme()` is called outside of ThemeProvider
- **THEN** it SHALL throw an error with message "useTheme must be used within a ThemeProvider"

#### Scenario: Toggle theme
- **WHEN** `toggleTheme()` is called while theme is "light"
- **THEN** theme SHALL change to "dark" and vice versa
