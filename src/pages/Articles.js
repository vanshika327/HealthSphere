export const Articles = () => {
  const articles = [
    { title: '10 Tips for Heart Health', category: 'Fitness', date: 'Mar 5, 2026', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop' },
    { title: 'The Ultimate Nutrition Guide', category: 'Nutrition', date: 'Mar 4, 2026', img: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1332&auto=format&fit=crop' },
    { title: 'Managing Stress Naturally', category: 'Mental Health', date: 'Mar 3, 2026', img: 'https://images.unsplash.com/photo-1474418397713-7ded81d07ec2?q=80&w=1454&auto=format&fit=crop' }
  ];

  return `
    <div class="container section">
      <h1 class="font-outfit animate" style="font-size: 4rem; margin-bottom: 4rem;">Health Articles</h1>
      
      <div class="filter-btns animate" style="display: flex; gap: 1rem; margin-bottom: 5rem; overflow-x: auto; padding-bottom: 1rem; animation-delay: 0.2s;">
        <button class="btn btn-primary">All Topics</button>
        <button class="btn btn-outline">Diseases</button>
        <button class="btn btn-outline">Nutrition</button>
        <button class="btn btn-outline">Fitness</button>
        <button class="btn btn-outline">Mental Health</button>
      </div>

      <div class="grid grid-cols-3 animate" style="animation-delay: 0.4s;">
        ${articles.map(a => `
          <div class="glass-card topic-card" style="height: auto;">
            <div class="card-img">
                <img src="${a.img}" alt="${a.title}">
            </div>
            <div class="card-body">
              <div style="display: flex; justify-content: space-between; margin-bottom: 1.5rem; font-size: 0.9rem;">
                <span style="color: var(--primary); font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">${a.category}</span>
                <span style="color: var(--text-muted);">${a.date}</span>
              </div>
              <h3 style="font-size: 1.5rem; margin-bottom: 2rem;">${a.title}</h3>
              <a href="#" class="btn btn-outline" style="width: 100%; justify-content: center;">Read Article</a>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};
