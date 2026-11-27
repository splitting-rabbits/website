This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Literature Studio

The Sanity Studio is mounted at `/studio`. Create a **Literature piece** and
choose its section and page style:

- Text-only poem
- Poem with artwork and optional words over the artwork
- Poem with a photo and optional words over the photo
- Article or magazine made from ordered text and image sections

The page background choices match the Literature designs: butter yellow,
peach, lime green, soft white, and blush pink. Image uploads include an
accessibility description, and poem/artwork/photo styles require the content
they need before publishing. Artwork and photo poems can also set the overlay
words' alignment, position, and color. Article sections can be reordered and
include their own text, image, caption, and image placement. New entries are
not preloaded; the Studio starts empty.

To connect it to a Sanity project:

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage) and use
   `production` as the dataset name.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID`
   to your project ID. Keep `NEXT_PUBLIC_SANITY_DATASET` set to `production`.
3. Restart the Next.js app and open `/studio`.
4. In the Sanity project settings, allow the local development origin and the
   deployed site origin in the project's CORS settings.

The project ID and dataset are public configuration values. Do not put a Sanity
API token in a `NEXT_PUBLIC_` variable.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
