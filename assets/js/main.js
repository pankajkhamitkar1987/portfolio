/* ============================================================
   MAIN.JS
   Pankaj Khamitkar Portfolio — Shared JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* NAV SCROLL BEHAVIOUR */
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* SCROLL REVEAL */
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    reveals.forEach(function (el) { observer.observe(el); });
  }

  /* ACTIVE NAV LINK (homepage section tracking) */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href*="#"]');

  if (sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle(
              'active',
              link.getAttribute('href').includes('#' + id)
            );
          });
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(function (s) { sectionObserver.observe(s); });
  }

})();
