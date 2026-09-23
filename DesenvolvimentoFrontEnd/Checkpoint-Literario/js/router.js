import { Cadastro } from "./views/cadastro.js";
import { Home } from "./views/home.js";
import { Projetos } from "./views/projetos.js";

const routes = {
  "inicio": Home,
  "cadastro": Cadastro,
  "projetos": Projetos
}

export function router(rota) {
  const view = routes[rota];
  return view ? view() : Home();
}