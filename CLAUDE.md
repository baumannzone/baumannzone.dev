# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website and blog built with Astro and Tailwind CSS. The site features:
- Spanish content (es lang)
- Blog posts with MDX support
- Talks/presentations section
- Tag-based categorization
- RSS feed generation
- Dark mode support (more or less)
- Comments system (Utterances)
- SEO optimization with Open Graph images

## Commands

```bash
# Install dependencies
pnpm i

# Development server (localhost:4321)
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Content Management

### Blog Posts
- Location: `src/content/blog/`
- Format: Markdown (`.md`) or MDX (`.mdx`)
- Filename convention: Use lowercase with hyphens (e.g., `acordeones-nativos-en-html-sin-una-linea-de-javascript.md`)
- Frontmatter required for metadata
  - In this case, the `title` should be: "Acordeones nativos en HTML sin una línea de JavaScript"
- Must follow schema defined in `src/content/config.ts`

### Blog Post Structure
```markdown
---
title: "Post Title"
description: "Post description" 
pubDate: 2024-01-01
tags: [JavaScript, HTML, CSS]
ogImage: "https://baumannzone-dev-og.vercel.app/api/og?title=Post%20Title&tags=JavaScript,HTML,CSS"
---

Content goes here (no H1 - title from frontmatter is used)
```

### Assets Organization
- Blog images: `src/assets/blog/post-slug/image.jpg`
- Post demos: `src/components/demos-blog/post-slug/demo.astro`
- Demo components must use `DemoLayout` wrapper

### Tags System
- Tags are defined as enum in `src/types/tags.ts`
- Tag pages are generated dynamically
- Special routing: `pages/tags.astro` is outside `/tags/` folder due to dev mode constraints

## Architecture

### Layouts
- `DefaultLayout.astro`: Main site layout with navbar/footer
- `BlogPostLayout.astro`: Blog post layout with structured data, comments
- `MatrixLayout.astro`: Special layout for matrix effect

### Content Collections
- `blog`: Blog posts with rich metadata
- `talks`: Presentations and talks with event info

### Key Components
- `BaseHead.astro`: SEO meta tags and structured data
- `NavBar.astro`: Main navigation
- `SharePostBar.astro`: Social sharing for posts
- `ArticleCard.astro`: Blog post preview cards

### Utilities
- `src/utils/tags.ts`: Tag URL generation and utilities
- `src/utils/screensaver.js`: Screensaver functionality
- `src/consts.ts`: Site-wide constants

## Styling
- Tailwind CSS v3 with custom configuration
- Dark mode support throughout
- Typography plugin for prose content
- Custom gradient effects and animations

## Special Features
- Open Graph image generation via external service
- Utterances comments integration (disabled in dev)
- RSS feed at `/rss.xml`
- Sitemap generation
- View transitions for smooth navigation

## Development Notes
- TypeScript with strict null checks enabled
- Spanish language content (lang="es")
- Vercel deployment
- Asset optimization with Sharp
- Comments are hidden in development mode