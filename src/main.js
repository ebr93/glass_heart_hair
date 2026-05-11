import "./style.css";

const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("hidden") === false;
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-close-mobile]").forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu && menuButton) {
      mobileMenu.classList.add("hidden");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});
