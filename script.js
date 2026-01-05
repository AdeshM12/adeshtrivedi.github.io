document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
const cursorBg = document.querySelector(".bg-cursor");

document.addEventListener("mousemove", (e) => {
  cursorBg.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
