/* ============================================
   ZENTIER — DESIGN SYSTEM
   ============================================ */

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  /* Palette */
  --parchment: #F5F0E8;
  --charcoal: #1C1C1A;
  --charcoal-mid: #2E2E2B;
  --stone: #8C8578;
  --terracotta: #B5673A;
  --terracotta-light: #D4895C;
  --slate: #4A6475;
  --slate-light: #6B8A9A;
  --warm-white: #FAF8F4;
  --border: rgba(28, 28, 26, 0.12);
  --border-strong: rgba(28, 28, 26, 0.25);

  /* Typography */
  --serif: 'Cormorant Garamond', Georgia, serif;
  --sans: 'DM Sans', system-ui, -apple-system, sans-serif;

  /* Layout */
  --max-width: 1100px;
  --section-padding-x: 4rem;
  --section-padding-y: 6rem;
}

html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--sans);
  background: var(--warm-white);
  color: var(--charcoal);
  font-size: 16px;
  line-height: 1.7;
  overflow-x: hidden;
}

a { color: inherit; }

button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

img, svg {
  display: block;
  max-width: 100%;
}

/* ============================================
   NAVIGATION
   ============================================ */

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem var(--section-padding-x);
  background: rgba(250, 248, 244, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 0.5px solid var(--border);
  transition: padding 0.25s ease;
}

.nav.nav-scrolled {
  padding: 0.85rem var(--section-padding-x);
}

.nav-logo {
  font-family: var(--serif);
  font-size: 1.55rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: var(--charcoal);
  text-decoration: none;
  display: inline-block;
}

.nav-logo .dot {
  color: var(--terracotta);
}

.nav-links {
  display: flex;
  gap: 2.5rem;
  list-style: none;
}

.nav-links a {
  font-size: 0.78rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--stone);
  text-decoration: none;
  transition: color 0.2s ease;
  position: relative;
}

.nav-links a:hover {
  color: var(--charcoal);
}

.nav-links a::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 0;
  height: 1px;
  background: var(--terracotta);
  transition: width 0.25s ease;
}

.nav-links a:hover::after {
  width: 100%;
}

.nav-cta {
  font-size: 0.76rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--warm-white);
  background: var(--charcoal);
  text-decoration: none;
  padding: 0.65rem 1.4rem;
  border-radius: 2px;
  transition: background 0.2s ease;
  display: inline-block;
}

.nav-cta:hover {
  background: var(--terracotta);
}

/* Mobile menu */
.nav-toggle {
  display: none;
  width: 28px;
  height: 22px;
  position: relative;
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  position: absolute;
  height: 1.5px;
  width: 100%;
  background: var(--charcoal);
  transition: 0.3s ease;
}

.nav-toggle span:nth-child(1) { top: 0; }
.nav-toggle span:nth-child(2) { top: 50%; transform: translateY(-50%); }
.nav-toggle span:nth-child(3) { bottom: 0; }

.nav-toggle.open span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}
.nav-toggle.open span:nth-child(2) { opacity: 0; }
.nav-toggle.open span:nth-child(3) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

/* ============================================
   LAYOUT PRIMITIVES
   ============================================ */

section {
  padding: var(--section-padding-y) var(--section-padding-x);
  position: relative;
}

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  width: 100%;
}

.divider {
  width: 3rem;
  height: 1px;
  background: var(--terracotta);
}

/* ============================================
   TYPOGRAPHY UTILITIES
   ============================================ */

.eyebrow {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.eyebrow::before {
  content: '';
  display: inline-block;
  width: 1.5rem;
  height: 1px;
  background: var(--terracotta);
  flex-shrink: 0;
}

.eyebrow.eyebrow-light {
  color: var(--terracotta-light);
}

.eyebrow.eyebrow-light::before {
  background: var(--terracotta-light);
}

.eyebrow.eyebrow-center {
  justify-content: center;
}

.section-title {
  font-family: var(--serif);
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 300;
  line-height: 1.15;
  color: var(--charcoal);
  margin-bottom: 1.5rem;
  letter-spacing: -0.005em;
}

.section-title em {
  font-style: italic;
  color: var(--terracotta);
}

.section-title.title-light {
  color: var(--warm-white);
}

/* ============================================
   BUTTONS
   ============================================ */

.btn-primary {
  font-family: var(--sans);
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--warm-white);
  background: var(--charcoal);
  text-decoration: none;
  padding: 0.95rem 2rem;
  border-radius: 2px;
  transition: background 0.2s ease, transform 0.2s ease;
  display: inline-block;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--terracotta);
}

.btn-primary.btn-terracotta {
  background: var(--terracotta);
}

.btn-primary.btn-terracotta:hover {
  background: var(--charcoal);
}

.btn-ghost {
  font-family: var(--sans);
  font-size: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-decoration: none;
  color: var(--charcoal);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease, gap 0.2s ease;
  cursor: pointer;
}

.btn-ghost:hover {
  color: var(--terracotta);
  gap: 0.75rem;
}

.btn-ghost::after {
  content: '→';
  font-size: 1rem;
  transition: transform 0.2s ease;
}

/* ============================================
   HERO
   ============================================ */

.hero {
  padding-top: 10rem;
  padding-bottom: 7rem;
  background: var(--warm-white);
  min-height: 92vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 42%;
  height: 100%;
  background: var(--parchment);
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 0;
}

.hero-inner {
  position: relative;
  z-index: 1;
  width: 100%;
}

.hero-title {
  font-family: var(--serif);
  font-size: clamp(2.6rem, 5.5vw, 5.5rem);
  font-weight: 300;
  line-height: 1.08;
  letter-spacing: -0.01em;
  color: var(--charcoal);
  max-width: 720px;
  margin-bottom: 2rem;
}

.hero-title em {
  font-style: italic;
  color: var(--terracotta);
}

.hero-sub {
  font-size: 1.05rem;
  font-weight: 300;
  line-height: 1.75;
  color: var(--stone);
  max-width: 540px;
  margin-bottom: 3rem;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

/* ============================================
   PROBLEM (charcoal section)
   ============================================ */

.problem {
  background: var(--charcoal);
  color: var(--warm-white);
}

.problem-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-top: 3rem;
}

.problem-body {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(250, 248, 244, 0.72);
}

.problem-body p + p {
  margin-top: 1.25rem;
}

.problem-stats {
  display: flex;
  flex-direction: column;
}

.stat-item {
  padding: 1.75rem 0;
  border-bottom: 0.5px solid rgba(250, 248, 244, 0.12);
}

.stat-item:first-child {
  border-top: 0.5px solid rgba(250, 248, 244, 0.12);
}

.stat-num {
  font-family: var(--serif);
  font-size: 3rem;
  font-weight: 300;
  color: var(--terracotta-light);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 0.85rem;
  font-weight: 300;
  color: rgba(250, 248, 244, 0.55);
  letter-spacing: 0.02em;
  line-height: 1.6;
}

/* ============================================
   APPROACH (parchment)
   ============================================ */

.approach {
  background: var(--parchment);
}

.approach-intro {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: end;
  margin-bottom: 4rem;
}

.approach-body {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--stone);
}

.approach-body p + p {
  margin-top: 1rem;
}

.approach-pull {
  font-family: var(--serif);
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.5;
  color: var(--charcoal);
  padding-left: 1.5rem;
  border-left: 2px solid var(--terracotta);
}

.pillars {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border: 0.5px solid var(--border-strong);
  border-radius: 3px;
  overflow: hidden;
  background: var(--warm-white);
}

.pillar {
  padding: 2rem 1.75rem;
  border-right: 0.5px solid var(--border-strong);
  background: var(--warm-white);
  transition: background 0.3s ease;
}

.pillar:last-child {
  border-right: none;
}

.pillar:hover {
  background: var(--charcoal);
}

.pillar:hover .pillar-num {
  color: var(--terracotta-light);
}

.pillar:hover .pillar-title {
  color: var(--warm-white);
}

.pillar:hover .pillar-body {
  color: rgba(250, 248, 244, 0.62);
}

.pillar-num {
  font-family: var(--serif);
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--border-strong);
  line-height: 1;
  margin-bottom: 1.25rem;
  transition: color 0.3s ease;
}

.pillar-title {
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--charcoal);
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
}

.pillar-body {
  font-size: 0.88rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--stone);
  transition: color 0.3s ease;
}

/* ============================================
   WHO WE WORK WITH
   ============================================ */

.who {
  background: var(--warm-white);
}

.who-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;
}

.who-card {
  padding: 2.5rem 2rem;
  border: 0.5px solid var(--border);
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;
  background: var(--warm-white);
}

.who-card:hover {
  border-color: var(--terracotta);
  transform: translateY(-3px);
}

.who-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 3px;
  height: 0;
  background: var(--terracotta);
  transition: height 0.35s ease;
}

.who-card:hover::before {
  height: 100%;
}

.who-icon {
  width: 40px;
  height: 40px;
  margin-bottom: 1.5rem;
  opacity: 0.4;
}

.who-title {
  font-family: var(--serif);
  font-size: 1.4rem;
  font-weight: 400;
  color: var(--charcoal);
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.who-body {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.75;
  color: var(--stone);
}

/* ============================================
   ABOUT
   ============================================ */

.about {
  background: var(--warm-white);
  border-top: 0.5px solid var(--border);
}

.about-grid {
  display: grid;
  grid-template-columns: 5fr 4fr;
  gap: 6rem;
  align-items: start;
  margin-top: 1rem;
}

.about-body p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.85;
  color: var(--stone);
  margin-bottom: 1.25rem;
}

.about-body p strong {
  font-weight: 500;
  color: var(--charcoal);
}

.about-stance {
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 1.65;
  color: var(--charcoal);
  padding: 1.5rem 0;
  margin: 1.5rem 0;
  border-top: 0.5px solid var(--border);
  border-bottom: 0.5px solid var(--border);
}

.about-aside {
  padding-top: 0.5rem;
}

.about-quote {
  font-family: var(--serif);
  font-size: 1.45rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.5;
  color: var(--charcoal);
  margin-bottom: 3rem;
  padding-left: 1.25rem;
  border-left: 1.5px solid var(--terracotta);
}

.about-values {
  display: flex;
  flex-direction: column;
}

.value-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 0.5px solid var(--border);
}

.value-row:last-child {
  border-bottom: none;
}

.value-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--terracotta);
  flex-shrink: 0;
  margin-top: 0.6rem;
}

.value-text {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.6;
  color: var(--stone);
}

.value-text strong {
  font-weight: 500;
  color: var(--charcoal);
  display: block;
  margin-bottom: 0.15rem;
  font-size: 0.78rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* ============================================
   FOR CLIENTS
   ============================================ */

.clients {
  background: var(--parchment);
}

.service-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  margin-top: 3rem;
}

.service-body p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--stone);
  margin-bottom: 1.25rem;
}

.commercial-callout {
  background: var(--warm-white);
  border-left: 2px solid var(--terracotta);
  padding: 1.5rem 1.75rem;
  margin: 1.75rem 0;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.7;
  color: var(--charcoal);
}

.service-steps {
  display: flex;
  flex-direction: column;
}

.step {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 0.5px solid var(--border-strong);
}

.step:first-child {
  padding-top: 0;
}

.step:last-child {
  border-bottom: none;
}

.step-num {
  font-family: var(--serif);
  font-size: 1.85rem;
  font-weight: 300;
  color: var(--terracotta);
  line-height: 1;
  flex-shrink: 0;
  width: 2rem;
}

.step-title {
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--charcoal);
  margin-bottom: 0.5rem;
}

.step-body {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--stone);
}

/* ============================================
   FOR CANDIDATES (charcoal)
   ============================================ */

.candidates {
  background: var(--charcoal);
  color: var(--warm-white);
}

.candidates-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
  margin-top: 3rem;
}

.cand-body p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(250, 248, 244, 0.65);
  margin-bottom: 1.25rem;
}

.cand-types {
  display: flex;
  flex-direction: column;
}

.cand-type {
  padding: 1.25rem 0;
  border-bottom: 0.5px solid rgba(250, 248, 244, 0.1);
}

.cand-type:last-child {
  border-bottom: none;
}

.cand-type-title {
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--terracotta-light);
  margin-bottom: 0.5rem;
}

.cand-type-body {
  font-size: 0.9rem;
  font-weight: 300;
  line-height: 1.65;
  color: rgba(250, 248, 244, 0.55);
}

/* ============================================
   MARKET INTELLIGENCE
   ============================================ */

.intel {
  background: var(--warm-white);
  border-top: 0.5px solid var(--border);
}

.intel-intro {
  display: grid;
  grid-template-columns: 5fr 4fr;
  gap: 5rem;
  margin-bottom: 3.5rem;
  margin-top: 1rem;
}

.intel-intro-body {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--stone);
}

.intel-intro-aside {
  font-family: var(--serif);
  font-size: 1.3rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.5;
  color: var(--charcoal);
  padding-top: 0.5rem;
}

.article-card {
  border: 0.5px solid var(--border);
  border-radius: 3px;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;
  background: var(--warm-white);
}

.article-card:hover {
  border-color: var(--terracotta);
  transform: translateY(-2px);
}

.article-top {
  background: var(--parchment);
  padding: 2rem 2.5rem;
  border-bottom: 0.5px solid var(--border);
}

.article-tag {
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--terracotta);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.article-tag::before {
  content: '';
  display: inline-block;
  width: 1rem;
  height: 1px;
  background: var(--terracotta);
}

.article-title {
  font-family: var(--serif);
  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.25;
  color: var(--charcoal);
  letter-spacing: -0.005em;
}

.article-body {
  padding: 2rem 2.5rem;
}

.article-body p {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.8;
  color: var(--stone);
  margin-bottom: 1.1rem;
}

.article-body p:last-child {
  margin-bottom: 0;
}

.article-footer {
  padding: 1.25rem 2.5rem;
  border-top: 0.5px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.article-date {
  font-size: 0.78rem;
  font-weight: 300;
  color: var(--stone);
  letter-spacing: 0.05em;
}

.article-read {
  font-size: 0.76rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--terracotta);
}

/* ============================================
   CONTACT (charcoal)
   ============================================ */

.contact {
  background: var(--charcoal);
  color: var(--warm-white);
  text-align: center;
  padding: 7rem var(--section-padding-x);
}

.contact .eyebrow {
  justify-content: center;
}

.contact .section-title {
  color: var(--warm-white);
  max-width: 600px;
  margin: 0 auto 1.25rem;
}

.contact-sub {
  font-size: 1rem;
  font-weight: 300;
  color: rgba(250, 248, 244, 0.6);
  max-width: 460px;
  margin: 0 auto 3rem;
  line-height: 1.7;
}

.contact-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.contact-link {
  font-size: 0.95rem;
  font-weight: 400;
  color: var(--warm-white);
  text-decoration: none;
  border-bottom: 0.5px solid rgba(250, 248, 244, 0.3);
  padding-bottom: 2px;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.contact-link:hover {
  color: var(--terracotta-light);
  border-color: var(--terracotta-light);
}

.contact-divider {
  color: rgba(250, 248, 244, 0.2);
  font-size: 0.8rem;
}

.contact-closing {
  font-size: 0.82rem;
  font-weight: 300;
  color: rgba(250, 248, 244, 0.4);
  letter-spacing: 0.04em;
  max-width: 480px;
  margin: 0 auto;
}

/* ============================================
   FOOTER
   ============================================ */

.footer {
  background: var(--charcoal-mid);
  border-top: 0.5px solid rgba(250, 248, 244, 0.08);
  padding: 2rem var(--section-padding-x);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-logo {
  font-family: var(--serif);
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.08em;
  color: rgba(250, 248, 244, 0.5);
}

.footer-logo .dot {
  color: var(--terracotta);
}

.footer-text {
  font-size: 0.75rem;
  font-weight: 300;
  color: rgba(250, 248, 244, 0.3);
  letter-spacing: 0.05em;
}

/* ============================================
   FADE-IN ANIMATION (intersection observer)
   ============================================ */

.reveal {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ============================================
   ACCESSIBILITY
   ============================================ */

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

a:focus-visible, button:focus-visible {
  outline: 2px solid var(--terracotta);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
  .reveal { opacity: 1; transform: none; }
}

/* ============================================
   RESPONSIVE
   ============================================ */

@media (max-width: 1024px) {
  :root {
    --section-padding-x: 2.5rem;
    --section-padding-y: 5rem;
  }

  .approach-intro,
  .service-grid,
  .candidates-grid,
  .intel-intro,
  .about-grid,
  .problem-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .pillars {
    grid-template-columns: repeat(2, 1fr);
  }

  .pillar:nth-child(2) {
    border-right: none;
  }

  .pillar:nth-child(1),
  .pillar:nth-child(2) {
    border-bottom: 0.5px solid var(--border-strong);
  }

  .who-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 720px) {
  :root {
    --section-padding-x: 1.5rem;
    --section-padding-y: 4rem;
  }

  .nav {
    padding: 1rem var(--section-padding-x);
  }

  .nav-links,
  .nav-cta {
    display: none;
  }

  .nav-toggle {
    display: block;
  }

  .nav.menu-open {
    flex-wrap: wrap;
  }

  .nav.menu-open .nav-links {
    display: flex;
    flex-basis: 100%;
    flex-direction: column;
    gap: 1.25rem;
    padding: 2rem 0 1rem;
    margin-top: 1rem;
    border-top: 0.5px solid var(--border);
  }

  .nav.menu-open .nav-cta {
    display: inline-block;
    flex-basis: 100%;
    text-align: center;
    margin-top: 0.5rem;
  }

  .hero {
    padding-top: 8rem;
    padding-bottom: 5rem;
    min-height: auto;
  }

  .hero::before {
    width: 100%;
    height: 35%;
    top: auto;
    bottom: 0;
    clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 100%);
    opacity: 0.5;
  }

  .hero-actions {
    gap: 1.5rem;
    flex-direction: column;
    align-items: flex-start;
  }

  .pillars {
    grid-template-columns: 1fr;
  }

  .pillar {
    border-right: none !important;
    border-bottom: 0.5px solid var(--border-strong);
  }

  .pillar:last-child {
    border-bottom: none;
  }

  .article-top,
  .article-body,
  .article-footer {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    text-align: left;
  }

  .stat-num {
    font-size: 2.5rem;
  }
}
