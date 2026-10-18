import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // The old projects index is now the Films page; the case study under
  // /projects/ keeps its address.
  redirects: {
    "/projects": "/films",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
