# the_system-web

Web app and landing page for **The System** — Next.js (App Router) · TypeScript ·
Tailwind CSS v4.

Part of the [The System workspace](https://github.com/yuzutaru/the_system). Game rules come from
[`docs/domain.md`](https://github.com/yuzutaru/the_system/blob/main/docs/domain.md); the API contract from
[`docs/api-contract/openapi.yaml`](https://github.com/yuzutaru/the_system/blob/main/docs/api-contract/openapi.yaml).

## Architecture — feature folders

```
the_system-web/
├── app/                    routes (thin; delegate to features)
│   ├── page.tsx            landing page
│   ├── exercises/          exercise catalogue (from the API)
│   ├── stats/              level-curve explorer
│   ├── character/          class unlock explorer
│   └── quests/
├── features/
│   ├── home/               landing sections (Hero, HowItWorks, …)
│   ├── workout/            ExerciseBrowser
│   ├── stats/              LevelCurveDemo
│   └── character/          ClassDemo
├── components/             shared UI (Nav, StatBar, XpCalculator)
└── lib/
    ├── domain/             pure TS rules (mirrors docs/domain.md) + tests
    └── api.ts              typed API client (zod-validated)
```

`lib/domain` is framework-free and unit-tested with Vitest — the same formulas as the
mobile apps and backend.

## Requirements

- Node 22+
- pnpm 10+

## Develop

```bash
pnpm install
pnpm dev            # http://localhost:3000
```

Point the app at the backend with `NEXT_PUBLIC_API_URL` (defaults to
`http://localhost:8080`).

## Build, test, lint

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

## Conventions

- Data fetching in server components; `lib/domain` holds pure logic.
- Feature folders never import each other.
- Conventional Commits.

## License

[MIT](./LICENSE)
