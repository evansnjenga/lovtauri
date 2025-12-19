<p align="center">
  <img src="docs/images/cover.png" alt="Lovtauri Cover" width="100%">
</p>

<h1 align="center">
  <img src="assets/logo.svg" width="32" height="32" alt="Logo" align="top">
  Lovtauri
</h1>

<p align="center">
  <strong>Production-ready Tauri + React + TypeScript boilerplate</strong><br>
  <sub>macOS · Windows · Linux</sub>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#customization">Customization</a>
</p>

---

## Features

- **React 19** + **TypeScript 5.8** + **Vite 7** - Modern frontend stack with HMR
- **Tauri v2** - Lightweight, secure Rust-based desktop runtime
- **Tailwind CSS 4** + **shadcn/ui** - Beautiful, accessible UI components
- **Zustand** - Simple, scalable state management with persistence
- **React Router 7** - Client-side routing with example pages
- **Theme System** - Light/dark mode with system preference detection
- **ESLint 9** + **Prettier** - Code quality tooling with modern flat config
- **Modular Rust Commands** - Organized backend architecture

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- Rust 1.70+
- [Tauri Prerequisites](https://tauri.app/start/prerequisites/) for your platform

### Installation

```bash
git clone https://github.com/nicekate/lovtauri.git my-app
cd my-app
pnpm install
pnpm tauri dev
```

### Commands

| Command | Description |
|---------|-------------|
| `pnpm tauri dev` | Start Tauri app with hot reload |
| `pnpm tauri build` | Build production app |
| `pnpm dev` | Start Vite dev server only |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd/Ctrl + ,` | Open Settings |

## Project Structure

```
lovtauri/
├── src/
│   ├── components/         # React components
│   ├── pages/              # Route pages (home, about, settings)
│   ├── stores/             # Zustand stores
│   ├── lib/                # Utilities (cn, etc.)
│   └── globals.css         # Tailwind + theme variables
├── src-tauri/
│   ├── src/commands/       # Modular Tauri commands
│   └── tauri.conf.json     # App configuration
└── tailwind.config.ts      # Theme configuration
```

## Customization

### Update App Identity

1. `package.json` - name, description
2. `src-tauri/Cargo.toml` - package name
3. `src-tauri/tauri.conf.json` - identifier, productName

### Add Tauri Commands

```rust
// src-tauri/src/commands/my_command.rs
#[tauri::command]
pub fn my_command(param: &str) -> String {
    format!("Hello, {}", param)
}
```

Register in `commands/mod.rs` and `lib.rs`.

### Add shadcn Components

```bash
npx shadcn@latest add button
```

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, TypeScript 5.8, Vite 7 |
| Styling | Tailwind CSS 4, shadcn/ui |
| State | Zustand with persistence |
| Routing | React Router 7 |
| Backend | Tauri v2, Rust |
| Quality | ESLint 9, Prettier |

## License

MIT

---

<p align="center">
  Built with Tauri + React by <a href="https://github.com/nicekate">nicekate</a>
</p>
