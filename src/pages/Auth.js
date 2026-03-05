export const Auth = (mode = 'login') => {
    return `
    <div class="container" style="padding-top: 6rem; padding-bottom: 6rem; display: flex; justify-content: center;">
      <div class="glass-card" style="width: 100%; max-width: 450px; padding: 3rem;">
        <div style="text-align: center; margin-bottom: 2rem;">
          <h2 class="font-outfit" style="font-size: 2.5rem; margin-bottom: 0.5rem;">${mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
          <p style="color: var(--text-muted);">${mode === 'login' ? 'Enter your details to access your health dashboard' : 'Start your journey to better health today'}</p>
        </div>
        
        <form style="display: flex; flex-direction: column; gap: 1.5rem;">
          ${mode === 'signup' ? `
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Full Name</label>
            <input type="text" class="glass-card" style="width: 100%; padding: 1rem; border: none;" placeholder="John Doe">
          </div>
          ` : ''}
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Email Address</label>
            <input type="email" class="glass-card" style="width: 100%; padding: 1rem; border: none;" placeholder="name@example.com">
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600;">Password</label>
            <input type="password" class="glass-card" style="width: 100%; padding: 1rem; border: none;" placeholder="••••••••">
          </div>
          
          <button type="submit" class="btn btn-primary" style="width: 100%; padding: 1rem; margin-top: 1rem;">
            ${mode === 'login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
        
        <div style="text-align: center; margin-top: 2rem; color: var(--text-muted);">
          <p>${mode === 'login' ? "Don't have an account?" : "Already have an account?"} 
            <a href="#/${mode === 'login' ? 'signup' : 'login'}" style="color: var(--primary); font-weight: 600; text-decoration: none;">
              ${mode === 'login' ? 'Sign Up' : 'Sign In'}
            </a>
          </p>
        </div>
      </div>
    </div>
  `;
};
