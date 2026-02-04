# Project Instructions for Codex

## Overview
This is the professional website for Thomas Reichert (reichert.law), an IP Attorney & Law Professor. The main site is static HTML, and the blog is generated with **Hugo**. The site is hosted via **Porkbun static hosting**, linked to a GitHub repo for updates.

## Project Structure

```
/                         ← Main site (static HTML)
  index.html              ← Homepage
  consulting.html         ← Consulting page
  academic.html           ← Academic page
  contact.html            ← Contact page
  404.html                ← Error page
  styles.css              ← All CSS styles
  menu.js                 ← Mobile menu JavaScript
  images/                 ← Images folder
  .htaccess               ← URL routing (if supported by host)

/hugo-blog/               ← Hugo source for blog
  hugo.toml               ← Hugo config
  content/posts/          ← Blog posts (Markdown)
  themes/reichert/        ← Custom theme

/blog/                    ← Generated blog output (do not edit directly)
```

## Workflow

### Main Site
1. Edit HTML files directly at the repo root.
2. Commit and push.

### Blog
1. Create/edit posts in `hugo-blog/content/posts/` as Markdown.
2. Run `hugo` from the `hugo-blog/` directory to regenerate `/blog/`.
3. Commit and push (includes generated `/blog/`).

## Key Commands

```bash
# Build blog
cd hugo-blog && hugo

# Preview blog locally
cd hugo-blog && hugo server -D
```

## Notes

- Porkbun serves from the repo root; files are served as-is.
- Hugo outputs into `/blog/` (configured in `hugo.toml`).
- If the blog landing page should list posts, ensure the home list template pulls regular pages from the `posts` section and rebuilds the blog output.
- RSS feed is at `/blog/index.xml`.

## Analytics (Google Tag)

- Always include the Google tag for `G-EF06GBPYTZ` immediately after the opening `<head>` tag on every page.
- Ensure it exists in root HTML pages (e.g., `index.html`, `consulting.html`, `academic.html`, `contact.html`, `404.html`).
- Ensure it exists in Hugo base template `hugo-blog/themes/reichert/layouts/_default/baseof.html`.
- Ensure generated blog output in `/blog/` is rebuilt after template changes (run `hugo`).
- Do not add more than one Google tag per page.

## Blog Tone

- Tone should be warm, lightly academically humorous, and curious.
- Prefer longer posts with gently exploratory prose rather than terse or overly formal writing.
