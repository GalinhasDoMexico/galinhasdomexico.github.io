# Website Changelog

> **Note:** This changelog does not include minor updates.

<sub>The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/). This changelog follows a similar format.<sub>

---

# [0.2.0-remake] - 2026-02-03
## Added
- [Privacy Policy](/us/terms/privacy "Privacy Policy").
- Settings sidebar.
- Theme options: **Light Theme** / **Dark Theme**.
- Footer with basic information.

## Changed
- **Domain**: from **[https://galinhasdomexico.github.io/](https://galinhasdomexico.github.io/ "GitHub.io domain")** to **[https://cofm.site](https://cofm.site "Current domain")**
- **License**: changed from **MIT License** to [**GNU General Public License**](https://www.gnu.org/licenses/gpl-3.0.en.html "GNU General Public License")
- **Navigation:** reverted to using HTML pages (e.g., `/br/`, `/us/`) instead of hashes.
- **Translation:** migrated from **Query Parameter-Based Translation** with **Data Attribute Translation System** to **URL Path-Based Translation**.

## Removed
- Old translation system (Query Parameter-Based Translation with Data Attribute Translation System).
- Gallery search page (`/us/gallery`).
- "Camila" avatar (homepage image).

---

# [0.1.0-remake] - 2025-02-19
## Added
- "Camila" avatar (homepage image).
- `gallery.json` — gallery search data.
- `translations.json` — translation files.

## Changed
- Site completely rebuilt with a more minimal layout.
- Section navigation using hashes (e.g., `/#home`, `/#changelog/website`).
- **Translation:** switched from URL path-based to **Query Parameter-Based Translation** with **Data Attribute Translation System**; translations stored in `localStorage`.
- **Search:** support for multiple tags simultaneously; available at `/#gallery/`.
- Mobile menu now covers the full screen.
- **Optimizations:** lazy-loading images and a page loading system.

## Removed
- Footer.
- Some gallery images.

---