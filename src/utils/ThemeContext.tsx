import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "theme-preference";
const DEFAULT_THEME: Theme = "light";

/**
 * Gets the stored theme preference from localStorage
 * Returns null if not found or invalid
 */
function getStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return null;
  } catch {
    // localStorage not available or error reading
    return null;
  }
}

/**
 * Stores the theme preference in localStorage
 */
function setStoredTheme(theme: Theme): void {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // localStorage not available or error writing
    // Fail silently - theme will still work for current session
  }
}

/**
 * Applies theme to HTML element by setting data-theme attribute
 */
function applyTheme(theme: Theme): void {
  const html = document.documentElement;
  html.setAttribute("data-theme", theme);
}

export type ThemeProviderProps = {
  children: ReactNode;
};

/**
 * ThemeProvider component manages application theme state
 *
 * Features:
 * - Supports "light" and "dark" themes
 * - Persists theme choice to localStorage
 * - Applies theme via data-theme attribute on <html> element
 * - Defaults to "light" theme
 * - Handles edge cases: no localStorage, invalid values
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  // Initialize theme from localStorage or default to "light"
  const [theme, setThemeState] = useState<Theme>(() => {
    const stored = getStoredTheme();
    return stored ?? DEFAULT_THEME;
  });

  // Update theme and persist to localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    setStoredTheme(newTheme);
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Apply theme to HTML element when theme changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

/**
 * Hook to access theme context
 * Must be used within ThemeProvider
 *
 * @example
 * ```tsx
 * const { theme, setTheme, toggleTheme } = useTheme();
 * ```
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
