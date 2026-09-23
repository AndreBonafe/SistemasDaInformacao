export function Home() {
  return /*html*/`
    <div>
      <section class="hero">
        <div class="container hero__conteudo">

          <div class="hero__texto">
            <p class="hero__etiqueta">
              Leitura + videogames
            </p>

            <h1>
              Leia uma história.
              <span>Desbloqueie outra.</span>
            </h1>

            <p class="hero__descricao">
              A Checkpoint Literário incentiva crianças e adolescentes
              a desenvolverem o hábito da leitura por meio de uma
              experiência que combina literatura, escrita e videogames.
            </p>

            <div class="hero__acoes">
              <a href="cadastro.html" class="botao botao--primario">
                Quero participar
              </a>

              <a href="projetos.html" class="botao botao--secundario">
                Conheça os projetos
              </a>
            </div>
          </div>

          <picture class="hero__imagem">
            <source srcset="./imagens/hero-checkpoint-literario.webp" type="image/webp">

            <img src="./imagens/hero-checkpoint-literario.jpg"
              alt="Duas crianças concentradas na leitura de livros em uma biblioteca">
          </picture>

        </div>
      </section>

      <section class="secao">
        <div class="container">

          <header class="secao__cabecalho">
            <p class="secao__etiqueta">Nosso método</p>
            <h2>Como funciona?</h2>

            <p>
              A leitura vira parte de uma jornada divertida,
              com pequenas conquistas ao longo do caminho.
            </p>
          </header>

          <div class="etapas">

            <article class="card-etapa">
              <span class="card-etapa__numero">01</span>

              <h3>Escolha</h3>

              <p>
                Selecione um livro, quadrinho ou mangá
                disponível na nossa biblioteca.
              </p>
            </article>

            <article class="card-etapa">
              <span class="card-etapa__numero">02</span>

              <h3>Leia e registre</h3>

              <p>
                Leia um capítulo e registre com suas próprias
                palavras o que compreendeu.
              </p>
            </article>

            <article class="card-etapa">
              <span class="card-etapa__numero">03</span>

              <h3>Jogue</h3>

              <p>
                Complete o checkpoint e aproveite seu período
                nas estações de videogame.
              </p>
            </article>

          </div>

        </div>
      </section>

      <section class="secao secao--destaque">
        <div class="container conteudo-dividido">

          <picture class="conteudo-dividido__imagem">
            <source srcset="./imagens/leitura.webp" type="image/webp">

            <img src="./imagens/leitura.jpg" alt="Livro aberto ao lado de controles de videogame">
          </picture>

          <div class="conteudo-dividido__texto">
            <p class="secao__etiqueta">
              Aprender pode ser divertido
            </p>

            <h2>Por que unir leitura e videogames?</h2>

            <p>
              Utilizamos o interesse pelos videogames como uma ponte
              para aproximar crianças e adolescentes da literatura.
            </p>

            <p>
              A leitura deixa de ser apresentada apenas como obrigação
              e passa a integrar uma experiência de descoberta,
              convivência e diversão.
            </p>
          </div>

        </div>
      </section>

      <section class="secao">
        <div class="container conteudo-dividido">

          <div class="conteudo-dividido__texto">
            <p class="secao__etiqueta">
              Player 2 entrou na partida
            </p>

            <h2>Um espaço para compartilhar</h2>

            <p>
              Além das atividades de leitura, os participantes podem
              jogar juntos, compartilhar experiências e desenvolver
              habilidades de convivência e cooperação.
            </p>

            <a href="projetos.html" class="botao botao--secundario">
              Veja nossas iniciativas
            </a>
          </div>

          <picture class="conteudo-dividido__imagem">
            <source srcset="./imagens/videogames.webp" type="image/webp">

            <img src="./imagens/videogames.jpg" alt="Dois jovens jogando videogame juntos">
          </picture>

        </div>
      </section>

      <section class="contato">
        <div class="container contato__conteudo">

          <div>
            <p class="secao__etiqueta">
              Fale com a gente
            </p>

            <h2>Entre em contato</h2>

            <p>
              Quer participar, fazer uma doação ou saber mais
              sobre o projeto?
            </p>
          </div>

          <address>
            <a href="mailto:contato@checkpointliterario.org.br">
              contato@checkpointliterario.org.br
            </a>

            <a href="tel:+551140028922">
              (11) 4002-8922
            </a>

            <span>São Paulo - SP</span>
          </address>

        </div>
      </section>

    </div>
  `
}