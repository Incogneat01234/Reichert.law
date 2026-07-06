# Project Instructions for Claude

## Overview
This is the professional website for Thomas Reichert (reichert.law), an IP Attorney & Law Professor. The main site is static HTML, and the blog uses **Hugo** for static generation. Hosted on **Porkbun static hosting** via GitHub.

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
  .htaccess               ← URL routing

/hugo-blog/               ← Hugo source for blog
  hugo.toml               ← Hugo config
  content/posts/          ← Blog posts (Markdown)
  themes/reichert/        ← Custom theme

/blog/                    ← Generated blog output (don't edit directly)
```

## Workflow

### Main Site
1. Edit HTML files directly at root
2. Commit and push

### Blog
1. Create/edit posts in `hugo-blog/content/posts/` as Markdown
2. Commit and push the Markdown only
3. GitHub Actions (`.github/workflows/build-blog.yml`) rebuilds `/blog/` with Hugo 0.155.1 and pushes a `chore: rebuild blog` commit automatically
4. Pull after the Action finishes to pick up the bot's rebuild commit

**Do NOT run `hugo` locally and commit `/blog/` output.** Local Hugo versions differ from the Action's pinned 0.155.1 and produce conflicting generated files. For local preview use `hugo server -D` only (serves from memory, writes nothing).

## Adding a New Blog Post

1. Create `hugo-blog/content/posts/your-post-slug.md`:
   ```markdown
   ---
   title: "Your Post Title"
   date: 2026-02-15
   description: "Brief description for SEO and previews."
   tags:
     - trademark
     - research
   category: "Research"
   ---

   Your post content in Markdown...
   ```

2. Commit and push (Markdown only; the Action rebuilds `/blog/`)

## Key Commands

```bash
# Preview blog locally (never commit local build output)
cd hugo-blog && hugo server -D
```

## Important Notes

- **Porkbun serves from repo root** — files served as-is
- **Hugo outputs to /blog/** — configured in hugo.toml
- **Blog posts are Markdown** — in hugo-blog/content/posts/
- **RSS feed** is at /blog/index.xml

## Tech Stack

- Plain HTML/CSS/JavaScript (main site)
- Hugo (blog)
- Porkbun static hosting
- GitHub for version control
