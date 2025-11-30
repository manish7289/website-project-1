# TODO: Update Services Routing to Direct Paths

## Tasks
- [x] Update src/App.tsx: Change route paths from /services/web-development to /web-development, and similarly for other services (app-development, wordpress-and-shopify, etc.).
- [x] Update src/components/Navbar.tsx: Modify any links to services to use the new direct paths.
- [x] Update src/pages/Services.tsx: Ensure internal links or navigation use the new paths.
- [x] Update public/sitemap.xml: Adjust URLs to reflect the new direct paths.
- [x] Fix contact form error: Add proxy in vite.config.ts to route /functions/contact to backend /api/contact for local development.

## Followup Steps
- [x] Test the updated routing by running the app and checking URLs.
- [x] Verify links in navbar and services page work correctly.
- [x] Update Footer.tsx links to use new direct paths.
- [x] Test contact form: Run backend server (cd backend && npm run dev) and Vite dev server (npm run dev) to ensure form submission works locally.
