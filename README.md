# UG SMP Toolkit

Next.js + TypeScript + Tailwind CSS single-page app for the UG SMP Minecraft server.

Features
- Dark theme by default (toggle to light)
- Card-based layout for rules, ranks, and commands
- Client-side search for commands
- Sticky footer, persistent navbar with section anchors and smooth scrolling
- Responsive: designed for mobile (360px width) up to desktop
- Contact form that logs submissions to console (demo)

Server info used in the demo:
- IP: play.ugsmp.fun
- Discord: https://dsc.gg/ugsmp

Getting started (local)
1. Install dependencies:
   npm install

2. Dev server:
   npm run dev
   Open http://localhost:3000

3. Build:
   npm run build
   npm start

Notes & next steps
- All content is stored in `lib/data.ts` — edit text, rules, commands, seasons and links there.
- The contact form only logs to console. To send to Discord or store in a database, add an API route and webhook.
- To add Firebase Auth / dashboard: integrate Firebase SDK, add pages and protected routes.
- To add the discord bot and webhook processor I can provide sample Node.js bot.js and webhook server files next.

Deploy
- Vercel: push to GitHub and import the repo in Vercel. The project is configured for a standard Next.js deploy.

License
- Use as you like. Edit the content in `lib/data.ts` to match your server.