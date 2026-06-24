const menuButton = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".topnav__links");

if (menuButton && menuLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".topnav__links a[href^='#']")];

if (sections.length && navLinks.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", active);
      });
    });
  }, { rootMargin: "-40% 0px -45% 0px", threshold: 0.01 });

  sections.forEach((section) => observer.observe(section));
}
