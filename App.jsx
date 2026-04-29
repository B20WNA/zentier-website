# Zentier

Precision hiring for the legal AI market.

This is a single page React application built with Vite. It is ready to deploy to Vercel or Netlify with no changes.

## Local development

```bash
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm install
npm run build
npm run preview
```

The production output goes to `/dist`.

## Deployment

### Option A — Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, click "New Project" and import the repo.
3. Framework preset: **Vite**.
4. Build command: `npm run build` (default).
5. Output directory: `dist` (default).
6. Deploy.

The included `vercel.json` handles routing and clean URLs.

### Option B — Netlify

1. Push this folder to a GitHub repository.
2. In Netlify, click "Add new site" and connect the repo.
3. Build command: `npm run build`.
4. Publish directory: `dist`.
5. Deploy.

The included `netlify.toml` handles the configuration.

### Custom domain

After deploying, point `zentiertalent.com` to the Vercel or Netlify deployment using the platform's DNS instructions. Both platforms provide free SSL.

## Project structure

```
src/
  App.jsx               composes all sections
  main.jsx              React entry point
  styles.css            full design system, palette, typography, layout
  components/
    Nav.jsx             fixed navigation with mobile menu
    Hero.jsx            opening section
    Problem.jsx         "the challenge" charcoal section with stats
    Approach.jsx        "how we work" with four pillars
    Who.jsx             three-card grid
    About.jsx           about section with stance line
    ForClients.jsx      with commercial callout and four-step process
    ForCandidates.jsx   charcoal section with four candidate types
    Intel.jsx           market intelligence with first article
    Contact.jsx         contact section
    Footer.jsx          footer
    useReveal.js        intersection observer fade-in hook
    scrollHelper.js     smooth scroll helper
```

## Design system

All colours, fonts, and spacing live as CSS variables at the top of `src/styles.css`. Change them there and they propagate everywhere.

**Palette**
- `--parchment` warm cream surface
- `--charcoal` near-black foreground and dark sections
- `--terracotta` accent and hover state
- `--stone` muted body text
- `--warm-white` page background

**Typography**
- `--serif` Cormorant Garamond, used for headlines, pull quotes, and the logo
- `--sans` DM Sans, used for body, eyebrows, and buttons

Both fonts load from Google Fonts via `index.html`.

## Editing copy

All copy lives inside the component JSX files in `src/components/`. There is no CMS. Edit the text directly in the relevant component file.

## Notes for the build

- The LinkedIn link in `Contact.jsx` and the URL it points to should be updated to the actual Zentier company page once it exists. Currently set to `linkedin.com/company/zentiertalent` as a placeholder.
- The contact email `hello@zentiertalent.com` should be set up before launch.
- The "Read more →" on the article in `Intel.jsx` is currently visual only. When a second article is added, this can be wired to a separate route or expanded reveal.
