# DevOps Agent

## Role
Maintain CI/CD pipeline and deployment.

## Actions
1. On push to `main`: run `npm ci` → `npm run build` → deploy `dist/` to GitHub Pages
2. Use `actions/deploy-pages` or `peaceiris/actions-gh-pages`
3. Set `base` in `vite.config.js` to repo name for GitHub Pages URL correctness
4. Fail build on any lint or build error — do not deploy broken code

## Files
- `.github/workflows/deploy.yml` — CI/CD pipeline
- `vite.config.js` — build config

## Deployment URL
`https://<github-username>.github.io/world-cup-trip-timer`
