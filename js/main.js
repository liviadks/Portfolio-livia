const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

function setMenuOpen(isOpen) {
  navLinks.classList.toggle("open", isOpen);
  menuBtn.setAttribute("aria-expanded", String(isOpen));
  menuBtn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
  menuBtnIcon.className = isOpen ? "ri-close-line" : "ri-menu-3-line";
}

menuBtn.addEventListener("click", () => {
  setMenuOpen(!navLinks.classList.contains("open"));
});

navLinks.addEventListener("click", () => setMenuOpen(false));

// Animações de entrada (ScrollReveal)
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__content h1", scrollRevealOption);
ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 500 });

ScrollReveal().reveal(".about__content .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 500 });
ScrollReveal().reveal(".about__content .about__btn", { ...scrollRevealOption, delay: 1000 });
