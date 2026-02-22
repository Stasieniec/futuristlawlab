# Futurist Law Lab

Official website for Futurist Law Lab, a student initiative based in Amsterdam that engages youth to shape the future of law in the age of technological advancement.

## Our Mission

Our mission is twofold:
1. Engage youth to future-proof the law
2. Show people that law is alive, exciting, and ever-changing

We believe that while law often lags behind technological developments, it does not have to be that way. We promote smart lawmaking, inclusive legislative processes, and aim to be the voice of youth in legal discussions.

## Our Activities

- Organizing events at universities
- Conducting workshops on law and technology
- Participating in events like the European Youth Event 2025 organized by the European Parliament in Strasbourg
- Creating resources for youth to understand and engage with legal frameworks

## Technologies

This project is built with:

- [Next.js](https://nextjs.org/) - React framework for production
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Vercel](https://vercel.com/) - Deployment platform

## Setup for New Contributors

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Clone and Install

```bash
git clone https://github.com/yourusername/futuristlawlab.git
cd futuristlawlab
npm install
```

### Environment Variables

Copy the example environment file and fill in the Firebase credentials:

```bash
cp .env.example .env.local
```

Ask a team lead for the Firebase project credentials to populate the `NEXT_PUBLIC_FIREBASE_*` values in `.env.local`.

### Running the Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Common Tasks

- **Add a nav link**: edit `src/lib/navigation.ts`
- **Add a team member**: edit `src/app/data/team.ts`
- **Add a blog post**: edit `src/app/data/blog.ts`
- **Add a publication**: edit `src/app/data/publications.ts`
- **Change shared constants** (e.g. MAX_MEMBERS, email validation): edit `src/lib/constants.ts`

For detailed architecture documentation, see [CLAUDE.md](./CLAUDE.md).

## Deployment

This project is configured for seamless deployment on Vercel.

## Contact

For more information about Futurist Law Lab, please contact us through our website or social media channels.

## License

[MIT](https://choosealicense.com/licenses/mit/)
