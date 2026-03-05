export const SymptomChecker = () => {
    return `
    <div class="container" style="padding-top: 4rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 4rem;">
        <h1 class="gradient-text font-outfit" style="font-size: 3.5rem;">AI Symptom Checker</h1>
        <p style="color: var(--text-muted); font-size: 1.2rem;">Describe your symptoms and our AI will help you understand possible causes.</p>
      </div>

      <div class="checker-container glass-card" style="max-width: 800px; margin: 0 auto; padding: 4rem;">
        <div id="checker-step-1">
          <h2 class="font-outfit" style="margin-bottom: 2rem;">Step 1: Basic Information</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Age</label>
              <input type="number" class="glass-card" style="width: 100%; padding: 1rem; border: none;" placeholder="e.g. 25">
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Gender</label>
              <select class="glass-card" style="width: 100%; padding: 1rem; border: none; appearance: none;">
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <button class="btn btn-primary" style="width: 100%; padding: 1rem;" onclick="document.getElementById('checker-step-1').style.display='none'; document.getElementById('checker-step-2').style.display='block';">Continue to Symptoms</button>
        </div>

        <div id="checker-step-2" style="display: none;">
          <h2 class="font-outfit" style="margin-bottom: 2rem;">Step 2: Describe Symptoms</h2>
          <textarea class="glass-card" style="width: 100%; min-height: 200px; padding: 1.5rem; border: none; margin-bottom: 2rem;" placeholder="e.g. I have a persistent headache and feel dizzy since morning..."></textarea>
          <div style="display: flex; gap: 1rem;">
            <button class="btn btn-outline" style="flex: 1;" onclick="document.getElementById('checker-step-1').style.display='block'; document.getElementById('checker-step-2').style.display='none';">Back</button>
            <button class="btn btn-primary" style="flex: 2;">Analyze Symptoms</button>
          </div>
        </div>
      </div>

      <div class="disclaimer container" style="margin-top: 3rem; text-align: center; color: var(--text-muted); font-size: 0.9rem; max-width: 600px;">
        <p><i class="fas fa-exclamation-triangle"></i> <strong>Disclaimer:</strong> This tool is for informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment.</p>
      </div>
    </div>
  `;
};
