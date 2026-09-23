# Pyronex design and source notes

User direction: a multi-page Pyronex product website using the source deck or visual style of https://temamumtaza.github.io/tps-anggadita/details/. The reference supplies style only, never project content.

Design read: forest green, warm paper, precise industrial imagery, editorial typography and document-like rules. ENERGY 2 / RHYTHM 3 / MOTION 2. Space Grotesk, Inter and IBM Plex Mono intentionally match the supplied reference. Mono labels identify engineering sections; fine rules separate data. Mint highlights the core proposition. Motion is reserved for a one-pass process trace on the home and technology pages, with manual replay and a reduced-motion fallback; it explains the material path instead of animating machinery as decoration. No decorative icon set, gradients, invented brand symbol or testimonial. Product name is text. The six pages cover the home index, product configuration, process, field applications, lab results, and companies/contact. Editorial rows, responsive tables, custom data graphics, process illustrations and careful distinctions between Pyronex I and II carry the visual rhythm.

Source folder: /Users/temamumtaza/Library/Mobile Documents/com~apple~CloudDocs/BISNIS/KIBAR/Pyronex

- Pyronex2 by LBS Product Knowladge Slide.pdf: page 3 process diagram; page 6 reactor illustration and process specification. These supply the two published images.
- Pyronex - Solusi Pengolahan Sampah Terdesentralisasi Kota Bekasi.pptx.pdf: product/process explanation, configuration table (1/2/4/8 tons daily; 8 hours; footprint 5x5/7x7/5x10/5x20 m), wood pellet fuel, shredder/squeeze, wet scrubber, final slide business contact.
- Product capacity references are explicitly indicative. No municipal figures, investment amounts or commercial arrangements copied from the style reference.
- Do not claim zero emissions, zero landfill, guaranteed reduction or earnings, site certification, or universally safe agricultural biochar. Input preparation and product testing remain explicit. Do not equate one product generation's field evidence with another generation's validation.
- Do not publish a nationwide “first” claim without a defined comparison category and verifiable primary evidence. Publicly documented alternative pyrolysis initiatives surfaced during research.
- Field installation photos were not supplied for this release. Product illustrations are labeled as illustrations and are not presented as field photography.
- Laboratory report scans are not reproduced; the lab reports restrict republication without authorization. Web graphics are fresh visualizations of the reported sample data and retain report IDs, dates, and limitations.

Implementation: static HTML/CSS/JS, no build dependency, no analytics, no collected form data. Capacity changes locally; WhatsApp opens a prefilled draft that the visitor chooses whether to send. Static content needs no remote loading or empty/error states. Navigation remains readable without JS at desktop; mobile JS controls the disclosure. Reduced-motion disables smooth scrolling.
