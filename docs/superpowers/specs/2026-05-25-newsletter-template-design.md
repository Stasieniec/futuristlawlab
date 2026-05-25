# Newsletter HTML Template — Design

**Date:** 2026-05-25
**Owner:** Futurist Law Lab
**Delivery platform:** Resend (broadcasts, HTML upload)

## Goal

Produce a reusable HTML email template for the Futurist Law Lab newsletter. The template must be elegant and minimal, on-brand with the Next.js site, and render reliably across as many email clients as possible — including Outlook desktop, Gmail (web/iOS/Android), Apple Mail, iOS Mail, Yahoo, and dark-mode-capable clients.

The first concrete payload is the "Law & Tech Opportunities — First Issue" content the user supplied. The template must structure that content as a worked example so the user can copy/edit/paste it into Resend each issue.

## Non-goals

- React Email / MJML / build pipeline. The output is a single static `.html` file the user pastes into Resend's broadcast HTML editor.
- Personalization tokens beyond Resend's unsubscribe merge tag.
- A plain-text alternative file. (Resend can auto-generate one from the HTML; we note this in the file but don't author it.)
- Web fonts or downloaded assets beyond a single hosted logo PNG.

## Aesthetic direction

Modern minimal sans — matches the site:

- Type stack approximating Geist: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`. No `@font-face` (stripped by half of clients; fallback drift is uglier than just shipping system).
- Body text `#1e293b` on `#ffffff`. Muted text `#64748b`. Single accent — brand blue `#1e40af` — for links, the section rule, and the wordmark.
- Hairline dividers `#e2e8f0`.
- 16px body, 1.6 line-height. 28px H1, 600 weight. 11px tracked uppercase eyebrows for section labels.
- No emoji in section headers (typographic eyebrows instead).
- Generous whitespace: 32px outer padding desktop, 20px mobile.

## Layout

Single column, fixed 600px max-width content table on a centered 100%-width body table. This is the de facto email standard and is required to render correctly in Outlook.

```
┌────────────────────────────────────────────┐
│  [Futurist Law Lab logo PNG, ~180px wide] │   header
├────────────────────────────────────────────┤
│  ISSUE 01 · MAY 2026                      │   eyebrow
│  Law & Tech Opportunities                 │   H1
│  Intro paragraph(s)                       │   body
├────────────────────────────────────────────┤
│  ▍ JOBS & INTERNSHIPS                     │   section
│                                            │
│  Data/Cyber Internship                    │   item title
│  Freshfields LLP · Paris                  │   org · location (muted)
│  Privacy, GDPR, cybersecurity, compliance │   focus
│  → View role                              │   link (blue)
│  ──────                                   │   hairline
│  …repeats per item                        │
├────────────────────────────────────────────┤
│  ▍ IN FOCUS — LLM                         │   section
│  [LLM block on soft #f8fafc panel]        │
├────────────────────────────────────────────┤
│  Futurist Law Lab                          │   footer wordmark
│  Instagram · Website                      │
│  Why you got this · Unsubscribe           │   13px muted
└────────────────────────────────────────────┘
```

The `▍` glyph is rendered as a 3px × 14px solid blue rectangle (a table cell with a background colour), not a character — so font-rendering is not a concern.

## Reusable structure

The HTML is annotated with HTML comments marking the three repeatable units. The user duplicates/deletes blocks between the comment markers per issue:

- `<!-- BEGIN ITEM --> … <!-- END ITEM -->` — a single opportunity row
- `<!-- BEGIN SECTION --> … <!-- END SECTION -->` — a section heading plus its items
- `<!-- BEGIN IN-FOCUS --> … <!-- END IN-FOCUS -->` — the soft-panel highlight block

The eyebrow text (`ISSUE 01 · MAY 2026`), H1, and intro are inline text to be edited directly.

## Logo handling

- Header logo references a hosted PNG at `https://www.futuristlawlab.org/logo-email.png`.
- The user must add a cropped logo PNG to `public/logo-email.png` in the Next.js project. Target dimensions: 360×96 (2× retina; displayed at 180×48). Background transparent or white. The existing `public/preview_logo.png` is 1200×630 with whitespace and is unsuitable.
- The `<img>` carries `alt="Futurist Law Lab"`, `width="180"`, `height="48"`, and a styled `display:block` so blocked-image fallbacks still show a readable wordmark.
- We do not inline-embed (base64) the logo: Gmail strips it.

## Cross-client compatibility rules

These are constraints the HTML must satisfy. They are not preferences.

1. **Table-based layout.** Every layout unit is a `<table role="presentation" cellpadding="0" cellspacing="0" border="0">`. Required for Outlook desktop (Word rendering engine).
2. **Inline CSS for every visual property.** No reliance on `<style>` for layout. `<style>` is used only as progressive enhancement (see 3).
3. **Single `<style>` block in `<head>`** containing:
   - `@media (max-width: 600px)` mobile overrides (padding, font-size).
   - `@media (prefers-color-scheme: dark)` overrides for Apple Mail / iOS Mail.
   - Link colour reset for Outlook.com.
   The email must render correctly when this block is stripped.
4. **Hex colours only.** No `rgb()`, `hsl()`, no CSS variables. Outlook chokes on them.
5. **No `border-radius` load-bearing.** Use it for niceness; design must work without it (Outlook ignores).
6. **No flexbox, no grid, no `position`, no background images.**
7. **Absolute URLs everywhere.**
8. **Explicit `color` and `text-decoration` on every `<a>`.** Prevents Apple Mail from inverting blue links to purple in dark mode.
9. **Preheader text** — a hidden `<div>` with the inbox preview line. Padded with zero-width spaces so trailing email metadata doesn't leak into the preview.
10. **VML conditional comments** for Outlook where backgrounds or spacing need a fallback. Specifically: a `<!--[if mso]>` block at the top defining Word-friendly font and a fallback container width.
11. **`role="presentation"` on layout tables; `lang="en"` and `dir="ltr"` on `<html>`.**
12. **MSO conditional resets** in the head: `<!--[if mso]><style>… </style><![endif]-->` for Outlook-specific overrides (e.g., line-height in lists).
13. **Image attributes:** every `<img>` has `width`, `height`, `alt`, `border="0"`, `style="display:block;"`. No images larger than 600px wide.
14. **Outer body styles** repeated on the outermost wrapper table (Gmail strips body-level CSS).

## Dark mode

- Apple Mail / iOS Mail honour `@media (prefers-color-scheme: dark)`. We override:
  - background → `#0f172a`
  - body text → `#f1f5f9`
  - muted text → `#94a3b8`
  - hairlines → `#1e293b`
  - link blue → `#60a5fa` (lighter, accessible on dark)
  - soft-panel `#f8fafc` → `#111827`
- Gmail and Outlook perform their own automatic colour inversion which we accept gracefully. We do not fight it — that's a losing battle and produces uglier results.
- The logo PNG should be designed to read on both white and dark backgrounds (the existing blue-on-transparent logo does).

## Resend specifics

- Unsubscribe link uses Resend's broadcast merge tag: `{{{RESEND_UNSUBSCRIBE_URL}}}`.
- No first-name personalization (current copy is impersonal). Trivial to add later via `{{{FIRST_NAME}}}`.
- A short note inside the HTML (as a comment) reminds the user to enable Resend's auto-generated plain-text alternative when sending the broadcast.

## Content changes from the source newsletter

- Section headers drop emoji (💼, 🎓) in favour of typographic eyebrows: `JOBS & INTERNSHIPS`, `IN FOCUS — LLM`.
- Each opportunity is restructured into a consistent four-line hierarchy: **title** / **organisation · location** (muted) / **focus** / **link**. The current source has these as a free-form block; the template enforces the structure so the eye scans quickly.
- "Cerulean Jobs is ideal for those interested in working for luxury brands" is rendered as an italic 14px aside under the Kenzo item rather than a standalone paragraph.
- "Rolling basis (no fixed deadline)" rendered as a muted tag-style line under the relevant item.
- The LLM section is wrapped in a soft-panel `#f8fafc` block to set it apart visually from the listings — matches the "In focus" label.
- A new eyebrow above the H1: `ISSUE 01 · MAY 2026` to establish series identity.
- A new preheader line is added (hidden, but shows as the inbox preview).

## Deliverables

1. `newsletter-template.html` at the repo root (or `emails/newsletter-template.html` — see open question below). A single self-contained HTML file pre-populated with the first-issue content as a worked example. Annotated with `<!-- BEGIN/END ITEM/SECTION/IN-FOCUS -->` comment markers and a short comment block at the top describing how to edit each issue.
2. A `public/logo-email.png` to be created by the user (360×96, transparent/white background). The template references this via absolute URL.

## Out of scope (explicit YAGNI)

- Multiple template variants (e.g., separate "announcement" vs "digest" layouts).
- A React Email port.
- Automated email-client preview testing.
- Plain-text version authoring.
- Image hosting beyond the existing Next.js `public/` directory.

## Open question

Where should the HTML file live? Options:
1. `emails/newsletter-template.html` — new directory dedicated to email artefacts.
2. Repo root `newsletter-template.html` — flat and immediately visible.
3. `public/emails/newsletter-template.html` — discoverable by URL during preview, but Resend doesn't fetch it from there; it's pasted in.

Default: `emails/newsletter-template.html`. To be confirmed by the user.
