# Icon System Documentation

This document explains how the automated icon generation system works in this project, syncing icon components from Figma to React components.

## Overview

The icon system automatically fetches icon components from Figma, generates React components, and creates Figma Code Connect documentation. This creates a seamless bridge between your design system in Figma and your codebase.

## Architecture

### Directory Structure

```
project-root/
├── scripts/icons/
│   ├── app.mjs                  # Main script for icon generation
│   ├── icons.json               # Generated icon data from Figma
│   ├── icons-index.txt          # Generated index export file
│   └── Icons.figma.txt          # Generated Code Connect imports
├── src/
│   ├── ui/
│   │   ├── icons/               # Generated icon components
│   │   │   ├── IconActivity.tsx
│   │   │   ├── IconAirplay.tsx
│   │   │   ├── ...
│   │   │   └── index.ts         # Auto-generated exports
│   │   └── primitives/
│   │       └── Icon.tsx         # Base Icon component
│   └── figma/
│       └── icons/
│           └── Icons.figma.tsx  # Code Connect documentation
└── .env                         # Figma credentials (not committed)
```

## How It Works

### 1. Figma Setup

The script connects to a specific Figma file and navigates to the icon components using:

- `FIGMA_FILE_KEY`: The file identifier from your Figma URL
- `ROOT_TRAVERSE_IDS`: Node IDs that navigate from root to the icon component parent
- `ICON_VARIANT_NAME`: The specific variant to export (e.g., "Size=16")

### 2. Icon Generation Process

The `app.mjs` script performs the following steps:

#### Step 1: Fetch Icon Data from Figma

```bash
yarn script:icons:rest
```

This command:
1. Calls the Figma REST API to get all components in the file
2. Traverses the component tree to find icon components
3. Fetches SVG data for each icon
4. Generates icon metadata (name, node ID, SVG paths)
5. Saves data to `icons.json`, `icons-index.txt`, and `Icons.figma.txt`

#### Step 2: Generate React Components

The script processes the JSON data and:
1. Creates individual React component files for each icon in `src/ui/icons/`
2. Generates an `index.ts` file that exports all icons
3. Creates a `Icons.figma.tsx` file with Code Connect documentation

#### Step 3: Using Cached Data (Optional)

```bash
yarn script:icons
```

This command uses the `--skip-rest-api` flag to skip the Figma API call and generate components from the existing `icons.json` file. This is useful when you only want to modify the output templates without fetching fresh data from Figma.

## Icon Component Structure

### Base Icon Component

All icons use a base `Icon` component (located at `src/ui/primitives/Icon.tsx`) that handles:

- Size variants (20, 24, 32, 40, 48)
- Stroke colors using CSS variables
- Consistent viewBox and styling

### Generated Icon Component

Each generated icon looks like this:

```tsx
import { Icon, type IconProps } from "../primitives/Icon";

export const IconActivity = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M14.6666 8H12L9.99998 14L5.99998 2L3.99998 8H1.33331"
      stroke="var(--svg-stroke-color)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
```

## Usage

### Importing Icons

```tsx
import { IconActivity, IconAirplay, IconAlertCircle } from "./ui/icons";
```

### Using Icons in Components

```tsx
function MyComponent() {
  return (
    <div>
      <IconActivity size="24" />
      <IconAirplay size="32" />
      <IconAlertCircle size="40" />
    </div>
  );
}
```

### Available Size Props

- `"20"` - 20x20px
- `"24"` - 24x24px (default)
- `"32"` - 32x32px
- `"40"` - 40x40px
- `"48"` - 48x48px

## Figma Code Connect

The generated `Icons.figma.tsx` file creates Code Connect documentation that links each Figma component to its React counterpart:

```tsx
figma.connect(
  IconActivity,
  "<FIGMA_ICONS_BASE>?node-id=4039:13018",
  {
    props: {
      size: figma.enum("Size", {
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48"
      })
    },
    example: ({ size }) => <IconActivity size={size} />
  }
);
```

This enables:
- Automatic prop mapping between Figma variants and React props
- In-Figma code examples showing how to use the component
- Bidirectional navigation between design and code

## Configuration

### Environment Variables

Create a `.env` file in the project root:

```env
FIGMA_ACCESS_TOKEN=your_personal_access_token
FIGMA_FILE_KEY=your_figma_file_key
```

#### Getting Your Figma Access Token

1. Go to [Figma Settings](https://www.figma.com/settings)
2. Scroll to "Personal Access Tokens"
3. Click "Create new token"
4. Copy the token to your `.env` file

#### Getting Your Figma File Key

The file key is in your Figma URL:
```
https://www.figma.com/file/[FILE_KEY]/[FILE_NAME]
```

### Script Configuration

Edit `scripts/icons/app.mjs` to customize:

```javascript
// The variant to export (must match your Figma variant property)
const ICON_VARIANT_NAME = "Size=16";

// Path from root to icon components
// Navigate: Page > Section > Components
const ROOT_TRAVERSE_IDS = ["7809:18809", "522:12152"];
```

## Workflow

### Initial Setup

1. Set up your icon library in Figma with consistent component naming
2. Configure environment variables
3. Update `ROOT_TRAVERSE_IDS` to match your Figma structure
4. Run `yarn script:icons:rest` to generate initial icons

### Updating Icons

When you add or modify icons in Figma:

1. Update your Figma icon library
2. Run `yarn script:icons:rest` to fetch and regenerate all icons
3. The script is additive - it won't delete existing icons
4. Commit the generated files to your repository

### Development Workflow

For rapid iteration on the generation script without API calls:

1. Make changes to `app.mjs`
2. Run `yarn script:icons` (uses cached data)
3. Test the output
4. When satisfied, run `yarn script:icons:rest` to get fresh data

## Customization

### Modifying Icon Output

To change how icons are generated, edit the `app.mjs` script:

1. **Icon Template**: Modify the string template for each icon component
2. **Styling**: Update SVG attributes like stroke width, colors, etc.
3. **Props**: Add additional props to the `IconProps` interface

### Adding Custom Icon Processing

You can extend the script to:

- Filter which icons to generate
- Transform icon names (e.g., kebab-case to PascalCase)
- Add custom metadata to icons
- Generate additional files (stories, tests, etc.)

## Troubleshooting

### Icons Not Generating

1. **Check Figma Access Token**: Ensure your token is valid and has access to the file
2. **Verify File Key**: Make sure the `FIGMA_FILE_KEY` matches your Figma URL
3. **Check Node IDs**: Update `ROOT_TRAVERSE_IDS` to match your Figma structure

### Missing Icons

- The script only generates icons from the specified `ROOT_TRAVERSE_IDS` path
- Check that your icons are in the correct location in Figma
- Verify the `ICON_VARIANT_NAME` matches your Figma variant property

### Icon Styling Issues

- Icons use CSS variables for colors: `var(--svg-stroke-color)`
- Define this variable in your global CSS or component styles
- Modify the SVG attributes in the generation script if needed

## Best Practices

1. **Consistent Naming**: Use consistent naming conventions in Figma (e.g., "Icon/Activity")
2. **Version Control**: Commit generated files to track changes over time
3. **Regular Syncs**: Sync with Figma regularly to keep icons up-to-date
4. **Documentation**: Document any custom modifications to the generation script
5. **Testing**: Test icon components after generation to ensure they render correctly

## Advanced Topics

### Batch Updates

To update multiple icon properties at once, modify the generation template in `app.mjs` and run:

```bash
yarn script:icons
```

This regenerates all icons from cached data without additional API calls.

### Custom Icon Variants

If you need different size variants:

1. Update the Figma components with new size variants
2. Modify the `figma.enum` mapping in the Code Connect generation
3. Update the `IconProps` type to include new size values

### Integration with Design Systems

This icon system can be integrated with larger design systems by:

- Exporting icons as a separate package
- Adding icon documentation to Storybook
- Creating icon preview/search tools
- Automating icon updates via CI/CD

## Resources

- [Figma API Documentation](https://www.figma.com/developers/api)
- [Figma Code Connect](https://www.figma.com/developers/code-connect)
- [React Component Best Practices](https://react.dev/learn)

## Support

For issues or questions:
1. Check this documentation
2. Review the `app.mjs` script comments
3. Consult Figma API documentation
4. Check Figma Code Connect documentation
