# Newsletter HTML Template — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a single self-contained, on-brand HTML newsletter template (`emails/newsletter-template.html`) that the user can paste into Resend each issue. Pre-populated with the "Law & Tech Opportunities — First Issue" content as a worked example.

**Architecture:** One static HTML file. Table-based, inline-CSS layout (Outlook desktop forces this). One `<style>` block in `<head>` providing progressive enhancements (mobile @media, dark-mode @media, MSO conditional). Hosted PNG logo. Resend unsubscribe merge tag in footer. Comment markers delimit reusable units so the user can duplicate/delete blocks per issue.

**Tech Stack:** Hand-written HTML 4.01 / "email HTML" — tables, inline styles, hex colors, conditional comments. No build pipeline, no framework. Source file is the deliverable.

**Note on testing:** Automated tests don't meaningfully exist for HTML email rendering without paid services (Litmus, Email on Acid). Verification at each step is visual in a desktop browser plus DevTools mobile and dark-mode emulation. Reliable rendering in the actual matrix of email clients (Outlook desktop, Gmail web/iOS/Android, Apple Mail, Yahoo) depends on following the structural rules in the spec — we verify by rule conformance and by visual checks in the browser, then rely on the spec's compatibility constraints to cover the rest. A real-client smoke test is called out as a final user-driven step.

**Spec:** [`docs/superpowers/specs/2026-05-25-newsletter-template-design.md`](../specs/2026-05-25-newsletter-template-design.md)

---

## File Structure

- Create: `emails/newsletter-template.html` — the deliverable; single self-contained HTML file.
- User adds (out of scope for this plan, noted at end): `public/logo-email.png` — cropped, 360×96, transparent or white background.

No other files are created or modified.

---

## Task 1: Scaffold file with valid HTML5 + email-safe `<head>`

**Files:**
- Create: `emails/newsletter-template.html`

- [ ] **Step 1: Create the directory and file with the full email-safe head**

Write `emails/newsletter-template.html`:

```html
<!DOCTYPE html>
<html lang="en" dir="ltr" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="x-apple-disable-message-reformatting">
  <meta name="color-scheme" content="light dark">
  <meta name="supported-color-schemes" content="light dark">
  <title>Futurist Law Lab Newsletter</title>

  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->

  <!--[if mso]>
  <style type="text/css">
    body, table, td, p, a, h1 { font-family: Arial, sans-serif !important; }
    .panel { border: 1px solid #e2e8f0; }
  </style>
  <![endif]-->

  <style>
    /* Client resets */
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; height: auto; line-height: 100%; }
    body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
    a { color: #1e40af; text-decoration: none; }

    /* Mobile */
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; max-width: 100% !important; }
      .px-pad { padding-left: 20px !important; padding-right: 20px !important; }
      .py-pad { padding-top: 24px !important; padding-bottom: 24px !important; }
      .h1 { font-size: 24px !important; line-height: 1.25 !important; }
      .item-title { font-size: 16px !important; }
      .panel-pad { padding: 20px !important; }
    }

    /* Dark mode — Apple Mail / iOS Mail */
    @media (prefers-color-scheme: dark) {
      .bg-body { background: #0f172a !important; }
      .bg-canvas { background: #0f172a !important; }
      .text-body { color: #f1f5f9 !important; }
      .text-muted { color: #94a3b8 !important; }
      .hairline { border-color: #1e293b !important; }
      .hairline-cell { background: #1e293b !important; }
      .link { color: #60a5fa !important; }
      .panel { background: #111827 !important; }
      .eyebrow-muted { color: #94a3b8 !important; }
      .rule { background: #60a5fa !important; }
      .eyebrow { color: #f1f5f9 !important; }
    }
  </style>
</head>
<body class="bg-body" style="margin:0;padding:0;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">

  <!-- ============================================================
       FUTURIST LAW LAB — NEWSLETTER TEMPLATE
       Paste this whole file into Resend's broadcast HTML editor.

       To edit each issue:
         - Update the eyebrow (ISSUE NN · MONTH YYYY) and H1.
         - Edit the intro paragraphs.
         - Inside <!-- BEGIN SECTION --> blocks, duplicate or
           delete <!-- BEGIN ITEM --> blocks for each opportunity.
         - For a highlight, edit the <!-- BEGIN IN-FOCUS --> block.
         - Update the preheader text below for inbox preview.
         - Resend auto-generates a plain-text alternative; enable it
           in the broadcast settings.
       ============================================================ -->

  <!-- Preheader: hidden inbox preview text -->
  <div style="display:none;font-size:1px;color:#f8fafc;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;">
    Entry-level law &amp; tech opportunities: privacy, AI governance, digital regulation. Curated for students and young professionals.
    &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>

  <!-- Outer body wrapper -->
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="bg-body" style="background:#f8fafc;">
    <tr>
      <td align="center" style="padding:32px 12px;">

        <!-- Inner 600px container -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" class="container bg-canvas" style="width:600px;max-width:600px;background:#ffffff;">

          <!-- HEADER, HERO, SECTIONS, FOOTER go here in later tasks -->

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
```

- [ ] **Step 2: Verify it opens in a browser**

Run: `xdg-open emails/newsletter-template.html`
Expected: a near-empty white card centered on a light grey background. No console errors. View source — HTML is well-formed.

- [ ] **Step 3: Commit**

```bash
git add emails/newsletter-template.html
git commit -m "feat: scaffold newsletter HTML template head and wrappers"
```

---

## Task 2: Add the header row (hosted logo)

**Files:**
- Modify: `emails/newsletter-template.html` — insert inside the inner `<table>` where the `<!-- HEADER, HERO, ... -->` comment currently sits.

- [ ] **Step 1: Insert the header row**

Replace the `<!-- HEADER, HERO, SECTIONS, FOOTER go here in later tasks -->` comment with:

```html
          <!-- HEADER -->
          <tr>
            <td class="px-pad" style="padding:36px 36px 28px 36px;">
              <img src="https://www.futuristlawlab.org/logo-email.png" width="180" height="48" alt="Futurist Law Lab" style="display:block;border:0;outline:none;text-decoration:none;height:auto;max-width:180px;">
            </td>
          </tr>
```

- [ ] **Step 2: Verify in browser**

Refresh `emails/newsletter-template.html` in the browser.
Expected: the logo image area is reserved at the top of the white card. If `https://www.futuristlawlab.org/logo-email.png` does not yet exist, the browser shows a broken-image placeholder with the alt text "Futurist Law Lab" — this is expected at this stage (creating the PNG is a user task documented at the end of the plan).

- [ ] **Step 3: Commit**

```bash
git add emails/newsletter-template.html
git commit -m "feat: add newsletter header row with logo"
```

---

## Task 3: Add the hero (eyebrow, H1, intro paragraphs)

**Files:**
- Modify: `emails/newsletter-template.html` — insert immediately after the `<!-- HEADER -->` `<tr>...</tr>` block.

- [ ] **Step 1: Insert the hero block**

After the closing `</tr>` of the HEADER row, add:

```html
          <!-- HERO -->
          <tr>
            <td class="px-pad" style="padding:0 36px 8px 36px;">
              <p class="eyebrow-muted" style="margin:0 0 14px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#64748b;font-weight:600;">Issue 01 &middot; May 2026</p>
              <h1 class="h1 text-body" style="margin:0 0 22px 0;font-size:28px;line-height:1.25;font-weight:600;color:#1e293b;letter-spacing:-0.01em;">Law &amp; Tech Opportunities</h1>
              <p class="text-body" style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#1e293b;">This is the first edition of the Futurist Law Lab newsletter. We are sharing a selection of entry-level opportunities at the intersection of law and technology, aimed at students and young professionals. This includes jobs and internships, but also academic programmes and research events you can take part in.</p>
              <p class="text-body" style="margin:0 0 16px 0;font-size:16px;line-height:1.6;color:#1e293b;">We are keeping it selective and focused on things that feel genuinely useful for getting into this space, rather than trying to cover everything.</p>
              <p class="text-body" style="margin:0 0 8px 0;font-size:16px;line-height:1.6;color:#1e293b;">The current selection is mostly focused on privacy, AI governance, and digital regulation. Many of these roles involve putting legal rules into practice inside products, systems, and organisations.</p>
            </td>
          </tr>
```

- [ ] **Step 2: Verify in browser**

Refresh `emails/newsletter-template.html`.
Expected: under the logo, you see a small uppercase muted "ISSUE 01 · MAY 2026" eyebrow, a 28px slate H1 "Law & Tech Opportunities", and three paragraphs of body copy at 16px with 1.6 line-height.

- [ ] **Step 3: Commit**

```bash
git add emails/newsletter-template.html
git commit -m "feat: add newsletter hero with issue eyebrow, H1, and intro"
```

---

## Task 4: Add the first section heading + the first item

**Files:**
- Modify: `emails/newsletter-template.html` — insert immediately after the `<!-- HERO -->` `<tr>...</tr>` block.

- [ ] **Step 1: Insert section heading + first item**

After the closing `</tr>` of the HERO row, add:

```html
          <!-- Spacer above first section -->
          <tr>
            <td class="px-pad" style="padding:20px 36px 0 36px;line-height:0;font-size:0;">&nbsp;</td>
          </tr>

          <!-- BEGIN SECTION -->
          <tr>
            <td class="px-pad" style="padding:8px 36px 0 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td class="rule" width="3" style="background:#1e40af;line-height:0;font-size:0;width:3px;height:14px;mso-line-height-rule:exactly;">&nbsp;</td>
                  <td width="10" style="font-size:0;line-height:0;width:10px;">&nbsp;</td>
                  <td class="eyebrow text-body" style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#1e293b;font-weight:600;">Jobs &amp; Internships</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- BEGIN ITEM -->
          <tr>
            <td class="px-pad" style="padding:20px 36px 0 36px;">
              <p class="item-title text-body" style="margin:0 0 4px 0;font-size:17px;line-height:1.4;color:#1e293b;font-weight:600;">Data/Cyber Internship</p>
              <p class="text-muted" style="margin:0 0 6px 0;font-size:14px;line-height:1.5;color:#64748b;">Freshfields LLP &middot; Paris</p>
              <p class="text-body" style="margin:0 0 10px 0;font-size:15px;line-height:1.55;color:#1e293b;">Privacy and data protection (GDPR), cybersecurity, regulatory compliance.</p>
              <p style="margin:0 0 18px 0;font-size:14px;line-height:1.4;"><a class="link" href="https://freshfields.wd3.myworkdayjobs.com/en-US/FBD_101/job/Stage-Data-Cyber---Second-semestre-2026--septembre-dcembre--ou-premier-semestre-2027" style="color:#1e40af;text-decoration:none;font-weight:500;">&rarr; View role</a></p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td class="hairline-cell" style="border-top:1px solid #e2e8f0;line-height:0;font-size:0;height:1px;">&nbsp;</td></tr></table>
            </td>
          </tr>
          <!-- END ITEM -->
```

Note: do NOT close the SECTION yet — the remaining items go inside it in Task 5, and the `<!-- END SECTION -->` marker is added after them.

- [ ] **Step 2: Verify in browser**

Refresh `emails/newsletter-template.html`.
Expected: below the intro you see a small blue vertical bar (3px wide, 14px tall) next to the text "JOBS & INTERNSHIPS" in tracked uppercase. Below that is the Freshfields item: bold title, muted "Freshfields LLP · Paris", focus line, and a blue "→ View role" link followed by a thin grey hairline.

- [ ] **Step 3: Commit**

```bash
git add emails/newsletter-template.html
git commit -m "feat: add newsletter section heading and first item"
```

---

## Task 5: Add the remaining 11 items

**Files:**
- Modify: `emails/newsletter-template.html` — insert immediately after the `<!-- END ITEM -->` comment from Task 4.

- [ ] **Step 1: Add the remaining 11 items using the pattern below**

The pattern is the same as Task 4's `<!-- BEGIN ITEM -->...<!-- END ITEM -->` block, with these substitutions per item. For two items (Kenzo, Innovation and Technology Law Lab) an italic "aside" line is added before the link — pattern shown below the data table.

Pattern (for items without an aside):

```html
          <!-- BEGIN ITEM -->
          <tr>
            <td class="px-pad" style="padding:20px 36px 0 36px;">
              <p class="item-title text-body" style="margin:0 0 4px 0;font-size:17px;line-height:1.4;color:#1e293b;font-weight:600;">{{TITLE}}</p>
              <p class="text-muted" style="margin:0 0 6px 0;font-size:14px;line-height:1.5;color:#64748b;">{{ORG}} &middot; {{LOCATION}}</p>
              <p class="text-body" style="margin:0 0 10px 0;font-size:15px;line-height:1.55;color:#1e293b;">{{FOCUS}}</p>
              <p style="margin:0 0 18px 0;font-size:14px;line-height:1.4;"><a class="link" href="{{URL}}" style="color:#1e40af;text-decoration:none;font-weight:500;">&rarr; View role</a></p>
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td class="hairline-cell" style="border-top:1px solid #e2e8f0;line-height:0;font-size:0;height:1px;">&nbsp;</td></tr></table>
            </td>
          </tr>
          <!-- END ITEM -->
```

Pattern variant with aside (insert the `<p class="aside">` line between the focus `<p>` and the link `<p>`):

```html
              <p class="text-muted" style="margin:8px 0 12px 0;font-size:14px;line-height:1.5;color:#64748b;font-style:italic;">{{ASIDE}}</p>
```

Insert these items in this order, each as its own `<!-- BEGIN ITEM -->...<!-- END ITEM -->` block:

| # | TITLE | ORG | LOCATION | FOCUS | URL | ASIDE |
|---|---|---|---|---|---|---|
| 2 | Privacy Legal Counsel Intern | Ledger | Paris | Privacy and data protection, compliance, ICT contracting. | https://careers.ledger.com/jobs/privacy-legal-counsel-intern-paris-ile-de-france-france | — |
| 3 | Privacy &amp; Cybersecurity Law Intern | Wilson Sonsini | Brussels | Privacy and data protection, cybersecurity, artificial intelligence. | https://careers.wsgr.com/openings/brussels-privacy-and-cybersecurity-law-internship | — |
| 4 | Legal Intern | The Data Lawyers | Amsterdam | IT law, privacy and data protection. | https://www.thedatalawyers.com/career/intern | — |
| 5 | Junior Digital Law Consultant | Cranium | Brussels, Ghent and others | Digital law, data protection and privacy, ICT contracting. | https://www.cranium.eu/job-openings/#job-1918074 | — |
| 6 | Legal Intern (Financial Services) | A&amp;O Shearman | Luxembourg | Fintech and financial services regulation, legal research and due diligence. | https://careers.aoshearman.com/en/job/luxembourg/legal-interns-january-to-june-2027 | — |
| 7 | Legal Assistant Intern | Kenzo | Paris | Commercial law, distribution, data privacy compliance. | https://ceruleanjobs.com/jobs/kenzo-legal-assistant-intern-paris-2026-04-05/ | Cerulean Jobs is ideal for those interested in working for luxury brands. |
| 8 | Legal Marketer | Moonlit | Amsterdam | Legal tech and legal AI marketing, legal content creation. | https://nl.linkedin.com/jobs/view/legal-marketer-at-moonlit | — |
| 9 | Junior Data Analyst | Elvinger Hoss | Luxembourg | Data collection and analysis, building reports and dashboards. | https://elvingerhoss.lu/join-us/opportunities/junior-data-analyst | — |
| 10 | Internship, Legal, Governance &amp; Regulatory Division | Euroclear | Brussels | Digital markets, financial regulation, compliance. | https://don.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1003/job/8069 | — |
| 11 | Legal &amp; Compliance Internship | ASML | Veldhoven | Compliance systems, operations, tech governance. | https://www.asml.com/en/careers/find-your-job/legal-and-compliance-internship-privacy-ai-compliance-office-j00336878 | — |
| 12 | Internships | Innovation and Technology Law Lab | Padova | Law &amp; tech research, interdisciplinary projects, consulting. | https://itll.it/internships/ | Rolling basis &mdash; no fixed deadline. |

For items 7 and 12, use the aside-variant pattern (insert the italic muted `<p>` between focus and link).

After the 12th item, close the section:

```html
          <!-- END SECTION -->
```

- [ ] **Step 2: Verify in browser**

Refresh `emails/newsletter-template.html`.
Expected: 12 items rendered in order under the JOBS & INTERNSHIPS heading. Each shows title / org · location / focus / link, separated by thin hairlines. Items 7 (Kenzo) and 12 (ITLL Padova) show an italic muted aside line above the link. No broken layout, no overlap, scroll length about 1500–1800px.

- [ ] **Step 3: Commit**

```bash
git add emails/newsletter-template.html
git commit -m "feat: populate newsletter with remaining 11 opportunities"
```

---

## Task 6: Add the IN FOCUS panel (LLM section)

**Files:**
- Modify: `emails/newsletter-template.html` — insert immediately after the `<!-- END SECTION -->` comment from Task 5.

- [ ] **Step 1: Insert the IN FOCUS panel**

After `<!-- END SECTION -->`, add:

```html
          <!-- Spacer before in-focus panel -->
          <tr>
            <td class="px-pad" style="padding:24px 36px 0 36px;line-height:0;font-size:0;">&nbsp;</td>
          </tr>

          <!-- BEGIN IN-FOCUS -->
          <tr>
            <td class="px-pad" style="padding:0 36px 0 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" class="panel" style="background:#f8fafc;">
                <tr>
                  <td class="panel-pad" style="padding:28px;">

                    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom:18px;">
                      <tr>
                        <td class="rule" width="3" style="background:#1e40af;line-height:0;font-size:0;width:3px;height:14px;mso-line-height-rule:exactly;">&nbsp;</td>
                        <td width="10" style="font-size:0;line-height:0;width:10px;">&nbsp;</td>
                        <td class="eyebrow text-body" style="font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#1e293b;font-weight:600;">In Focus &mdash; LLM</td>
                      </tr>
                    </table>

                    <p class="item-title text-body" style="margin:0 0 4px 0;font-size:18px;line-height:1.35;color:#1e293b;font-weight:600;">LLM in Law &amp; Technology</p>
                    <p class="text-muted" style="margin:0 0 14px 0;font-size:14px;line-height:1.5;color:#64748b;">Tilburg University</p>

                    <p class="text-body" style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:#1e293b;">Interdisciplinary LLM combining EU digital law with technological and policy context. Focus on GDPR, platform regulation (incl. DSA), AI governance, and regulation of data-driven systems. Strong fit for careers in EU institutions and tech/AI governance roles across law firms and industry.</p>

                    <p class="eyebrow-muted" style="margin:18px 0 8px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#64748b;font-weight:600;">Programme structure</p>
                    <p class="text-body" style="margin:0 0 10px 0;font-size:15px;line-height:1.6;color:#1e293b;">Three specialisations:</p>
                    <p class="text-body" style="margin:0 0 4px 16px;font-size:15px;line-height:1.6;color:#1e293b;">a) Privacy and Security</p>
                    <p class="text-body" style="margin:0 0 4px 16px;font-size:15px;line-height:1.6;color:#1e293b;">b) Competition, Innovation and Digital Markets</p>
                    <p class="text-body" style="margin:0 0 12px 16px;font-size:15px;line-height:1.6;color:#1e293b;">c) Just and Sustainable Technologies</p>
                    <p class="text-body" style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:#1e293b;">Or combine electives (36 ECTS) to build a tailored profile. Flexible format with courses offered both on-campus and online, with the ability to switch between formats. No technical or scientific background required &mdash; emphasis is on legal and societal dimensions of technology.</p>

                    <p class="eyebrow-muted" style="margin:18px 0 8px 0;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#64748b;font-weight:600;">Application deadlines (23:59 CET)</p>
                    <p class="text-body" style="margin:0 0 4px 0;font-size:15px;line-height:1.6;color:#1e293b;"><strong style="font-weight:600;">EEA nationals:</strong> 1 June (August start) &middot; 1 December (January start)</p>
                    <p class="text-body" style="margin:0 0 14px 0;font-size:15px;line-height:1.6;color:#1e293b;"><strong style="font-weight:600;">Non-EEA nationals:</strong> 1 April (August start) &middot; 1 October (January start)</p>

                    <p style="margin:8px 0 0 0;font-size:14px;line-height:1.4;"><a class="link" href="https://www.tilburguniversity.edu/education/masters-programmes/law-and-technology" style="color:#1e40af;text-decoration:none;font-weight:500;">&rarr; Programme details</a></p>

                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- END IN-FOCUS -->
```

- [ ] **Step 2: Verify in browser**

Refresh `emails/newsletter-template.html`.
Expected: below the last item, a soft light-grey panel (`#f8fafc`) appears with a blue rule + "IN FOCUS — LLM" heading. Inside: the programme name, university, description, "PROGRAMME STRUCTURE" subheading with three indented specialisations, a paragraph about electives, and "APPLICATION DEADLINES" with two bold-labelled lines for EEA and non-EEA. Closes with a "→ Programme details" link.

- [ ] **Step 3: Commit**

```bash
git add emails/newsletter-template.html
git commit -m "feat: add in-focus LLM panel to newsletter template"
```

---

## Task 7: Add the footer

**Files:**
- Modify: `emails/newsletter-template.html` — insert immediately after the `<!-- END IN-FOCUS -->` comment from Task 6.

- [ ] **Step 1: Insert the footer**

After `<!-- END IN-FOCUS -->`, add:

```html
          <!-- Spacer before footer -->
          <tr>
            <td class="px-pad" style="padding:40px 36px 0 36px;line-height:0;font-size:0;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"><tr><td class="hairline-cell" style="border-top:1px solid #e2e8f0;line-height:0;font-size:0;height:1px;">&nbsp;</td></tr></table>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td class="px-pad py-pad" style="padding:24px 36px 36px 36px;">
              <p class="text-body" style="margin:0 0 6px 0;font-size:15px;line-height:1.5;color:#1e293b;font-weight:600;">Futurist Law Lab</p>
              <p style="margin:0 0 18px 0;font-size:14px;line-height:1.5;">
                <a class="link" href="https://www.instagram.com/futuristlawlab/" style="color:#1e40af;text-decoration:none;">Instagram</a>
                <span class="text-muted" style="color:#94a3b8;">&nbsp;&middot;&nbsp;</span>
                <a class="link" href="https://www.futuristlawlab.org" style="color:#1e40af;text-decoration:none;">futuristlawlab.org</a>
              </p>
              <p class="text-muted" style="margin:0 0 6px 0;font-size:13px;line-height:1.5;color:#64748b;">You are receiving this email because you opted in via our site.</p>
              <p class="text-muted" style="margin:0;font-size:13px;line-height:1.5;color:#64748b;">Want to change how you receive these emails? <a class="link" href="{{{RESEND_UNSUBSCRIBE_URL}}}" style="color:#1e40af;text-decoration:underline;">Unsubscribe</a>.</p>
            </td>
          </tr>
```

Note: `{{{RESEND_UNSUBSCRIBE_URL}}}` is Resend's broadcast merge tag (triple braces). Resend substitutes a one-click unsubscribe URL at send time. Leave it literally as written.

- [ ] **Step 2: Verify in browser**

Refresh `emails/newsletter-template.html`.
Expected: below the panel, a thin hairline divider, then the footer: "Futurist Law Lab" wordmark, an inline "Instagram · futuristlawlab.org" line of blue links, a muted "You are receiving this email because…" line, and an "Unsubscribe" link (the merge tag URL is shown literally `{{{RESEND_UNSUBSCRIBE_URL}}}` in the browser preview — that is correct).

- [ ] **Step 3: Commit**

```bash
git add emails/newsletter-template.html
git commit -m "feat: add newsletter footer with Resend unsubscribe tag"
```

---

## Task 8: Final visual verification across widths and dark mode

**Files:**
- None (verification only).

- [ ] **Step 1: Desktop visual check**

Run: `xdg-open emails/newsletter-template.html`
Expected, at a desktop window width:
- Single 600px white column centred on a light grey body.
- Logo (or broken-image alt "Futurist Law Lab" until the PNG is added).
- ISSUE 01 · MAY 2026 eyebrow, "Law & Tech Opportunities" H1, three intro paragraphs.
- JOBS & INTERNSHIPS section with 12 items, each with a hairline separator.
- IN FOCUS — LLM panel on soft grey background.
- Footer with wordmark, links, unsubscribe.

- [ ] **Step 2: Mobile width check**

In the browser, open DevTools and switch to a mobile width of 375px (responsive mode → iPhone SE preset is fine).
Expected:
- Column shrinks to 100% width.
- Outer padding drops from 36px to 20px (the `@media (max-width: 600px)` `.px-pad` override).
- H1 drops from 28px to 24px.
- Item titles drop from 17px to 16px.
- Panel internal padding drops from 28px to 20px.
- No horizontal scrollbar; nothing clips; line lengths remain comfortable.

- [ ] **Step 3: Dark mode check (Chromium-based browsers)**

In DevTools → Rendering pane, set "Emulate CSS media feature `prefers-color-scheme`" to "dark".
Expected:
- Body and canvas background → near-black (`#0f172a`).
- Body text → near-white (`#f1f5f9`).
- Muted text → mid-grey.
- Links shift to lighter blue (`#60a5fa`).
- Panel background shifts to `#111827`.
- Blue rule before section headings stays visible.

- [ ] **Step 4: HTML validity sanity check**

Run: `xmllint --html --noout emails/newsletter-template.html 2>&1 | head -40`
Expected: parse warnings are acceptable (HTML5 is not strict XML and the document contains conditional comments / VML namespace), but no fatal errors. The output should not contain "parser error" lines that point to malformed tags inside our own content.

If `xmllint` is unavailable, skip — this is a sanity check, not a gate. The browser rendering in Steps 1–3 is the load-bearing verification.

- [ ] **Step 5: Spot-check rule conformance against spec**

Open `docs/superpowers/specs/2026-05-25-newsletter-template-design.md` and walk through the "Cross-client compatibility rules" section. For each numbered rule (1–14), confirm by inspecting the HTML that it holds. Specifically:
- All layout containers are `<table role="presentation">` (rule 1).
- Every visible element has inline `style=` for its visual properties (rule 2).
- The single `<style>` block contains only media queries and resets (rule 3).
- No `rgb(`, `hsl(`, `var(` in the file: `grep -nE 'rgb\(|hsl\(|var\(' emails/newsletter-template.html` — expected: no matches.
- No `flex`, `grid`, `position:` declarations: `grep -nE 'flex|grid|position:' emails/newsletter-template.html` — expected: no matches in style attributes (the word "grid" may match comments/copy, scan results).
- Every `<a>` has an inline `color:` and explicit `text-decoration:` (rule 8): `grep -c '<a ' emails/newsletter-template.html` vs `grep -c 'color:#' emails/newsletter-template.html` — confirm visually.
- The preheader `<div>` is present and hidden (rule 9).
- The `<!--[if mso]>` conditional is present in the head (rule 10).

- [ ] **Step 6: No commit (verification only)**

This task changes no files. Move on.

---

## Task 9: User-driven external steps (out of plan scope, but called out)

These steps are the user's responsibility and complete the deliverable:

1. **Create `public/logo-email.png`.** Crop the existing logo to a tight bounding box around the column glyph + "Futurist Law Lab" wordmark. Export PNG at 360×96 (2× retina; the template displays it at 180×48). Transparent or white background. Commit to the Next.js project so it deploys with the site.
2. **Smoke-test in Resend.** Create a draft broadcast in Resend, paste the contents of `emails/newsletter-template.html` into the HTML editor, send a test to a personal Gmail and a personal Outlook/Apple Mail inbox. Visually verify the logo loads, links work, layout holds, and the unsubscribe link is generated by Resend at send time.
3. **(Optional) Run through `mail-tester.com` or `litmus.com` free preview** to spot deliverability or rendering issues before the first broadcast.

---

## Self-Review Notes

- **Spec coverage:** Every spec section maps to a task — head/scaffolding (T1), header logo (T2), hero (T3), section pattern + items (T4–T5), in-focus panel (T6), footer + Resend merge tag (T7), verification of cross-client rules and dark mode (T8). The logo-PNG creation is correctly scoped to the user (T9) since it's not a code task.
- **Placeholders:** None in the implementation tasks. The `{{TITLE}}`, `{{ORG}}`, etc. in Task 5 are template-fill markers paired with a full data table — the engineer mechanically substitutes; this is documented in the task body, not a TBD.
- **Type consistency:** CSS class names used in inline `class` attributes (`bg-body`, `bg-canvas`, `text-body`, `text-muted`, `eyebrow`, `eyebrow-muted`, `hairline-cell`, `link`, `panel`, `panel-pad`, `rule`, `container`, `px-pad`, `py-pad`, `item-title`, `h1`) all match the selectors defined in the `<style>` block in Task 1. Confirmed by direct review.
- **Scope:** Single deliverable file, single coherent feature. No decomposition needed.
