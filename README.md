# Vue Bun Starter Template

<div align="center">

  <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" alt="Vue" width="80" />
  <span style="font-size: 40px; margin: 0 20px;">+</span>
  <img src="https://bun.sh/logo.svg" alt="Bun" width="80" />

  <h1>Vue 3 + Bun + TypeScript</h1>

  <p>
    <strong>A professional-grade, opinionated starter template for scalable Vue 3 applications.</strong>
  </p>

  <p>
    <a href="https://vuejs.org/"><img src="https://img.shields.io/badge/Vue-3.5+-4FC08D?logo=vue.js&logoColor=white" alt="Vue"></a>
    <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.9+-3178C6?logo=typescript&logoColor=white" alt="TypeScript"></a>
    <a href="https://vitejs.dev/"><img src="https://img.shields.io/badge/Vite-7.0+-646CFF?logo=vite&logoColor=white" alt="Vite"></a>
    <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-4.1+-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind"></a>
    <a href="https://bun.sh"><img src="https://img.shields.io/badge/Bun-1.3+-000000?logo=bun&logoColor=white" alt="Bun"></a>
  </p>

  <p>
    <a href="https://github.com/pharmacist-sabot/vue-bun-starter/actions"><img src="https://github.com/pharmacist-sabot/vue-bun-starter/actions/workflows/ci.yml/badge.svg" alt="CI Status"></a>
    <a href="https://github.com/pharmacist-sabot/vue-bun-starter/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License"></a>
    <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="Semantic Release"></a>
  </p>

</div>

---

## 📖 About

Designed for **Developer Experience (DX)**, code quality, and long-term maintainability. This template pre-configures the best-in-class tools so you can focus on building features, not configuring build tools.

It comes with a fully automated **CI/CD pipeline** utilizing GitHub Actions and Semantic Release to handle versioning and changelogs automatically.

## ✨ Features

### ⚡️ Core Stack

- **[Vue 3.5+](https://vuejs.org/)**: Composition API with `<script setup>` for concise components.
- **[TypeScript 5.9+](https://www.typescriptlang.org/)**: Configured with `strict: true` and `noUncheckedIndexedAccess` for maximum type safety.
- **[Vite 7](https://vitejs.dev/)**: Next-generation frontend tooling with instant server start.
- **[Tailwind CSS 4.1](https://tailwindcss.com/)**: The latest utility-first CSS framework (Vite native integration).

### 🛠 Developer Experience

- **[ESLint](https://eslint.org/)**: Powered by `@antfu/eslint-config` for zero-config, opinionated linting.
- **[Husky](https://typicode.github.io/husky/) & [lint-staged](https://github.com/okonet/lint-staged)**: Ensures quality before commit.
- **[Commitlint](https://commitlint.js.org/)**: Enforces [Conventional Commits](https://www.conventionalcommits.org/).
- **[VueUse](https://vueuse.org/)**: Essential Vue Composition Utilities.

### 🧪 Quality & CI/CD

- **[Vitest](https://vitest.dev/)**: Blazing fast unit testing.
- **Automated Releases**: GitHub Actions workflow for semantic versioning, changelog generation, and tagging.
- **Bun Optimized**: Fast dependency installation and script execution.

---

## 🚀 Getting Started

### 1. Use this Template

Click the **"Use this template"** button on GitHub to create a new repository, or clone it manually:

```bash
# Clone the repository
git clone https://github.com/pharmacist-sabot/vue-bun-starter.git my-app
cd my-app
```

### 2. Setup (Important for New Projects)

If you are starting a fresh project from this template, run these steps to detach from the template history:

1.  **Install Dependencies:**
    ```bash
    bun install
    ```
2.  **Reset Git History (Optional):**
    ```bash
    rm -rf .git
    git init
    ```
3.  **Update Configuration:**
    - Update `name` and `author` in `package.json`.
    - Clear `CHANGELOG.md` content (start fresh).
    - Update `README.md` title and badges.

### 3. Start Development

```bash
bun dev
```

The app will be available at `http://localhost:5173/`.

---

## 📜 Available Scripts

| Script           | Description                              |
| :--------------- | :--------------------------------------- |
| `bun dev`        | Start development server with HMR.       |
| `bun build`      | Type-check and build for production.     |
| `bun preview`    | Preview the production build locally.    |
| `bun lint`       | Lint and format all files.               |
| `bun lint:fix`   | Auto-fix linting issues.                 |
| `bun type-check` | Run TypeScript compiler check (no emit). |
| `bun test:unit`  | Run unit tests in watch mode.            |
| `bun prepare`    | Install Husky git hooks.                 |

---

## 📁 Project Structure

```text
.
├── .github/workflows/   # CI/CD pipelines (Release & Checks)
├── .husky/              # Git hooks
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # Reusable UI components
│   ├── composables/     # Shared Vue logic
│   ├── layouts/         # Layout components
│   ├── router/          # Vue Router config
│   ├── stores/          # Pinia stores
│   ├── types/           # TypeScript definitions
│   ├── utils/           # Helper functions
│   ├── views/           # Page-level components
│   ├── App.vue          # Root component
│   └── main.ts          # Entry point
├── tests/               # Unit tests
├── eslint.config.mjs    # ESLint config
└── vite.config.ts       # Vite config
```

---

## ⚙️ Configuration Notes

### Semantic Release

This template includes a `.releaserc` configuration.

- It automatically bumps version numbers based on commit messages.
- It generates a `CHANGELOG.md`.
- **To enable:** Ensure you have `GITHUB_TOKEN` or a PAT configured in your GitHub Actions secrets if you have branch protections.

### IDE Setup (VS Code)

Recommended extensions are pre-configured in `.vscode/extensions.json`.

- **Vue - Official** (Volar)
- **Tailwind CSS IntelliSense**
- **ESLint** (Disable _Vetur_ to avoid conflicts)

---

## 🤝 Contributing

1.  **Fork** the repository.
2.  **Create** a feature branch (`git checkout -b feat/awesome-feature`).
3.  **Commit** using [Conventional Commits](https://www.conventionalcommits.org/) (`feat: add awesome feature`).
4.  **Push** to the branch.
5.  **Open** a Pull Request.

---

## 📄 License

[MIT](LICENSE)
