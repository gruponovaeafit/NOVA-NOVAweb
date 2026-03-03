# NOVA

A modern web application built with Next.js, featuring user authentication, dashboard, and Payload CMS integration.

## Quick Start

```bash
npm install --legacy-peer-deps
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Features

- **Authentication** - User login and registration
- **Dashboard** - User profile management
- **CMS** - Payload CMS integration with GraphQL API
- **API Routes** - Backend endpoints for forms and user management

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Payload CMS](https://payloadcms.com/) - Headless CMS
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Project Structure

- `src/app/(app)` - Main application pages (auth, dashboard)
- `src/app/(payload)` - CMS admin and API routes
- `src/pages` - API endpoints
- `src/app/collections` - CMS content definitions
