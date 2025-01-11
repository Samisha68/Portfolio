# Modern Developer Portfolio

A sleek, animated developer portfolio built with Next.js, React, and Tailwind CSS. Features a dynamic UI with smooth animations, interactive components, and a professional design.


## ✨ Features

- **Modern Design**: Clean and professional interface with gradient accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Custom animations including typing effects and dynamic transitions
- **Interactive Components**: Reusable UI components with hover effects
- **Dark Theme**: Eye-friendly dark mode with cyan accents
- **Performance Optimized**: Built with performance best practices

## 🚀 Tech Stack

- [Next.js 14](https://nextjs.org/) - React Framework
- [React](https://reactjs.org/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Lucide Icons](https://lucide.dev/) - Icon Library
- [Class Variance Authority](https://cva.style/) - Component Variants
- [Radix UI](https://www.radix-ui.com/) - Headless UI Components

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Samisha/portfolio.git
   ```

2. Install dependencies:
   ```bash
   cd portfolio
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Project Structure

```
portfolio/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── lib/
│   └── utils.ts
└── public/
    └── assets/
```


## 🔧 Customization

### Colors
Main theme colors are defined in `tailwind.config.js`:
```js
colors: {
  primary: {
    cyan: "#00fff7",
    green: "#00ff95",
  },
  dark: {
    DEFAULT: "#0a1020",
    card: "#1e2a4a",
    border: "#2a3a6a",
  }
}
```

### Animations
Custom animations can be modified in the respective component files using Tailwind CSS classes or CSS modules.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev)
- [Next.js](https://nextjs.org)
