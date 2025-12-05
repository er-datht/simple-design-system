import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";
import { globSync } from "glob";
import { writeFileSync, readFileSync, unlinkSync } from "fs";

// run with: node --env-file=../../.env app.mjs [path-filter]
// Examples:
//   node --env-file=../../.env app.mjs                              # Publish all
//   node --env-file=../../.env app.mjs src/figma/primitives/navigation
//   node --env-file=../../.env app.mjs src/figma/primitives
//   node --env-file=../../.env app.mjs src/figma/sections/panelImageDouble

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!TOKEN) {
  console.error("Error: FIGMA_ACCESS_TOKEN not found in environment variables");
  process.exit(1);
}

const repoRoot = path.resolve(__dirname, "../..");
const pathFilter = process.argv[2];

if (pathFilter) {
  console.log(`Publishing Code Connect files from: ${pathFilter}`);

  // Find all .figma.tsx files in the specified path
  const pattern = `${pathFilter}/**/*.figma.{ts,tsx,jsx}`;
  const files = globSync(pattern, { cwd: repoRoot });

  if (files.length === 0) {
    console.error(`\n✗ No Code Connect files found matching: ${pattern}`);
    process.exit(1);
  }

  console.log(`Found ${files.length} Code Connect file(s):`);
  files.forEach((file) => console.log(`  - ${file}`));
  console.log();

  // Read original config
  const configPath = path.join(repoRoot, "figma.config.json");
  const tempConfigPath = path.join(repoRoot, ".figma.config.temp.json");
  const originalConfig = JSON.parse(readFileSync(configPath, "utf-8"));

  // Create temporary config with ONLY the filtered path
  const tempConfig = {
    ...originalConfig,
    codeConnect: {
      ...originalConfig.codeConnect,
      include: [
        // Keep the UI source files patterns so imports can be resolved
        ...originalConfig.codeConnect.include.filter((p) =>
          p.startsWith("src/ui/")
        ),
        // Add only the specific figma files we want to publish
        pattern,
      ],
      exclude: originalConfig.codeConnect.exclude || [],
    },
  };

  try {
    // Write temporary config
    writeFileSync(tempConfigPath, JSON.stringify(tempConfig, null, 2));

    // Publish with filtered config
    execSync(
      `npx figma connect publish --token=${TOKEN} --config="${tempConfigPath}"`,
      {
        cwd: repoRoot,
        stdio: "inherit",
      }
    );
    console.log("\n✓ Successfully published Code Connect");
  } catch (error) {
    console.error("\n✗ Failed to publish Code Connect");
    process.exit(1);
  } finally {
    // Clean up temp config
    try {
      unlinkSync(tempConfigPath);
    } catch (e) {
      // Ignore cleanup errors
    }
  }
} else {
  console.log(`Publishing all Code Connect files using figma.config.json`);

  try {
    execSync(`npx figma connect publish --token=${TOKEN}`, {
      cwd: repoRoot,
      stdio: "inherit",
    });
    console.log("\n✓ Successfully published Code Connect");
  } catch (error) {
    console.error("\n✗ Failed to publish Code Connect");
    process.exit(1);
  }
}
