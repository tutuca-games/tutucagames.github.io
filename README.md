# TUTUCA Games

English-language studio website for `tutuca.games`, built with React and Vite. The approved stacked logo and standalone icon are in `src/assets/`.

## Run locally

Use Node.js 22.12+ or 24+.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Publish on GitHub Pages

1. Push the source to a new repository, including `.github/workflows/pages.yml`.
2. In **Settings → Pages**, select **GitHub Actions** as the source.
3. In **Actions → Publish to GitHub Pages**, choose **Run workflow** on the default branch. The workflow deploys the compiled `dist/` directory.
4. When ready to connect the domain, enter `tutuca.games` in **Settings → Pages → Custom domain** and configure its DNS using GitHub’s instructions.

[Configuring a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
