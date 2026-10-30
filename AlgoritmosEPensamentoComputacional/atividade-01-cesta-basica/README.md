# Monitoramento de preços da cesta básica

Aplicação de terminal em **linguagem C**, desenvolvida para a **Experiência Prática I** da disciplina **Algoritmos e Pensamento Computacional**, do curso de Sistemas de Informação da Universidade Cruzeiro do Sul.

O objetivo é analisar a evolução de preços de **três produtos da cesta básica** entre dois meses e identificar se cada preço aumentou, diminuiu ou permaneceu estável.

## Funcionalidades

- Leitura do nome, preço anterior e preço atual de três produtos.
- Cálculo da variação percentual de cada produto.
- Classificação do resultado em **AUMENTO**, **QUEDA** ou **ESTÁVEL**.
- Exibição de relatório com preços, variação percentual e situação.
- Validação de nomes vazios, entradas não numéricas, valores negativos e preço anterior igual a zero.
- Aceita ponto ou vírgula como separador decimal na entrada.

## Cálculo

A variação percentual é calculada por:

```text
variacao = ((preco_atual - preco_anterior) / preco_anterior) * 100
```

- Resultado positivo: aumento.
- Resultado negativo: queda.
- Resultado zero: estabilidade.

O preço anterior precisa ser **maior que zero** para evitar divisão por zero. A classificação compara os preços informados diretamente.

## Tecnologias e conceitos

- **C11** e **GCC**
- `struct` e arrays para organizar os três produtos
- Funções para leitura e validação
- `for` e `if/else`
- `fgets()` e `strtod()` para entrada de dados
- `printf()` para apresentação do relatório

## Como compilar e executar

No Ubuntu/Pop!_OS, instale o compilador caso seja necessário:

```bash
sudo apt update
sudo apt install build-essential
```

Na pasta deste projeto:

```bash
gcc -std=c11 -Wall -Wextra -Wpedantic main.c -o cesta-basica
./cesta-basica
```

## Exemplo

Entradas:

| Produto | Mês anterior | Mês atual |
|---|---:|---:|
| Arroz | R$ 20,00 | R$ 25,00 |
| Feijão | R$ 10,00 | R$ 8,00 |
| Leite | R$ 5,00 | R$ 5,00 |

Saída esperada (resumo):

```text
Produto 1: Arroz
Variacao:       +25.00%
Situacao:       AUMENTO

Produto 2: Feijao
Variacao:       -20.00%
Situacao:       QUEDA

Produto 3: Leite
Variacao:       +0.00%
Situacao:       ESTAVEL
```

> A saída usa ponto decimal, independentemente de a entrada aceitar vírgula. Os acentos foram omitidos nas mensagens do terminal para facilitar a execução em diferentes ambientes.

## Limitações e possíveis melhorias

Este é um projeto educacional, não uma ferramenta para determinar se um aumento de preço é abusivo. Essa avaliação exigiria critérios e dados adicionais.

- [ ] Persistir o histórico dos preços em arquivo.
- [ ] Permitir quantidade variável de produtos.
- [ ] Criar testes automatizados.
- [ ] Representar preços em centavos inteiros ou com aritmética decimal apropriada para cálculos monetários exatos.
- [ ] Exportar relatórios em CSV.

## Contexto acadêmico

**Disciplina:** Algoritmos e Pensamento Computacional  
**Atividade:** Experiência Prática I — Monitoramento de preços da cesta básica  
**Instituição:** Universidade Cruzeiro do Sul

A implementação em C expande o pseudocódigo e o fluxograma solicitados originalmente na atividade, mantendo os mesmos requisitos funcionais.