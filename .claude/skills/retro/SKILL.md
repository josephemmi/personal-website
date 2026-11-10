---
name: "retro"
description: "Run a short retrospective at the end of a meaningful unit of work: closing a ticket, opening or merging a PR, cutting a release, finishing a handoff or planning session. Surfaces process, tooling and workflow friction, and adds an entry to the project's running log so the next session doesn't start cold. Works on both sides of a studio project (Claude Project and Claude Code) and sends findings that apply to every project to the studio Improvements log. Trigger proactively at such milestones, and when asked for a retro, wrap-up or process check, or /retro. Not for small edits or mid-task check-ins; nothing to flag is a valid outcome."
---

# Retro (v1.2)

A short look-back at the end of a piece of work, aimed at the *process* around the work rather than the work itself: things that were confusing, manual, undocumented, or would trip up the next session the same way they just tripped up this one. And it keeps the project's running log current, so no session starts cold.

## Why this exists

1. Useful lessons surface constantly while doing real work, but they only get acted on if they happen to come up in conversation. This makes the check deliberate.
2. On any project with continuity, context about what happened and what's next otherwise lives in one conversation. The log keeps it durable.
3. Studio projects all follow one playbook (v1). A finding that applies to every project is how the playbook improves, so it has its own route (below) instead of being fixed quietly in one repo.

## Which side am I on?

Decide first; it sets where the log lives and which tools exist.

| | Project side (the product's Claude Project) | Code side (Claude Code, the repo) |
|---|---|---|
| Runs after | Step 9 (after a handoff or a planning or design session), and after a release (step 14) | A ticket closes, a PR is opened for merge or merged, a release is cut |
| Log | The **Project log** in Drive (ID in the Project profile). One running log; there is no Retros/ folder (P3) | `PROJECT_LOG.md` in the repo, imported by CLAUDE.md |
| Can read | Drive, Linear, the Project profile | The repo, git, Linear, the preview, and Drive and the Project profile through Composio |
| Cannot do | See the repo | Nothing extra: Drive writes follow the same routine on both sides, with Joseph's go-ahead |

If the Claude Code side finds a repo-local copy of this skill under `.claude/skills/`, that is a finding in itself: a copy overrides the shared version and drifts, so ask Joseph to remove it.

## When to run this

Right after a natural stopping point, not on a timer and not mid-task:

- A ticket just got closed, moved to review, or otherwise resolved
- A PR just got opened for merge, or just got merged
- A release just got cut (project side: once the release notes are filed)
- A handoff just finished (step 9), or a scoping or design session just ended
- Joseph says "what's next," "we're done here," "good session," or otherwise signals wrapping up
- He asks for a retro, a wrap-up, or types `/retro`

Don't run it after small, self-contained edits or mid-task. If several milestones happen in quick succession in one session, one retro covering all of them is enough.

## Step 1: Look back over what just happened

Reconstruct the unit of work from this session's own context, plus `git log` and `git diff` on the code side or the finished tickets and release notes on the project side. Look for:

- **Friction you had to work around.** Trial and error, a question you had to ask, an improvised workaround, a missing convention, a tool that didn't do what its description implied.
- **Manual steps that felt like they should be automated.** Done by hand more than once, or with an obvious mechanical fix (a template, script, hook, default). Inherently manual steps (judgement, or a human before something goes live) don't count.
- **Things a future session would hit again.** If nothing changes, would the next session hit the same confusion?
- **Whether it's already covered.** Check CLAUDE.md and AGENTS.md (code side) or the Project profile and playbook (project side) first; if it's written down and you hadn't read it, that's not a gap.

A quick scan, not an audit.

## Step 2: Compile candidate findings

For each real candidate: **What happened**, **Why it's friction** (what it cost, why it will recur), **What a fix would look like** (concrete: "write X in CLAUDE.md", not "improve documentation"). Then sort each into one of two kinds:

- **Project finding**: specific to this product, its repo, its tickets or its docs.
- **Playbook finding**: would hit every project (a skill, a template, a Linear convention, the Drive layout, a pitfall in a tool). These do not get fixed quietly in one project.

Drop anything trivial, one-off, or already covered. If nothing survives, say so in a sentence and stop at the log step: "nothing to flag this time" is a good outcome.

## Step 3: Present findings and decide together

Bring the list conversationally, short. For each finding ask what to do:

1. **Fix it now** (project findings only): a small, safe, doc or config change. Treat anything touching shared state or production configuration with the same care as outside a retro.
2. **File it for later**: a Linear ticket in the profile's project, from the right template, with Area and Type passed explicitly (Engineering for build, tooling and developer docs; an Area Task for non-code) and priority passed explicitly. Created tickets are shown to Joseph, who decides whether to fix now.
3. **Drop it.** Legitimate; don't push back.

Playbook findings take a fourth route: **send to the Improvements log**. Entry format, newest first: `YYYY-MM-DD | project | what happened | proposed change | status (open / folded into vX)`. The log is `Improvements log.md` in the studio _Playbook folder. Both sides can write to Drive through Composio: re-read the file straight before saving, add the entry to that fresh copy, save, read it back. Only if Composio cannot be reached, give Joseph the finished line to paste, and note "playbook finding pending: <one line>" in PROJECT_LOG.md. Never edit a shared skill or template from inside a project session; the studio folds log entries into new versions in batches.

Don't batch these into one wall of text; list them briefly and let the conversation sort out each.

## Step 4: Update the project's running log

Runs whenever real work happened, even if Steps 2 and 3 found nothing, because its job is progress. Skip it for a one-off question or a task with no continuity.

- **Find the log; don't assume.** Project side: the Project log ID is in the Project profile. Code side: `PROJECT_LOG.md`, imported by CLAUDE.md. If neither exists, say so and propose creating it from the studio template; ask once.
- Keep the five-line **Current state** block at the top true (version, current step, in flight, next, open flags), and archive: at each release, or when the file passes about 20 KB (check its size when reading), move entries older than the previous release to a "Project log archive" file in the same folder, leave a one-line link to it at the bottom, read both back (DL47).
- Add a new entry under Entries, newest first, in the format the log already uses: what got done (with ticket and PR links), what's in flight or open, and what to flag for whoever picks it up next. Proportional: a small session gets a few lines.
- Project side after a release: read the release notes in Product/Release Notes (by ID) and the milestone's tickets in Linear, and record what shipped and what was learned, so the Drive log carries the release even though the repo is not readable from here.
- Don't confuse it with the user-facing CHANGELOG or a gotchas list.
- Drive writes follow the studio routine: re-read straight before saving, save, read back through Composio's download.

## Step 5: Act, then stop

Apply what was decided, make the log entry, confirm briefly what happened to each finding, and stop. If a finding turns out bigger than expected, that's a sign it belongs in "file it for later". On the project side, set nothing else: the step's own skill sets the Projects row.

Metrics: when the retro runs inside another skill's finish, that skill's session-metrics row covers it. Run on its own, end with session-metrics (Stage 9 Retro). Anything this look-back found that made the work longer is the reason line for that row.