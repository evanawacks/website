# Evan Wacks — personal website

Source for Evan's personal site, a single page with two modes ("Pro" and "Fun"). It is hosted for free on **GitHub Pages** from this repo:

- Repo: https://github.com/evanawacks/website
- Live site (once Pages is on): **https://evanawacks.github.io/website/**

The local copy of this repo lives at `~/Desktop/website`. Changes made there are committed and pushed to GitHub (with GitHub Desktop or the terminal), and GitHub Pages republishes the site automatically after each push.

---

## What's in here

| Path | What it is |
|---|---|
| `index.html` | **The live website.** A self-contained file (all images, fonts, audio and code are bundled inside), so it's the only file GitHub Pages needs. |
| `design_handoff_evan_wacks_site/` | The design handoff: the source prototype (`Evan Wacks.dc.html`), original photos/audio, and a detailed spec in its own `README.md`. Kept for reference and for a future rebuild; the live site doesn't load anything from here. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is (no Jekyll processing). |
| `.gitignore` | Keeps macOS junk like `.DS_Store` out of the repo. |

---

## 1. Preview the site on your computer

Easiest: double-click `index.html` and it opens in your browser.

If something (like the audio player) doesn't behave when opened as a file, run a tiny local server instead. In Terminal:

```bash
cd ~/Desktop/website
python3 -m http.server 8000
```

Then open http://localhost:8000. Press `Ctrl + C` in Terminal to stop it.

---

## 2. Turn on GitHub Pages (one-time setup)

1. Go to https://github.com/evanawacks/website and sign in.
2. Click **Settings** (top of the repo) → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main`, folder `/ (root)`, then click **Save**.
4. Wait 1–2 minutes and refresh the Pages settings page. A banner appears: *"Your site is live at https://evanawacks.github.io/website/"*.
5. You can watch each deploy under the repo's **Actions** tab ("pages build and deployment"). A green check means it's live.

> **Heads-up:** GitHub Pages is free only for **public** repos on a free GitHub plan. If the repo is private, either make it public (Settings → General → Danger Zone → Change visibility) or upgrade to GitHub Pro.

---

## 3. Update the site

Every push to `main` republishes the site in about a minute.

**With GitHub Desktop**
1. Edit/replace files in `~/Desktop/website` (e.g. drop in a new `index.html`).
2. Open GitHub Desktop. The changed files show on the left.
3. Type a short summary (e.g. "Update bio"), click **Commit to main**.
4. Click **Push origin**.

**With Terminal**
```bash
cd ~/Desktop/website
git add .
git commit -m "Update bio"
git push
```

If a change doesn't show up, hard-refresh the page (`Cmd + Shift + R`). Browsers cache aggressively.

---

## 4. (Optional) Use a custom domain from GoDaddy

1. **GitHub:** Settings → Pages → **Custom domain** → enter your domain (e.g. `evanwacks.com`) → **Save**. This commits a `CNAME` file to the repo. Pull it down afterwards (GitHub Desktop → **Fetch origin** → **Pull**, or `git pull`).
2. **GoDaddy:** My Products → your domain → **DNS** → Manage DNS. Delete any existing `A` record for `@` (and GoDaddy's "Parked" record), then add:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |
   | CNAME | www | evanawacks.github.io |

3. DNS can take from a few minutes up to 24 hours. Once GitHub's Pages settings show the DNS check passing, tick **Enforce HTTPS**.

With a custom domain, the site lives at the root of the domain (e.g. `https://evanwacks.com/`) instead of `/website/`.

---

## Notes and next steps

- `index.html` is about **20 MB** because the photos inside it aren't compressed, so first load is slow on phones. The handoff README (`design_handoff_evan_wacks_site/README.md`) describes rebuilding it as a lean static site (Vite or Astro) with compressed WebP images. If you do that, switch Pages to **Source: GitHub Actions** and deploy the build output (`dist/`).
- GitHub warns on files over 50 MB and blocks files over 100 MB, so keep individual assets under that.
