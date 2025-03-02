# Next.js Enterprise Template

A comprehensive, production-ready Next.js template with everything you need to build modern, scalable web applications.

## Features

- **Next.js 14** with App Router for server-side rendering and routing
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn UI** for beautiful, accessible UI components
- **Framer Motion** for smooth animations
- **Prisma** for database ORM with PostgresSQL
- **NextAuth.js** for authentication
- **Stripe** for payments
- **Redis** for caching
- **Elasticsearch** for search functionality
- **Winston** for logging
- **Docker** and Docker Compose for containerization
- **ESLint** and **Prettier** for code quality
- Responsive layouts with mobile-first design
- Dark mode support

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Docker and Docker Compose (for containerized development)
- PostgresSQL (if running locally)
- Redis (if running locally)
- Elasticsearch (if running locally)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/nextjs-template.git
cd nextjs-template
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Then edit `.env.local` with your configuration.

4. Set up the database:

```bash
npm run prisma:generate
npm run prisma:push
```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

### Using Docker

Build and start the containers:

```bash
npm run docker:build
npm run docker:up
```

Stop the containers:

```bash
npm run docker:down
```

## Project Structure

```
nextjs-template/
├── .github/              # GitHub configuration
├── prisma/               # Prisma schema and migrations
├── public/               # Static assets
├── src/
│   ├── app/              # App Router pages and layouts
│   ├── components/       # React components
│   │   ├── ui/           # Shadcn UI components
│   │   ├── common/       # Common components (header, footer, etc.)
│   │   └── layouts/      # Layout components
│   ├── lib/              # Utility libraries
│   │   ├── auth/         # Authentication configuration
│   │   ├── db/           # Database client
│   │   ├── redis/        # Redis client
│   │   ├── search/       # Elasticsearch client
│   │   ├── stripe/       # Stripe integration
│   │   └── logger/       # Winston logger
│   ├── types/            # TypeScript types
│   ├── hooks/            # React hooks
│   ├── middleware.ts     # Next.js middleware
│   └── utils.ts          # Utility functions
├── .dockerignore
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── docker-compose.yml
├── Dockerfile
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Deployment

The template is ready for deployment to platforms like Vercel, Netlify, or any Docker-compatible environment.

For Vercel deployment:

```bash
vercel
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Redis](https://redis.io/)
- [Elasticsearch](https://www.elastic.co/)
- [Stripe](https://stripe.com/)
