export default {
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  components: true,
  target: "static",
  server: {
    // Setting the server to 0, gives you an ip address to test on other devices
    // host: "0",
  },
  plugins: [{ src: "./plugins/install", ssr: true }],
  tailwindcss: {
    viewer: true,
  },
  googleFonts: {
    families: {
      // Roboto: true,
      "Barlow+Condensed": {
        wght: [300, 400, 500],
      },
    },
    display: "swap", // 'auto' | 'block' | 'swap' | 'fallback' | 'optional',
  },
  css: ["./assets/css/common.css"],
  head: {
    title: "Wolf",
    titleTemplate: "%s - Wolf",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: "description", name: "description", content: "Meta description" },
      { hid: "robots", name: "robots", content: "noindex" },
    ],
  },
};
