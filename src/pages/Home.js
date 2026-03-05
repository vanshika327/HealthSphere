import { Hero } from '../components/Hero.js';
import { Features } from '../components/Features.js';
import { Topics } from '../components/Topics.js';

export const Home = () => {
    return `
    <main class="home-page">
      ${Hero()}
      ${Features()}
      ${Topics()}
      
      <section class="daily-tip container" style="margin-top: 4rem;">
        <div class="glass-card" style="padding: 3rem; background: var(--gradient-primary); color: white; border: none; text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1rem;"><i class="fas fa-lightbulb"></i></div>
          <h2 class="font-outfit" style="margin-bottom: 1rem;">Daily Health Tip</h2>
          <p style="font-size: 1.25rem; margin-bottom: 1.5rem; opacity: 0.9;">"Drinking water first thing in the morning boosts your metabolism and keeps you hydrated throughout the day."</p>
          <div style="display: flex; justify-content: center; gap: 1rem;">
             <span style="font-weight: 600; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 2rem;">Current Streak: 5 Days 🔥</span>
          </div>
        </div>
      </section>
    </main>
  `;
};
