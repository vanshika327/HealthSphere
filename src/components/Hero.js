export const Hero = () => {
  return `
    <section class="hero container">
      <div class="hero-content animate">
        <h1 class="gradient-text font-outfit">
          Your Smart Guide<br>to Better Health
        </h1>
        <p>
          Learn about diseases, nutrition, fitness, and healthy lifestyle practices with our AI-powered platform designed for your wellness.
        </p>
        <div class="hero-actions">
          <a href="#/diseases" class="btn btn-primary">
            Explore Health Guides
            <i class="fas fa-arrow-right"></i>
          </a>
          <a href="#/checker" class="btn btn-outline">
            Check Symptoms
            <i class="fas fa-stethoscope"></i>
          </a>
        </div>
      </div>
      <div class="hero-image animate" style="animation-delay: 0.2s;">
        <div class="glass-card" style="padding: 1.5rem; border-radius: 2.5rem;">
          <img src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1470&auto=format&fit=crop" alt="Health Professional">
        </div>
      </div>
    </section>
  `;
};
