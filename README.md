# Anbudan Thunnai (அன்புடன் துணை)

Website for Anbudan Thunnai, a senior companion service in Coimbatore.
Built with React + TypeScript + Vite. It builds to plain static files and is hosted free on GitHub Pages at https://anbudanthunai.com (domain registered at Namecheap).

Light and dark mode are built in. The site follows the visitor's system setting, and the sun/moon button in the header switches and remembers the choice.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173 with live reload
npm run build      # production build in dist/
npm run preview    # serve the dist/ build locally
```

## Where to change things

| What | File |
| --- | --- |
| Phone number, WhatsApp message, all page text | `src/content.ts` |
| Colours for light and dark mode | top of `src/styles.css` (`:root` and `[data-theme='dark']`) |
| Hero photo | `public/images/hero.jpg` (keep a portrait shape) |
| Page sections | `src/components/` – one file per section, ordered in `src/App.tsx` |
| Page title / SEO description | `index.html` |
| Custom domain | `public/CNAME` |

## Deploying

Every push to `main` builds the site and publishes it to GitHub Pages (`.github/workflows/deploy.yml`). Progress shows in the repo's **Actions** tab, and the site updates about a minute after the push.

```bash
git add -A
git commit -m "Describe the change"
git push
```

## Domain setup (one time, in Namecheap)

Namecheap → Domain List → anbudanthunai.com → **Advanced DNS** → Host Records. Delete the default parking records (`CNAME www → parkingpage.namecheap.com` and the `URL Redirect @` record), then add:

| Type | Host | Value |
| --- | --- | --- |
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `gvijay4321.github.io.` |

After DNS updates (usually 30 minutes, up to 24 hours), go to the GitHub repo → **Settings → Pages** and tick **Enforce HTTPS** once it becomes available.
