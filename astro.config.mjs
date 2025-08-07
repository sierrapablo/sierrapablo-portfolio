// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  site: 'https://sierrapablo.dev',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [icon()],
  env: {
    schema: {
      PROJECTS_API_ENDPOINT: envField.string({ context: 'server', access: 'public' }),
    },
  },
});
