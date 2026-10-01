# SEO and AI discovery

Updated 1 October 2026. The site uses Indonesian pages for product, technology, application, evidence, company, and buyer-question intents. Public research did not provide defensible search-volume estimates, so none are invented and no ranking promise is made. Keep this file aligned with the routes actually published and indexable; a planned page does not belong in the sitemap until it exists.

## Search-intent map

| Intent | Phrases | Page coverage |
| --- | --- | --- |
| Commercial, primary | mesin pengolah sampah pirolisis; mesin sampah pirolisis | Homepage and product page titles, headings, and descriptions |
| Commercial, application | mesin pirolisis sampah campuran; mesin pengolah sampah TPS3R | Application page explains the Nitikan and Tambakboyo feed contexts |
| Commercial, product | Pyronex II; mesin Pyronex | Product page with source-derived illustration and indicative configuration |
| Technical research | cara kerja mesin pirolisis sampah; kapasitas mesin pirolisis | Technology and product pages explain stages and conditional capacity |
| Evidence and trust | hasil uji emisi pirolisis; hasil uji biochar | Lab page reports sample-level data, lab identity, dates, and limitations |
| Biochar | biochar dari sampah organik; hasil pirolisis sampah organik | Biochar page explains the organic process stream and the limits of the available sample tests |
| Buyer fit | mesin pengolah sampah TPS3R; solusi sampah pasar; pengolahan sampah kawasan industri | Solution pages explain operating considerations for each setting without assuming site suitability |
| Common questions | kapasitas Pyronex II; sampah yang dapat diproses; hasil pirolisis | FAQ answers link to the relevant product, technology, application, and test evidence |
| Technical reading | pemilahan sebelum pirolisis; kadar air umpan pirolisis; membaca hasil uji biochar | Insight index and supporting articles address specific operating and evidence questions |

Google/Bing volumes, trends, paid auction competition, and query-level rankings were unavailable in the public research snapshot. Generic results for "mesin pirolisis sampah" mix plastic-to-fuel equipment with broader waste systems, so Pyronex copy distinguishes the integrated line and qualifying organic feedstock from out-of-spec fractions. These are hypotheses grounded in the requested primary phrase and existing product specification; review them using real Search Console/Bing query data after verification.

## Site and crawler changes

- Crawlable static HTML pages use distinct intent, canonical URLs, unique titles and descriptions, social metadata, descriptive headings, internal links, and page-level schema.
- Preserve `/produk` as the canonical product URL. Keep existing routes available; add new routes only when they contain complete, useful content.
- Search intent coverage includes product buying, technology research, two Pyronex I field contexts, sample-based test results, company contact, biochar use boundaries, buyer-specific operating questions, and technical reading. The site distinguishes Pyronex I field locations from the Pyronex II product configuration.
- JSON-LD must describe information visible on the page. Do not add Offer, price, review, rating, or certification markup without matching public evidence; FAQ markup must match the published answers.
- `sitemap.xml` lists every published, indexable canonical route. Image entries are limited to relevant images that are present in page content. Custom CSS charts visualize lab data; scans of lab report pages are not reproduced.
- `robots.txt` allows Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, GPTBot, ClaudeBot, Google-Extended, PerplexityBot, and Perplexity-User. The user explicitly authorized training crawlers. Search and training crawler controls remain separate where the platform defines them separately.
- In the 23 September 2026 release, IndexNow accepted the then-current six canonical URLs (HTTP 200); the root verification file was served and matched the configured key. A successful submission means discovery notification, not indexing or ranking.
- Keep useful, accessible HTML as the source of truth for search and AI retrieval. `llms.txt`, keyword stuffing, doorway pages, fake reviews, and unsupported first-in-Indonesia claims are omitted.

## Claim boundary

The requested absolute claim that Pyronex is the first Indonesian producer/product for waste management through pyrolysis is not stated as verified fact. Public research already found other documented pyrolysis initiatives, including an ITERA pyrolysis unit and the PYROMAND public-sector innovation entry. Their scope may differ, but that makes a nationwide “first” claim hard to define and substantiate from the supplied materials. A narrower claim needs a defined category and date plus primary evidence such as dated commissioning records or independent documentation.

## Search Console verification and monitoring

Historical check on 23 September 2026: Search Console processed the then-current six-URL sitemap and showed the homepage as indexed. Five child URLs initially showed “Ditemukan - saat ini tidak diindeks”; crawl requests were accepted. IndexNow also accepted those six URLs. These results establish submission and discovery signals only, not indexing of every page or rankings. Domain ownership was verified through DNS; retain the existing verification record.

### After each production deployment

1. Open `https://pyronex.web.id/sitemap.xml` and confirm that each listed URL is canonical, published, indexable, and returns successfully. Check that removed or redirected URLs are absent.
2. Open `https://pyronex.web.id/robots.txt` and confirm crawling remains allowed and the sitemap line is present.
3. Submit or resubmit the sitemap in Search Console. Use URL Inspection on the homepage and each materially changed or new page; request indexing when appropriate.
4. Check the Page Indexing report over time for exclusions, canonical mismatches, and crawl errors. Compare impressions and queries after enough data accumulates; do not treat sitemap acceptance or a crawl request as proof of indexing or ranking.

## Authority guidance used

- [Google technical eligibility](https://developers.google.com/search/docs/essentials/technical): public access, successful page response, and indexable content establish eligibility; index inclusion is not guaranteed.
- [Google AI features](https://developers.google.com/search/docs/appearance/ai-features): standard SEO, index eligibility, accessible content, and accurate markup remain relevant; there is no special AI schema requirement.
- [Google generative AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): prioritize useful, distinct content and avoid unnecessary AI files or AEO/GEO hacks.
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): provide absolute canonical URLs, submit through Search Console.
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots): OAI-SearchBot controls ChatGPT search discovery independently of GPTBot training crawling.
- [IndexNow protocol](https://www.indexnow.org/documentation): successful URL submissions notify participating engines to discover changed pages; HTTP acceptance is not indexing confirmation.
- [ITERA pyrolysis unit](https://iwaci.itera.ac.id/list-unit-kerja/pirolisis/) and [PYROMAND public innovation record](https://pindah.jatengprov.go.id/inovasi/detail/2709): other publicly documented initiatives relevant to evaluating an unqualified national-first claim.
