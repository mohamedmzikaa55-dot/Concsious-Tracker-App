import { defineConfig } from 'vite'

export default defineConfig({
  // './' keeps asset URLs relative so the built app works from any
  // sub-path (e.g. https://<user>.github.io/<repo>/) and custom domains.
  base: './',
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['.monkeycode-ai.live']
  },
  preview: {
    host: true,
    port: 5173,
    allowedHosts: ['.monkeycode-ai.live']
  }
})
