import { initRouter } from './router.js';
import { Home } from './pages/Home.js';
import { Diseases } from './pages/Diseases.js';
import { DiseaseDetail } from './pages/DiseaseDetail.js';
import { Calculators } from './pages/Calculators.js';
import { Articles } from './pages/Articles.js';
import { SymptomChecker } from './pages/SymptomChecker.js';
import { Auth } from './pages/Auth.js';
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';

// Global Styles
import './styles/style.css';

const routes = {
  '/': Home,
  '/diseases': Diseases,
  '/diseases/:id': DiseaseDetail,
  '/calculators': Calculators,
  '/articles': Articles,
  '/checker': SymptomChecker,
  '/login': () => Auth('login'),
  '/signup': () => Auth('signup'),
  '404': () => '<div class="container"><h1>404 Page Not Found</h1><a href="#/">Go Home</a></div>'
};

const initApp = () => {
  const body = document.body;

  // Layout mounting
  const navbarElement = document.createElement('div');
  navbarElement.innerHTML = Navbar();
  body.prepend(navbarElement);

  const footerElement = document.createElement('div');
  footerElement.innerHTML = Footer();
  body.appendChild(footerElement);

  // Initialize Router
  initRouter(routes);

  // Mobile Menu Logic
  document.addEventListener('click', (e) => {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && menuBtn.contains(e.target)) {
      navLinks.classList.toggle('active');
    } else if (navLinks && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });

  // Dark Mode Toggle Logic
  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Sync theme
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
};

initApp();
