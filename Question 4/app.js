const obs = new IntersectionObserver((es) =>
  es.forEach(
    (e) =>
      e.isIntersecting &&
      (e.target.classList.add("is-visible"), obs.unobserve(e.target))
  )
);
document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
