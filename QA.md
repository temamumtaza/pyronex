# Verification, 23 September 2026

## Local release checks

- PASS: all six HTML pages have one H1, a unique title, description, canonical URL, and indexable robots metadata.
- PASS: JSON-LD parses on every page; sitemap XML parses and contains all six canonical URLs.
- PASS: internal destinations resolve to a local page, every local image exists, and each image has descriptive alt text.
- PASS: `node --check script.js` and `git diff --check`.
- PASS: Pyronex product, application, laboratory, and company pages rendered in Brave desktop. Nitikan is identified as sorted organic input on Pyronex I; Tambakboyo as approximate mixed residual input on Pyronex I. No field photographs were supplied or fabricated.
- PASS: capacity selector tested at 1, 2, and 8 ton/day. Displayed footprints and the WhatsApp draft link updated to the referenced values; the default 4 ton/day state is present in the HTML. No WhatsApp message was sent.
- PASS: the product FAQ opened and displayed its answer in the browser accessibility tree.
- PASS: GreenLab chart and table distinguish eight thresholded parameters from the unbounded airflow row; biochar graphic and table reproduce the listed sample data without including report scans.
- PASS: the accessible UI tree exposes page landmarks, headings, table headers, image descriptions, and labeled navigation.
- PASS: commit `bbfd00a` deployed to Vercel Production. All six clean URLs, `robots.txt`, and `sitemap.xml` returned HTTP 200 on `pyronex.web.id`.
- PASS: live `robots.txt` allows Googlebot, Bingbot, OAI-SearchBot, GPTBot, ClaudeBot, Google-Extended, PerplexityBot, and user-initiated retrieval crawlers; it points to the production sitemap.
- PASS: Search Console processed the production sitemap as “Sukses” and found six pages. IndexNow returned HTTP 200 for the six canonical URLs. Google reports the homepage indexed; URL Inspection accepted priority crawl requests for the homepage and five child pages. The five child pages initially showed “Ditemukan - saat ini tidak diindeks”.
- PASS: the deployed homepage rendered in Brave and exposes all five page links plus the product illustrations and source context.

## Boundaries and remaining checks

- Responsive breakpoints are implemented for desktop, tablet, and narrow screens. A specific phone-sized browser viewport was not independently simulated in this release check.
- Phone-sized browser viewport was not independently simulated in this release check.
- Search Console indexing status may take time to update. Sitemap processing and crawl requests are discovery signals, not confirmation of indexing or ranking.
- Field photos and any substantiation for the requested nationwide “first” claim were not supplied. The unverified first claim is omitted.
- Laboratory scans are not republished; the website asks readers to obtain the report through the companies if they need the full document.
