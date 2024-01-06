import { defineConfig } from "vite";
import manifest from "./manifest.json";
import webExtension from "@samrum/vite-plugin-web-extension";

export default defineConfig({
  plugins: [webExtension({ manifest: manifest })],
});
