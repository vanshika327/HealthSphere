export const Topics = () => {
  const topics = [
    { title: 'Heart Health', img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=1470&auto=format&fit=crop', color: '#ef4444' },
    { title: 'Diabetes Care', img: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=1374&auto=format&fit=crop', color: '#3b82f6' },
    { title: 'Mental Health', img: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?q=80&w=1471&auto=format&fit=crop', color: '#8b5cf6' },
    { title: 'Weight Loss', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop', color: '#10b981' },
    { title: 'Immunity Boost', img: 'https://images.unsplash.com/photo-1540432797114-187727afd19b?q=80&w=1470&auto=format&fit=crop', color: '#f59e0b' },
    { title: 'Healthy Aging', img: 'https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&w=1470&auto=format&fit=crop', color: '#ec4899' }
  ];

  return `
    <section class="section container">
      <div class="section-header animate">
        <h2 class="font-outfit">Popular Health Topics</h2>
        <p style="color: var(--text-muted); font-size: 1.2rem;">Explore our most visited categories and deep-dive into expert knowledge.</p>
      </div>
      <div class="grid grid-cols-3 animate" style="animation-delay: 0.4s;">
        ${topics.map(t => `
          <div class="glass-card topic-card">
            <img src="${t.img}" alt="${t.title}">
            <div class="topic-overlay">
              <h3 style="font-size: 1.75rem; margin-bottom: 0.75rem;">${t.title}</h3>
              <a href="#/diseases" class="btn-text" style="color: white; text-decoration: none; font-weight: 600; display: inline-flex; align-items: center; gap: 0.5rem;">
                Read More <i class="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};
