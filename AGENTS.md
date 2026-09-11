# AGENTS.md — the_system-web

Read the [workspace root AGENTS.md](https://github.com/yuzutaru/the_system/blob/main/AGENTS.md) first, then
[`docs/architecture.md`](https://github.com/yuzutaru/the_system/blob/main/docs/architecture.md),
[`docs/domain.md`](https://github.com/yuzutaru/the_system/blob/main/docs/domain.md), and
[`docs/api-contract/openapi.yaml`](https://github.com/yuzutaru/the_system/blob/main/docs/api-contract/openapi.yaml).

## Commands

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test          # vitest
pnpm build
```

## Layout

| Path | Purpose |
| :--- | :--- |
| `app/` | App Router routes; thin, delegate to features |
| `app/layout.tsx` | Shell: nav, providers, footer |
| `app/providers.tsx` | TanStack Query provider |
| `features/<name>/` | Feature components (workout, stats, character) |
| `components/` | Shared presentational components |
| `lib/domain/` | Pure TypeScript domain rules + tests — mirrors [`docs/domain.md`](https://github.com/yuzutaru/the_system/blob/main/docs/domain.md) |
| `lib/api.ts` | Typed, zod-validated API client |

## Rules

- `lib/domain` must stay framework-free (no React, no Next imports) so it stays
  testable and portable.
- Feature folders must not import each other; share through `components/` or `lib/`.
- API shapes come from `lib/domain` + `lib/api.ts`; keep them in sync with
  [`docs/api-contract/openapi.yaml`](https://github.com/yuzutaru/the_system/blob/main/docs/api-contract/openapi.yaml).
- `eslint-config-next` v16 uses native flat config (`eslint.config.mjs`).
- When a formula changes, update [`docs/domain.md`](https://github.com/yuzutaru/the_system/blob/main/docs/domain.md), `lib/domain`, and the tests.
