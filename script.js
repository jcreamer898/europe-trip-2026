// Smooth scroll for nav links
document.querySelectorAll(".sticky-nav a").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute("href"));
    if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Active nav highlighting on scroll
const sections = document.querySelectorAll(".section-title");
const navLinks = document.querySelectorAll(".sticky-nav a");
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        navLinks.forEach((l) => l.classList.remove("active"));
        const link = document.querySelector(
          `.sticky-nav a[href="#${e.target.id}"]`,
        );
        if (link) link.classList.add("active");
      }
    });
  },
  { rootMargin: "-80px 0px -60% 0px", threshold: 0 },
);
sections.forEach((s) => obs.observe(s));

// Lazy loading fallback for older browsers
if (!("loading" in HTMLImageElement.prototype)) {
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.src = img.src;
  });
}
