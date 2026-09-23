export function Cadastro() {
  return /*html*/`
      <div>

        <section class="cadastro-hero">
            <div class="container cadastro-hero__conteudo">

                <p class="secao__etiqueta">
                    Faça parte
                </p>

                <h1>Faça parte da Checkpoint Literário</h1>

                <p>
                    Preencha o formulário abaixo para demonstrar seu interesse
                    em participar das atividades da organização.
                </p>

            </div>
        </section>

        <section class="secao">
            <div class="container cadastro-layout">

                <aside class="cadastro-info">
                    <p class="secao__etiqueta">
                        Como participar
                    </p>

                    <h2>Transforme interesse em ação</h2>

                    <p>
                        Você pode colaborar como voluntário, doador ou apoiador
                        de outras iniciativas da Checkpoint Literário.
                    </p>

                    <ul>
                        <li>Mediação de leitura;</li>
                        <li>Monitoria de videogames;</li>
                        <li>Organização da biblioteca;</li>
                        <li>Manutenção de equipamentos;</li>
                        <li>Organização de eventos.</li>
                    </ul>
                </aside>

                <form class="formulario" action="#" method="post">

                    <fieldset>
                        <legend>Dados pessoais</legend>

                        <div class="form-grid">

                            <div class="campo campo--duplo">
                                <label for="nome">
                                    Nome completo
                                </label>

                                <input
                                    type="text"
                                    id="nome"
                                    name="nome"
                                    autocomplete="name"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="email">
                                    E-mail
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    autocomplete="email"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="data-nascimento">
                                    Data de nascimento
                                </label>

                                <input
                                    type="date"
                                    id="data-nascimento"
                                    name="data-nascimento"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="cpf">
                                    CPF
                                </label>

                                <input
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    inputmode="numeric"
                                    autocomplete="off"
                                    pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                                    placeholder="000.000.000-00"
                                    title="Digite o CPF no formato 000.000.000-00"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="telefone">
                                    Telefone
                                </label>

                                <input
                                    type="tel"
                                    id="telefone"
                                    name="telefone"
                                    autocomplete="tel"
                                    pattern="\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}"
                                    placeholder="(11) 99999-9999"
                                    title="Digite o telefone no formato (11) 99999-9999"
                                    required
                                >
                            </div>

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Endereço</legend>

                        <div class="form-grid">

                            <div class="campo">
                                <label for="cep">
                                    CEP
                                </label>

                                <input
                                    type="text"
                                    id="cep"
                                    name="cep"
                                    inputmode="numeric"
                                    autocomplete="postal-code"
                                    pattern="[0-9]{5}-[0-9]{3}"
                                    placeholder="00000-000"
                                    title="Digite o CEP no formato 00000-000"
                                    required
                                >
                            </div>

                            <div class="campo campo--duplo">
                                <label for="endereco">
                                    Endereço
                                </label>

                                <input
                                    type="text"
                                    id="endereco"
                                    name="endereco"
                                    autocomplete="address-line1"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="cidade">
                                    Cidade
                                </label>

                                <input
                                    type="text"
                                    id="cidade"
                                    name="cidade"
                                    autocomplete="address-level2"
                                    required
                                >
                            </div>

                            <div class="campo">
                                <label for="estado">
                                    Estado
                                </label>

                                <select
                                    id="estado"
                                    name="estado"
                                    autocomplete="address-level1"
                                    required
                                >
                                    <option value="">Selecione</option>
                                    <option value="AC">Acre</option>
                                    <option value="AL">Alagoas</option>
                                    <option value="AP">Amapá</option>
                                    <option value="AM">Amazonas</option>
                                    <option value="BA">Bahia</option>
                                    <option value="CE">Ceará</option>
                                    <option value="DF">Distrito Federal</option>
                                    <option value="ES">Espírito Santo</option>
                                    <option value="GO">Goiás</option>
                                    <option value="MA">Maranhão</option>
                                    <option value="MT">Mato Grosso</option>
                                    <option value="MS">Mato Grosso do Sul</option>
                                    <option value="MG">Minas Gerais</option>
                                    <option value="PA">Pará</option>
                                    <option value="PB">Paraíba</option>
                                    <option value="PR">Paraná</option>
                                    <option value="PE">Pernambuco</option>
                                    <option value="PI">Piauí</option>
                                    <option value="RJ">Rio de Janeiro</option>
                                    <option value="RN">Rio Grande do Norte</option>
                                    <option value="RS">Rio Grande do Sul</option>
                                    <option value="RO">Rondônia</option>
                                    <option value="RR">Roraima</option>
                                    <option value="SC">Santa Catarina</option>
                                    <option value="SP">São Paulo</option>
                                    <option value="SE">Sergipe</option>
                                    <option value="TO">Tocantins</option>
                                </select>
                            </div>

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Como você deseja participar?</legend>

                        <div class="opcoes">

                            <label class="opcao">
                                <input
                                    type="radio"
                                    name="participacao"
                                    value="voluntario"
                                    required
                                >
                                <span>
                                    Trabalho voluntário
                                </span>
                            </label>

                            <label class="opcao">
                                <input
                                    type="radio"
                                    name="participacao"
                                    value="doador"
                                >
                                <span>
                                    Doação
                                </span>
                            </label>

                            <label class="opcao">
                                <input
                                    type="radio"
                                    name="participacao"
                                    value="outro"
                                >
                                <span>
                                    Outra forma de colaboração
                                </span>
                            </label>

                        </div>
                    </fieldset>

                    <fieldset>
                        <legend>Área de interesse</legend>

                        <div class="campo">
                            <label for="area">
                                Em qual atividade você gostaria de colaborar?
                            </label>

                            <select id="area" name="area">
                                <option value="">
                                    Selecione uma opção
                                </option>

                                <option value="leitura">
                                    Mediação de leitura
                                </option>

                                <option value="games">
                                    Monitoria de videogames
                                </option>

                                <option value="biblioteca">
                                    Organização da biblioteca
                                </option>

                                <option value="manutencao">
                                    Manutenção de equipamentos
                                </option>

                                <option value="eventos">
                                    Organização de eventos
                                </option>

                                <option value="outro">
                                    Outra atividade
                                </option>
                            </select>
                        </div>

                        <div class="campo">
                            <label for="mensagem">
                                Conte um pouco sobre como gostaria de ajudar
                            </label>

                            <textarea
                                id="mensagem"
                                name="mensagem"
                                rows="6"
                            ></textarea>
                        </div>
                    </fieldset>

                    <label class="consentimento">
                        <input
                            type="checkbox"
                            id="consentimento"
                            name="consentimento"
                            required
                        >

                        <span>
                            Concordo com o envio dos meus dados para contato
                            da Checkpoint Literário.
                        </span>
                    </label>

                    <button
                        class="botao botao--primario"
                        type="submit"
                    >
                        Enviar cadastro
                    </button>

                </form>

            </div>
        </section>

    </div>
  `;
}
