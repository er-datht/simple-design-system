import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Split vendor libraries
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("react-dom")) {
              return "react-vendor";
            }
            return "vendor";
          }

          // Split icon components into separate chunk
          if (id.includes("/src/ui/icons/")) {
            return "icons";
          }

          // Split UI primitives
          if (id.includes("/src/ui/primitives/")) {
            return "ui-primitives";
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1000 kB for remaining chunks
  },
});
