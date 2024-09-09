import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import pluginPurgeCss from "vite-plugin-purgecss-updated-v5";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio",
  plugins: [react(), pluginPurgeCss()],
  build: {
    target: "ES2022",
  },
});
