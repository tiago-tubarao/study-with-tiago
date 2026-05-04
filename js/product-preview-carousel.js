(() => {
  const carousels = document.querySelectorAll('[data-preview-carousel]');
  if (!carousels.length) return;

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll('.preview-slide'));
    const dots = Array.from(carousel.querySelectorAll('[data-preview-dot]'));
    const previous = carousel.querySelector('[data-preview-prev]');
    const next = carousel.querySelector('[data-preview-next]');
    if (!slides.length) return;

    let active = slides.findIndex((slide) => slide.classList.contains('is-active'));
    if (active < 0) active = 0;

    const show = (index) => {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === active;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', String(!isActive));
      });
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === active;
        dot.classList.toggle('is-active', isActive);
        dot.setAttribute('aria-pressed', String(isActive));
      });
    };

    previous?.addEventListener('click', () => show(active - 1));
    next?.addEventListener('click', () => show(active + 1));
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const index = Number(dot.dataset.previewDot || 0);
        show(Number.isFinite(index) ? index : 0);
      });
    });

    show(active);
  });
})();
