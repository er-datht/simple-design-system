**Step to map the components from Figma to code:**

- Install `@figma/code-connect`
- Prepare the common Button components (`Button`, `ButtonDanger`, `IconButton` - only icon, `GroupButton`)
- Interactive setup code connect:
  - Run `npx figma connect --token=PERSONAL_ACCESS_TOKEN`
    - If the token is in `.env`, we just run `npx figma connect`
  - Enter `./src/ui/primitives`: the directory that contains the common Button components
  - Enter `https://www.figma.com/design/FIGMA_FILE_KEY`: the URL for your design system
    - In **Dev mode**, right-click the component, then select the option `copy link to selection`
  - When asked to create a `figma.config.json` file, press Enter to create the file
  - Press Enter to use the default method of prop mapping. (We can use `Use AI for prop mapping` when the team enables the Figma AI feature)
  - Enter `./src/figma/primitives`: Figma directory for the Code Connect files
  - Select `Create files`: To create the Code Connect mappings

**Publish Code Connect files**

- We need to publish the files to view the Code Connect snippets for Button components in Dev Mode:
  - Go to folder that contains the Code Connect files
  - Run `npx figma connect publish --token=PERSONAL_ACCESS_TOKEN`
    - If the token is in `.env`, we just run `npx figma connect publish`

**Unpublish Code Connect files**

- Run `npx figma connect unpublish --node=NODE_URL --label=LABEL`

**Note:**

- After the interactive setup code connection is complete, we need to check and update the generated Figma file and components again to avoid errors.
- `NODE_URL` is the **URL** of a specific node in your design system file, and [label](https://developers.figma.com/docs/code-connect/api/config-file/#label) is the type to unpublish, e.g. "React" or "Vue".
