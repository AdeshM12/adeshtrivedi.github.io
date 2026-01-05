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
function sendEmail(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent(
    `Portfolio Contact from ${name}`
  );

  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:adeshtrivedi01@gmail.com?subject=${subject}&body=${body}`;
}
