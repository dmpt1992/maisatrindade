// smooth scroll feel (tipo premium)
const container = document.querySelector(".scroll-container");

container.addEventListener("wheel", (e) => {
  e.preventDefault();
  container.scrollBy({
    top: e.deltaY * 1.2,
    behavior: "smooth"
  });
}, { passive: false });
