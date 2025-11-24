import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Validate CSS custom properties in development mode
if (import.meta.env.DEV) {
  import("./utils/validateTokens").then(({ validateTokensAfterLoad }) => {
    validateTokensAfterLoad(200);
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
