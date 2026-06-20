# Kindred Konnections Website

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The app uses Next.js with the App Router. Main site pages live in `app/`, shared layout components live in `components/`, and public assets live in `public/`.

## Production

Set `NEXT_PUBLIC_SITE_URL` to the production site URL so metadata and social previews resolve correctly.

```bash
NEXT_PUBLIC_SITE_URL=https://kindredkonnections.com
```

## Scripts

- `npm run dev` starts the local development server.
- `npm run build` creates a production build.
- `npm run start` starts the production server.
- `npm run lint` runs ESLint.
