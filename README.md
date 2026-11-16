# command-center

Portfolio Command Center for client AIOS builds (demo data only; this repo is public).

- `assets/` shared app (built from the source tarball, `vite build -c vite.pages.config.js`)
- `<client>/config.js` per-client name, logo, colours, properties, seed
- `new-client.sh <slug> "<Client Name>"` creates a client folder from `_template/`

Live at `https://fkufakwedu-droid.github.io/command-center/<client>/`.

Never put real client financials or tenant data in this repo. Real data must come from the client's PIN-protected n8n API.
