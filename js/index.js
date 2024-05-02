const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");

function toggleMenu() {
  navList.classList.toggle("open");
}

menuIcon.addEventListener("click", toggleMenu);
