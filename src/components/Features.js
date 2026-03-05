export const Features = () => {
  const features = [
    { icon: 'fa-book-medical', title: 'Disease Library', desc: 'Comprehensive guide to health conditions and their management.' },
    { icon: 'fa-robot', title: 'AI Symptom Checker', desc: 'Identify potential issues with our advanced AI diagnostic assistant.' },
    { icon: 'fa-apple-whole', title: 'Nutrition Guides', desc: 'Eat healthy with expert advice and customized meal planning.' },
    { icon: 'fa-running', title: 'Fitness Tips', desc: 'Workout plans tailored for every fitness goal and level.' },
    { icon: 'fa-calculator', title: 'Health Calculators', desc: 'Track your vital health metrics with professional tools.' },
    { icon: 'fa-lightbulb', title: 'Daily Health Tips', desc: 'Small changes for a better life delivered to you every day.' }
  ];

  return `
    <section class="section container">
      <div class="section-header animate">
        <h2 class="font-outfit">Our Core Features</h2>
        <p style="color: var(--text-muted); font-size: 1.2rem;">Everything you need to manage your health in one place, powered by smart technology.</p>
      </div>
      <div class="grid grid-cols-3 animate" style="animation-delay: 0.3s;">
        ${features.map(f => `
          <div class="glass-card feature-card">
            <div style="width: 70px; height: 70px; background: var(--gradient-primary); color: white; display: flex; align-items: center; justify-content: center; border-radius: 1.25rem; font-size: 1.75rem; margin-bottom: 2rem;">
              <i class="fas ${f.icon}"></i>
            </div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">${f.title}</h3>
            <p style="color: var(--text-muted);">${f.desc}</p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};
