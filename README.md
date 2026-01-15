# IEEE Computer Society — Club Website ’26

## About

This repository contains the official IEEE Computer Society club website, built using **Next.js**.  
The site is mostly static but pulls live data such as projects, members, and leaderboards from the club’s backend.


## Guidelines

- Create Forks and open Pull Requests  
- Modify only relevant files to avoid conflicts.
- For every page you work, on create modular components, that can be reused elsewhere too.
- Use **pnpm** as the package manager (do not use npm or yarn)  
- Run `pnpm run build` before pushing any changes  


## Commit Convention

- fix/feature-name
- feat/issue-[number]

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
└── package.json
```

Routing is handled through the `app/` directory.

---

## Commands

Run these from the project root:

| Command | Purpose |
|--------|--------|
| `pnpm install` | Install dependencies |
| `pnpm run dev` | Start the dev server at `http://localhost:3000` |
| `pnpm run build` | Build the project |
| `pnpm start` | Run the built app locally |






