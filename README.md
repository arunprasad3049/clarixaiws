# clarixai-web (Premium UI)
Modern Next.js + Tailwind + Framer Motion marketing site for **clarixai**.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Cloudflare Pages (recommended)
- Framework preset: Next.js
- Build command: `npm run build`
- Output directory: `.next`

## Demo API (Cloudflare Pages Functions)
This repo includes a simple endpoint at **/api/demo** using Cloudflare Pages Functions in `/functions/api/demo.ts`.
It returns simulated workflow output and does **not** store user data.
