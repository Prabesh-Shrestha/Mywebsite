const root = document.documentElement;
const themeToggle = document.querySelector('#theme-toggle');
const menuButton = document.querySelector('#menu-button');
const mobileMenu = document.querySelector('#mobile-menu');
const copyEmail = document.querySelector('#copy-email');
const toast = document.querySelector('#toast');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  });
}

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.hidden = true;
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if (copyEmail) {
  copyEmail.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(copyEmail.dataset.email);
      copyEmail.textContent = 'Copied';
      if (toast) {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 1600);
      }
      setTimeout(() => (copyEmail.textContent = 'Copy email'), 1800);
    } catch {
      window.location.href = `mailto:${copyEmail.dataset.email}`;
    }
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
