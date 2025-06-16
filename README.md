# 🛒 Food Store Cart (React + TypeScript + SCSS)

This is a responsive and interactive cart page for a food-store web application. Built with **React**, **TypeScript**, and **SCSS**.

---

## ✅ Features

- 📱 Fully responsive layout (desktop & mobile)
- 💡 Subscription logic with dynamic discount handling

---

## 🧩 Tech Stack

- React
- TypeScript
- SCSS (Sass)

---

## 📁 Folder Structure

```
src/
├── assets/              # Static files
├── components/Cart/     # UI components (CartItem, Reviews, Summary, etc.)
├── features/cart/       # Business logic: types, utils, constants
├── pages/CartPage.tsx   # Main cart page
├── styles/cart.scss     # SCSS layout & responsive styling
├── App.tsx              # Entry point component
└── index.tsx            # App root
```

---

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/food-store-cart.git
cd food-store-cart
```

### 2. Install dependencies

```bash
npm install
```

> 💡 If you face a peer dependency conflict (especially with `sass`), run:

```bash
npm install sass --legacy-peer-deps
```

### 3. Run the app

```bash
npm start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Functional Requirements

- ✅ “Subscribe & save” vs “One-time” toggle
- ✅ Discount badges update based on selected duration:
  - 1 month → 26%
  - 3 months → 23%
  - 6 months (default) → 20%
  - 12 months → 15%
- ✅ Client-side only (no data persistence)
- ✅ Responsive design per Figma mobile layout
