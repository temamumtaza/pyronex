# SEO and AI discovery

Updated 23 September 2026. This project has a single Indonesian product page; keyword targets describe its actual equipment and supported uses. The live search snapshot returned no result for `site:pyronex.web.id` or the exact Pyronex phrase. Public research did not provide defensible search-volume estimates, so none are invented and no ranking promise is made.

## Search-intent map

| Intent | Phrases | Page coverage |
| --- | --- | --- |
| Commercial, primary | mesin pengolah sampah pirolisis; mesin sampah pirolisis | Title, H1, description, process section |
| Commercial, application | mesin pirolisis sampah; mesin pirolisis sampah campuran; mesin pengolah sampah TPS3R | Intro, input FAQ, contact |
| Commercial, product | Pyronex II; mesin Pyronex | Product entity, sections, source-derived imagery |
| Technical research | cara kerja mesin pirolisis sampah; kapasitas mesin pirolisis; keluaran biochar pirolisis | Process description, capacities, output copy, FAQ |

Google/Bing volumes, trends, paid auction competition, and query-level rankings were unavailable in the public research snapshot. Generic results for "mesin pirolisis sampah" mix plastic-to-fuel equipment with broader waste systems, so Pyronex copy distinguishes the integrated line and qualifying organic feedstock from out-of-spec fractions. These are hypotheses grounded in the requested primary phrase and existing product specification; review them using real Search Console/Bing query data after verification.

## Changes shipped

- Reworked the title, meta description, H1, Open Graph, and social preview around the primary commercial phrase in natural Indonesian.
- Added a visible process explanation and five buyer/technical questions. Input limits, product testing, capacity assumptions, installation, and commissioning are explicit; no sales price, output guarantee, customer quote, certification, or result was invented.
- Added JSON-LD entities for WebSite, WebPage, Organization, and Pyronex II as a general `Thing`. Product rich-result markup is omitted because the source does not provide the offer, price, review, or rating data needed for a valid product snippet.
- Added image locations and descriptive titles to the sitemap; the XML includes only the canonical page and its two product images.
- Published a root IndexNow key and notified IndexNow of the canonical page. The first live request returned HTTP 202 while key validation was pending; a retry after deployment returned HTTP 200 URL submitted successfully. This is not evidence that any engine indexed or ranked it.
- `robots.txt` explicitly allows Googlebot, Bingbot, OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, and Perplexity-User. GPTBot and ClaudeBot are disallowed as training crawlers; search and user-requested retrieval remain allowed. The wildcard also leaves Google-Extended available for Gemini grounding; Google documents it as independent from Google Search indexing.
- Kept the existing canonical HTTPS apex URL, single-page hierarchy, and static indexable HTML. No extra doorway pages, generated `llms.txt`, keyword lists, fake reviews, or city pages were added.

## Search Console verification and monitoring

On 23 September 2026, domain ownership for `sc-domain:pyronex.web.id` was verified in Search Console under `reizants17@gmail.com` using a TXT record at the root of the SumoPod DNS zone. Keep that DNS verification record in place to retain ownership verification.

Submitted `https://pyronex.web.id/sitemap.xml`; Search Console processed it successfully and found one page. URL Inspection initially reported the homepage as unknown to Google. The live URL test then reported it available and indexable, with no enhancement issues after removing incomplete Product rich-result markup. A request to index `https://pyronex.web.id/` was accepted into Google's priority crawl queue. This does not confirm the page is already indexed or guarantee when/if it will appear. Monitor URL Inspection, the Page Indexing report, and query impressions in Search Console as Google processes the request.

## Authority guidance used

- [Google technical eligibility](https://developers.google.com/search/docs/essentials/technical): public access, successful page response, and indexable content establish eligibility; index inclusion is not guaranteed.
- [Google AI features](https://developers.google.com/search/docs/appearance/ai-features): standard SEO, index eligibility, accessible content, and accurate markup remain relevant; there is no special AI schema requirement.
- [Google generative AI guidance](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide): prioritize useful, distinct content and avoid unnecessary AI files or AEO/GEO hacks.
- [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap): provide absolute canonical URLs, submit through Search Console.
- [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots): OAI-SearchBot controls ChatGPT search discovery independently of GPTBot training crawling.
- [IndexNow protocol](https://www.indexnow.org/documentation): successful URL submissions notify participating engines to discover changed pages; HTTP acceptance is not indexing confirmation.
