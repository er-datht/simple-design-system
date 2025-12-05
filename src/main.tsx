import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ThemeProvider } from "./utils/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TOAST_DEFAULTS } from "./utils/toast";

// Validate CSS custom properties in development mode
if (import.meta.env.DEV) {
  import("./utils/validateTokens").then(({ validateTokensAfterLoad }) => {
    validateTokensAfterLoad(200);
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <ToastContainer
        position={TOAST_DEFAULTS.position}
        autoClose={TOAST_DEFAULTS.autoClose}
        hideProgressBar={TOAST_DEFAULTS.hideProgressBar}
        closeOnClick={TOAST_DEFAULTS.closeOnClick}
        pauseOnHover={TOAST_DEFAULTS.pauseOnHover}
        draggable={TOAST_DEFAULTS.draggable}
        theme={TOAST_DEFAULTS.theme}
      />
    </ThemeProvider>
  </StrictMode>
);
