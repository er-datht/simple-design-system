/**
 * Runtime CSS Custom Property (Token) Validator
 *
 * This utility validates that all CSS custom properties referenced in the design system
 * are actually defined in the document. It helps catch missing token definitions during development.
 */

interface TokenValidationResult {
  missingTokens: string[];
  totalTokensChecked: number;
  allTokensDefined: boolean;
}

/**
 * Extracts all CSS custom property references from loaded stylesheets
 * Matches patterns like: var(--token-name) but not var(--token-name, fallback)
 */
function extractTokenReferences(styleSheets: StyleSheetList): Set<string> {
  const tokenRefs = new Set<string>();
  const varPattern = /var\((--[a-zA-Z0-9-]+)\)/g;

  try {
    Array.from(styleSheets).forEach((sheet) => {
      try {
        // Skip external stylesheets we can't access due to CORS
        if (!sheet.href || sheet.href.startsWith(window.location.origin)) {
          const rules = sheet.cssRules || sheet.rules;
          if (rules) {
            Array.from(rules).forEach((rule) => {
              const cssText = rule.cssText;
              let match;
              while ((match = varPattern.exec(cssText)) !== null) {
                tokenRefs.add(match[1]);
              }
            });
          }
        }
      } catch {
        // Silently skip inaccessible stylesheets (CORS)
        console.debug("Could not access stylesheet:", sheet.href);
      }
    });
  } catch (error) {
    console.warn("Error extracting token references:", error);
  }

  return tokenRefs;
}

/**
 * Gets all defined CSS custom properties from the document's computed styles
 */
function getDefinedTokens(): Set<string> {
  const definedTokens = new Set<string>();
  const computedStyles = getComputedStyle(document.documentElement);

  // Iterate through all computed style properties
  for (let i = 0; i < computedStyles.length; i++) {
    const propName = computedStyles[i];
    if (propName.startsWith("--")) {
      definedTokens.add(propName);
    }
  }

  return definedTokens;
}

/**
 * Validates that all referenced CSS custom properties are defined
 * Logs warnings for any missing tokens
 */
export function validateTokens(): TokenValidationResult {
  console.log("🔍 Validating CSS custom properties...");

  const referencedTokens = extractTokenReferences(document.styleSheets);
  const definedTokens = getDefinedTokens();
  const missingTokens: string[] = [];

  referencedTokens.forEach((token) => {
    if (!definedTokens.has(token)) {
      missingTokens.push(token);
    }
  });

  const result: TokenValidationResult = {
    missingTokens,
    totalTokensChecked: referencedTokens.size,
    allTokensDefined: missingTokens.length === 0,
  };

  // Log results
  if (result.allTokensDefined) {
    console.log(
      `✅ Token validation passed: All ${result.totalTokensChecked} CSS custom properties are defined`
    );
  } else {
    console.warn(
      `⚠️ Token validation found ${missingTokens.length} missing CSS custom properties:`
    );
    missingTokens.forEach((token) => {
      console.warn(`${token}`);
    });
    console.warn(
      "These tokens are referenced in your CSS but not defined in theme.css or :root"
    );
  }

  return result;
}

/**
 * Validates tokens after a delay to ensure all stylesheets are loaded
 * Returns a promise that resolves with the validation result
 */
export function validateTokensAfterLoad(
  delayMs: number = 100
): Promise<TokenValidationResult> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = validateTokens();
      resolve(result);
    }, delayMs);
  });
}
