# Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and certifications as an AI/ML Engineer and Full Stack Developer.

## 🚀 Features

- **Responsive Design** - Optimized for all devices
- **Modern UI/UX** - Dark theme with glassmorphism effects
- **Animated Components** - Smooth animations using Framer Motion
- **Contact Form** - Integrated with EmailJS for direct messaging
- **Dynamic Typing Effect** - Showcasing multiple roles
- **Project Showcase** - Highlighting key projects with live demos
- **Certifications Display** - Professional achievements and credentials

## 🛠️ Technologies Used

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **React Icons** - Icon components
- **React Type Animation** - Typing effect

### Backend/Services
- **EmailJS** - Contact form integration

### AI/ML Stack (Showcased)
- Python
- TensorFlow
- Scikit-learn
- Pandas
- NumPy
- Matplotlib

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Adextech2819/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

The optimized files will be in the `dist` folder.

## 📧 Contact Form Setup

This project uses EmailJS for the contact form. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service
3. Create an email template
4. Copy your Service ID, Template ID, and Public Key to the `.env` file

## 🌐 Deployment

This project is deployed on [Vercel](https://vercel.com). To deploy your own:

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel project settings
4. Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Adekunle AbdulMuheez**
- GitHub: [@Adextech2819](https://github.com/Adextech2819)
- LinkedIn: [Adekunle AbdulMuheez](https://www.linkedin.com/in/adekunle-abdulmuheez-2819adex)
- Twitter: [@a_abdulmuheez](https://x.com/a_abdulmuheez)

---

⭐ Star this repo if you find it helpful!

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
