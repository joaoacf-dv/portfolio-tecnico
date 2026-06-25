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

function waitForGalleryImage(image) {
  return new Promise((resolve) => {
    if (!image) {
      resolve(false);
      return;
    }

    if (image.complete) {
      resolve(image.naturalWidth > 0);
      return;
    }

    image.addEventListener("load", () => resolve(image.naturalWidth > 0), { once: true });
    image.addEventListener("error", () => resolve(false), { once: true });
  });
}

async function initCaseGalleries() {
  const gallerySections = [...document.querySelectorAll(".case-gallery-section")];

  if (!gallerySections.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gallerySections.forEach((section) => {
    if (section.dataset.galleryActive !== "true") {
      section.classList.add("is-hidden");
    }
  });

  const activeSections = gallerySections.filter((section) => section.dataset.galleryActive === "true");

  await Promise.all(activeSections.map(async (section) => {
    const gallery = section.querySelector("[data-gallery]");
    const track = section.querySelector(".gallery-track");
    const controls = section.querySelector(".gallery-controls");
    const previousButton = section.querySelector("[data-gallery-prev]");
    const nextButton = section.querySelector("[data-gallery-next]");
    const dotsContainer = section.querySelector("[data-gallery-dots]");
    const slides = [...section.querySelectorAll(".gallery-slide")];

    if (!gallery || !track || !slides.length) {
      section.classList.add("is-hidden");
      return;
    }

    const slideResults = await Promise.all(slides.map(async (slide) => {
      const image = slide.querySelector("img");
      const isValid = await waitForGalleryImage(image);
      return { slide, isValid };
    }));

    slideResults.forEach(({ slide, isValid }) => {
      if (!isValid) {
        slide.remove();
      }
    });

    const validSlides = slideResults
      .filter(({ isValid }) => isValid)
      .map(({ slide }) => slide);

    if (!validSlides.length) {
      section.classList.add("is-hidden");
      section.classList.remove("is-ready");
      return;
    }

    section.classList.remove("is-hidden");
    section.classList.add("is-ready");

    let activeIndex = 0;
    let autoplayId = null;
    const hasMultipleSlides = validSlides.length > 1;

    if (!hasMultipleSlides) {
      validSlides[0].classList.add("is-active");
      controls?.classList.add("is-hidden");
      return;
    }

    controls?.classList.remove("is-hidden");

    if (dotsContainer) {
      dotsContainer.textContent = "";
    }

    const dots = validSlides.map((_, index) => {
      const dot = document.createElement("button");
      dot.className = "gallery-dot";
      dot.type = "button";
      dot.setAttribute("aria-label", `Ir para imagem ${index + 1}`);
      dot.addEventListener("click", () => {
        showSlide(index);
        restartAutoplay();
      });
      dotsContainer?.appendChild(dot);
      return dot;
    });

    function showSlide(nextIndex) {
      activeIndex = (nextIndex + validSlides.length) % validSlides.length;

      validSlides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === activeIndex);
      });

      dots.forEach((dot, index) => {
        const isActive = index === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-current", isActive ? "true" : "false");
      });
    }

    function stopAutoplay() {
      if (autoplayId) {
        window.clearInterval(autoplayId);
        autoplayId = null;
      }
    }

    function startAutoplay() {
      if (prefersReducedMotion || autoplayId) return;
      autoplayId = window.setInterval(() => showSlide(activeIndex + 1), 5000);
    }

    function restartAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    previousButton?.addEventListener("click", () => {
      showSlide(activeIndex - 1);
      restartAutoplay();
    });

    nextButton?.addEventListener("click", () => {
      showSlide(activeIndex + 1);
      restartAutoplay();
    });

    gallery.addEventListener("mouseenter", stopAutoplay);
    gallery.addEventListener("mouseleave", startAutoplay);
    gallery.addEventListener("focusin", stopAutoplay);
    gallery.addEventListener("focusout", startAutoplay);

    showSlide(0);
    startAutoplay();
  }));
}

initCaseGalleries();
