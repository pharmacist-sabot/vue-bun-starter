# Vue Bun Starter Template

```
██╗   ██╗██╗   ██╗███████╗██████╗ ██╗   ██╗███╗   ██╗
██║   ██║██║   ██║██╔════╝██╔══██╗██║   ██║████╗  ██║
██║   ██║██║   ██║█████╗  ██████╔╝██║   ██║██╔██╗ ██║
╚██╗ ██╔╝██║   ██║██╔══╝  ██╔══██╗██║   ██║██║╚██╗██║
 ╚████╔╝ ╚██████╔╝███████╗██████╔╝╚██████╔╝██║ ╚████║
  ╚═══╝ ╚═════╝ ╚══════╝╚═════╝ ╚═════╝ ╚═╝  ╚═══╝
```

---

## ◆ PULSE

A new Vue project should start with its decisions made and its
releases automated. This is the Bun edition of the opinionated
starter: Vue 3.5 with `<script setup>`, TypeScript that refuses
unchecked access, Tailwind 4 via Vite, and a quality corridor -
ESLint, Husky, Commitlint, Vitest - plus Semantic Release, so the
version bumps, the changelog grows, and the tags land without a human
holding the release button. Clone it, rename it, and ship the feature
that matters.

| Type-safe ▣ | CI/CD ▣ | Semantic release ▣ | Bun-fast ▣ |
|---|---|---|---|

*v1.0.12 - the scaffold - stack, gates, releases - is sealed.*

> Built with Vue 3.5 + TypeScript 5.9 + Vite 7 + Bun, released by
> Semantic Release - the boring parts, decided once, automated after.
>
> **suradet-ps**, artifact keeper

---

## ◆ IGNITION

Three commands, a new project with a release pipeline.

```
⟫ git clone https://github.com/suradet-ps/vue-bun-starter.git my-app
⟫ cd my-app
⟫ bun install
⟫ bun dev
```

Open [http://localhost:5173](http://localhost:5173).

```
⟫ bun build          # type-check, then production build
⟫ bun lint           # ESLint + formatting
⟫ bun test:unit      # Vitest
```

<details>
<summary>Detaching from the template</summary>

1. `rm -rf .git` (or `Remove-Item -Recurse -Force .git` on Windows)
   then `git init`.
2. Update `name` and `author` in `package.json`.
3. Clear `CHANGELOG.md`; update the README title.
4. `bun prepare` installs the Husky hooks; the corridor is live.

</details>

Live demo: [vue-bun-starter.netlify.app](https://vue-bun-starter.netlify.app).

---

## ◆ ANATOMY

One scaffold, several already-made decisions, one release bot.

- **Types** - `strict: true` and `noUncheckedIndexedAccess` on
  TypeScript 5.9 - an index access without a guard is a compile
  error, not a runtime surprise.
- **Styles** - Tailwind CSS 4 with Vite-native integration -
  utility-first styling without a PostCSS pipeline to babysit.
- **Structures** - Pinia stores, Vue Router, `views/`, `composables/`,
  `layouts/`, and `@/` aliases - the architecture is a convention
  before the first feature.
- **Gates** - `@antfu/eslint-config` lints and formats; Husky and
  lint-staged guard every commit; Commitlint enforces conventional
  commits; Vitest stands ready for unit tests.
- **Releases** - Semantic Release reads the conventional commits and
  does the rest: version bump, `CHANGELOG.md`, and the tag - the
  release button no longer needs a human.
- **Serves** - a live demo on Netlify and a CI/CD workflow already
  wired - the template demonstrates its own deployment.

---

## ◆ RITUALS

**The core ceremony** - the project birth:

1. Clone the template as the new name and detach the history - one
   command, a fresh `.git`.
2. Install with Bun - the hooks install themselves, the editor
   configures itself from `.vscode/`.
3. Commit with a conventional message - the corridor ran already:
   lint, format, type-check, tests.
4. Merge to `main`. Semantic Release takes it from there: version,
   changelog, tag - without a ceremony of its own.

**The ceremony of the committed code** - nothing reaches a commit
without the corridor: lint-staged on the staged files, Commitlint on
the message. The history is clean because the gates are automatic.

**The ceremony of the automated tag** - a conventional commit is the
only ritual a release needs. Semantic Release reads the message, and
the version number follows the meaning - `feat` grows the minor,
`fix` grows the patch, and the changelog writes itself.

---

## ◆ ECHOES

**Where this artifact is heading**

```
stack    ▸ Vue 3.5, TS strict, Tailwind 4, Bun ─────────────────────── ▸ sealed
gates    ▸ ESLint, Husky, Commitlint, Vitest ────────────────────────── ▸ sealed
release  ▸ Semantic Release: version, changelog, tags ──────────────── ▸ sealed
demo     ▸ live Netlify deployment ──────────────────────────────────── ▸ sealed
```

**Raising the artifact** - the release rules live in `.releaserc`;
the CI/CD in `.github/workflows/`. Open an issue first to discuss a
change to the defaults.

**Status** - CI gates every push and Semantic Release ships every
merge. [Watch the gates](.github/workflows).

---

```
  ─────────────────────────────────────────
   The best scaffold is the one
   that also ships itself.
  ─────────────────────────────────────────
```

[MIT](LICENSE)