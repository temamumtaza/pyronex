# Verification, 1 October 2026

## Local release checks

- PASS: all canonical HTML pages have one H1, a unique title, description, canonical URL, indexable robots metadata, and the shared favicon; compatibility sources `/produk.html` and `/solusi/tps3r-tpst.html` are noindex and redirect targets.
- PASS: JSON-LD parses on every page; every graph has a linked publisher, brand, page identity, and breadcrumb where the page uses breadcrumbs. Sitemap XML parses and lists the current canonical URLs, including dedicated landing and evidence pages.
- PASS: social metadata includes a crawlable image, dimensions, alt text, and a page author; article pages expose a modification date.
- PASS: `llms.txt` lists every published content route and states the Pyronex I/Pyronex II and sample-level laboratory boundaries without adding unsupported claims.
- PASS: local links, route fragments, scripts, stylesheets, and referenced images resolve. Every content image has descriptive alt text.
- PASS: `node --check script.js` and `git diff --check`.
- PASS: the home process map remains the existing SVG/visual component. No raw ASCII flow diagram was introduced.
- PASS: capacity selector updates the plan label, footprint reference, status text, and WhatsApp draft link. The calculator labels its result as an initial average for incoming material, not final reactor sizing.
- PASS: the consultation form includes optional email and organic-fraction fields, builds a WhatsApp draft with real line breaks, and states that the static site does not store submissions.
- PASS: local analytics hooks dispatch non-PII interaction events to `window.dataLayer` and a `pyronex:analytics` event; no external analytics provider is configured.
- PASS: reduced-motion handling remains enabled for the process-map animation; the homepage fact strip collapses to one column at narrow widths.
- PASS: contrast checks for primary text, muted text, dark-surface text, and focus treatment meet the applicable WCAG thresholds.
- TARGET, not yet a pass claim: `PERFORMANCE-BUDGET.md` defines p75 LCP, INP, CLS, JavaScript, and image budgets. Run a repeatable mobile Lighthouse or PageSpeed measurement before reporting results.

## Evidence boundaries

- Pyronex I field notes and Pyronex II product configuration are separated throughout the copy.
- Capacity is described as nominal and dependent on feedstock and site configuration.
- Laboratory figures remain sample-level summaries. No Offer, price, review, rating, certification, or universal performance schema was added.
- The public Yogyakarta reference is described as a record of a presentation, not an endorsement or proof of universal performance.

## Production checks

Run after each push to `main`:

1. Confirm every sitemap URL and each clean route returns HTTP 200, including nested insight, solution, landing, evidence, and field-note routes.
2. Confirm `/robots.txt`, `/sitemap.xml`, and `/assets/favicon.svg` are publicly served.
3. Confirm `/produk`, `/produk.html`, `/solusi/tps3r-tpst`, and `/solusi/tpst` redirect permanently to `/pyronex-ii` or `/solusi/tps3r` as configured; confirm both canonical targets return HTTP 200.
4. Check the homepage copy, product capacity qualification, FAQ, lab caveat, and contact draft on the deployed domain.
5. Recheck Search Console URL Inspection and sitemap processing. Submission and crawl signals do not prove indexing or ranking.

## Performance target

`PERFORMANCE-BUDGET.md` records the intended p75 Core Web Vitals and asset budgets. They are targets until a repeatable mobile Lighthouse or PageSpeed run is captured with the URL and date.

The previous six-page release was deployed on 23 September 2026. Its historical Search Console and IndexNow results remain discovery evidence only; they do not describe the expanded release.

## Production verification after release 45c1f2e

- PASS on 1 October 2026: 28 sitemap URLs returned HTTP 200, including the five new insight routes, `/teknologi/pirolisis`, `/penerapan/tambakboyo`, `/pyronex-ii`, and `/solusi/tps3r`.
- PASS: `/robots.txt`, `/sitemap.xml`, `/llms.txt`, the renamed responsive image assets, and the process SVG returned HTTP 200.
- PASS: `/produk` → `/pyronex-ii`, `/solusi/tps3r-tpst` → `/solusi/tps3r`, and `/solusi/tpst` → `/solusi/tps3r` returned permanent 308 redirects. Vercel `cleanUrls` normalizes the legacy `/produk.html` extension to `/produk` before the canonical redirect; the extension path is not in the sitemap.
- PASS: production HTML fingerprints showed the canonical product title, visible breadcrumb, evidence section, new technology page, Tambakboyo page, and new article pages.
- LIMITATION: this shell check does not measure mobile LCP, INP, CLS, or submit the Search Console requests that require the verified account.
