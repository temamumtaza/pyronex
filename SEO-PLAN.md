# SEO and AI discovery

Updated 23 September 2026. The site now has six Indonesian pages, each covering a distinct product, technology, application, lab evidence, or company intent. The live search snapshot returned no result for `site:pyronex.web.id` or the exact Pyronex phrase before this multi-page release. Public research did not provide defensible search-volume estimates, so none are invented and no ranking promise is made.

## Search-intent map

| Intent | Phrases | Page coverage |
| --- | --- | --- |
| Commercial, primary | mesin pengolah sampah pirolisis; mesin sampah pirolisis | Homepage and product page titles, headings, and descriptions |
| Commercial, application | mesin pirolisis sampah campuran; mesin pengolah sampah TPS3R | Application page explains the Nitikan and Tambakboyo feed contexts |
| Commercial, product | Pyronex II; mesin Pyronex | Product page with source-derived illustration and indicative configuration |
| Technical research | cara kerja mesin pirolisis sampah; kapasitas mesin pirolisis | Technology and product pages explain stages and conditional capacity |
| Evidence and trust | hasil uji emisi pirolisis; hasil uji biochar | Lab page reports sample-level data, lab identity, dates, and limitations |

Google/Bing volumes, trends, paid auction competition, and query-level rankings were unavailable in the public research snapshot. Generic results for "mesin pirolisis sampah" mix plastic-to-fuel equipment with broader waste systems, so Pyronex copy distinguishes the integrated line and qualifying organic feedstock from out-of-spec fractions. These are hypotheses grounded in the requested primary phrase and existing product specification; review them using real Search Console/Bing query data after verification.

## Site and crawler changes

- Six crawlable static HTML pages use distinct intent, canonical, title, description, social metadata, descriptive headings, internal links, and page-level schema.
- Search intent coverage includes product buying, technology research, two Pyronex I field contexts, sample-based test results, and company contact. The site distinguishes Pyronex I field locations from the Pyronex II product configuration.
- JSON-LD describes WebSite, WebPage, Organization, BreadcrumbList, and general Thing entities. Product rich-result markup is omitted because source material does not provide offer, price, review, or rating data.
- `sitemap.xml` lists all six canonical pages and the actual product/process illustrations. Custom CSS charts visualize lab data; scans of lab report pages are not reproduced.
- `robots.txt` allows Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, GPTBot, ClaudeBot, Google-Extended, PerplexityBot, and Perplexity-User. The user explicitly authorized training crawlers. Search and training crawler controls remain separate where the platform defines them separately.
- IndexNow previously accepted the canonical homepage URL (HTTP 200); this update must submit the six canonical URLs after production deploy. A successful submission means discovery notification, not indexing or ranking.
- Keep useful, accessible HTML as the source of truth for search and AI retrieval. `llms.txt`, keyword stuffing, doorway pages, fake reviews, and unsupported first-in-Indonesia claims are omitted.

## Claim boundary

The requested absolute claim that Pyronex is the first Indonesian producer/product for waste management through pyrolysis is not stated as verified fact. Public research already found other documented pyrolysis initiatives, including an ITERA pyrolysis unit and the PYROMAND public-sector innovation entry. Their scope may differ, but that makes a nationwide “first” claim hard to define and substantiate from the supplied materials. A narrower claim needs a defined category and date plus primary evidence such as dated commissioning records or independent documentation.

## Search Console verification and monitoring

On 23 September 2026, domain ownership for `sc-domain:pyronex.web.id` was verified in Search Console under `reizants17@gmail.com` using a TXT record at the root of the SumoPod DNS zone. Keep that DNS verification record in place to retain ownership verification.

Before this multi-page release, Search Console processed the sitemap and found the original homepage. URL Inspection reported the homepage available and indexable, with no enhancement issues after removing incomplete Product rich-result markup. A request to index `https://pyronex.web.id/` was accepted into Google's priority crawl queue. After the multi-page production deployment, resubmit the sitemap and request inspection for important new URLs. These signals do not confirm indexing or guarantee when/if pages will appear. Monitor URL Inspection, the Page Indexing report, and query impressions.

## Authority guidance used

- [Google technical eligibility](https://developers.google.com/search/docs/essentials/technical): public access, successful page response, and indexable content establish eligibility; index inclusion is not guaranteed.
- [Google AI features](https://developers.google.com/search/docs/appearance/ai-features): standard SEO, index eligibility, accessible content, and accurate markup remain relevant; there is no special AI schema requirement.
- [Google generative AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): prioritize useful, distinct content and avoid unnecessary AI files or AEO/GEO hacks.
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): provide absolute canonical URLs, submit through Search Console.
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots): OAI-SearchBot controls ChatGPT search discovery independently of GPTBot training crawling.
- [IndexNow protocol](https://www.indexnow.org/documentation): successful URL submissions notify participating engines to discover changed pages; HTTP acceptance is not indexing confirmation.
- [ITERA pyrolysis unit](https://iwaci.itera.ac.id/list-unit-kerja/pirolisis/) and [PYROMAND public innovation record](https://pindah.jatengprov.go.id/inovasi/detail/2709): other publicly documented initiatives relevant to evaluating an unqualified national-first claim.
