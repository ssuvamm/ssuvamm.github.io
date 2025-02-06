import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
// import vercel from "@astrojs/vercel/serverless";

// If you are not going to use vercel analytics you can delete the analytics
// If you want to remove vercel from your project you can do npm uninstall vercel
export default defineConfig({
  site: "https://ssuvamm.github.io",
  site: "https://suvamsinha.us.kg",
  // base: "ssuvamm",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});

//If you don't have vercel the configuration will be empty

//ej : export default defineConfig({});
