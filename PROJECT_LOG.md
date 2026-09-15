# Project Log

A running, reverse-chronological record of what's happened on this
site, session by session — not the site's own content, but the
internal narrative: what got worked on, what state things were left
in, and what's worth knowing next. Read this at the start of a session
to pick up where the last one left off instead of starting cold.

Add a new entry at the top whenever a meaningful unit of work wraps up
— this is one of the things the `retro` skill does.

---

## 2026-09-15

**Done:**
- Fixed two bugs Joseph found on a real phone, both from screenshots he
  sent: (1) the site had no mobile navigation anywhere — the shared
  header's `.nav-links` were just hidden below 780px with nothing to
  replace them, across all 16 pages. Added a hamburger button and
  dropdown panel to the shared header (new `assets/js/nav.js`, mirroring
  the existing `lightbox.js` pattern), closing on link tap or
  tap-outside. (2) the Momentini case study's content sections rendered
  black and unreadable in light mode. Root cause: the page's own theme
  toggle only ever drove the shared header's colors — the case study's
  own scoped design tokens (`--paper`/`--ink`/etc., left over from the
  original standalone Claude Artifact this page was ported from) were
  independently governed by the device's OS dark-mode preference and a
  `data-theme` attribute nothing ever set. A prior session had added a
  `html.dark`-scoped mirror rule to fix this but never removed the
  competing OS-preference mechanism, so the bug persisted in a
  reshaped form. Removed the leftover mechanism outright, leaving the
  `html.dark` rule as the only source of truth. Verified both fixes
  locally with Playwright (mobile + desktop viewports, and a simulated
  OS-dark-preference device to reproduce the exact failure mode) since
  the deployed site itself isn't reachable from this session. Opened as
  [PR #8](https://github.com/josephemmi/personal-website/pull/8), not
  yet merged, pending Joseph's review.
- `retro`: two findings, both fixed as CLAUDE.md notes (docs-only,
  Joseph approved both): mobile QA should explicitly check the header
  nav is reachable, not just the component being changed (added to
  Local preview); and `work/momentini.html` now has exactly one
  dark-mode mechanism, flagged as a gotcha so a future session doesn't
  reintroduce the OS-preference fallback that caused this bug.

**In flight / open:**
- [PR #8](https://github.com/josephemmi/personal-website/pull/8):
  mobile nav + Momentini dark-mode fix, awaiting Joseph's review before
  merging (auto-deploys to production on merge, no staging gate).

**Worth knowing:**
- The site previously had zero mobile navigation and nothing caught it
  until a real device screenshot — see the new CLAUDE.md note under
  Local preview.

---

## 2026-09-10

**Done:**
- Built out the full Momentini/Nestlog case study page
  (`work/momentini.html`), ported from the "Nestlog Case Study" Claude
  Artifact and taken through many rounds of content and design
  feedback: even-width hero stat cards, rewritten Vision/Features/
  Origin story copy, a Linear-style Roadmap section (status dots,
  priority bars, tag chips grouped status-then-type) replacing an
  earlier plain kanban layout, a collapsible Mermaid workflow diagram,
  and a full site-wide em-dash cleanup — including ~35 `&mdash;` HTML
  entities an earlier pass missed by only searching for the literal
  character.
- Renamed "Work" to "Case Studies" site-wide, split the case-studies
  list into "Personal & independent" (Momentini, Agatha — now in a
  highlighted rounded panel) and "Professional case studies" (the
  three Scottish Water/Weir Group projects), and added real thumbnails
  for Momentini and Agatha (replacing a gradient placeholder and a
  flow-diagram image respectively).
- Hid Photography from every nav location (header, footer, homepage
  bridge/focus cards) until there's content for it — the page itself
  is untouched, just unlinked.
- Merged via PR #2.
- Got `josephemmi.com` live on GitHub Pages: added the `CNAME` file,
  fixed GoDaddy's DNS (removed legacy domain-forwarding records and a
  stray `www` A record pointing at the old host, added the correct
  GitHub Pages `A` records plus a `www` CNAME), confirmed the Pages
  DNS check passed and enabled "Enforce HTTPS." Two red herrings along
  the way, both resolved: a brief genuine GitHub Pages-side outage
  (confirmed externally via downforeveryoneorjustme.com, self-resolved
  within minutes), and a "mobile layout is broken" report that turned
  out to be Chrome's "Desktop site" toggle, not a CSS bug (verified
  locally with Playwright at a real 390px viewport first).
- First run of the `retro` skill for this repo: created this log and
  `CLAUDE.md` (git/deploy workflow, writing conventions, local preview
  steps, and the gotchas above, including the domain/DNS reference).
  Work tracking for this repo going forward is GitHub Issues, not
  Linear (Linear stays reserved for baby-tracker-app/Momentini). Filed
  the leftover `joseph-emmi-website` Vercel project cleanup as
  [issue #3](https://github.com/josephemmi/personal-website/issues/3).

**Worth knowing:**
- The leftover `joseph-emmi-website` Vercel project (paused, unused)
  still generates a stray failing "Vercel" status check on every PR to
  this repo — see issue #3. Harmless, just cosmetic noise, no rush.
- Full DNS/Pages custom-domain setup is documented in `CLAUDE.md` under
  Gotchas — check there before troubleshooting from scratch if the
  domain ever has issues again.

---
