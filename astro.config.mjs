import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  experimental: {
    viewTransitions: true,
  },
  integrations: [prefetch()],
});
