/* Interações essenciais: tema, ano e indicação da seção atual. */

function readSavedTheme() {
  try {
    return localStorage.getItem('theme');
  } catch (error) {
    return null;
  }
}

function persistTheme(theme) {
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    // O tema ainda funciona durante a sessão quando o storage é bloqueado.
  }
}

function updateThemeControl() {
  const button = document.getElementById('themeToggle');
  if (!button) return;

  const isDark = document.documentElement.classList.contains('dark');
  const nextThemeLabel = isDark ? 'Ativar tema claro' : 'Ativar tema escuro';

  button.setAttribute('aria-pressed', String(isDark));
  button.setAttribute('aria-label', nextThemeLabel);
  button.setAttribute('title', nextThemeLabel);

  const themeColor = document.querySelector('meta[name="theme-color"]');
  themeColor?.setAttribute('content', isDark ? '#191613' : '#faf7f0');
}

function applyTheme(theme, shouldPersist = false) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  if (shouldPersist) persistTheme(theme);
  updateThemeControl();
}

function initTheme() {
  const button = document.getElementById('themeToggle');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = readSavedTheme();

  applyTheme(savedTheme || (systemTheme.matches ? 'dark' : 'light'));

  button?.addEventListener('click', () => {
    const nextTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    applyTheme(nextTheme, true);
  });

  const handleSystemTheme = (event) => {
    if (!readSavedTheme()) applyTheme(event.matches ? 'dark' : 'light');
  };

  if (typeof systemTheme.addEventListener === 'function') {
    systemTheme.addEventListener('change', handleSystemTheme);
  }
}

function initSectionNavigation() {
  if (!('IntersectionObserver' in window)) return;

  const links = Array.from(document.querySelectorAll('.header__nav a[href^="#"]'));
  const entries = links
    .map((link) => ({ link, section: document.querySelector(link.getAttribute('href')) }))
    .filter(({ section }) => section);

  if (!entries.length) return;

  const observer = new IntersectionObserver((observedEntries) => {
    const current = observedEntries.find((entry) => entry.isIntersecting);
    if (!current) return;

    entries.forEach(({ link, section }) => {
      link.classList.toggle('is-active', section === current.target);
    });
  }, { rootMargin: '-25% 0px -65% 0px', threshold: 0 });

  entries.forEach(({ section }) => observer.observe(section));
}

function updateCopyrightYear() {
  const year = document.getElementById('currentYear');
  if (year) year.textContent = String(new Date().getFullYear());
}

initTheme();
initSectionNavigation();
updateCopyrightYear();
