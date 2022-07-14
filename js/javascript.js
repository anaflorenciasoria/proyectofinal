const openMenu = document.querySelector(".open-menu");
const Menuu = document.querySelector(".menu");

openMenu.addEventListener("click", () => {
	Menuu.classList.toggle("nav-menu-visible");
});

const menuLinks = document.querySelectorAll('.menu a[href^="#"]');
menuLinks.forEach(menuLink => {
	menuLink.addEventListener("click", function() {
		Menuu.classList.remove("nav-menu-visible");
	})
})