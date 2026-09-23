export function Projetos() {
  return /*html*/`
    <div>

      <section class="projetos-hero">
        <div class="container projetos-hero__conteudo">

          <p class="secao__etiqueta">
            Nossas iniciativas
          </p>

          <h1>Nossos projetos</h1>

          <p>
            A Checkpoint Literário desenvolve atividades que unem
            leitura, escrita, convivência e acesso a videogames.
          </p>

          <p>
            Conheça nossas principais frentes de atuação e descubra
            como você também pode fazer parte dessa iniciativa.
          </p>

        </div>
      </section>

      <section id="leitura" class="secao">
        <div class="container projeto-destaque">

          <div class="projeto-destaque__texto">

            <span class="badge badge-leitura">
              Leitura
            </span>

            <h2>Checkpoint de Leitura</h2>

            <p>
              O Checkpoint de Leitura é a principal atividade da
              organização. Nele, crianças e adolescentes escolhem
              uma obra disponível na biblioteca e realizam a leitura
              de um capítulo.
            </p>

            <p>
              Depois da leitura, cada participante registra com suas
              próprias palavras o que compreendeu do conteúdo. Após
              concluir essa etapa, recebe acesso às estações de
              videogame durante um período determinado.
            </p>

            <ul class="lista-projeto">
              <li>Escolher um livro disponível na biblioteca;</li>
              <li>Ler um capítulo no próprio ritmo;</li>
              <li>Registrar a compreensão da leitura por escrito;</li>
              <li>Utilizar as estações de videogame após o checkpoint.</li>
            </ul>

          </div>

          <picture class="projeto-destaque__imagem">
            <source srcset="./imagens/leitura.webp" type="image/webp">

            <img src="./imagens/leitura.jpg" alt="Livro aberto ao lado de controles de videogame">
          </picture>

        </div>
      </section>

      <section id="voluntariado" class="secao secao--destaque">
        <div class="container">

          <header class="secao__cabecalho">

            <span class="badge badge-voluntariado">
              Voluntariado
            </span>

            <h2>Voluntariado</h2>

            <p>
              Voluntários ajudam a manter as atividades da
              Checkpoint Literário e podem colaborar em diferentes
              áreas de acordo com seus interesses e conhecimentos.
            </p>

          </header>

          <div class="projetos-grid">

            <article class="card-projeto">
              <h3>Mediação de leitura</h3>

              <p>
                Apoia os participantes na escolha de livros,
                interpretação dos textos e desenvolvimento das
                atividades de leitura.
              </p>
            </article>

            <article class="card-projeto">
              <h3>Monitoria de videogames</h3>

              <p>
                Auxilia na organização das estações de jogos,
                orienta os participantes e ajuda a garantir o uso
                adequado dos equipamentos.
              </p>
            </article>

            <article class="card-projeto">
              <h3>Biblioteca</h3>

              <p>
                Colabora na organização do acervo, registro de
                empréstimos e conservação de livros, quadrinhos
                e mangás.
              </p>
            </article>

            <article class="card-projeto">
              <h3>Manutenção de equipamentos</h3>

              <p>
                Ajuda na limpeza, manutenção e organização de
                consoles, controles, televisores e outros
                equipamentos utilizados nas atividades.
              </p>
            </article>

          </div>

        </div>
      </section>

      <section id="doacoes" class="secao">
        <div class="container projetos-grid projetos-grid--duplo">

          <article class="card-projeto card-projeto">

            <span class="badge badge-doacao">
              Doação
            </span>

            <h2>Doe uma História</h2>

            <p>
              A campanha Doe uma História recebe materiais que
              ajudam a ampliar a biblioteca e manter as estações
              de videogame da ONG.
            </p>

            <p>
              Podem ser doados itens novos ou usados, desde que
              estejam em boas condições de utilização.
            </p>

            <ul class="lista-projeto">
              <li>Livros infantis e juvenis;</li>
              <li>Quadrinhos e mangás;</li>
              <li>Consoles de videogame;</li>
              <li>Controles e acessórios;</li>
              <li>Jogos em mídia física;</li>
              <li>Televisores e monitores em funcionamento.</li>
            </ul>

          </article>

          <article class="card-projeto">

            <span class="badge badge-doacao">
              Apoio financeiro
            </span>

            <h2>Contribuição financeira</h2>

            <p>
              As contribuições financeiras ajudam a custear a
              manutenção do espaço, aquisição de livros,
              conservação dos equipamentos e realização das
              atividades da organização.
            </p>

            <p>
              Interessados em apoiar financeiramente a Checkpoint
              Literário podem realizar um cadastro para entrar em
              contato com a equipe.
            </p>

          </article>

        </div>
      </section>

      <section class="projetos-cta">
        <div class="container projetos-cta__conteudo">

          <div>
            <p class="secao__etiqueta">
              Faça parte
            </p>

            <h2>Como participar</h2>

            <p>
              Se você deseja atuar como voluntário, realizar uma
              doação ou apoiar a organização de outra forma,
              preencha nosso formulário de cadastro.
            </p>
          </div>

          <a href="cadastro.html" class="botao botao--primario">
            Quero participar
          </a>

        </div>
      </section>

    </div>
  `
}