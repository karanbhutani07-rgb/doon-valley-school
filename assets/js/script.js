// assets/js/script.js

document.addEventListener("DOMContentLoaded", () => {
  // ===== Slideshow (Homepage) =====
  const slides = Array.from(document.querySelectorAll(".slideshow .slide"));
  const dots = Array.from(document.querySelectorAll(".slide-dots .dot"));
  const prevBtn = document.querySelector(".slide-prev");
  const nextBtn = document.querySelector(".slide-next");

  if (!slides.length) return; // No slideshow on this page

  let current = 0;
  let timer = null;

  function show(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
    dots.forEach((dot, i) => dot.classList.toggle("active", i === current));
  }

  function next() {
    show(current + 1);
  }

  function prev() {
    show(current - 1);
  }

  function startAuto() {
    stopAuto();
    timer = setInterval(next, 4000);
  }

  function stopAuto() {
    if (timer) clearInterval(timer);
    timer = null;
  }

  // Init
  show(0);
  startAuto();

  // Manual controls
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      next();
      startAuto(); // restart timer after manual click
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prev();
      startAuto();
    });
  }

  if (dots.length) {
    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        show(i);
        startAuto();
      });
    });
  }

  // Optional: Pause autoplay on hover
  const slideshowEl = document.querySelector(".slideshow");
  if (slideshowEl) {
    slideshowEl.addEventListener("mouseenter", stopAuto);
    slideshowEl.addEventListener("mouseleave", startAuto);
  }

  // ===== Mobile Menu (matches your CSS: .nav-links.active) =====
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const nav = document.querySelector(".nav-links");
  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // ===== Footer year =====
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});