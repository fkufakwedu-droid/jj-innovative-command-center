# command-center

Portfolio Command Center for client AIOS builds (demo data only; this repo is public).

- `assets/` shared app (built from the source tarball, `vite build -c vite.pages.config.js`)
- `<client>/config.js` per-client name, logo, colours, properties, seed
- `new-client.sh <slug> "<Client Name>"` creates a client folder from `_template/`

Live at `https://fkufakwedu-droid.github.io/jj-innovative-command-center/<client>/`.

## Clickable cards

Every card, KPI tile, chart bar, list row and table row opens the page that holds its data, and shows a
"Source: <page> ›" label. Pages: Units, Rent arrears, Loans, Projects, Tickets, Buildings, Leasing pipeline, Activity log,
plus unit, tenant, work-order and contact pages (hash links such as `#unit-<id>`, `#tenant-<unitId>`, `#wo-<id>`,
`#contact-<id>`, so Back returns to the same place). Every person, tenant, lender, vendor, trade or realtor name opens a
contact page with details and a communication history (text, email, call, snail mail) with filters.

Optional per-client fields in `config.js`: `dashboardUrl` (the client's n8n dashboard, opens in a new tab) and `sourceMap`
(re-point any card). The Drafts queue has no in-app table, so it is reached through `dashboardUrl`.
All contact details and messages are generated demo data.

Never put real client financials or tenant data in this repo. Real data must come from the client's PIN-protected n8n API.
