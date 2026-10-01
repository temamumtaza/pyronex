# Verification, 1 October 2026

## Local release checks

- PASS: all 15 published HTML pages have one H1, a unique title, description, canonical URL, indexable robots metadata, and the shared favicon.
- PASS: JSON-LD parses on every page; every graph has a linked publisher, brand, page identity, and breadcrumb where the page uses breadcrumbs. Sitemap XML parses and lists the 15 current canonical URLs.
- PASS: social metadata includes a crawlable image, dimensions, alt text, and a page author; article pages expose a modification date.
- PASS: `llms.txt` lists every published content route and states the Pyronex I/Pyronex II and sample-level laboratory boundaries without adding unsupported claims.
- PASS: local links, route fragments, scripts, stylesheets, and referenced images resolve. Every content image has descriptive alt text.
- PASS: `node --check script.js` and `git diff --check`.
- PASS: the home process map remains the existing SVG/visual component. No raw ASCII flow diagram was introduced.
- PASS: capacity selector updates the plan label, footprint reference, status text, and WhatsApp draft link. The calculator labels its result as an initial average for incoming material, not final reactor sizing.
- PASS: the consultation form builds a WhatsApp draft with real line breaks and states that the static site does not store submissions.
- PASS: reduced-motion handling remains enabled for the process-map animation; the homepage fact strip collapses to one column at narrow widths.
- PASS: contrast checks for primary text, muted text, dark-surface text, and focus treatment meet the applicable WCAG thresholds.

## Evidence boundaries

- Pyronex I field notes and Pyronex II product configuration are separated throughout the copy.
- Capacity is described as nominal and dependent on feedstock and site configuration.
- Laboratory figures remain sample-level summaries. No Offer, price, review, rating, certification, or universal performance schema was added.
- The public Yogyakarta reference is described as a record of a presentation, not an endorsement or proof of universal performance.

## Production checks

Run after each push to `main`:

1. Confirm every sitemap URL and each clean route returns HTTP 200, including `/insight` and nested insight/solution routes.
2. Confirm `/robots.txt`, `/sitemap.xml`, and `/assets/favicon.svg` are publicly served.
3. Check the homepage copy, product capacity qualification, FAQ, lab caveat, and contact draft on the deployed domain.
4. Recheck Search Console URL Inspection and sitemap processing. Submission and crawl signals do not prove indexing or ranking.

The previous six-page release was deployed on 23 September 2026. Its historical Search Console and IndexNow results remain discovery evidence only; they do not describe the expanded release.
