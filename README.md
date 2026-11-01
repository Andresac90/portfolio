# Andres Acevedo: Game Developer Portfolio

**Live site: https://andresac90.github.io/portfolio/**

Personal portfolio of Andres Acevedo, a game developer based in Toronto, Canada. It showcases games and simulations built with Unreal Engine, Unity and Pico-8, with gameplay videos, screenshots and links to play them on [itch.io](https://andresac90.itch.io/).

## Built with

- [React 18](https://react.dev/) + [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- Hosted on GitHub Pages
- Videos stored with [Git LFS](https://git-lfs.com/)

## Running locally

Requires Node.js and Git LFS (`brew install git-lfs && git lfs install`).

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
```

## Deploying

```bash
npm run deploy   # builds and publishes dist/ to the gh-pages branch
```

## Adding a project

Projects are defined in [`src/data/projects.js`](src/data/projects.js). Media lives in `public/assets/`:

- **Images:** WebP. Covers (`<name>-image.webp`) at most 1200px wide; screenshots (`<name>-ssN.webp`) at most 1600px wide.
- **Videos:** H.264 MP4 with `-movflags +faststart` so they stream instead of downloading fully first.
  - Full video (`<name>-video.mp4`): 720p, about 1.2 Mbps.
  - Card preview (`<name>-preview.mp4`): about 12 seconds, 640px wide, no audio, under 0.5 MB.

Example commands:

```bash
cwebp -q 80 -resize 1600 0 screenshot.png -o public/assets/images/mygame-ss1.webp

ffmpeg -i gameplay.mp4 -vf "scale=1280:-2,fps=30" -c:v libx264 -crf 26 \
  -maxrate 1200k -bufsize 2400k -c:a aac -b:a 96k -movflags +faststart \
  public/assets/videos/mygame-video.mp4

ffmpeg -ss 10 -t 12 -i gameplay.mp4 -an -vf "scale=640:-2,fps=24" -c:v libx264 \
  -crf 30 -movflags +faststart public/assets/videos/mygame-preview.mp4
```

## Contact

- [LinkedIn](https://www.linkedin.com/in/andresacep/)
- [itch.io](https://andresac90.itch.io/)
