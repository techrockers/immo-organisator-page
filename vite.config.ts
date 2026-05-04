import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    root: '.',
    base: env.GITHUB_PAGES_BASE_PATH || './',
    publicDir: 'public',
    build: {
      outDir: 'landing-dist',
      emptyOutDir: true,
    },
  };
});
