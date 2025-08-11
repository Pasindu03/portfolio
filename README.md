

---

# 🌟 Portfolio - Pasindu Yapa

A tailor-made personal portfolio application built using **Next.js** with **TypeScript**, **Tailwind CSS**, and **Google Fonts**.  
This project showcases my skills, projects, and achievements in a clean, modern, and responsive UI.

---

## 📜 Project Overview

This portfolio website is designed to provide a seamless browsing experience, using **Next.js App Router** for performance and **Inter** font for a professional, modern look.

**Features:**
- ⚡ **Next.js 13+ App Router**
- 🎨 **Tailwind CSS** for styling
- 🌐 **SEO optimized** with `Metadata`
- 🖋 **Google Fonts (Inter)** for typography
- 📱 Fully responsive design

---

## 🗂 Project Structure

````
root/
│
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout file
│   ├── page.tsx             # Home page
│   └── ...other pages
│
├── public/                  # Public assets
├── package.json
└── README.md
````

---

## ⚙️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/portfolio-pasindu-yapa.git
   cd portfolio-pasindu-yapa
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   ```
   http://localhost:3000
   ```

---

## 🖼 Root Layout Code

```typescript
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Pasindu Yapa',
  description: 'A Tailor Made Portfolio Application of Pasindu Yapa',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

---

## 🚀 Technologies Used

* **[Next.js](https://nextjs.org/)**
* **[TypeScript](https://www.typescriptlang.org/)**
* **[Tailwind CSS](https://tailwindcss.com/)**
* **[Google Fonts - Inter](https://fonts.google.com/specimen/Inter)**

---

## 📄 License

This project is licensed under the MIT License.
Feel free to use and customize it for your own portfolio.

---

## 📬 Contact

👤 **Pasindu Yapa**
📧 [your-email@example.com](mailto:your-email@example.com)
🌐 [Your Website/Portfolio Link](https://yourwebsite.com)

---
If you want, I can **add GitHub badges, screenshots, and a live demo link** so it looks even more attractive when someone visits your repository. That would make it stand out a lot more.
```
