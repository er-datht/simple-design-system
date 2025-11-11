# Figma Code Connect Publisher

This script publishes Code Connect documentation to Figma, making your React component props and usage examples visible in Figma Dev Mode.

## Prerequisites

- `.env` file in the repository root with `FIGMA_ACCESS_TOKEN`
- Code Connect files (`.figma.tsx`) in your codebase
- `@figma/code-connect` package installed

## Usage

### Publish All Code Connect Files (Default)

```bash
yarn script:figma-publish
```

This will publish all Code Connect files configured in `figma.config.json`.

### Publish from Specific Directory

```bash
yarn script:figma-publish src/figma/primitives/navigation
```

Pass a directory path as an argument to publish only Code Connect files from that directory.

### Examples

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

## How It Works

1. Reads `FIGMA_ACCESS_TOKEN` from `.env` file
2. Runs from the repository root (to find component source files for import resolution)
3. If a directory is provided, uses `--dir` flag to specify the target directory
4. Runs `npx figma connect publish --token=<token>` with optional `--dir` parameter

## Environment Variables

Required in `.env`:
```env
FIGMA_ACCESS_TOKEN=figd_...  # Get from Figma account settings
```

## What Gets Published

The script publishes Code Connect documentation defined in:
- `src/figma/primitives/*.figma.tsx` - Primitive components
- `src/figma/icons/Icons.figma.tsx` - Auto-generated icon components
- Any other `.figma.tsx` files in configured paths

## Configuration

The `figma.config.json` in the repository root controls which files are included:

```json
{
  "codeConnect": {
    "include": ["src/ui/primitives/**/*.{tsx,jsx}"],
    "label": "React"
  }
}
```

## Troubleshooting

### "FIGMA_ACCESS_TOKEN not found"
- Ensure `.env` file exists in repository root
- Check that `FIGMA_ACCESS_TOKEN` is set correctly

### "Failed to publish Code Connect"
- Verify your Figma access token is valid
- Ensure Code Connect files have valid syntax
- Check that component node IDs match your Figma file

### No Components Published
- Verify directory path is correct
- Check that `.figma.tsx` files exist in the target directory
- Ensure `figma.config.json` includes the correct file patterns

## Related Scripts

- `yarn script:icons` - Generate icon components from Figma
- `yarn script:icons:rest` - Fetch fresh icon data and regenerate
- `yarn script:dev-resources` - Manage dev resource links

## Learn More

- [Figma Code Connect Documentation](https://www.figma.com/developers/code-connect)
- [Code Connect CLI Reference](https://github.com/figma/code-connect)
