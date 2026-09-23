import { router } from "./router.js";

function updateHeaderAriaCurrent(route) {
	console.log(route)
	const validRoute = route || '#/inicio'
	const links = document.querySelectorAll('.menu-principal a');

	for (const link of links) {
		const currentHref = link.getAttribute('href');
		link.setAttribute('aria-current', currentHref === validRoute ? 'page' : '')
	}
}

function renderizar() {
	const app = document.querySelector("#app");

	const rota = window.location.hash;

	app.innerHTML = router(rota);
	updateHeaderAriaCurrent(rota);
}

window.addEventListener("DOMContentLoaded", renderizar);
window.addEventListener("hashchange", renderizar);