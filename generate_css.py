with open('app/globals.css', 'w', encoding='utf-8') as f:
    f.write('''/* ==========================================================================
   HARINI K - FORWARD DEPLOYED ENGINEER PORTFOLIO
   LUMINOUS WHITE THEME & WEB3 AESTHETIC (PURE CSS)
   ========================================================================== */

:root {
  /* Web3 Luminous White Theme Tokens */
  --bg-primary: #fcfdfe;
  --bg-secondary: #f4f6fb;
  --bg-card: rgba(255, 255, 255, 0.82);
  --bg-card-hover: rgba(255, 255, 255, 0.95);
  --bg-glass: rgba(255, 255, 255, 0.7);
  --bg-glass-strong: rgba(255, 255, 255, 0.88);
  
  --border-subtle: rgba(226, 232, 240, 0.8);
  --border-card: rgba(210, 220, 240, 0.6);
  --border-card-hover: rgba(147, 197, 253, 0.8);
  --border-glow: rgba(99, 102, 241, 0.35);

  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;
  --text-accent: #4f46e5;
  
  /* Holographic / Web3 Glow Gradients */
  --grad-hero: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%);
  --grad-badge: linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%);
  --grad-glow: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 70%);
  --grad-card-glow: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(245,247,255,0.8) 100%);
  --grad-accent-btn: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #0284c7 100%);

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 8px 24px -4px rgba(15, 23, 42, 0.06), 0 2px 6px -1px rgba(15, 23, 42, 0.03);
  --shadow-lg: 0 20px 40px -8px rgba(15, 23, 42, 0.08), 0 8px 16px -4px rgba(99, 102, 241, 0.06);
  --shadow-glow: 0 0 35px rgba(99, 102, 241, 0.15), 0 0 15px rgba(6, 182, 212, 0.12);

  --font-sans: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-xl: 28px;
  --radius-full: 9999px;
}

/* Reset and Base Styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-family: var(--font-sans);
  color: var(--text-primary);
  background-color: var(--bg-primary);
  background-image: 
    radial-gradient(at 15% 15%, rgba(99, 102, 241, 0.07) 0px, transparent 45%),
    radial-gradient(at 85% 20%, rgba(6, 182, 212, 0.07) 0px, transparent 45%),
    radial-gradient(at 50% 80%, rgba(244, 63, 94, 0.05) 0px, transparent 50%),
    linear-gradient(to right, rgba(226, 232, 240, 0.3) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(226, 232, 240, 0.3) 1px, transparent 1px);
  background-size: 100% 100%, 100% 100%, 100% 100%, 48px 48px, 48px 48px;
  min-height: 100vh;
}

body {
  overflow-x: hidden;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* Typography Helpers */
h1, h2, h3, h4, h5, h6 {
  color: var(--text-primary);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.25;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

/* Layout Containers */
.page-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-wrapper {
  padding: 96px 0;
  position: relative;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8125rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-accent);
  background: var(--grad-badge);
  border: 1px solid rgba(99, 102, 241, 0.2);
  padding: 6px 14px;
  border-radius: var(--radius-full);
  margin-bottom: 16px;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--text-primary);
  margin-bottom: 16px;
  background: linear-gradient(135deg, #0f172a 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  max-width: 680px;
  margin: 0 auto;
}

/* Glassmorphism Cards */
.glass-card {
  background: var(--bg-card);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid var(--border-card);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: var(--shadow-sm);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  overflow: hidden;
}

.glass-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.4), rgba(6, 182, 212, 0.4), transparent);
  opacity: 0;
  transition: opacity 0.35s ease;
}

.glass-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-card-hover);
  box-shadow: var(--shadow-lg), var(--shadow-glow);
  transform: translateY(-4px);
}

.glass-card:hover::before {
  opacity: 1;
}

/* Buttons */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--grad-accent-btn);
  color: #ffffff;
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 12px 24px;
  border-radius: var(--radius-full);
  box-shadow: 0 4px 14px rgba(79, 70, 229, 0.3);
  transition: all 0.25s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.45);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.9);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.9375rem;
  padding: 12px 24px;
  border-radius: var(--radius-full);
  border: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-sm);
  transition: all 0.25s ease;
}

.btn-secondary:hover {
  background: #ffffff;
  border-color: var(--border-glow);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* Animations */
@keyframes pulseGlow {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
}

@keyframes floatSlow {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

@keyframes shimmerText {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
  display: inline-block;
  animation: pulseGlow 2s infinite ease-in-out;
}

.text-gradient {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #06b6d4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shimmerText 6s ease infinite;
}

/* Scroll Animation classes */
.fade-in-section {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: opacity, transform;
}

.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  .section-wrapper {
    padding: 64px 0;
  }
  .main-content {
    padding: 0 16px;
  }
}
''')
print("app/globals.css written successfully!")
