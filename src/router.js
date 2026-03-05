import { DiseaseDetail } from './pages/DiseaseDetail.js';

export const initRouter = (routes) => {
  const handleRoute = () => {
    let path = window.location.hash.slice(1) || '/';

    // Simple dynamic routing
    let route = routes[path];
    let params = null;

    if (!route) {
      if (path.startsWith('/diseases/')) {
        route = routes['/diseases/:id'];
        params = path.split('/')[2];
      }
    }

    const render = route || routes['404'] || (() => '<h1>404 Not Found</h1>');

    const app = document.getElementById('app');
    app.innerHTML = '';

    // Smooth transition
    app.classList.remove('animate-fade-in');
    void app.offsetWidth;

    const content = params ? render(params) : render();
    if (typeof content === 'string') {
      app.innerHTML = content;
    } else {
      app.appendChild(content);
    }

    app.classList.add('animate-fade-in');
    window.scrollTo(0, 0);
  };

  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);

  // Initial call
  handleRoute();
};

export const navigate = (path) => {
  window.location.hash = path;
};
