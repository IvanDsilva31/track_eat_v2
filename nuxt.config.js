export default {
  target: "static",
  head: {
    title: "Track Eat",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["@/assets/css/main.css"],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/postcss8", "@nuxtjs/fontawesome"],
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/moment",
    [
      "@nuxtjs/firebase",
      {
        config: {
          apiKey: "AIzaSyDoxOVKkWPu1o47Wj5g508bWut4hmURCGk",
          authDomain: "track-eat-b3a20.firebaseapp.com",
          databaseURL: "https://track-eat-b3a20-default-rtdb.firebaseio.com",
          projectId: "track-eat-b3a20",
          storageBucket: "track-eat-b3a20.appspot.com",
          messagingSenderId: "790523218159",
          appId: "1:790523218159:web:d6d446f692d00fcaf5331a",
          measurementId: "G-TPDT8LE5C1",
        },
        services: {
          auth: true,
          firestore: true,
        },
      },
    ],
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
    },
  },
  axios: {
    baseURL: "/",
  },
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  auth: {
    persistence: "local",
    initialize: {
      onAuthStateChangedMutation: "set_user",
      onAuthStateChangedAction: "loginUser",
      subscribeManually: false,
    },
    ssr: false,
    // emulatorPort: 9099,
    // emulatorHost: 'http://localhost',
  },
  firestore: {
    memoryOnly: false,
    // chunkName: process.env.NODE_ENV !== 'production' ? 'firebase-auth' : '[id]', // default
    enablePersistence: true,
    // emulatorPort: 8080,
    // emulatorHost: 'localhost',
    // settings: {
    //   // Firestore Settings - currently only works in SPA mode
    // }
  },
};
