# AGENTS.md

## Cursor Cloud specific instructions

This is a **Next.js 15** marketing website (single-package, no monorepo). All source lives directly in `/app`, `/components`, and `/lib`.

### Quick reference

| Action | Command |
|--------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 3000) |
| Build | `npm run build` |
| Lint | `npm run lint` |

### Caveats

- **ESLint is not installed or configured** as a project dependency. The `npm run lint` script exists in `package.json` but will fail with "eslint: not found" unless ESLint is installed separately. This is a pre-existing state in the repo.
- The project uses **Tailwind CSS v4** via `@tailwindcss/postcss` (not the older `tailwind.config.js` approach). There is no `tailwind.config.js` file; styling configuration is handled through CSS imports.
- The **contact form API** (`/api/contact`) requires at least one of SMTP or Google Sheet webhook environment variables to be configured in `.env.local`. Without either, the endpoint returns 503. The `.env.local` file is already present in the repo with both configured.
- No database is used. Leads are stored via an external Google Sheets webhook.
- No automated test suite exists in this project.
- The project deploys to **Netlify** (see `netlify.toml`). For local development, `npm run dev` is sufficient.
