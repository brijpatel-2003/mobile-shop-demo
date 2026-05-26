# City Gold Mobile Store — Website

> Mehsana's most premium mobile shop website. Built with HTML5, CSS3 (glassmorphism + animations) and Vanilla JS + GSAP.

---

## 📁 File Structure

```
/
├── index.html      ← Main page (full SEO meta, Schema.org, all sections)
├── style.css       ← All styles (dark theme, glassmorphism, animations, responsive)
├── script.js       ← JS: particles, GSAP, filters, carousel, cursor, counters
├── data.js         ← Mock inventory: 12 phones, 8 accessories, 6 reviews
├── robots.txt      ← SEO crawl directives
├── sitemap.xml     ← XML sitemap for Google/Bing
└── README.md       ← This file
```

---

## 🚀 Deploy to GitHub Pages (Step by Step)

### Step 1 — Create GitHub Repository
1. Go to [github.com](https://github.com) → **New repository**
2. Name it exactly: `citygoldmobile.github.io`  
   *(or any name — see Step 4 note)*
3. Set to **Public**
4. Do NOT initialize with README (you already have files)
5. Click **Create repository**

### Step 2 — Push your files

```bash
# Open terminal in this folder (dummy/)
git init
git add .
git commit -m "Launch City Gold Mobile Store website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/citygoldmobile.github.io.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll to **Pages** section (left sidebar)
3. Under **Source** → select `main` branch → `/ (root)` folder
4. Click **Save**
5. Your site goes live at: `https://YOUR-USERNAME.github.io/citygoldmobile.github.io/`

> **Tip:** If you name the repo `YOUR-USERNAME.github.io`, the URL becomes `https://YOUR-USERNAME.github.io/` (cleaner).

### Step 4 — Update Canonical URLs
After you know your GitHub Pages URL, update these in `index.html`:
- All `og:url`, `og:image` meta tags
- The `<link rel="canonical">` tag
- Schema.org `@id` and `url` fields
- `sitemap.xml` `<loc>` entries

---

## 🔧 Customization

### Change phone inventory
Edit `data.js` — each phone object has:
```js
{
  brand: 'Apple',
  name: 'iPhone 16 Pro Max',
  price: 189900,           // INR (no commas)
  originalPrice: 199900,
  discount: 5,             // percentage
  category: 'flagship',    // flagship | mid-range | budget
  badge: 'Best Seller',    // any text or empty string ''
  trending: true,
  gradient: 'linear-gradient(145deg, #1c1c1e, #3a3a3c)',
  specs: { ... }
}
```

### Change store phone number
Search for `919925388988` in all files and replace with your number.

### Change store address
Update in `index.html` (contact section + footer) and `data.js` Schema.org section.

---

## ✅ SEO Checklist

- [x] Title tag with primary keyword
- [x] Meta description (155 chars)
- [x] Open Graph tags (Facebook/WhatsApp sharing)
- [x] Twitter Card tags
- [x] Schema.org `MobilePhoneStore` structured data
- [x] Schema.org `AggregateRating`
- [x] Canonical URL
- [x] Geo meta tags (lat/lon)
- [x] robots.txt
- [x] sitemap.xml
- [x] Semantic HTML (headings hierarchy, ARIA labels)
- [x] `aria-label` on all interactive elements
- [x] `loading="lazy"` on iframe map
- [x] `rel="noopener noreferrer"` on external links
- [x] `preconnect` for fonts and CDN
- [x] `prefers-reduced-motion` CSS support

---

## 🎨 Features

| Feature | Implementation |
|---|---|
| Loading screen | CSS progress bar, JS interval |
| Canvas particles | Native Canvas API (no library) |
| Custom cursor | CSS + rAF smooth follower |
| 3D phone hero | CSS `perspective` + `rotateY` |
| Floating spec badges | CSS keyframe animation |
| Navbar shrink | `window.scroll` + class toggle |
| Phone filter | JS `data-*` attribute matching |
| Live search | Debounced `input` event |
| Reviews carousel | `scrollTo` + auto-timer |
| Animated counters | IntersectionObserver (GSAP fallback) |
| GSAP scroll reveals | ScrollTrigger + custom `reveal` class |
| Magnetic buttons | `mousemove` translate |
| Notification popup | Timed CSS slide-in |
| Scroll progress bar | CSS `width` from scroll position |
| Infinite marquee | CSS `@keyframes marquee` |
| Dark map embed | CSS `filter: invert hue-rotate` |

---

## 📱 Browser Support

Chrome 90+, Firefox 88+, Safari 14+, Edge 90+, Mobile Chrome/Safari

---

## 📞 Store Contact

**City Gold Mobile Store**  
Modhera Cross Road, Opposite New ST Stand  
Mehsana Industrial Estate, Mehsana, Gujarat – 384002  
📞 +91 99253 88988
