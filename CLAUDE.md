# Integrated Company Senegal — branch website

Site for the Senegal branch, INTEGRATED AFRICA COMPANY SUARL (Dakar), live at https://senegal.integrated-equipment.com/.
GitHub: `harshathnbc/senegal-website` (branch `master`).
Originally built with Google Antigravity; now maintained in Claude Code.

Business focus: industrial supply to West Africa / ECOWAS — SABIC polymers, SABIC agri-nutrients, PETROLUBE lubricants.

## Stack

Plain static site: HTML + CSS + vanilla JS. No build step, no package manager, no framework.
Open `index.html` in a browser (or any static server) to preview.

| File | Purpose |
|---|---|
| `index.html` | Single-page site. Sections are `<section id="<name>-section">`, switched by hash routing (`#home`, `#about`, `#products`, `#partners`, `#contact`). |
| `script.js` | `translations` object (EN/FR/AR), language buttons `.btn-lang-option` (`VALID_LANGS`, saved choice via `getSavedLang`), hash navigation (`navigateToSection`, `VALID_SECTIONS`), mobile menu, contact form → `mailto:` link. |
| `style.css` | All styling. Design tokens on `:root` (brand blue hue 216, gold hue 38, plus `--senegal-green`). |
| `Profile_Senegal_En.html` / `_Fr.html` / `_Ar.html` | Printable A4 profile booklets, one file per language. Print to PDF to regenerate the matching `Profile_Senegal_*.pdf`. |
| `qr_en.png`, `qr_fr.png`, `qr_ar.png` | QR codes pointing to this site's profile PDFs (not the same as the main site's). |

## Conventions

- Trilingual EN/FR/AR. Every visible string has a `data-i18n="key"` attribute and an entry in **all three** of `translations.en`, `.fr`, `.ar` in `script.js`. Arabic switches to RTL and the Cairo font (`FONT_RTL`).
- The three profile HTML files are separate copies — a content change usually has to be made in all three, then the PDFs re-exported.
- Adding a section: add the `<section id="x-section">`, nav `<li data-page="x">` (navbar, mobile menu and footer all have one), the key in `VALID_SECTIONS`, and the translations.
- Contact form has no backend; it opens the user's mail client. Note: the page shows `senegal@integrated-equipment.com`, but `script.js` sends the form to `info@integrated-equipment.com`.

## Related site: Integrated_Company (parent company)

The main company site has its own repo:
`../Integrated_Company` → https://www.integrated-equipment.com/ (`harshathnbc/integrated-company-website`, branch `main`, deployed on Vercel).

- This site's footer links to `https://www.integrated-equipment.com`. The main site has a matching "Senegal Branch / Industrial Supply" section (`#senegal-section`), currently hidden there.
- Same brand: same blue/gold tokens, Outfit/Inter/Cairo fonts, glass-card layout.
- **Shared image files are duplicated, not shared.** These are byte-identical copies in both repos — if you replace one, copy it to the other:
  `Integrated_Logo.png`, `logo_nobg.png`, `favicon.ico`, `favicon.png`, `petrolube_logo.png`, `petrolube_products.png`, `petromin_oils.png`, `sabic_logo.png`, `sabic_fertilizer.png`, `sabic_polymers.png`, `saudi_construction.png`, `senegal_branch.png`.
- `qr_en.png` / `qr_ar.png` have the same names in both repos but **different content** — never copy them across.
- Company-wide facts (addresses, phone numbers, partner brands, emails) appear on both sites; when one changes, check the other.
