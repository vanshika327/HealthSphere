export const Calculators = () => {
    return `
    <div class="container" style="padding-top: 4rem;">
      <div class="section-header" style="text-align: center; margin-bottom: 4rem;">
        <h1 class="gradient-text font-outfit" style="font-size: 3.5rem;">Health Calculators</h1>
        <p style="color: var(--text-muted); font-size: 1.2rem;">Tools to help you track and maintain your health goals.</p>
      </div>

      <div class="calc-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 3rem;">
        <!-- BMI Calculator -->
        <div class="glass-card" style="padding: 3rem;">
          <h2 class="font-outfit" style="margin-bottom: 2rem;"><i class="fas fa-weight" style="color: var(--primary); margin-right: 1rem;"></i>BMI Calculator</h2>
          
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Height (cm)</label>
              <input type="number" id="bmi-height" class="glass-card" style="width: 100%; padding: 1rem; border: none;" placeholder="e.g. 175">
            </div>
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Weight (kg)</label>
              <input type="number" id="bmi-weight" class="glass-card" style="width: 100%; padding: 1rem; border: none;" placeholder="e.g. 70">
            </div>
            <button class="btn btn-primary" id="calc-bmi-btn" style="width: 100%; padding: 1rem; font-size: 1.1rem;">Calculate BMI</button>
            
            <div id="bmi-result" style="margin-top: 1rem; padding: 1.5rem; border-radius: 1rem; background: var(--gradient-primary); color: white; display: none;">
              <h3 style="margin-bottom: 0.5rem;">Result: <span id="bmi-value">22.5</span></h3>
              <p id="bmi-status">You are in the healthy range.</p>
            </div>
          </div>
        </div>

        <!-- Water Intake -->
        <div class="glass-card" style="padding: 3rem;">
          <h2 class="font-outfit" style="margin-bottom: 2rem;"><i class="fas fa-tint" style="color: var(--primary); margin-right: 1rem;"></i>Water Intake</h2>
          
          <div style="display: flex; flex-direction: column; gap: 1.5rem;">
            <div>
              <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Your Weight (kg)</label>
              <input type="number" id="water-weight" class="glass-card" style="width: 100%; padding: 1rem; border: none;" placeholder="e.g. 70">
            </div>
            <button class="btn btn-primary" id="calc-water-btn" style="width: 100%; padding: 1rem; font-size: 1.1rem;">Calculate Intake</button>
            
            <div id="water-result" style="margin-top: 1rem; padding: 1.5rem; border-radius: 1rem; border: 2px solid var(--primary); display: none;">
              <h3 style="margin-bottom: 0.5rem; color: var(--primary);">Daily Recommendation</h3>
              <p style="font-size: 1.5rem; font-weight: 700;"><span id="water-value">2.5</span> Liters</p>
            </div>
          </div>
        </div>
      </div>

      <script>
        // Inline logic for calculators (since we are using innerHTML, we might need to handle this in main.js or after render)
      </script>
    </div>
  `;
};
