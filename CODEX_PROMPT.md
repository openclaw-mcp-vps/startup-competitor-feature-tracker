# Build Task: startup-competitor-feature-tracker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: startup-competitor-feature-tracker
HEADLINE: Track when competitors ship new features
WHAT: Monitors competitor websites/apps for new features and sends alerts with screenshots and descriptions
WHY: Startups need competitive intelligence but manual monitoring is time-consuming and inconsistent
WHO PAYS: Product managers and founders at early-stage startups
NICHE: startup-growth
PRICE: $$59/mo

ARCHITECTURE SPEC:
A Next.js web app with automated web scraping workers that monitor competitor sites, detect changes using AI vision models, and send real-time alerts via email/Slack. Uses PostgreSQL for data storage, Puppeteer for screenshots, and OpenAI for feature change detection.

PLANNED FILES:
- app/page.tsx
- app/dashboard/page.tsx
- app/api/competitors/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- app/api/cron/monitor/route.ts
- components/CompetitorCard.tsx
- components/FeatureAlert.tsx
- components/PricingSection.tsx
- lib/scraper.ts
- lib/ai-detector.ts
- lib/email.ts
- lib/database.ts
- prisma/schema.prisma
- workers/monitor-worker.ts

DEPENDENCIES: next, tailwindcss, prisma, @prisma/client, puppeteer, openai, @lemonsqueezy/lemonsqueezy.js, resend, zod, next-auth, @next-auth/prisma-adapter, lucide-react, date-fns, sharp

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/startup-competitor-feature-tracker
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019dec80-7d6c-7413-9947-fd86cfb13cbc
--------
user
# Build Task: startup-competitor-feature-tracker

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: startup-competitor-fe
Please fix the above errors and regenerate.