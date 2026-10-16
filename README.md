# JustEdu — Next.js redesign

A complete rebuild of the original four-page tuition website using Next.js App Router, React and TypeScript. Includes responsive navigation, an animated three-slide hero, scroll reveals, reduced-motion support, class programs, and a WhatsApp enquiry builder.

## Run

Requires Node.js 20.9 or later.

```sh
npm ci
npm run dev
```

Open http://localhost:3000. For production use `npm run build` followed by `npm start`. Run `npm run typecheck` for TypeScript validation. Deploy using a Next.js-compatible host such as Vercel or a Node server; the repository is no longer a plain HTML GitHub Pages site.

## Pages and migration

- `/` — home
- `/about` — approach
- `/courses` — all four class groups and syllabi
- `/contact` — enquiry builder

The old `/index.html`, `/about.html`, `/courses.html` and `/contact.html` paths permanently redirect to their replacements.

## Enquiries

The form validates fields and prepares a WhatsApp link for the existing business number (+91 70259 67738). Visitors must click through and send the message themselves. No backend, database, email delivery or automatic submission is implied. Home tuition is limited to Kochi and Trivandrum. Online tuition is worldwide.

## Content and assets

Existing business details, subject coverage and social links were retained. Unattributed testimonials and numerical results were omitted. Photography is illustrative, not presented as JustEdu's actual students or staff. Images are downloaded from the Unsplash URLs already used by the original site and stored in `public/images`. DM Sans and Manrope are loaded from Google Fonts with system fallbacks; display headings use Georgia. Contact details live in `components/site.tsx`, `components/enquiry.tsx`, and `app/contact/page.tsx`.

## Human-first campaign and teacher recruitment

The homepage and About page now explain JustEdu's human-first position: AI can support learning, while personal teacher relationships remain central. The intro animation appears once per browser tab session, can be skipped, and is omitted for reduced-motion preferences. Decorative animations are finite; the hero remains manually controlled.

`/teach` is a dedicated teacher enquiry page linked from the navigation, footer and homepage. It collects qualifications, experience, subjects, class range, syllabi, preferred mode, availability and contact details. Home/both modes require a service city. The form validates required fields, asks for contact consent, and prepares a reviewable WhatsApp message. It does not store, send or rank applications automatically.

Verified: production build, TypeScript, empty-form validation, home-city conditional fields, correctly encoded teacher WhatsApp draft, stale-draft clearing, mobile navigation and no horizontal overflow at 390px.

## JustEdu branding

The original profile logo from https://www.instagram.com/just.edu14 is bundled at `public/images/justedu-logo.jpg` (150px source supplied by Instagram). It appears in the header, footer, intro and site icons. The cyan, warm yellow and deep-blue palette is inspired by that logo. Replace this file with a higher-resolution official source if one becomes available.
