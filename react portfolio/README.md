# Suhaib — Portfolio

A responsive personal portfolio built with React and Vite. It uses a dark navy palette, restrained blue accent, semantic HTML, accessible focus states, and motion that respects `prefers-reduced-motion`.

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

Check lint rules:

```bash
npm run lint
```

## Customise the content

All editable content is centralised in [`src/data/portfolio.js`](src/data/portfolio.js):

- `site` — name, role, introduction, about copy, email, and focus areas.
- `skills` — skill categories and badges.
- `projects` — project cards, technology tags, and optional GitHub/live URLs.
- `socials` — optional social profile links.

Anything marked `placeholder: true` is intentionally generic and should be replaced before publishing. Empty `githubUrl`, `liveUrl`, or social `url` values hide the corresponding link automatically.

The contact form is **frontend-only**. It validates inputs and prepares a `mailto:` draft; it does not send data to a server. Replace the submit handling in `src/components/Contact.jsx` when a real submission service is configured.

## Structure

```text
src/
  components/   Reusable section and UI components
  data/         All customisable portfolio content
  hooks/        Scroll-reveal behaviour
  App.jsx       Page composition
  App.css       Component and section styles
  index.css     Design tokens, resets, and utility styles
```
