# Image Replacement Guide
# Pankaj Khamitkar Portfolio

All images go in: `assets/images/work/`
Path from case study pages: `../assets/images/work/your-file.jpg`

Supported formats: JPG, PNG, WebP
Recommended width: 1600px minimum for crisp display on retina screens

---

## HOW TO REPLACE A PLACEHOLDER

Find the `<div class="img-wrap ...">` block and replace it like this:

BEFORE (placeholder):
```html
<div class="img-wrap ratio-4-3">
  <div class="img-placeholder">
    ...placeholder content...
  </div>
</div>
```

AFTER (real image):
```html
<div class="img-wrap ratio-4-3">
  <img src="../assets/images/work/your-filename.jpg" alt="Description of image">
</div>
```

Keep the `img-wrap` and its ratio class exactly as-is. Only replace the inner content.

---

## HOMEPAGE

File: `index.html`
Path prefix: `assets/images/` (no `../` — homepage is at root)

| Element | Filename | Notes |
|---|---|---|
| About photo | `pankaj-photo.jpeg` | Portrait, ideally 3:4 ratio |

---

## GIH CASE STUDY

File: `work/gih-case-study.html`
Path prefix: `../assets/images/work/`

| # | Placeholder label | Suggested filename | Aspect ratio class |
|---|---|---|---|
| 1 | Player Interview Artefact (Participant A) | `gih-interview-01.jpg` | `ratio-4-3` |
| 2 | Player Interview Artefact (Participant B) | `gih-interview-02.jpg` | `ratio-4-3` |
| 3 | Survey Results Summary, 177 Participants | `gih-survey-results.jpg` | `ratio-4-3` |
| 4 | Discovery Workshop Artefact (problem reframe) | `gih-discovery-workshop.jpg` | `ratio-wide` (21:7) |
| 5 | Recommendation Console (high-fidelity screen) | `gih-recommendation-console.jpg` | `ratio-4-3` |
| 6 | Explainability Layer (rationale view) | `gih-explainability-layer.jpg` | `ratio-4-3` |
| 7 | Venue Map System (interactive SVG floor plan) | `gih-venue-map.jpg` | `ratio-4-3` |
| 8 | Map Naming Logic (no-code onboarding) | `gih-map-naming-logic.jpg` | `ratio-4-3` |
| 9 | Feedback Analyser Dashboard | `gih-feedback-analyser.jpg` | `ratio-4-3` |
| 10 | Order Planning Interface | `gih-order-planning.jpg` | `ratio-4-3` |
| 11 | Export Standardisation (column definitions) | `gih-export-standardisation.jpg` | `ratio-4-3` |

---

## SLOT GAME CATEGORISATION CASE STUDY

File: `work/slot-categorisation.html`
Path prefix: `../assets/images/work/`

| # | Placeholder label | Suggested filename | Aspect ratio class |
|---|---|---|---|
| 1 | Initial problem mapping (Miro board) | `slot-problem-mapping.jpg` | `r169` (16:9) |
| 2 | Hold and Spin variant mapping (Miro) | `slot-hold-spin-variants.jpg` | `r219` (21:9) |
| 3 | Framework Hierarchy Diagram (Miro) | `slot-framework-hierarchy.jpg` | `r43` (4:3) |
| 4 | Jackpot as Metadata Decision | `slot-jackpot-metadata.jpg` | `r43` (4:3) |
| 5 | Feature inventory affinity map | `slot-feature-inventory.jpg` | `r43` (4:3) |
| 6 | Hold and Spin taxonomy | `slot-hold-spin-taxonomy.jpg` | `r43` (4:3) |
| 7 | Hybrid feature mapping | `slot-hybrid-features.jpg` | `r43` (4:3) |
| 8 | Full Miro Board Overview | `slot-miro-full-board.jpg` | `r219` (21:9) |
| 9 | Feature Affinity Mapping (clustering output) | `slot-affinity-mapping.jpg` | `r43` (4:3) |
| 10 | Stakeholder Workshop Output | `slot-stakeholder-workshop.jpg` | `r43` (4:3) |
| 11 | Game Inventory Classification | `slot-game-inventory.jpg` | `r43` (4:3) |
| 12 | Player Archetype Workshop | `slot-archetype-workshop.jpg` | `r43` (4:3) |

### Note on ratio classes for slot file
The slot file uses different class names than GIH:
- `r169` = 16:9 landscape (wide)
- `r43` = 4:3 standard
- `r219` = 21:9 ultrawide banner

---

## FISERV CASE STUDY

File: `work/fiserv-case-study.html`
Path prefix: `../assets/images/work/`

Fiserv uses `.screen-wrapper` blocks instead of `.img-wrap`.
Replace like this:

BEFORE (placeholder):
```html
<div class="screen-wrapper">
  <div class="screen-placeholder">
    <div class="screen-placeholder-icon">...</div>
    <span class="screen-placeholder-label">Navigation architecture comparison</span>
  </div>
  <div class="screen-caption">Caption text here</div>
</div>
```

AFTER (real image):
```html
<div class="screen-wrapper">
  <img src="../assets/images/work/fiserv-nav-architecture.jpg"
       alt="Navigation architecture comparison"
       style="width:100%; display:block;">
  <div class="screen-caption">Caption text here</div>
</div>
```

Keep the `.screen-wrapper` and `.screen-caption` exactly as-is.

| # | Placeholder label | Suggested filename |
|---|---|---|
| 1 | Navigation architecture comparison (Options A, B, C) | `fiserv-nav-architecture.jpg` |
| 2 | Card Console: Cardholder overview with dual-tab navigation | `fiserv-card-console-overview.jpg` |

---

## QUICK CHECKLIST BEFORE DEPLOYING

- [ ] `assets/images/pankaj-photo.jpeg` — homepage about photo
- [ ] All GIH images in `assets/images/work/gih-*.jpg`
- [ ] All Slot images in `assets/images/work/slot-*.jpg`
- [ ] All Fiserv images in `assets/images/work/fiserv-*.jpg`
- [ ] Image files are web-optimised (under 400KB each ideally)
- [ ] Filenames match exactly — they are case sensitive on GitHub Pages
