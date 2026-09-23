import { Cadastro } from "./views/cadastro.js";
import { Home } from "./views/home.js";
import { Projetos } from "./views/projetos.js";

function renderizar() {
    const app = document.querySelector("#app");

    const rota = window.location.hash;

    if (rota === "#/projetos") {
        app.innerHTML = Projetos();
    } else if (rota === "#/cadastro") {
        app.innerHTML = Cadastro();
    } else {
        app.innerHTML = Home();
    }
}

window.addEventListener("DOMContentLoaded", renderizar);
window.addEventListener("hashchange", renderizar);