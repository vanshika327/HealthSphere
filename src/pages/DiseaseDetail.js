export const DiseaseDetail = (id) => {
    // Normally we would fetch this from an API, but for now we'll mock it
    const diseasesData = {
        'heart-disease': {
            name: 'Heart Disease',
            category: 'Cardiovascular',
            causes: 'Smoking, high blood pressure, high cholesterol, diabetes, obesity.',
            symptoms: 'Chest pain, shortness of breath, pain in neck/jaw/throat, numbness in legs/arms.',
            prevention: 'Regular exercise, healthy diet, stress management, quit smoking.',
            treatment: 'Lifestyle changes, medications, medical procedures, surgery.'
        },
        'diabetes': {
            name: 'Diabetes',
            category: 'Endocrine',
            causes: 'Insulin resistance, genetic factors, autoimmune destruction of beta cells.',
            symptoms: 'Increased thirst, frequent urination, extreme hunger, unexplained weight loss.',
            prevention: 'Maintain healthy weight, be physically active, eat healthy plant foods.',
            treatment: 'Blood sugar monitoring, insulin, oral medications, healthy eating.'
        }
    };

    const disease = diseasesData[id] || { name: 'Not Found', category: '-', causes: '-', symptoms: '-', prevention: '-', treatment: '-' };

    return `
    <div class="container" style="padding-top: 4rem;">
      <a href="#/diseases" class="btn btn-text" style="margin-bottom: 2rem;"><i class="fas fa-arrow-left"></i> Back to Library</a>
      
      <div class="glass-card" style="padding: 4rem;">
        <span style="background: var(--primary); color: white; padding: 0.5rem 1rem; border-radius: 2rem; font-size: 0.9rem; font-weight: 600;">${disease.category}</span>
        <h1 class="font-outfit" style="font-size: 3.5rem; margin-top: 1.5rem; margin-bottom: 2rem;">${disease.name}</h1>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem;">
          <div>
            <div style="margin-bottom: 2.5rem;">
              <h3 class="font-outfit" style="color: var(--primary); margin-bottom: 1rem;"><i class="fas fa-microscope" style="margin-right: 0.5rem;"></i> Causes</h3>
              <p>${disease.causes}</p>
            </div>
            <div style="margin-bottom: 2.5rem;">
              <h3 class="font-outfit" style="color: var(--primary); margin-bottom: 1rem;"><i class="fas fa-user-md" style="margin-right: 0.5rem;"></i> Symptoms</h3>
              <p>${disease.symptoms}</p>
            </div>
          </div>
          <div>
            <div style="margin-bottom: 2.5rem;">
              <h3 class="font-outfit" style="color: var(--primary); margin-bottom: 1rem;"><i class="fas fa-shield-virus" style="margin-right: 0.5rem;"></i> Prevention</h3>
              <p>${disease.prevention}</p>
            </div>
            <div style="margin-bottom: 2.5rem;">
              <h3 class="font-outfit" style="color: var(--primary); margin-bottom: 1rem;"><i class="fas fa-pills" style="margin-right: 0.5rem;"></i> Treatment</h3>
              <p>${disease.treatment}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
