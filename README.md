# Balram Mahato - Portfolio

React + Vite portfolio. Dark theme by default with a light/dark toggle.

## Run locally

```bash
npm install
npm run dev
```

## Edit your content

Everything (about text, education, skills, projects, links) is in `src/data.js`.
To show a "Live" link on a project, add `live: "https://your-link.vercel.app"` to it.

## Change your photo

The hero photo is `public/balram.jpg`. Replace it with another portrait (around 760px wide, under 150 KB) using the same name.

## Add your resume

Put your PDF in the `public/` folder with exactly this name:

```
public/Balram_Mahato_Resume.pdf
```

The "Download resume" buttons will then work.

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. On vercel.com choose **Add New > Project** and import the repository.
3. Framework preset: **Vite** (detected automatically). Build command `npm run build`, output directory `dist`.
4. Click **Deploy**.

This portfolio is a static frontend, so it does not need Render. Use Render only for backend projects such as SBSTUBEBACKEND.
