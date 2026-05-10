/**
 * Interactions & Animations
 * Scroll reveals, parallax effects, e outras interações
 */

class Interactions {
  constructor() {
    this.initScrollReveal();
    this.initParallax();
    this.initSmoothScroll();
  }

  initScrollReveal() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = entry.target.dataset.revealDelay || 0;
          setTimeout(() => {
            entry.target.classList.add('reveal');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach((el) => observer.observe(el));
  }

  initParallax() {
    const parallaxElements = document.querySelectorAll('[data-scroll-parallax]');
    
    if (parallaxElements.length === 0) return;

    let ticking = false;
    const lastScrollY = { value: 0 };

    const update = () => {
      const scrollY = window.scrollY;
      lastScrollY.value = scrollY;

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.speed) || 0.5;
        const offset = scrollY * speed;
        el.style.transform = `translateY(${offset}px)`;
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new Interactions();
  });
} else {
  new Interactions();
}

// Intersection Observer para lazy load
const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[loading="lazy"], video[loading="lazy"]');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const media = entry.target;
          if (media.dataset.src) {
            media.src = media.dataset.src;
          }
          observer.unobserve(media);
        }
      });
    });

    images.forEach((img) => observer.observe(img));
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
  lazyLoadImages();
}

// Prefers Reduced Motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  document.documentElement.style.setProperty('--duration-fast', '0ms');
  document.documentElement.style.setProperty('--duration-base', '0ms');
  document.documentElement.style.setProperty('--duration-slow', '0ms');
}
