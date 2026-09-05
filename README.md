# Prabesh Shrestha — Personal Website

A fully static personal portfolio built with plain HTML, CSS, and JavaScript. No backend, framework, database, package manager, or build step is required.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

You can also open `index.html` directly, but using a tiny local server is a better test of how the site will behave online.

## Deploy to GitHub Pages

1. Create a new GitHub repository, for example `prabesh-shrestha.github.io`.
2. Upload all files from this folder to the repository root.
3. Commit and push to `main`.
4. On GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select **main** and **/(root)**, then save.
7. GitHub Pages will publish the static files directly.

If the repository is named `prabesh-shrestha.github.io`, the site will use that as the root GitHub Pages site. If you use another repository name, GitHub will host it under a project path; this website uses relative URLs so it works in either case.

## Files

- `index.html` — homepage
- `styles.css` — all styling and responsive design
- `script.js` — theme toggle, mobile menu, copy-email, reveal effects
- `resume.pdf` — downloadable resume
- `projects/` — static project case-study pages
- `assets/favicon.svg` — favicon
- `.nojekyll` — tells GitHub Pages to serve the files directly

## Editing content

Search `index.html` for the section you want to change. Project pages are plain HTML inside `projects/`.

## Custom domain

If you later buy a domain, add it in **Settings → Pages → Custom domain**. GitHub can create the required `CNAME` file for you.
