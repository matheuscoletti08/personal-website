# AGENTS.md

## Project Overview

This repository contains my personal website.

The goal is to build an editorial-style personal website focused on:

- Linux
- Cloud infrastructure
- Open Source
- Software development
- Photography
- Design

The website should feel closer to a digital magazine or personal archive than a traditional developer portfolio.

---

## Design Direction

Follow these principles:

- Minimalist editorial aesthetic
- Strong typography hierarchy
- Large whitespace
- Monochromatic color palette
- Clean layouts
- Focus on content and readability

Avoid:

- Generic portfolio cards
- Excessive gradients
- Glassmorphism
- Overuse of animations
- Decorative UI elements without purpose
- Template-like designs

Prefer:

- Typography over visual effects
- Simple layouts
- Meaningful interactions
- Carefully selected imagery

---

## Tech Stack

- Astro
- TypeScript
- CSS
- MDX for long-form content when needed

Do not introduce additional frameworks or dependencies unless necessary.

Prefer Astro native solutions before adding React/Vue/Svelte components.

---

## Code Style

General principles:

- Keep components small and reusable.
- Prefer readable code over clever solutions.
- Avoid unnecessary abstractions.
- Use semantic HTML.
- Maintain accessibility best practices.
- Keep JavaScript usage minimal.

Astro components should use `.astro` files whenever possible.

---

## Project Structure

Expected structure:

```
src/
├── components/
├── layouts/
├── pages/
├── content/
├── assets/
└── styles/
```

Keep files organized according to their responsibility.

---

## Styling Guidelines

Use CSS variables for design tokens.

Example:

```css
:root {
  --background: #ffffff;
  --foreground: #111111;
  --muted: #666666;
}
```

Prioritize:

- typography
- spacing
- layout

before adding visual effects.

---

## Development

When starting the development server, use background mode:

```bash
astro dev --background
```

Manage the background server with:

```bash
astro dev stop
astro dev status
astro dev logs
```

For regular development:

```bash
npm run dev
```

---

## Documentation

Full Astro documentation:

https://docs.astro.build

Consult these guides before working on related tasks:

- Adding pages, dynamic routes, or middleware:
  https://docs.astro.build/en/guides/routing/

- Working with Astro components:
  https://docs.astro.build/en/basics/astro-components/

- Using React, Vue, Svelte, or other framework components:
  https://docs.astro.build/en/guides/framework-components/

- Adding or managing content:
  https://docs.astro.build/en/guides/content-collections/

- Adding styles:
  https://docs.astro.build/en/guides/styling/

- Supporting multiple languages:
  https://docs.astro.build/en/guides/internationalization/

---

## Before Making Changes

Before implementing changes:

1. Understand the existing architecture.
2. Reuse existing components when possible.
3. Preserve the visual identity.
4. Avoid unnecessary dependencies.
5. Explain architectural decisions when they affect the project.

---

## Content Guidelines

The website represents a personal identity.

Content should communicate:

- curiosity about systems;
- interest in infrastructure;
- appreciation for open technologies;
- attention to design and details.

Avoid generic developer phrases and exaggerated claims.
