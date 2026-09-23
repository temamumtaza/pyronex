# Pyronex

Production: https://pyronex.web.id

Static product landing page. Serve locally with `python3 -m http.server 4173`. No framework or package installation required.

GitHub `temamumtaza/pyronex`, branch `main`, is connected to Vercel project `pyronex` in `temamumtazas-projects`. Pushes to main trigger production deployments.

DNS remains hosted on SumoPod (ns1.sumopod.com / ns2.sumopod.com):

| Type | Name | Value | TTL |
| --- | --- | --- | --- |
| A | @ | 216.198.79.1 | 300 |
| A | @ | 64.29.17.1 | 300 |
| CNAME | www | 46baa4ddd9f8b873.vercel-dns-017.com | 300 |

Vercel redirects www to the apex domain with HTTP 308. Domain configuration was verified on 2026-09-23. DNS recommendations can change; consult Vercel before future changes.

Source/claim boundaries and visual decisions: `DESIGN.md`. Verification: `QA.md`.
