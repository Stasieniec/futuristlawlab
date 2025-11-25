# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Futurist Law Lab website and hackathon management system. A Next.js 15 application with Firebase/Firestore backend for the Legal Hackathon team registration system.

## Commands

```bash
npm run dev      # Development server with Turbopack
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint
```

## Architecture

### Tech Stack
- **Next.js 15** with App Router and React 19
- **TypeScript** with strict mode and path aliases (`@/*` → `./src/*`)
- **Tailwind CSS 4** for styling
- **Firebase/Firestore** for database
- **Vercel** for deployment

### Directory Structure
```
src/
├── app/                    # Next.js App Router
│   ├── api/hackathon/      # API routes
│   ├── blog/               # Blog with dynamic [slug] routes
│   ├── hackathon/          # Hackathon features
│   │   ├── team-registration/  # Team registration system
│   │   │   └── components/     # TeamRegistration, TeamForm, TeamView, MemberList
│   │   └── admin/          # Password-protected admin dashboard
│   ├── publications/       # Publications section
│   └── data/               # Static data (blog.ts, articles.ts, publications.ts)
├── lib/                    # Utilities
│   ├── firebase.ts         # Firebase singleton initialization
│   └── firestore/          # Firestore operations (teams.ts, participants.ts)
└── types/                  # TypeScript interfaces (Team, TeamMember, Challenge)

scripts/                    # Automation (bulk participant import)
```

### Key Patterns

**Client vs Server Components**: Interactive components (team registration) use `'use client'` directive. Static/SEO pages are Server Components.

**Firebase Singleton**: `src/lib/firebase.ts` initializes Firebase once to prevent multiple instances.

**Email-based Team Lookup**: Teams are queried by normalized email (`toLowerCase().trim()`). User email persisted in localStorage during registration.

**Firestore Collections**:
- `teams/{teamId}` - Team documents with nested `members` array
- `participants/{...}` - Approved hackathon participants for email validation

### Styling Conventions
- Color scheme: Slate grays (`slate-50` to `slate-900`), Blue accents (`blue-700` primary)
- Custom classes in `globals.css`: `.card`, `.btn-primary`, `.btn-secondary`
- Geist Sans/Mono fonts

## Environment Variables

Copy `.env.example` to `.env.local` and configure:
- `NEXT_PUBLIC_FIREBASE_*` - Firebase project configuration
- `NEXT_PUBLIC_ADMIN_PASSWORD` - Admin panel access
