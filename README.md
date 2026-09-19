# AppSweep Website

The official landing page for **AppSweep**, a native macOS application uninstaller created by Debarun Lahiri.

The website introduces AppSweep, explains how it finds related application files and services, displays product screenshots, and provides the latest DMG download.

## Technology

- Next.js
- React
- TypeScript
- CSS
- Lucide and React Icons

## Requirements

- Node.js 20 or later
- npm

## Local development

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

## Production build

Create the optimized static website:

```bash
npm run build
```

The exported website is generated in the `out` directory.

## Downloadable DMG

The download buttons use this file:

```text
public/AppSweep-1.0.dmg
```

To publish a new AppSweep version:

1. Add the new DMG to the `public` directory.
2. Update both download links in `app/page.tsx` if the filename changes.
3. Update the displayed application version where necessary.
4. Run `npm run build` to generate the updated static website.

## Project assets

```text
public/
├── AppSweep-1.0.dmg
├── appsweep-icon.png
├── appsweep-overview.png
└── appsweep-review.png
```

## Useful commands

```bash
npm run dev
npm run build
npm run lint
```

## Contact

**Debarun Lahiri**

- [GitHub](https://github.com/debarunlahiri/)
- [LinkedIn](https://www.linkedin.com/in/debarun-lahiri-a67875126/)
- [Email](mailto:debarunlahiri2016@gmail.com)

## Copyright

Copyright © 2026 Debarun Lahiri. All rights reserved.
