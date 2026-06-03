# Vantix Studio — Portfolio Website

A fully responsive React portfolio website for a digital agency/freelance team.

---

## Prerequisites
- **Node.js** v16+ (https://nodejs.org/)
- **npm** v8+ (comes with Node.js)

---

## Installation & Setup

### Step 1 — Enter the project folder
```bash
cd vantix-studio
```

### Step 2 — Install dependencies
```bash
npm install
```

### Step 3 — Start the dev server
```bash
npm start
```
Opens at **http://localhost:3000**

---

## Build for Production
```bash
npm run build
```
Output in `/build` folder — ready for any static host.

---

## Deploy

### Vercel (recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag /build folder to netlify.com/drop
```

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx / .css
│   └── Footer.jsx / .css
├── sections/
│   ├── Hero.jsx / .css
│   ├── Services.jsx / .css
│   ├── WhyUs.jsx / .css
│   ├── Process.jsx / .css
│   ├── Portfolio.jsx / .css
│   ├── Team.jsx / .css
│   ├── Testimonials.jsx / .css
│   └── CTA.jsx / .css
├── App.js
└── index.css   ← Global styles + CSS variables
```

---

## Customization

### Colors — edit `src/index.css`:
```css
:root {
  --primary: #6C3EF6;
  --accent:  #22D3EE;
  --dark:    #0A0A1A;
}
```

### Content — edit the corresponding section file in `src/sections/`

---

## Dependencies
- react 18
- react-dom 18
- lucide-react (icons)
