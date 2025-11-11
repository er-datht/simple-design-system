import { execSync } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

// run with: node --env-file=../../.env app.mjs [directory]
// Example: node --env-file=../../.env app.mjs src/figma/primitives/navigation

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!TOKEN) {
  console.error("Error: FIGMA_ACCESS_TOKEN not found in environment variables");
  process.exit(1);
}

// Get optional directory from command line argument
const targetDir = process.argv[2];
const repoRoot = path.resolve(__dirname, "../..");

if (targetDir) {
  const absoluteDir = path.resolve(repoRoot, targetDir);
  console.log(`Publishing Code Connect from: ${absoluteDir}`);
  console.log(`Using token: ${TOKEN.slice(0, 10)}...`);

  try {
    execSync(`npx figma connect publish --token=${TOKEN} --dir="${absoluteDir}"`, {
      cwd: repoRoot,
      stdio: "inherit",
    });
    console.log("\n✓ Successfully published Code Connect");
  } catch (error) {
    console.error("\n✗ Failed to publish Code Connect");
    process.exit(1);
  }
} else {
  console.log(`Publishing all Code Connect files from repository root`);
  console.log(`Using token: ${TOKEN.slice(0, 10)}...`);

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
