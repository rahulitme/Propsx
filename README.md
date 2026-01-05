# PopX Mobile Interface

A modern, responsive mobile-first web application built with React and Vite. This project features user authentication flows including welcome screen, login, sign-up, and account settings pages.

## 🚀 Live Demo

Visit the live application: [https://rahulitme.github.io/Propsx/](https://rahulitme.github.io/Propsx/)

## ✨ Features

- **Welcome Screen** - Attractive landing page with call-to-action buttons
- **User Login** - Email and password authentication form
- **Sign Up** - Complete registration form with validation
  - Full name input
  - Phone number field
  - Email address
  - Password field
  - Company name
  - Agency status (Yes/No radio buttons)
- **Account Settings** - User profile display with avatar and information
- **Fully Responsive** - Mobile-first design that works on all devices
- **Modern UI** - Clean, minimalist interface with smooth transitions

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool and development server
- **CSS3** - Styling with responsive design
- **GitHub Pages** - Hosting platform

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rahulitme/Propsx.git
cd Propsx
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` directory.

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Desktop**: Full-width layout
- **Tablet** (≤768px): Optimized spacing and font sizes
- **Mobile** (≤480px): Compact layout with touch-friendly controls

## 🎨 Project Structure

```
src/
├── App.jsx               # Main app component with routing logic
├── App.css              # Welcome screen styles
├── Login.jsx            # Login form component
├── Login.css            # Login page styles
├── CreateAccount.jsx    # Sign-up form component
├── CreateAccount.css    # Sign-up page styles
├── AccountSettings.jsx  # User profile component
├── AccountSettings.css  # Profile page styles
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## 🚀 Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions. Every push to the `main` branch triggers a new deployment.

### Deploy to Your Own GitHub Pages:

1. Fork this repository
2. Go to repository Settings → Pages
3. Under "Build and deployment", select **GitHub Actions**
4. Push to main branch to trigger deployment

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Rahul**
- GitHub: [@rahulitme](https://github.com/rahulitme)

---

Made with ❤️ using React and Vite
