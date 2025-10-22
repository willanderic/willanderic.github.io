# Wedding site (Vite + React)

This small single-page site is scaffolded with Vite + React and builds to the `docs/` folder so it can be hosted easily on GitHub Pages.

How to run locally:

1. Install dependencies

   npm install

2. Start dev server

   npm run dev

Build for production (outputs to `docs/`):

  npm run build

Deploy to GitHub Pages:

- Commit the `docs/` folder to your repository (GitHub Pages can serve from `docs/` for the repository site), or configure Pages to use the `gh-pages` branch and push the built output there.

How to add your images and PDFs:

- Put header image at `assets/couple.jpg` (this repo contains a placeholder path — add your photo there).
- Put PDFs you want to link in `assets/uploads/` and update `src/components/FileLinks.jsx` if you want different names.
