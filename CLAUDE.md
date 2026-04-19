# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repo layout

pnpm workspace (`pnpm-workspace.yaml`):
- `packages/core/` — `@dvashim/ui-core`, the publishable token library. Source-only (no build step). Sources live under `src/color/` and `src/font/`, each with an `index.ts` barrel that re-exports the folder's types + runtime arrays. Exports in `package.json`: `.` → `src/index.ts` (re-exports both folder barrels), `./color.stylex` → the semantic color palette, `./color.intent.stylex` → the intent-slot contract and themes, `./font.size.stylex` → the t-shirt font-size scale, `./font.lineHeight.stylex` → the matching line-height scale (reuses `FontSize` keys via `satisfies Record<FontSize, string>` so the two scales stay in sync at compile time), `./font.weight.stylex` → the 5-step weight scale (`light`/`regular`/`medium`/`semibold`/`bold`). The `.stylex` subpath exports exist so consumers import token modules at a resolvable path that the StyleX plugin can statically analyze.
- `packages/components/` — `@dvashim/ui-components`, the React component layer. Lists `@dvashim/ui-core`, `@stylexjs/stylex`, `react`, and `react-dom` in `peerDependencies` (workspace peers are `workspace:^`) — see "Dependency layering" below for why. Currently exports `Button` and `InteractionOverlay` from `src/index.ts`. Source-only, no build step.
- `packages/themes/` — `@dvashim/ui-themes`, the publishable theme library. Lists `@dvashim/ui-core` and `@stylexjs/stylex` in `peerDependencies`. Source-only. Composes core VarGroups via `stylex.createTheme`. Sources organized under `src/color/` and `src/font/`, with each theme in its own `<themeName>.theme.stylex.ts` file plus an `index.ts` barrel per folder. Exports: `./color.themes.stylex` → barrel re-exporting all 6 palette themes (light / dark / mono variants / hacker), `./font.themes.stylex` → barrel re-exporting all 4 density themes (comfortable / compact / large / extra-large); each density file contains its per-VarGroup themes plus an `as const` tuple bundle that pairs size + line-height for atomic application.
- `demo/` — `@dvashim/ui-demo`, a Vite + React + React Cosmos sandbox that consumes all three workspace packages (`@dvashim/ui-core`, `@dvashim/ui-components`, `@dvashim/ui-themes`) via `workspace:*`.

The root `package.json` exposes only `pnpm check` (Biome). Everything else runs from inside `demo/` or via `pnpm --filter`.

## Commands

Install: `pnpm install` (from the workspace root).

In `demo/`:
- `pnpm dev` — Vite dev server.
- `pnpm build` — `tsc -b && vite build`. Also typechecks the workspace via project references.
- `pnpm cosmos` — React Cosmos fixture sandbox; preferred surface for working on tokens / components.
- `pnpm cosmos-export` — static export of the sandbox.
- `pnpm preview` — preview the prod build.

Lint / format (Biome, from the workspace root):
- `pnpm check` — lint + format check.
- `pnpm exec biome check --write .` — auto-fix (no script wired up for this).

Biome is the sole linter, configured at the root via `@dvashim/biome-config/react-recommended`. Do not add an ESLint config — prior attempts existed and were removed.

None of `@dvashim/ui-core`, `@dvashim/ui-components`, or `@dvashim/ui-themes` has scripts or a `tsconfig.json` of its own. TypeScript checking happens transitively when the demo runs `tsc -b` — workspace resolution pulls all three packages' source into the same project graph.

`.github/workflows/check.yml` runs `pnpm check` on PRs to `main`. `.github/workflows/release.yml` runs on pushes to `main` — see "Releases" below.

## StyleX architecture

Styling uses [StyleX](https://stylexjs.com/). A few non-obvious conventions must be respected for the build-time plugin to work:

- **`.stylex.ts` suffix** is required on any file that calls `defineVars` / `defineConsts`. The Vite unplugin (`@stylexjs/unplugin`) and the babel plugin rely on this naming to detect token modules and inline their references at build time.
- **`import * as stylex from '@stylexjs/stylex'`** is the only safe import form. Named imports break the plugin's static analysis.
- `demo/vite.config.ts` passes `unstable_moduleResolution: { type: 'commonJS', rootDir: path.resolve(__dirname, '..') }`. That `..` is the workspace root and is what lets the plugin resolve token modules in `packages/core/` from the demo. If a new package is added, this resolution still works as long as it sits under the same root.
- `useCSSLayers: true` is on; styles ship inside StyleX's CSS layer, so any global CSS must coexist with that cascade.

### Two-layer color architecture

The library ships two StyleX var sets that stack. Components style against the *intent* slots; theming happens by swapping the two layers independently.

**Layer 1 — semantic palette (`packages/core/src/color/color.stylex.ts`).** Declares the full palette contract via `defineVars`: surfaces, intents (neutral / primary / danger / warning / success / info), borders, overlay, link, focus. Each intent contributes four tokens (`<intent>`, `<intent>Fg`, `<intent>Subtle`, `<intent>SubtleFg`). The `ColorToken` union lives in `color/color.ts`; the `ColorIntent` string-union and the runtime `colorIntents` array live in `color/color.intent.ts` (all re-exported through `src/index.ts` via the folder's `index.ts` barrel). The `satisfies Record<ColorToken, string>` on `defineVars` is what catches drift between the type and the literal. Themes live in `@dvashim/ui-themes` under `packages/themes/src/color/` — one file per theme (`colorLight.theme.stylex.ts`, `colorDark.theme.stylex.ts`, `colorMonoLight.theme.stylex.ts`, `colorMonoDark.theme.stylex.ts`, `colorMonoDim.theme.stylex.ts`, `colorHacker.theme.stylex.ts`), re-exported via the folder's `index.ts` barrel. Apply a theme by spreading `stylex.props(theme)` onto a wrapper (see `demo/src/__fixtures__/Colors.tsx`); for a full-document theme, splice the resulting className + CSS-var inline styles onto `document.body` (see the Cosmos decorator below).

**Layer 2 — intent slots (`packages/core/src/color/color.intent.stylex.ts`).** A 6-slot contract (`solid`, `solidFg`, `subtle`, `subtleFg`, `outline`, `outlineFg`) plus six per-intent themes (`colorIntentPrimary` / `Neutral` / `Danger` / `Warning` / `Success` / `Info`) that rebind those slots to Layer-1 palette tokens. `colorIntentThemes` maps `ColorIntent` → theme. This is how a single component styled against `colorIntent.solid` / `.outline` renders in any intent's colors just by swapping the applied theme (see `@dvashim/ui-components`'s `Button`, which selects a theme from `colorIntentThemes[props.intent]` and styles its `solid` / `subtle` / `outlined` / `ghost` variants against these slots).

Per StyleX's types, `createTheme` overrides are **all optional** — a theme that omits a token silently falls back to the `defineVars` default. Defaults in `color.stylex.ts` mirror the light palette (not `transparent`) so a missed override degrades visibly rather than disappearing.

## Cosmos fixtures

React Cosmos discovers fixtures in two ways:
- `*.fixture.tsx` files anywhere under `demo/src/`.
- Files inside `__fixtures__/` directories.

`demo/cosmos.config.json` wires the Vite plugin and points at `/src/main.tsx` for the runtime.

`demo/src/__fixtures__/cosmos.decorator.tsx` is the canonical pattern for applying Layer-1 themes at runtime: it uses `useSelect` from `react-cosmos/client` to pick a color palette (light / dark / mono variants / hacker) and a font density (comfortable / compact / large / extra-large), composes them via `stylex.props(colorTheme, ...fontDensityTuple)`, and splices the resulting className + CSS-var inline styles onto `document.body` (so tokens reach globals and overlays, not just a wrapper subtree). Font density themes live under `packages/themes/src/font/` — one file per density (`fontComfortable.theme.stylex.ts`, `fontCompact.theme.stylex.ts`, `fontLarge.theme.stylex.ts`, `fontExtraLarge.theme.stylex.ts`), each exporting its per-VarGroup themes (`fontSizeComfortable`, `fontLineHeightComfortable`, …) and an `as const` tuple bundle (`fontComfortable`, `fontCompact`, `fontLarge`, `fontExtraLarge`) — the tuple shape forces matched size + line-height application so consumers can't break vertical rhythm by retheming one VarGroup without the other. The folder's `index.ts` barrel re-exports everything for the `./font.themes.stylex` subpath.

## Dependency layering

`@dvashim/ui-core`, `@stylexjs/stylex`, and (for components) `react`/`react-dom` are declared as **peerDependencies** — not regular dependencies — in `@dvashim/ui-components` and `@dvashim/ui-themes`. This is load-bearing and not a stylistic choice:

- StyleX `VarGroup` objects have **identity-based** equality. `stylex.createTheme(fontSize, …)` in `@dvashim/ui-themes` binds to the *specific* `fontSize` object imported from its copy of `@dvashim/ui-core`. If a consumer's dependency graph ends up with two copies of `@dvashim/ui-core` (e.g., themes depends on `core@1.3` but the consumer pins `core@1.2`), `createTheme` targets a `VarGroup` the component layer never styles against — theming silently does nothing.
- Same logic for `@stylexjs/stylex` itself (its runtime must be a singleton) and for React (duplicate copies → "Invalid hook call").
- Peers use `workspace:^` so published packages get a caret range, not an exact pin.

Do **not** "fix" peers back to regular dependencies. If `pnpm` complains about missing peers, the consumer (or `demo`) is the place to install them.

## Releases

Versioning runs on [Changesets](https://github.com/changesets/changesets). Key config in `.changeset/config.json`:
- **`fixed: [["@dvashim/ui-core", "@dvashim/ui-components", "@dvashim/ui-themes"]]`** — the three publishable packages always share one version number (same `VarGroup`-identity reason as peers). Writing a changeset for any of them bumps all three.
- **`changelog: ["@changesets/changelog-github", { "repo": "dvashim/ui" }]`** — auto-prepends PR/commit/author to entries; don't hand-write those into changeset descriptions.
- `demo/` is `private: true`, so Changesets skips it (default `privatePackages: { version: false, tag: false }`).

`.github/workflows/release.yml` runs `changeset tag`, not `changeset publish` — merges to `main` open a "Version Packages" PR that bumps versions and writes `CHANGELOG.md`; merging that PR creates `@dvashim/ui-core@x.y.z`-style git tags but does **not** publish to npm. If npm publishing is ever added, restore `id-token: write` permission and `NPM_CONFIG_PROVENANCE: true` env alongside swapping `changeset tag` back to `changeset publish`.

## Toolchain notes

- **Node ≥ 20.19** per root `engines`. `.node-version` pins the exact version CI and local shells should use.
- **pnpm 10.33.0** is pinned via `packageManager`. Don't use npm or yarn — workspace links won't resolve.
- **TypeScript 6.x**. Configs come from external `@dvashim/typescript-config` (`app-react-vite` for app code, `node` for `vite.config.ts`).
- `demo/src/App.tsx` still carries a Meta copyright header and inline `stylex.create` styles left over from the StyleX starter template; it's a live playground, not a canonical consumer of `@dvashim/ui-core`. Fixtures under `demo/src/__fixtures__/` are where the core's token + component patterns are exercised idiomatically.
