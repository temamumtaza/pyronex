# Verification, 23 September 2026

## Functional and deployment checks

- PASS: local static HTTP server and production page loaded in Brave; both published WebP images loaded with nonzero natural dimensions.
- PASS: every internal destination exists; technology, process, capacity, contact, hero CTA, brand and back-to-top links were clicked and their URL fragments checked.
- PASS: all four capacity buttons changed title and footprint to the source values (1: 5x5 m, 2: 7x7 m, 4: 5x10 m, 8: 5x20 m).
- PASS: mobile menu opens, closes after navigation, and closes on Escape with focus returned. Capacity selection also works with Enter.
- PASS: live WhatsApp capacity link opened the external draft with the correct phone and selected 8 ton/day text. No message sent. Email uses the source-verified mailto address; delivery is handled by the visitor's email application.
- PASS: observed desktop viewport/scroll width 1633/1633, mobile 433/433, live 351/351 and 390/390. No horizontal document overflow. Earlier 390 override on the local tab measured 433 due browser sizing; production 390 was independently confirmed.
- PASS: 104 rendered text elements in the mobile DOM were checked against computed ancestor backgrounds. Minimum text contrast 5.26:1; no failures below 4.5:1.
- PASS: captured browser warning/error logs empty, JavaScript syntax check and Git whitespace checks clean.
- PASS: production HTTPS page loaded on pyronex.web.id. Vercel reports both apex and www configured correctly, verified, and without conflicts. www responds 308 to https://pyronex.web.id/.
- PASS: GitHub repository connected to Vercel; source committed to main. Work/source files and environment files are excluded from publication. /.env.local returned HTTP 404.

## Anti-slop delivery gate

- Hard gate PASS: no fabricated testimonials, performance numbers or certification claims; numeric capacities and contact details traced to local decks. No em dashes, ghost navigation, inert forms, generic FAQ or new invented logo. Contrast, overflow, image loading and interactive controls checked as above. Static document has no fetched data or remote loading/empty/error states to simulate.
- Purpose gate PASS: typography and green/paper palette follow the requested reference. Mono labels denote technical sections, lines separate content, outbound/scroll arrows communicate action. No gradients, glows, floating panels, decorative icons, background grids, or gratuitous animation.
- Liveliness PASS: ENERGY 2 / RHYTHM 3 / MOTION 1 declared before implementation. Machine image and large headline form the hero focal points; the full-width process diagram, editorial rows and capacity selector create distinct section compositions. Mint emphasis and repeated engineering labels establish identity.
- Craftsmanship PASS: source-derived imagery and content; real capacity behavior; visible keyboard focus; reduced-motion support; restrained palette and no template testimonial/pricing blocks. The responsive page and production route were inspected directly.

External WhatsApp/email sending, site-specific machine performance, product certification and commercial outcomes are not claimed as tested by this website QA.
