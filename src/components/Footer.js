export const Footer = () => {
    return `
    <footer class="footer">
      <div class="container footer-grid">
        <div class="footer-info">
          <a href="#/" class="logo">
            <i class="fas fa-heartbeat"></i>
            <span>HealthSphere</span>
          </a>
          <p>Your smart guide to better health and wellness.</p>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        
        <div class="footer-links">
          <h4>Platform</h4>
          <a href="#/diseases">Diseases</a>
          <a href="#/nutrition">Nutrition</a>
          <a href="#/fitness">Fitness</a>
        </div>
        
        <div class="footer-links">
          <h4>Resources</h4>
          <a href="#/articles">Articles</a>
          <a href="#/calculators">Calculators</a>
          <a href="#">Daily Tips</a>
        </div>
        
        <div class="footer-links">
          <h4>Company</h4>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div class="footer-bottom container">
        <p>&copy; 2026 HealthSphere. All rights reserved.</p>
      </div>
    </footer>
  `;
};
