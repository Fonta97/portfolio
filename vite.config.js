// vite.config.js
import { defineConfig } from 'vite';
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import jsconfigPaths from 'vite-jsconfig-paths';
import mdx from '@mdx-js/rollup';
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import rehypeImgSize from 'rehype-img-size';
import rehypeSlug from 'rehype-slug';
import rehypePrism from '@mapbox/rehype-prism';

export default defineConfig({
  assetsInclude: ['**/*.glb', '**/*.hdr', '**/*.glsl'],

  build: {
    assetsInlineLimit: 1024,
  },

  server: {
    port: 7777,
  },

  plugins: [
    mdx({
      rehypePlugins: [
        [rehypeImgSize, { dir: 'public' }],
        rehypeSlug,
        rehypePrism,
      ],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: '@mdx-js/react',
    }),

    remixCloudflareDevProxy(),

    remix({
      // Forza l’inclusione in bundle server-side di moduli senza side-effects
      serverDependenciesToBundle: [
        '@remix-run/react',
        'isbot',
        '@mdx-js/react',
        'three-stdlib',
        'framer-motion',
      ],
      routes(defineRoutes) {
        return defineRoutes(route => {
          route('/', 'routes/home/route.js', { index: true });
        });
      },
    }),

    jsconfigPaths(),
  ],
});
