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
    `From: ${name} (${email})\n\nMessage:\n${message}`
  );

  const gmailURL =
    `https://mail.google.com/mail/?view=cm&fs=1&to=adeshtrivedi01@gmail.com&su=${subject}&body=${body}`;

  window.open(gmailURL, "_blank");
}
try {
  window.open(gmailURL, "_blank");
} catch {
  window.location.href = `mailto:adeshtrivedi01@gmail.com?subject=${subject}&body=${body}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (!toggle || !navLinks) {
    console.error("Navbar elements not found");
    return;
  }

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close menu when clicking a link (mobile UX)
  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
});

