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
│   │   ├── team-registration/
│   │   │   └── components/     # TeamRegistration, TeamForm, TeamView, MemberList
│   │   ├── admin/
│   │   │   └── components/     # AdminLogin, TeamsTab, FeedbackTab, SubmissionsTab
│   │   ├── submission/
│   │   │   └── components/     # SubmissionForm, FileUploadField
│   │   └── ...
│   ├── publications/       # Publications section
│   ├── join-us/            # Join us page
│   └── data/               # Static data (blog.ts, publications.ts, team.ts)
├── components/             # Shared reusable components
│   ├── Header.tsx          # Site header/navigation (all variants)
│   ├── Footer.tsx          # Site footer (full/compact variants)
│   ├── home/               # Home page section components
│   │   ├── HeroSection.tsx, AboutSection.tsx, EventsSection.tsx
│   │   ├── MissionSection.tsx, TeamSection.tsx, ResearchHighlight.tsx
│   ├── hackathon/          # Hackathon page section components
│   │   ├── HackathonHero.tsx, EventResources.tsx, AboutHackathon.tsx
│   │   ├── PrizesSection.tsx, ScheduleSection.tsx, PartnersSection.tsx, DocumentsSection.tsx
│   └── ui/                 # Small reusable UI components
│       ├── AlertBanner.tsx
│       └── LoadingSpinner.tsx
├── lib/                    # Utilities
│   ├── constants.ts        # Shared constants (MAX_MEMBERS, email validation)
│   ├── navigation.ts       # Navigation link definitions
│   ├── firebase.ts         # Firebase singleton initialization
│   └── firestore/          # Firestore operations (teams.ts, participants.ts, etc.)
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

## Key Files for New Contributors

- **To add a nav link**: edit `src/lib/navigation.ts`
- **To add a team member**: edit `src/app/data/team.ts`
- **To add a blog post**: edit `src/app/data/blog.ts`
- **To add a publication**: edit `src/app/data/publications.ts`
- **To change shared constants** (e.g. MAX_MEMBERS, email validation regex): edit `src/lib/constants.ts`
