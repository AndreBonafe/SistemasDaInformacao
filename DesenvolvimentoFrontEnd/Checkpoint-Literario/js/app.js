import { router } from "./router.js";

function formatRoute(route) {
	const splitedRoute = route.split('/');
	const routeName = splitedRoute[1];
	const section = splitedRoute[2];

	return { routeName, section };
}

function updateHeaderAriaCurrent(route) {
	const { routeName: originRouteName, section: originSection } = formatRoute(route || '#/inicio');
	const links = document.querySelectorAll('.menu-principal a');
	for (const link of links) {
		const { routeName, section } = formatRoute(link.getAttribute('href'));

		link.removeAttribute('aria-current');

		if (routeName !== originRouteName) {
			continue;
		}

		if (section) {
			if (section === originSection) {
				link.setAttribute('aria-current', 'location');
			}

			continue;
		}

		link.setAttribute('aria-current', 'page');
	}
}

function navigateIntoSection(section) {
	section ? document.querySelector(`#${section}`)?.scrollIntoView(false) :
	document.getElementsByTagName('body')[0].scrollIntoView(true);
}

function renderizar() {
	const app = document.querySelector("#app");

	const rota = window.location.hash;

	const { routeName, section } = formatRoute(rota);

	app.innerHTML = router(routeName, section);
	updateHeaderAriaCurrent(rota);
	navigateIntoSection(section);
}

window.addEventListener("DOMContentLoaded", renderizar);
window.addEventListener("hashchange", renderizar);