# Anbudan Thunnai (அன்புடன் துணை)

Website for Anbudan Thunnai, a senior companion service in Coimbatore.
Built with React + TypeScript + Vite. It builds to plain static files, so it runs on Namecheap shared hosting with no server code.

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
| HTTPS redirect, caching | `public/.htaccess` |

## Put it on GitHub

```bash
gh repo create anbudan-thunnai --private --source . --push
```

Or create an empty repo on github.com, then:

```bash
git remote add origin https://github.com/<you>/anbudan-thunnai.git
git push -u origin main
```

## Deploy to Namecheap

### Option A – automatic (recommended)

Every push to `main` builds the site and uploads it over FTP (`.github/workflows/deploy.yml`).

1. In Namecheap cPanel → **FTP Accounts**, create an account (e.g. `deploy@yourdomain.com`) with the directory set to `public_html` (or the domain's folder if it is an addon domain).
2. In GitHub → repo **Settings → Secrets and variables → Actions**, add:
   - `FTP_SERVER` – `ftp.yourdomain.com` (or the server hostname/IP shown in cPanel)
   - `FTP_USERNAME` – the full FTP username
   - `FTP_PASSWORD` – its password
3. Push to `main` (or run the workflow from the **Actions** tab). The site is live within a minute or two.

### Option B – manual upload

1. `npm run build`
2. In cPanel → **File Manager**, open `public_html`, delete the old files and upload everything inside `dist/` (including the hidden `.htaccess` – enable "Show hidden files" in File Manager settings).

### Domain and SSL

- If the domain and hosting are both at Namecheap, the domain points at hosting automatically. If not, set the domain's nameservers to `dns1.namecheaphosting.com` and `dns2.namecheaphosting.com`.
- In cPanel → **SSL/TLS Status**, run AutoSSL for the domain. `.htaccess` then redirects all visitors to `https://` and from `www.` to the bare domain.
