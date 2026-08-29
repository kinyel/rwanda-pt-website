import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * The `articles` collection holds the SEO articles migrated from the
 * WordPress site (see scripts/migrate-articles.mjs).
 *
 * Each entry's id is its original WordPress slug, and articles render at that
 * exact root-level path, so every ranking URL is preserved without a redirect.
 *
 * The articles exist in English only. The Kinyarwanda site links to the English
 * article rather than showing an empty index, which is honest and avoids
 * publishing untranslated pages under a Kinyarwanda URL.
 */
const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date().optional(),
    author: z.string().default('primeTEAM'),
    /** Commercial pages this article should link back to. */
    related: z.array(z.string()).optional(),
  }),
});

export const collections = { articles };
