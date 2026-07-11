# Pankaj Khamitkar — UX Portfolio

Personal portfolio site. Deployable on GitHub Pages with zero build step.

---

## Folder structure

```
/
index.html                        ← Homepage
/work/
  gih-case-study.html             ← Gaming Intelligence Hub
  slot-categorisation.html        ← Slot Game Categorisation Framework
  fiserv-case-study.html          ← Fiserv Card Console
/assets/
  /css/
    tokens.css                    ← Design system: variables, resets, fonts
    shared.css                    ← Nav, footer, shared components
    case-study.css                ← Shared case study layout patterns
  /js/
    main.js                       ← Nav scroll + reveal animation
  /images/
    pankaj-photo.jpeg             ← Add this before deploying
    /work/                        ← Case study screenshots go here
```

---

## Before deploying

1. Add `pankaj-photo.jpeg` to `/assets/images/`
2. Replace image placeholder wrappers with real `<img>` tags as screenshots become available
3. Update the two homepage case study links that point to `#` (VOX Cinemas, OLX) once those pages are built

---

## GitHub Pages deployment

1. Push this folder to a GitHub repository
2. Go to Settings > Pages
3. Set Source to `main` branch, root folder `/`
4. GitHub Pages will serve `index.html` at your domain

No build tools, no dependencies, no configuration required.

---

## Design system

- Typography: Fraunces (serif) + DM Sans (sans) + DM Mono (mono)
- Core palette tokens in `tokens.css`
- Each case study has a page accent colour override via `--page-accent`:
  - GIH: red `#C94C1A` (global default, no override needed)
  - Slot Framework: sage green `#3D6147`
  - Fiserv: financial blue `#2E5BA8`
- Page-specific styles live in a `<style>` block inside each HTML file
- Shared styles live in the three CSS files and should not be duplicated

---

## Adding a new case study

1. Copy `work/gih-case-study.html` as a starting point
2. Update the `<style>` block with a `--page-accent` override for your colour identity
3. Update the hero gradient to match
4. Link from the homepage work grid
5. Update the next-strip link on the preceding case study page
