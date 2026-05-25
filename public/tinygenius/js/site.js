document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
  }

  const path = window.location.pathname.replace(/\/$/, '');
  const file = path.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-nav]').forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    const target = href.replace(/^\.\//, '').replace(/\/$/, '');
    if (path.endsWith(target) || file === target || (target === 'privacy' && file === 'privacy.html') || (target === 'terms' && file === 'terms.html')) {
      link.classList.add('active');
    }
  });

  const revealItems = document.querySelectorAll('.reveal');
  if (revealItems.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealItems.forEach((el) => observer.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  }
});
