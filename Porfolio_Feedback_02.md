# Portfolio Audit — Godwin Udu, Product Design
### Target role: Product Designer (Mailjet) — Sinch

**Current estimated score: ~52/100**
**Target: 90+**

---

## ⚠️ Read this first: what this file actually is

This isn't a resume — it's a **30-slide, 1920×1080 visual case-study deck**, exported from Figma, weighing **76MB**. That changes how three of your requested categories apply:

- **ATS compatibility** doesn't really apply to a portfolio. Applicant Tracking Systems (Oracle Fusion, which Sinch uses — that's what `iaings.fa.ocs.oraclecloud.com` is) parse **resumes/CVs** for keywords, not visual PDFs like this. Your résumé is the document that needs to be ATS-optimized. I've scored this section instead as **"Recruiter Skim-Test Compatibility"** — will a human opening this file on a slow connection or phone actually get through it.
- There's no summary, skills list, or contact info beyond an email anywhere in the deck — normal for a case-study portfolio, but I'll flag where it's costing you.
- Everything below is scored against what a hiring manager/design lead at Sinch would actually be checking for, cross-referenced with the real job requirements.

---

## Section Scores

| Section | Score /10 | Verdict |
|---|---|---|
| Recruiter Skim-Test Compatibility (file weight, load speed) | 4 | Fails at the door |
| Keyword/Requirement Alignment to JD | 5 | Present but thin |
| Achievement Quality / Quantified Impact | 6 | Excellent in one project, absent in the other |
| Formatting Clarity | 6 | Good bones, two cluttered slides |
| Summary/Opening Impact | 3 | Effectively doesn't exist |
| Skills Relevance & Visibility | 4 | Implied, never stated |
| Length Appropriateness | 7 | Reasonable depth, but see weight issue |

**Composite: ~52/100**

---

## 1. Recruiter Skim-Test Compatibility — 4/10

**What's weak:**
- The file is **76MB**. Oracle Fusion's candidate portal (the system Sinch uses) commonly caps attachment size around 5–10MB — this file may **fail to upload at all**, or take so long that a recruiter abandons it.
- Every slide is a rasterized image at high resolution rather than a compressed/optimized export. There's no reason a 30-slide case study deck should be this heavy.
- Cover page (slide 1) is just "Product Design / Godwin Udu / [email]" on a black background — no link to a live portfolio site, no LinkedIn, no way to verify you quickly if the file itself hangs.

**Precise fix:**
- Re-export from Figma at **2x max, JPG (not PNG), 80–85% quality** rather than full-res PNG frames. This alone typically cuts file size by 80–90%.
- Run the export through a PDF compressor (Acrobat "Reduce File Size," or `ghostscript`/`qpdf` if you want a free CLI route) targeting **under 10MB, ideally 3–5MB**.
- Add a live portfolio URL and LinkedIn to the cover slide so a recruiter isn't dependent on the PDF loading.

---

## 2. Keyword/Requirement Alignment to JD — 5/10

The Sinch Mailjet Product Designer posting explicitly asks for: **Figma (incl. design system components), 6+ years, prototyping, user research, usability testing, accessibility (A11Y), cross-functional collaboration with PM/Engineering, annotated dev handoff, Agile/Lean, JIRA/Confluence**, and ideally **email or CPaaS domain experience**.

**What's present:**
- Figma is named as a tool in both case studies. ✅
- User research, personas, usability testing with real users, and iteration loops are strong and clearly shown in both projects. ✅
- MyEduFusion explicitly mentions building "reusable interface components within the brand design system" — good, direct keyword match. ✅

**What's weak:**
- **Accessibility (A11Y) is never mentioned once**, in either case study. The JD calls this out specifically as an applied skill, not a nice-to-have. This is your single biggest keyword gap.
- **Design system** language only appears once (MyEduFusion) — Proptii, despite being the flagship case study, never mentions design system contribution.
- No mention of **dev handoff practices** (annotated specs, redlines, component documentation) — the JD specifically wants "annotated and well-organized design files... for smooth implementation."
- No mention of **Agile/Lean process, JIRA, or Confluence** — understandable if you haven't used them, but if you have, it's not showing up anywhere.
- Neither project touches email, messaging, or CPaaS — not fixable by editing the portfolio, but worth a line in your cover letter/resume bridging the gap (e.g., relevant transactional-UI or dashboard-logic parallels).

**Precise fix:**
- Add one sentence to each case study's UI section calling out an actual accessibility decision you made (contrast ratios, focus states, form error handling, screen-reader-friendly labeling on the referencing wizard, etc.). If you genuinely didn't consider A11Y at the time, add it retroactively where credible, or note it as a stated design principle going forward — but don't leave it at zero.
- Add "design system" language explicitly to the Proptii high-fidelity UI section if components were reused there (they likely were, given "Contracts & Copilots" reuses UI patterns).
- Add one slide or callout line per project describing your handoff process to engineering (e.g., "Delivered annotated Figma specs and component documentation for a 2-person engineering pod").

---

## 3. Achievement Quality / Quantified Impact — 6/10

**MyEduFusion is genuinely strong here:** 70 institutions (up from 12), 8,000 active students, 60% engagement retention, 283% revenue growth, 63% lift in bookkeeping efficiency. This is exactly the kind of business-outcome framing the JD wants ("delivered on business objectives").

**Proptii is the problem.** It's your flagship, most detailed case study — 22 of 30 slides — and it **ends with zero quantified outcomes.** The closing slide ("Impact, Design Takeaways and Outcome") gives two abstract statements ("Design for Scale," "Cross-Functional Alignment") with no numbers: no conversion lift, no drop-off reduction, no usability testing score improvement, nothing measurable.

That asymmetry is what a sharp reviewer will notice first — it reads like the strongest project has the weakest ending.

**Precise fix:**
- If Proptii is pre-launch or metrics aren't available, say so explicitly and reframe around **leading indicators**: e.g., "Usability testing showed a X% reduction in task completion time on the referencing flow after removing the mandatory account-creation step," or "Reduced the referencing flow from 9 steps to 5 based on user testing." You clearly have this qualitative data (page 14 shows the iterations) — turn it into a number wherever even directionally possible.
- If there genuinely is no measurable outcome yet, don't fabricate one — instead close with a **projected/target metric** framed honestly ("Projected to reduce onboarding drop-off based on removal of forced account creation, validated via usability testing with 3 users") rather than vague design philosophy.

---

## 4. Formatting Clarity — 6/10

**What's working:** Case study cover slides (challenge/timeline/tools) are clean and scannable. Persona slides are well-structured. Final UI screens are legible.

**What's weak:**
- **Page 18 (B2B Dashboard Logic & API Flow)** is visually dense — a system diagram with small text, cramped arrows, and a flow ("Webhook Trigger → Asynchronous Processing → Data-Vetting Loop → Automated Dispatch") that's hard to parse at a glance. This is meant to show technical depth but currently undermines it through clutter.
- **Page 19 (Usability Testing Board)** recreates a Miro board as a flat image — sticky notes are too small to read at presentation scale, and the color-coding legend is disconnected from the actual board content shown.

**Precise fix:**
- Redesign the API flow diagram with larger type, more whitespace, and a simplified 4-box flow with one annotation line each — the current version is trying to show a system architecture at a font size built for a form field.
- For the usability board slide, either zoom into 2–3 representative sticky notes with callouts, or replace the flat board screenshot with a summary graphic — the raw board photo doesn't work at slide resolution.

---

## 5. Summary/Opening Impact — 3/10

This is your weakest section. The entire deck opens with:

> "Product Design / Godwin Udu / [email]"

No positioning statement. No mention of years of experience, specialization, or what kind of designer you are. A hiring manager reviewing dozens of portfolios has no framing before they hit 30 pages of case studies — they don't know if you're a generalist, a systems-focused designer, a 0-to-1 specialist, or a B2B SaaS specialist (which is what your work actually demonstrates).

**Precise fix:**
Add one slide directly after the cover — 2–3 sentences, e.g.:

> "Product Designer with [X] years of experience taking complex B2B and B2C platforms from research to high-fidelity, shippable UI — specializing in workflow-heavy systems (SaaS, dashboards, multi-step verification flows) where usability directly drives retention and revenue."

This single slide does more for your score than almost anything else on this list — it tells the reviewer how to read everything that follows.

---

## 6. Skills Relevance & Visibility — 4/10

Tools are mentioned per-project (Figma, Miro, Notion) but there is **no consolidated skills section anywhere** in the deck. A reviewer has to infer your full toolkit and method range from scattered mentions across 30 slides.

**Precise fix:**
Add a compact skills/tools slide (can go right after the intro slide) covering:
- **Methods:** user research, usability testing, persona development, journey/friction mapping, information architecture, prototyping (low → high fidelity)
- **Tools:** Figma (component libraries/design systems), Miro, Notion, [FigJam/Maze/UserTesting if used]
- **Craft:** accessibility-aware UI, design systems, cross-functional handoff, data-informed iteration

This directly reinforces the JD's keyword targets in one scannable place instead of forcing the reader to hunt for them.

---

## 7. Length Appropriateness — 7/10

30 slides for 2 deep case studies is reasonable for a senior-level review, not bloated — the depth of research → IA → testing → iteration → UI → impact per project is genuinely thorough and matches what the JD asks for ("clear UX design process with comprehensive problem solving"). The real length problem isn't page count, it's **file weight** (see Section 1) making that length impractical to actually receive and open.

---

## Priority Fix List (in order of score impact)

1. **Compress the file to under 10MB.** If it doesn't open, none of the rest matters.
2. **Add an intro/positioning slide** after the cover.
3. **Add quantified outcomes to the Proptii case study** to match MyEduFusion's rigor.
4. **Insert accessibility (A11Y) language** into at least one UI section of each case study.
5. **Add a skills/tools summary slide.**
6. **Redesign the API flow diagram (p.18) and usability board slide (p.19)** for legibility.
7. **Add design-system and dev-handoff language** to the Proptii case study.
8. **Add LinkedIn/portfolio link** to the cover page.

Do 1–5 and you'll likely be sitting around 80–85. Doing all 8 well is what gets you to 90+.

---

## One more thing, separate from this file

Since this portfolio won't be parsed by Sinch's ATS, make sure your **actual resume/CV** (the document you upload to the Oracle Fusion application) carries the JD's language directly — "Figma," "design systems," "usability testing," "accessibility," "cross-functional," "6+ years." That document is doing the keyword-matching job; this portfolio is doing the credibility job.