export const Navbar = () => {
  return `
    <nav class="navbar glass-card">
      <div class="container nav-container">
        <a href="#/" class="logo">
          <i class="fas fa-heartbeat"></i>
          <span>HealthSphere</span>
        </a>
        
        <div class="nav-links">
          <a href="#/" class="nav-link">Home</a>
          <a href="#/diseases" class="nav-link">Diseases</a>
          <a href="#/nutrition" class="nav-link">Nutrition</a>
          <a href="#/fitness" class="nav-link">Fitness</a>
          <a href="#/calculators" class="nav-link">Health Tools</a>
          <a href="#/articles" class="nav-link">Articles</a>
          <div class="nav-actions">
            <a href="#/login" class="btn btn-outline login-btn">Login</a>
            <a href="#/signup" class="btn btn-primary signup-btn">Sign Up</a>
          </div>
        </div>

        <button class="mobile-menu-btn">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  `;
};
