# PrimeTrack Rwanda — handoff

Everything you need to take this from a finished build to a live site, plus a
record of the judgement calls made along the way.

---

## 1. Things I need from you

| # | Item | Blocks | Notes |
|---|---|---|---|
| 1 | **Formspree form ID** | The contact form | Set `PUBLIC_FORMSPREE_ID` in `.env`. Until then the form renders a clearly-labelled "not yet connected" panel with WhatsApp and email instead of silently dropping submissions. Nothing else needs changing. |
| 2 | **VRAS copy** | `/vras/` | The live page returns a database error (`Could not connect to the database primetra_autoboss`) with no recoverable content. Per your instruction the menu entry resolves to the 404 page. See §4 for the tradeoff and the one-line fix once you have copy. |
| 3 | **14 photographs** | Visual finish | Full checklist in `src/assets/images/README.md`. Each placeholder is a labelled grey plate at the exact filename and dimensions the real image will use, so replacing one is a straight overwrite. |
| 4 | **Kinyarwanda translation** | The `/rw/` site reading in Kinyarwanda | 606 strings, listed in `docs/translation-checklist.md`. The site is fully functional today: untranslated strings fall back to English automatically. |
| 5 | **Native review of the Kinyarwanda already in place** | Launch | 32 interface strings (navigation, buttons, form labels) are in `src/i18n/rw.ts`, each marked `@review`. They were added so the switcher could be tested end to end. A native speaker should confirm them. |
| 6 | **Hosting decision** | Deploy | Redirect files ship for both: `public/_redirects` (Cloudflare Pages / Netlify) and `public/.htaccess` (Apache / Hostinger). Keep the two in step if you edit either. |
| 7 | **Google Maps embed** | Contact page | Not embedded. The address is published as text and the office photo is a placeholder. Send me the exact coordinates or a Place ID if you want a map, and confirm you are happy with the third-party cookie implications. |
| 8 | **Confirm the two corrections in §3** | Launch | Both are cases where the live site contradicts itself. I picked the Rwanda-correct option; you should confirm. |

---

## 1b. Language switcher: what was wrong

Reported as "English and Kinyarwanda switching does not work". Two separate
faults, both reproduced before anything was changed.

**Fault 1: the stored preference overrode the URL.** The persistence script
applied a saved language on *every* path, not just on entry. With `rw` stored,
opening `/primesolar/` bounced you to `/rw/primesolar/`; with `en` stored, the
reverse. The symptom is the switcher appearing to refuse to stay put, and any
shared or bookmarked link being silently hijacked.

Fixed by making the URL authoritative everywhere. The stored preference is now
applied at the bare English homepage and nowhere else, which keeps return-visit
persistence and makes a redirect loop structurally impossible (`/` is the only
source and `/rw/` is never one). Every other URL is served exactly as requested.

**Fault 2: React islands failed to hydrate in development.** Vite's dependency
optimizer intermittently produced an `@astrojs/react` client chunk whose
`_jsxDEV` import resolved to undefined, throwing
`TypeError: _jsxDEV is not a function`. Every island died with it: the desktop
mega-menu and the mobile drawer simply stopped responding, while the production
build was unaffected. Fixed by naming the React runtimes in `optimizeDeps.include`
in `astro.config.mjs`, which keeps the optimizer's output stable across restarts.

Also cleaned up: the switcher renders twice per page (header and footer) and each
copy was attaching its own click listener, so the header ended up with two.
Persistence now lives in one delegated listener in `BaseLayout`.

**Verified after the fix**, across all 86 pages: `<html lang>`, the canonical, the
`hreflang` pair and the switcher's own target agree on every one. Both directions
work from every page, repeatedly, and survive reload and the back button.

Note that switching needs no JavaScript at all: the switcher is two ordinary
links to the same page in each locale. Script is only involved in remembering the
choice for a return visit.

---

## 1c. Navigation: the audit, and what it found

The header was audited against the places navigation bugs of this kind usually
sit. Each item below was reproduced in the browser before anything was changed.
Items that turned out not to be broken are listed as such rather than given a
fix nobody needed.

**Found and fixed**

1. **The mega-menu panel ran off the screen at 1024px.** Each panel was centred
   on its own trigger with `left: 50%; transform: translateX(-50%)`. At 1024px
   the Solutions panel resolved to `left: -440px`: the entire first column of
   links was off the left edge and unreachable. Fixed by clamping the panel into
   the viewport after centring, measured on open and on resize only.

2. **A tap opened the menu and closed it again.** The trigger opened on
   `mouseenter` and toggled on `click`. A tap on a touch screen emits both, so
   the hover opened the panel and the click that followed shut it. Hover is now
   gated on `(hover: hover) and (pointer: fine)`; on touch the trigger is a
   plain button.

3. **The drawer did not return focus on every close.** Escape returned focus to
   the menu button; closing on the backdrop dropped focus on `<body>`, which
   leaves a keyboard visitor back at the top of the document. Every close path
   now restores focus.

4. **The drawer's scrim covered the header,** so with the drawer open a tap on
   the language switcher hit the scrim and closed the drawer instead of
   switching language. The scrim was doing nothing else — the drawer is
   full-width and opaque — so it is gone and the header is operable again.

5. **Anchor targets landed under the header.** `scroll-padding-top` was a flat
   `6rem` against a header that is `7.5rem` at `lg`. It is now derived from
   `--header-h`, and `#main` carries a matching `scroll-margin-top` so the skip
   link lands clear of the bar.

6. **No way into a menu from the keyboard beyond opening it.** `Enter` and
   `Space` opened a panel and left focus on the trigger. `ArrowDown` and
   `ArrowUp` now open a panel at its first or last link, arrows walk the links,
   `Home` and `End` jump to the ends, `Escape` closes and returns focus, and
   tabbing out of a panel closes it.

7. **The row had no slack at 1024px.** Logo, five items, both switchers and the
   button measured 982px inside a 983px shell in English, so the first
   Kinyarwanda translation longer than its English source would have pushed the
   controls out of the row. Nav padding is now tighter at `lg` and roomier from
   `xl`: 214px of headroom in English, 149px in Kinyarwanda.

8. **The active page was marked by colour alone.** It now carries a full-width
   underline and a weight change as well.

**Hardened, though not reproduced here**

- The drawer sized itself with `inset-0`, which is the large viewport while a
  mobile browser's toolbars are showing. It is now `100dvh`.
- An open menu survives the back/forward cache, because the DOM and the
  island's state both come back as they were left. A `pageshow` handler now
  closes any open layer on a restore. Not reproducible against the dev server,
  which disables bfcache.

**Checked, and not broken**

- `aria-expanded` and `aria-controls` were present on every trigger and already
  tracked the real state.
- Two menus could not be open at once: one index, one panel.
- Nothing was clipping the panel; no parent has `overflow: hidden`.
- Nothing ran on scroll, so there was no jank to fix and none has been added:
  the new contrast-aware behaviour is two IntersectionObservers and no scroll
  listener at all.
- The header is sticky and in flow, so it never overlapped content on load and
  never shifted layout. It is 121px tall in every state, theme and menu
  position; that is now a rule rather than an accident.
- The language switcher still keeps the visitor on the equivalent page, from
  every page, and survives a reload. See §1b.

**Known, and left alone**

A page that appears in two menus — `/video-tracking/` is in both Solutions and
Products, deliberately — marks both groups as current. That is what the
navigation data says is true, and choosing one owner would mean inventing a
hierarchy the site does not have. Flagged rather than decided.

---

## 2. What was audited

The live site was crawled in full on the day of the rebuild: **20 pages, 54 posts,
the sitemap index, robots.txt, and every stylesheet and image referenced from the
homepage.** Nothing in this build was assumed; everything traces to that crawl.

**Business facts captured** (all in `src/data/company.ts`, nowhere else):

- Phone / WhatsApp `+250 793 017 263`, email `admin@primetrack.rw`
- Office: 6th Floor, Tower A, Yyussa City Centre, Kigali
- Licensed in Rwanda by **RURA** (Nigeria's equivalent claim is NCC; the two must never be swapped)
- Warranty **up to 5 years** (Nigeria's is 3; a build-time check fails on the wrong figure)
- Stats: 5,000+ active trackers, 15+ years, 5+ countries, 24hr service (read from the homepage counter attributes)
- P.R.I.M.E. values, PrimeCARE support brand
- Ten named client organisations, with their logos

**Nothing was invented.** No testimonials, no certifications, no partnerships, no
prices, no employee numbers, no founding date. The `Product` schema deliberately
omits `offers` because the site publishes no prices.

---

## 3. Corrections made against the live site

Both are places where the live Rwanda site contradicts itself. Flagged rather than
changed silently.

**a. Privacy policy contact address.** The live privacy policy tells Rwandan users
to contact `admin@primetracknigeria.net`, a Nigeria address on a Rwanda page.
Replaced with `admin@primetrack.rw`, which the same site publishes everywhere else.
The terms of service separately publishes `info@primetrack.rw` for legal queries;
that distinction is genuine and has been preserved.

**b. STAR Trackers page.** The live copy reads "PrimeTrack Nigeria's STAR Trackers"
on the Rwanda site. Changed to the unqualified brand name.

---

## 4. The VRAS decision, and how to undo it

`/vras/` is in the Services menu on both the Rwanda and Nigeria sites. It currently
returns a database error with zero content, so there is nothing to migrate and
nothing may be invented.

You asked for it to point at the 404 page. It does: the menu entry links to
`/vras/`, no page is built there, and the host serves the styled 404 with a correct
404 status. This keeps the legacy URL rather than throwing it away.

**The tradeoff you should know about:** this is a sitewide navigation link that
returns 404 on every page of the site. Crawlers will see it. If VRAS copy is not
coming soon, removing the entry is the better SEO position.

**To fix once you have copy:** add a service page and change one line in
`src/data/navigation.ts` (`serviceNav`, the `common.links.vras` entry) to point at
its route. **To remove instead:** delete that same entry.

---

## 5. URLs

**No page that ranks has moved.** Every English URL is byte-identical to the live
site, trailing slash included. That was the whole point of the route map, and it is
why the redirect table is nine lines rather than ninety.

New routes: `/blog/` (an index for the articles, which previously had none) and
`/404/`. Kinyarwanda lives under `/rw/`.

**Redirects shipped** (`public/_redirects` and `public/.htaccess`):

| From | To | Why |
|---|---|---|
| `/egy/` | `primetracknigeria.com/egy` | Empty stub. The country switcher has always pointed Egypt at the Nigeria domain; the orphan now follows it. |
| `/10-reasons-you-should-track/`, `/primetrack-is-10-yippie/`, `/another-awesome-news-post/` | `/blog/` | Three URLs, one duplicated 2020 anniversary note, titles that did not match the body. Consolidated. |
| `/nothing/` | `/blog/` | An advertisement for an unrelated finance offer. |
| `/confirmed/`, `/confirmation/`, `/2604e-received/` | `/contactus/` | Contact Form 7 receipt pages. The rebuilt form confirms inline. |
| `/feed/`, `/comments/feed/`, `/category/uncategorized/` | `/blog/` | WordPress endpoints with no static equivalent. |
| `/wp-admin/*`, `/wp-login.php` | 410 Gone | No longer exist. |

---

## 6. The 48 articles

Every substantive SEO article was migrated to Markdown at **its original root-level
slug**, so none of them moved. They live in `src/content/articles/`.

They were improved in three ways that do not touch the words:

- WordPress authors used `<p><strong>` where headings belonged. Those are now real
  `h2` and `h3` elements, giving each article a proper outline and removing a wall
  of bolded body copy.
- Every article now links back to the commercial pages it supports, chosen from what
  the article is actually about. On the live site not one of them linked anywhere,
  which wasted all 48.
- They have an index at `/blog/` and appear in the sitemap.

Articles are English only. Rather than publish machine-translated versions under
`/rw/`, they emit no `hreflang` alternates and the language switcher on an article
points at the article index. That is deliberate: advertising a `/rw/` URL that does
not exist is worse than advertising none.

**One thing to consider:** 25 article titles run past the length Google displays,
because they are the original WordPress titles. I left them alone since they are what
currently ranks. Shortening them is a reasonable experiment, not an obvious win.
`npm run qa` lists them.

---

## 7. Commands

```bash
npm run dev                  # local server on :4321
npm run build                # content check, then static build
npm run qa                   # post-build sweep (needs a build first)
npm run i18n:status          # regenerate the translation checklist
npm run images:placeholders  # draw plates for any missing image
npm run images:readme        # regenerate the image spec document
npm run verify               # build + i18n status + qa, in order
```

`npm run build` fails if content breaks a house rule: an em dash anywhere in site
copy, the wrong warranty term, or a Nigeria phone number, email or office reference
on the Rwanda site.

---

## 8. Known gaps

- **No map on the contact page.** Waiting on coordinates (§1.7).
- **Newsletter signup (PrimeTIPS)** posts to the same Formspree form as the contact
  page, with its own subject line, so subscriptions reach your inbox as soon as item 1
  is done. If you would rather they went straight into a mailing list provider
  (Mailchimp, Brevo), that is a one-line change to the form's `action`.
- **No search.** The live site had none either. With 48 articles it may become worth
  adding.
- **Kinyarwanda is 5% translated** (32 of 640 strings), all of it interface chrome.
- **Scroll-driven motion is Chromium-only today.** The hero card and the staggered
  blur-resolve below it use native CSS scroll-driven animations
  (`animation-timeline: view()`), which Safari and Firefox do not yet support.
  Both are wrapped in `@supports`, so those browsers get the resting state, which
  is the finished design. Nothing looks broken or missing; it simply does not
  move. No polyfill was added, deliberately: a scroll-linked JavaScript fallback
  would cost more than the effect is worth.
