# dvashim UI

A StyleX-based design system shipped as source-only packages — no build step, no runtime style engine, CSS extracted at the consumer's bundle.

## Packages

| Package | Description |
| --- | --- |
| [`@dvashim/ui-core`](./packages/core) | Design tokens: color palette, intent slots, font size / line-height / weight scales. |
| [`@dvashim/ui-components`](./packages/components) | React components (`Button`, `InteractionOverlay`) styled against core intent slots. |
| [`@dvashim/ui-themes`](./packages/themes) | Color palettes (light / dark / mono variants / hacker) and font density themes (comfortable / compact / large / extra-large). |

## Requirements

- Node ≥ 20.19
- pnpm 10.33.0 (pinned via `packageManager`)
- A bundler that can compile `.ts` sources and run the StyleX plugin (Vite is used here; webpack / Rspack / esbuild work too).

## Quickstart

```sh
pnpm install
pnpm --filter @dvashim/ui-demo cosmos   # fixture sandbox (preferred dev surface)
pnpm --filter @dvashim/ui-demo dev      # Vite dev server
pnpm check                              # Biome lint + format
```

## Layout

```text
packages/
  core/         @dvashim/ui-core       (tokens)
  components/   @dvashim/ui-components (React layer)
  themes/       @dvashim/ui-themes     (theme bundles)
demo/           Vite + React Cosmos sandbox
```

See [`CLAUDE.md`](./CLAUDE.md) for the StyleX architecture and workspace conventions.

## Releases

Versioning and changelogs are driven by [Changesets](https://github.com/changesets/changesets). On merge to `main`, a workflow opens a "Version Packages" PR; merging that PR bumps versions, writes changelogs, and creates git tags. Publishing to npm is intentionally not wired up.

## License

MIT © Aleksei Reznichenko
