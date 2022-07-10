import { defineConfig } from "vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    // proxy: {
    //   '/foo': 'http://0.0.0.0:4567',
    // }
  },
});
