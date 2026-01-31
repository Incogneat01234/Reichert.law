# Project Instructions for Claude

## Overview
This is the professional website for Thomas Reichert (reichert.law), an IP Attorney & Law Professor. It uses **11ty (Eleventy)** as a static site generator, hosted on **Porkbun static hosting** via GitHub.

## Project Structure

```
/src/                     ← SOURCE FILES (edit these)
  index.html              ← Homepage template
  consulting.html         ← Consulting page
  academic.html           ← Academic page
  contact.html            ← Contact page
  404.html                ← Error page
  styles.css              ← All CSS styles
  menu.js                 ← Mobile menu JavaScript
  _includes/              ← Shared template components
    header.njk            ← Site header with nav
    footer.njk            ← Site footer
    base.njk              ← Base HTML wrapper
    post.njk              ← Blog post template
  _data/
    site.json             ← Site metadata (title, URL, etc.)
  blog/
    blog.njk              ← Blog index template
    feed.njk              ← RSS feed template
    posts/
      posts.json          ← Default frontmatter for posts
      *.md                ← Blog posts in Markdown

/                         ← BUILT OUTPUT (generated, do not edit directly)
  index.html              ← Generated homepage
  blog/index.html         ← Generated blog index
  blog/*/index.html       ← Generated blog posts
  styles.css, etc.        ← Copied static files
```

## Build Workflow

1. **Edit source files** in `/src/`
2. **Run build**: `npm run build`
3. **Commit and push** both `/src/` and generated files
4. Porkbun automatically pulls from GitHub and serves the root

## Key Commands

- `npm run build` - Generate the site
- `npm run serve` - Local dev server with hot reload

## Adding a New Blog Post

1. Create `/src/blog/posts/your-post-slug.md`:
   ```markdown
   ---
   title: Your Post Title
   date: 2026-02-15
   tags:
     - trademark
     - research
   category: Research
   excerpt: Brief description for listings and SEO.
   ---

   Your post content in Markdown...
   ```

2. Run `npm run build`
3. Commit and push

## Important Notes

- **Porkbun serves from repo root** - That's why built files go to `/` not `/_site/`
- **Both source and built files are in git** - This is intentional for Porkbun
- **Templates use Nunjucks** (.njk files)
- **The "posts" tag is filtered** from display (it's the collection tag)
- **RSS feed** is at `/blog/feed.xml`
- **.htaccess** enables clean URLs (directory index)

## Tech Stack

- 11ty v3 (Eleventy)
- @11ty/eleventy-plugin-rss
- Nunjucks templating
- Markdown for blog posts
- Porkbun static hosting
- GitHub for version control
