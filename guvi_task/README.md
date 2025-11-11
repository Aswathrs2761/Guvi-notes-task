# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Quick Notes

A lightweight web application for quickly creating, editing, and organizing short notes. Designed to be simple, fast, and easy to use for everyday note-taking tasks.

## Features
- Create, edit, and delete notes
- Search and filter notes (by title or content)
- Optional tags or categories
- Autosave to browser storage (localStorage) or sync with a backend if configured
- Responsive UI for desktop and mobile

## Getting Started

### Prerequisites
- If the app is a static site: a modern browser
- If the app uses a Node-based toolchain (React/Vue/Next/Express): Node.js and npm/yarn

### Run (static)
1. Open `index.html` in your browser.

### Run (Node/React)
1. Install dependencies:
    - npm: `npm install`
    - yarn: `yarn`
2. Start dev server:
    - npm: `npm start`
    - yarn: `yarn start`

## Usage
- Click the "New Note" button to create a note.
- Edit the title and content inline.
- Use the search box to find notes instantly.
- Notes are saved automatically; use export/import (if available) to back up data.

## Project Structure (example)
- index.html — main entry (static)
- src/ — source code (JS/CSS/React components)
- styles/ — CSS or SCSS
- README.md — this file

## Customization
- Swap localStorage for a remote API by replacing persistence layer code.
- Add authentication or encryption for private notes.
- Integrate tags, pinning, or rich-text editing as needed.

## Contributing
- Fork the repo, create a feature branch, open a pull request.
- Keep changes small and focused; include tests or demo steps when relevant.

## License


Copyright (c) 2025 Aswath

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.