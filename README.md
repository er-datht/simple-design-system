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

## Scripts

Some example integrations are available in `scripts` directory. They may require additional API scope that your org may or may not have access to. Where possible, there are some plugin examples to help fill gaps.

### [scripts/icons](./scripts/icons)

- `npm run script:icons:rest`
- Gets all icons from the file, and generates components in the [src/ui/icons](./src/ui/icons) directory.
- Also generates [src/figma/icons/Icons.figma.tsx](./src/figma/icons/Icons.figma.tsx) for Code Connect.

### [scripts/tokens](./scripts/tokens)

- `npm run script:tokens:rest`
- Gets all variables and styles from Figma, and converts them to [src/theme.css](./src/theme.css).
- Creates [scripts/tokens/tokensCodeSyntaxes.js](./scripts/tokens/tokensCodeSyntaxes.js) which is a script you can run in the JS console in Figma to update all the variable's [codeSyntaxes](https://www.figma.com/plugin-docs/api/Variable/#codesyntax) with CSS that matches this repo.
- Includes some example plugins for how to get the same data without the Variables REST API.
  - [Install plugins](https://www.figma.com/plugin-docs/plugin-quickstart-guide/) in Development
  - Run plugins, and copy plugin outputs into [scripts/tokens/styles.json](./scripts/tokens/styles.json) and [scripts/tokens/tokens.json](./scripts/tokens/tokens.json)
  - Run `npm run script:tokens` (without `:rest`) and it will reference the JSON files directly without making a REST API request to update them

## Figma Code Connect Publisher ([script:figma-publish](./scripts/figma-publish))

This script publishes Code Connect documentation to Figma, making your React component props and usage examples visible in Figma Dev Mode.

### Prerequisites

- `.env` file in the repository root with `FIGMA_ACCESS_TOKEN`
- Code Connect files (`.figma.tsx`) in your codebase
- `@figma/code-connect` package installed

### Usage

#### Publish All Code Connect Files (Default)

```bash
yarn script:figma-publish
```

This will publish all Code Connect files configured in `figma.config.json`.

#### Publish from Specific Directory

```bash
yarn script:figma-publish src/figma/primitives/navigation
```

Pass a directory path as an argument to publish only Code Connect files from that directory.

#### Examples

```bash
# Publish only navigation components
yarn script:figma-publish src/figma/primitives/navigation

# Publish only tabs components
yarn script:figma-publish src/figma/primitives/tabs

# Publish only icons
yarn script:figma-publish src/figma/icons

# Publish all primitives
yarn script:figma-publish src/figma/primitives

# Publish all Code Connect files
yarn script:figma-publish
```

### How It Works

1. Reads `FIGMA_ACCESS_TOKEN` from `.env` file
2. Runs from the repository root (to find component source files for import resolution)
3. If a directory is provided, uses `--dir` flag to specify the target directory
4. Runs `npx figma connect publish --token=<token>` with optional `--dir` parameter

### Environment Variables

Required in `.env`:

```env
FIGMA_ACCESS_TOKEN=figd_...  # Get from Figma account settings
```

### What Gets Published

The script publishes Code Connect documentation defined in:

- `src/figma/primitives/*.figma.tsx` - Primitive components
- `src/figma/icons/Icons.figma.tsx` - Auto-generated icon components
- Any other `.figma.tsx` files in configured paths

### Configuration

The `figma.config.json` in the repository root controls which files are included:

```json
{
  "codeConnect": {
    "include": ["src/ui/primitives/**/*.{tsx,jsx}"],
    "label": "React"
  }
}
```

### Troubleshooting

#### "FIGMA_ACCESS_TOKEN not found"

- Ensure `.env` file exists in repository root
- Check that `FIGMA_ACCESS_TOKEN` is set correctly

#### "Failed to publish Code Connect"

- Verify your Figma access token is valid
- Ensure Code Connect files have valid syntax
- Check that component node IDs match your Figma file

#### No Components Published

- Verify directory path is correct
- Check that `.figma.tsx` files exist in the target directory
- Ensure `figma.config.json` includes the correct file patterns

### Related Scripts

- `yarn script:icons` - Generate icon components from Figma
- `yarn script:icons:rest` - Fetch fresh icon data and regenerate
- `yarn script:dev-resources` - Manage dev resource links

### Learn More

- [Figma Code Connect Documentation](https://www.figma.com/developers/code-connect)
- [Code Connect CLI Reference](https://github.com/figma/code-connect)
