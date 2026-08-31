// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * PrimeTrack Rwanda — static output only.
 *
 * Trailing slashes and directory build format keep every English URL
 * byte-identical to the live WordPress site, so no ranking page moves.
 * See docs/information-architecture.md §1.
 *
 * i18n: English is the default locale and stays unprefixed at the root
 * (`/video-tracking/`). Kinyarwanda lives under `/rw/` (`rw` is the ISO 639-1
 * code for Kinyarwanda). Both are crawlable static HTML with hreflang
 * alternates emitted by BaseLayout.
 */
export default defineConfig({
  site: 'https://primetrack.rw',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'rw'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-RW', rw: 'rw-RW' },
      },
      // Internal reference page — for the team, not for search engines.
      filter: (page) => !page.includes('/design-system'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    /**
     * Force ONE copy of React into the graph.
     *
     * `Cannot read properties of null (reading 'useState')` is React telling
     * you its internal dispatcher is null, which happens when a component is
     * rendered by a different React instance than the one the hooks were
     * imported from. In dev, Vite's optimizer can hand `@astrojs/react`'s
     * client entry a separately pre-bundled React from the one the islands
     * import, and every island then dies on hydration.
     *
     * That failure is worse than it sounds: Astro server-renders the islands,
     * so the markup arrives correct and complete, and hydration then WIPES it.
     * The navigation was being delivered in full and erased a moment later,
     * which reads as "the nav is missing" rather than as a script error.
     *
     * `optimizeDeps.include` below keeps the pre-bundling stable; this makes
     * duplication impossible in the first place, whatever the optimizer does.
     */
    resolve: {
      dedupe: ['react', 'react-dom'],
    },
    /**
     * Pre-bundle the React JSX runtimes explicitly.
     *
     * Without this, Vite's dependency optimizer intermittently produces an
     * @astrojs/react client chunk whose `_jsxDEV` import resolves to
     * undefined, and every React island then fails to hydrate in dev with
     * "TypeError: _jsxDEV is not a function". The navigation and the contact
     * form go dead while the production build stays fine, which makes it a
     * genuinely confusing bug to meet. Naming the runtimes here keeps the
     * optimizer's output stable across restarts and dependency changes.
     *
     * `@formspree/react` is listed for the same reason and a sharper one: it
     * takes React as a peer dependency, so if the optimizer pre-bundles it on
     * a different pass from the app's own React the island ends up holding two
     * copies and dies with "Invalid hook call". Naming it here pins both to
     * one instance.
     */
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-dom/client',
        'react/jsx-runtime',
        'react/jsx-dev-runtime',
        '@formspree/react',
      ],
    },
  },
});
