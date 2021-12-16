export default {
  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
  modules: ["@nuxtjs/pwa"],
  build: {
    transpile: ["gsap"],
  },

  // PWA more info: https://pwa.nuxtjs.org/setup
  pwa: {
    icon: true, // enables the icon module
  },

  components: true,
  target: "static",
  server: {
    // Setting the server to 0, gives you an ip address to test on other devices
    // host: "0",
  },
  plugins: [
    { src: "./plugins/gsap", mode: "client" },
    { src: "./plugins/flicking" }, // No "ssr: false" or "mode: 'client'" is needed
  ],
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
  css: ["./assets/css/common"],
  head: {
    title: "Wolf",
    titleTemplate: "%s - Wolf",
    htmlAttrs: {
      lang: "nl",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "msapplication-TileColor", content: "#cd1719" },
      { name: "theme-color", content: "#cd1719" },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      {
        hid: "description",
        name: "description",
        content: "Het meest opzienbarende natuurverhaal van Nederland!",
      },
      { hid: "og:site_name", property: "og:site_name", content: "Wolf film" },
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.wolffilm.nl",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Het meest opzienbarende natuurverhaal van Nederland!",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "Het meest opzienbarende natuurverhaal van Nederland!",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/wolf-1200x630.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },

      // { name: "twitter:site", content: "@bobross" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://www.wolffilm.nl",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Het meest opzienbarende natuurverhaal van Nederland!",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "Het meest opzienbarende natuurverhaal van Nederland!",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/wolf-1200x630.png",
      },
    ],
    link: [
      {
        hid: "canonical",
        rel: "canonical",
        href: "https://www.wolffilm.nl",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/favicon/favicon-16x16.png",
      },
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        type: "image/png",
        color: "#cd1719",
        href: "/favicon/safari-pinned-tab.svg",
      },
    ],
    // Google tags
    __dangerouslyDisableSanitizers: ["script", "noscript"],
    noscript: [
      {
        hid: "gtm-script1",
        body: true,
        innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TF6GX6B"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      },
    ],
    script: [
      {
        hid: "gtm-script2",
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TF6GX6B');`,
        type: "text/javascript",
        charset: "utf-8",
      },
    ],
  },
};
