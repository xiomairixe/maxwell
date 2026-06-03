import { useEffect } from 'react';

export default function useScrollReveal(selector = '.reveal-card') {
  useEffect(() => {
    if (typeof window === 'undefined' || !document.querySelectorAll) return;

    const elements = Array.from(document.querySelectorAll(selector));
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    requestAnimationFrame(() => {
      elements.forEach((el) => observer.observe(el));
    });

    return () => observer.disconnect();
  }, [selector]);
}
