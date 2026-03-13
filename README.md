# 🚀 The Clean Stack: Lit + Signals Todo

A high-performance, boilerplate-free Todo application built during the "Great React Divorce." This project demonstrates how to build modern web applications using native Web Components, fine-grained reactivity, and zero heavy frameworks.

## 🛠 The Tech Stack
* **[Lit](https://lit.dev/):** Lightweight web components with a tiny footprint.
* **[@preact/signals-core](https://preactjs.com/guide/v10/signals/):** Fine-grained state management that updates the DOM directly.
* **[Vite](https://vitejs.dev/):** Lightning-fast build tool and dev server.
* **[@lit-labs/router](https://github.com/lit/lit/tree/main/packages/router):** Native-feeling client-side routing.

## 🏗 Key Features
- **Zero-Virtual DOM:** Updates happen exactly where the data changes.
- **Shadow DOM Encapsulation:** Styles are scoped and won't leak.
- **Keyboard Shortcuts:** Full 'Enter' to submit support.
- **GitHub Actions CI/CD:** Auto-deploys to GitHub Pages on every push.

## 🚀 Getting Started

### 1. Clone & Install
```bash
git clone [https://github.com/Leboroz/my-lit-todo.git](https://github.com/Leboroz/my-lit-todo.git)
cd my-lit-todo
npm install
