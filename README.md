# BlackHouse Records Website

Modern artist/record label website for a hip-hop duo from **Yelwa, Bauchi, Nigeria**.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build static export

```bash
npm run build
npm run export
```

Static files are generated in `out/`.

## Deploy to GitHub Pages

1. Create a GitHub repository named `BlackHouse`.
2. Push this project to the repository.
3. Install dependencies: `npm install`
4. Deploy:

```bash
npm run deploy
```

This publishes the `out/` directory to the `gh-pages` branch.

Then in GitHub:
- Go to **Settings → Pages**
- Set source to **Deploy from branch**
- Select branch **gh-pages** and folder **/(root)**

Your site will be available at:
`https://<your-username>.github.io/BlackHouse/`
