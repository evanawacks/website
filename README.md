# Evan Wacks — personal website

Source for Evan's personal site, a single page with two modes ("Pro" and "Fun"). It is hosted for free on **GitHub Pages** from this repo:

- Repo: https://github.com/evanawacks/website
- Live site: **https://evanawacks.github.io/website/**

_Built with Claude, designed by me. Fun copy all written myself. I used AI assistance for my professional copy, but reviewed and revised it all._

The local copy of this repo lives at `~/Desktop/website`. Changes made there are committed and pushed to GitHub (with GitHub Desktop or the terminal), and GitHub Pages republishes the site automatically after each push.

## Deploying on Netlify

The repo also works on Netlify. `netlify.toml` holds the build settings (build command `npm run build:site`, publish folder `dist-site`, Node 22), so Netlify fills them in on its own.

- **Connected to GitHub:** in Netlify, choose *Add new site → Import an existing project*, pick `evanawacks/website`, and deploy. Netlify rebuilds after every push.
- **Drag and drop:** run `npm ci && npm run build:site` locally, then drag the `dist-site` folder onto https://app.netlify.com/drop.
