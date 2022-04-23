import { defineNuxtConfig } from "nuxt";
import runtimeConfig from "./runtime.config";
export default defineNuxtConfig({
  publicRuntimeConfig: runtimeConfig,
  meta: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "keywords", content: runtimeConfig.KEYWORDS.join() },
      { name: "description", content: runtimeConfig.DESCRIPTION },
    ],
    script: [
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3208634444966567",
        crossorigin: "anonymous",
      },
    ],
  },
  css: ["assets/css/index.less","element-plus/dist/index.css"],
  components: true,
  vueuse: {
    ssrHandlers: true,
  },
  buildModules: [
    '@vueuse/nuxt',
    "@pinia/nuxt",
  ],
});
