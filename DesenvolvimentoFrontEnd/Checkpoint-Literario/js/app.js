import { router } from "./router.js";

function renderizar() {
    const app = document.querySelector("#app");

    const rota = window.location.hash;

    app.innerHTML = router(rota);
}

window.addEventListener("DOMContentLoaded", renderizar);
window.addEventListener("hashchange", renderizar);