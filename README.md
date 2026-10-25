# Anuj Momle — Portfolio

A responsive React + Vite portfolio with an animated dark interface and red, blue, and green accents. The page presents Anuj's studies, development interests, Campus Connect college project, business experience, and contact links.

## Run locally on Windows

1. Install Node.js LTS from [nodejs.org](https://nodejs.org/).
2. Extract or clone this project and open its folder in File Explorer.
3. Click the address bar, type `cmd`, and press Enter.
4. Run these commands one at a time:

   ```bat
   npm install
   npm run dev
   ```

5. Open the local URL shown in the terminal, usually `http://localhost:5173`.

To make and inspect a production build locally, run `npm run build`, then `npm run preview`.

## Publish on GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. It builds the Vite site and publishes the `dist` folder whenever code is pushed to `main`.

1. Create a GitHub repository and push this project to its `main` branch. For a personal site at `https://anuj-momle.github.io`, name the repository `ANUJ-MOMLE.github.io`; for a project site, any repository name works.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy portfolio to GitHub Pages** to finish. GitHub will show the published URL in the workflow run and Pages settings.
4. Future pushes to `main` deploy automatically.

The Vite build uses relative asset paths so it works for both personal and project Pages URLs. GitHub Pages hosts only the static frontend; no Flask or server process is required.

## Update your content

Edit `src/data.js` to update your profile text, social links, skill labels, project description, education, and highlights. Replace skill percentages with levels that accurately reflect your experience, and add public project URLs when available. The Campus Connect card currently shows a visual preview because no live project URL was provided.

## Included

- React + Vite source project
- Responsive layout and mobile navigation
- Scroll and hover motion with reduced-motion support
- About, skills, project, education and experience, highlights, and contact sections
- Accessible navigation and contact links
- GitHub Pages build and deploy workflow
