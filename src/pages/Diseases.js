const diseasesData = [
    {
        id: 'heart-disease',
        name: 'Heart Disease',
        category: 'Cardiovascular',
        description: 'A range of conditions that affect your heart.',
        causes: 'Smoking, high blood pressure, high cholesterol, diabetes, obesity.',
        symptoms: 'Chest pain, shortness of breath, pain in neck/jaw/throat, numbness in legs/arms.',
        prevention: 'Regular exercise, healthy diet, stress management, quit smoking.',
        treatment: 'Lifestyle changes, medications, medical procedures, surgery.'
    },
    {
        id: 'diabetes',
        name: 'Diabetes',
        category: 'Endocrine',
        description: 'A disease that occurs when your blood glucose is too high.',
        causes: 'Insulin resistance, genetic factors, autoimmune destruction of beta cells.',
        symptoms: 'Increased thirst, frequent urination, extreme hunger, unexplained weight loss.',
        prevention: 'Maintain healthy weight, be physically active, eat healthy plant foods.',
        treatment: 'Blood sugar monitoring, insulin, oral medications, healthy eating.'
    }
];

export const Diseases = () => {
    return `
    <div class="container" style="padding-top: 4rem;">
      <div class="section-header" style="margin-bottom: 3rem;">
        <h1 class="font-outfit" style="font-size: 3rem; margin-bottom: 1rem;">Disease Information Library</h1>
        <p style="color: var(--text-muted); font-size: 1.2rem;">Comprehensive guides to understanding and managing health conditions.</p>
      </div>

      <div class="search-bar glass-card" style="padding: 1rem 2rem; margin-bottom: 3rem; display: flex; gap: 1rem; align-items: center;">
        <i class="fas fa-search" style="color: var(--primary);"></i>
        <input type="text" placeholder="Search diseases, symptoms, or categories..." style="flex: 1; border: none; background: transparent; font-size: 1.1rem; color: var(--text); outline: none;">
      </div>

      <div class="diseases-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem;">
        ${diseasesData.map(d => `
          <div class="glass-card disease-card" style="padding: 2rem;">
            <span style="background: var(--primary); color: white; padding: 0.25rem 0.75rem; border-radius: 2rem; font-size: 0.8rem; font-weight: 600;">${d.category}</span>
            <h3 style="margin: 1rem 0;">${d.name}</h3>
            <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${d.description}</p>
            <a href="#/diseases/${d.id}" class="btn btn-outline" style="width: 100%; justify-content: center;">View Full Guide</a>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};
