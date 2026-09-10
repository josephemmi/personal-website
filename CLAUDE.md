## Work tracking

- Work for this repo (Joseph's personal site) is tracked in **GitHub
  Issues** on this repo, not Linear. Linear (team JOS) is reserved for
  the baby-tracker-app / Momentini project only.

## Git & deploy workflow

- This is a static site: plain HTML/CSS/JS, no build step, no bundler,
  no `npm install` needed to work on it.
- Hosted on **GitHub Pages**, building from the `master` branch (root).
  There's no staging environment — merging to `master` deploys
  immediately, live at `https://josephemmi.com`. See Gotchas below for
  the domain/DNS setup.
- Every change gets its own branch and a PR into `master`, reviewed by
  Joseph before merging — even for docs-only changes. Merging is the
  actual "go live" moment, same discipline as baby-tracker-app.
- Never reuse an old (already-merged) branch for unrelated new work —
  start a fresh branch off the current `master` each time.
- No CI, no lint/test/build step configured for this repo. Preview
  changes locally instead (see below) before pushing.
- When wrapping up a meaningful unit of work (a PR merged, a round of
  content changes finished, a milestone like getting the domain live),
  run the `retro` skill before ending the session — same convention as
  baby-tracker-app.

## Local preview

- No env vars or dev server framework needed — just serve the repo
  root and open a page: `python3 -m http.server 8123` from the repo
  root, then visit `http://localhost:8123/<page>.html`.
- For visual verification (especially anything responsive), use
  Playwright at a real mobile viewport width (e.g. 390px) rather than
  eyeballing devtools — confirms the actual computed CSS, not just
  what devtools claims is applied.

## Writing & copy conventions

- **No em dashes, ever.** Joseph doesn't use that character in his own
  writing — replace with a comma, parentheses, or a period, whichever
  reads best. This applies to the literal "—" character *and* the
  `&mdash;` HTML entity — a search that only checks one will miss the
  other (cost a full extra cleanup pass once already).
- On any section with a small kicker label above a heading (e.g.
  `<p class="section-kicker">` + `<h2 class="section-title">`),
  "subtitle" in Joseph's vocabulary means the `<h2>` heading itself,
  not the smaller dek/lede paragraph underneath it.
- Section-title (`<h2>`) headings shouldn't end in a trailing period,
  even when they read as a full sentence.

## Gotchas

- **A bare `josephemmi.github.io` will 404 — this is expected, not a
  bug.** This repo (`personal-website`) is a GitHub Pages *project*
  site, not a user site (a user site requires the repo to literally be
  named `josephemmi.github.io`). The real project-site URL is
  `josephemmi.github.io/personal-website/`. The custom domain
  (`josephemmi.com`) serves the site at its own root regardless, once
  DNS and the Pages custom-domain check are both green.
- **If a live page "isn't rendering the mobile layout" despite correct
  responsive CSS, check the reporter's browser for a "Desktop site"
  toggle before assuming a CSS bug.** Verify locally with Playwright at
  a real narrow viewport first — if the CSS computes correctly there
  (e.g. `.nav-links` actually resolves to `display: none` at 390px),
  the bug isn't in the code.
- **DNS / GitHub Pages custom domain reference** (set up 2026-09-10):
  domain is registered at GoDaddy. Current, correct records:
  - `A` `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
    `185.199.111.153` (GitHub Pages IPs)
  - `CNAME` `www` → `josephemmi.github.io`
  - `CNAME` file at the repo root containing `josephemmi.com`
  - GoDaddy also had legacy "Domain Forwarding" A records
    (`15.197.225.128` / `3.33.251.168`) and a stray `www` A record
    pointing at an old host (likely the old Wix site) — both had to be
    removed before Pages' custom-domain DNS check would pass. If the
    domain ever stops resolving, check whether GoDaddy's Forwarding
    setting (a separate page from the DNS records list) has been
    re-enabled.
  - Email (`hello@josephemmi.com`) runs through Zoho Mail via MX/TXT
    records on the same domain — unrelated to the site, don't touch
    those when working on DNS.
