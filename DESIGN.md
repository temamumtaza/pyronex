# Pyronex design and source notes

User direction: product landing page using the source deck or the visual style of https://temamumtaza.github.io/tps-anggadita/details/. The reference supplies style only, never project content.

Design read: forest green, warm paper, precise industrial imagery, editorial typography and document-like rules. ENERGY 2 / RHYTHM 3 / MOTION 1. Space Grotesk, Inter and IBM Plex Mono intentionally match the supplied reference. Mono labels identify engineering sections; fine rules separate data. Mint highlights the core proposition. No decorative icon set, gradients, invented brand symbol, testimonial or animated machinery. Product name is text. Layout moves from split hero to compact introduction, editorial columns, full-width process diagram, material rows, interactive specification selector and contact panel. Arrows communicate scroll direction or outbound action.

Source folder: /Users/temamumtaza/Library/Mobile Documents/com~apple~CloudDocs/BISNIS/KIBAR/Pyronex

- Pyronex2 by LBS Product Knowladge Slide.pdf: page 3 process diagram; page 6 reactor illustration and process specification. These supply the two published images.
- Pyronex - Solusi Pengolahan Sampah Terdesentralisasi Kota Bekasi.pptx.pdf: product/process explanation, configuration table (1/2/4/8 tons daily; 8 hours; footprint 5x5/7x7/5x10/5x20 m), wood pellet fuel, shredder/squeeze, wet scrubber, final slide business contact.
- Product capacity references are explicitly indicative. No municipal figures, investment amounts or commercial arrangements copied from the style reference.
- Do not claim zero emissions, zero landfill, guaranteed reduction or earnings, site certification, or universally safe agricultural biochar. Input preparation and product testing remain explicit. Do not equate one product generation's field evidence with another generation's validation.

Implementation: static HTML/CSS/JS, no build dependency, no analytics, no collected form data. Capacity changes locally; WhatsApp opens a prefilled draft that the visitor chooses whether to send. Static content needs no remote loading or empty/error states. Navigation remains readable without JS at desktop; mobile JS controls the disclosure. Reduced-motion disables smooth scrolling.
