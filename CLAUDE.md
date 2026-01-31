# Project Instructions for Claude

## Overview
This is the professional website for Thomas Reichert (reichert.law), an IP Attorney & Law Professor. It's a simple static HTML site hosted on **Porkbun static hosting** via GitHub.

## Project Structure

```
/                         ← All files served directly
  index.html              ← Homepage
  consulting/index.html   ← Consulting page
  academic/index.html     ← Academic page
  contact/index.html      ← Contact page
  404/index.html          ← Error page
  styles.css              ← All CSS styles
  menu.js                 ← Mobile menu JavaScript
  images/                 ← Images folder
  .htaccess               ← Clean URL routing
```

## Workflow

1. **Edit HTML files** directly
2. **Commit and push** to GitHub
3. Porkbun automatically pulls from GitHub and serves the site

No build step required.

## Blog

The blog is hosted externally on Blogspot: https://doctrineanddata.blogspot.com/

## Important Notes

- **Porkbun serves from repo root** — files are served as-is
- **Clean URLs** — `/consulting/` serves `/consulting/index.html` via .htaccess
- **No build system** — pure static HTML, CSS, and JS

## Tech Stack

- Plain HTML/CSS/JavaScript
- Porkbun static hosting
- GitHub for version control
