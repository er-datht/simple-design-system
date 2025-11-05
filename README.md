# Figma Code Connect - Icon System

A React + TypeScript project that demonstrates automated icon generation from Figma using the Figma Code Connect API. This project fetches icon components from Figma, generates React components, and creates Code Connect documentation to sync your design system with your codebase.

## Features

- **Automated Icon Generation**: Fetch icon components directly from Figma and generate React components
- **Figma Code Connect Integration**: Automatically create Code Connect documentation linking Figma components to React code
- **Type-Safe Components**: All icons are TypeScript-based with proper prop types
- **Customizable Sizes**: Icons support multiple size variants (20, 24, 32, 40, 48)
- **Tailwind CSS**: Styled with Tailwind CSS for easy integration
- **Fast Development**: Built with Vite for instant HMR and optimized builds

## Tech Stack

- **React 19** with React DOM
- **TypeScript** for type safety
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Figma Code Connect** for design-code synchronization
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A Figma account with access to an icon library
- Figma Access Token (get it from [Figma Settings](https://www.figma.com/developers/api#access-tokens))

### Installation

```bash
# Install dependencies
yarn install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
FIGMA_ACCESS_TOKEN=your_figma_access_token
FIGMA_FILE_KEY=your_figma_file_key
```

### Development

```bash
# Start the development server
yarn dev

# Generate icons from Figma (without REST API call)
yarn script:icons

# Generate icons from Figma (with fresh REST API call)
yarn script:icons:rest

# Build for production
yarn build

# Preview production build
yarn preview
```

## Icon System

This project includes an automated icon generation system that syncs with Figma. See [docs/icon-system.md](./docs/icon-system.md) for detailed documentation on how the icon system works.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

