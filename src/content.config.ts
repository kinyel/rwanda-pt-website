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
 * Each article also has a Kinyarwanda version in `articlesRw`, at /rw/<slug>/.
 */
const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date().optional(),
  author: z.string().default('primeTEAM'),
  /** Commercial pages this article should link back to. */
  related: z.array(z.string()).optional(),
});

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: articleSchema,
});

/**
 * The Kinyarwanda versions of the articles: one file per English article, with
 * the SAME file name, so an article's id (its slug) is identical in both
 * languages and /slug/ and /rw/slug/ are the same article. The English slugs
 * are kept for the Kinyarwanda URLs too: they are the URLs that already rank,
 * and hreflang ties the pair together.
 */
const articlesRw = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles-rw' }),
  schema: articleSchema,
});

export const collections = { articles, articlesRw };
