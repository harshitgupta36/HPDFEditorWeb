# TinyGenius website

Static site for **lakvanta.com/tinygenius/** (or any host).

## Pages

| URL path | File |
|----------|------|
| `/tinygenius/` | `index.html` |
| `/tinygenius/privacy` | `privacy.html` (also `privacy/index.html` redirects) |
| `/tinygenius/terms` | `terms.html` (also `terms/index.html` redirects) |

## Deploy to lakvanta.com

1. Upload the entire `tinygenius` folder to your server under `public_html/tinygenius/` (or equivalent).
2. Upload `.htaccess` so `/privacy` and `/terms` work (see file in repo).
3. **Local preview:** open `privacy.html` and `terms.html` directly (Chrome `file://` folders show a file list, not the page).
4. Test:
   - https://lakvanta.com/tinygenius/
   - https://lakvanta.com/tinygenius/privacy
   - https://lakvanta.com/tinygenius/terms

## Files

- `css/site.css` — shared styles
- `js/site.js` — mobile menu
- `logo.png` — app icon
- `images/screens/` — App Store screenshots from `ssForSub` (optimized `.jpg`)
- `index.html` — landing page

## App Store

Use in App Store Connect:

- Privacy: `https://lakvanta.com/tinygenius/privacy`
- Terms: `https://lakvanta.com/tinygenius/terms`

**iOS (live):** https://apps.apple.com/us/app/tiny-genius-hub/id6772540874  
**Android:** Coming soon (shown on site)
