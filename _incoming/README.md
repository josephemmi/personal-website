# Incoming drop zone

This folder is just a staging area — nothing in here is part of the live
site. Drop your Claude project export here and let Claude Code know; it'll
get pulled apart, cleaned up, and moved into the real site structure
(`assets/css`, `assets/js`, `images/`, and the page `.html` files at the
repo root), then this folder gets deleted.

Where to drop things (via github.com — open this folder, "Add file" →
"Upload files"):

- `_incoming/pages/` — the HTML page files themselves (e.g. `about.html`,
  `projects.html`, whatever the export produced). Doesn't matter if they're
  full standalone documents with duplicated `<head>`/CSS in each one —
  that'll get sorted out.
- `_incoming/images/` — any images, icons, or other media the export
  references.
- `_incoming/assets/` — any separate CSS/JS files the export includes, if
  they weren't just inlined in the HTML.

If it's easier, a single `.zip` of the whole export dropped directly into
`_incoming/` also works — just say so and it'll get unpacked from there.

Once it's uploaded, just say "it's in `_incoming/`, go ahead" and it'll be
integrated into the site.
