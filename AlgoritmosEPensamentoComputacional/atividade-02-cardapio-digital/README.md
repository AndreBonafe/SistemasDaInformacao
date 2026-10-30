# 🍔 Cardápio Digital — Linguagem C

Sistema de cardápio interativo desenvolvido em linguagem C como parte da disciplina **Algoritmos e Pensamento Computacional**, do curso de Sistemas de Informação da Universidade Cruzeiro do Sul.

O projeto foi criado para praticar estruturas de decisão, laços de repetição, manipulação de variáveis e validação de entradas através de uma aplicação simples de terminal.

## Funcionalidades

- Exibição de um cardápio interativo de hamburgueria.
- Seleção de produtos por meio de opções numéricas.
- Adição de múltiplos produtos ao pedido.
- Cálculo acumulado do valor total.
- Tratamento de opções inválidas e entradas não numéricas.
- Finalização do pedido com exibição do valor total.

## Tecnologias utilizadas

- **Linguagem:** C
- **Compilador:** GCC
- **Padrão:** C11
- **Interface:** Terminal (CLI)

## Estruturas e conceitos aplicados

| Conceito | Aplicação |
|---|---|
| `do-while` | Mantém o cardápio ativo até a finalização |
| `switch/case` | Processa as opções selecionadas |
| `if` | Valida a entrada do usuário |
| `scanf()` | Captura as opções digitadas |
| `printf()` | Exibe mensagens e resultados |
| `break` | Encerra a execução de um `case` |
| `continue` | Reinicia o laço após entradas inválidas |
| `getchar()` | Descarta caracteres inválidos da entrada |
| `double` | Armazena o valor acumulado do pedido |

## Cardápio

| Produto | Preço |
|---|---:|
| X-Burger | R$ 18,00 |
| X-Salada | R$ 22,00 |
| Batata Frita | R$ 12,00 |
| Refrigerante | R$ 7,00 |

O usuário pode selecionar quantos produtos desejar. O sistema acumula os valores até que a opção de finalizar seja escolhida.

## Como executar

### Pré-requisitos

É necessário possuir um compilador C instalado, como o GCC.

Em sistemas Ubuntu ou derivados:

```bash
sudo apt update
sudo apt install build-essential
```

### Compilação

No diretório do projeto, execute:

```bash
gcc -std=c11 -Wall -Wextra -Wpedantic main.c -o cardapio
```

### Execução

```bash
./cardapio
```

## Exemplo de utilização

```text
========== CARDAPIO DIGITAL ==========
1 - X-Burger ........ R$ 18,00
2 - X-Salada ........ R$ 22,00
3 - Batata Frita .... R$ 12,00
4 - Refrigerante .... R$  7,00
5 - Finalizar pedido
======================================
Escolha uma opcao: 1

X-Burger adicionado ao pedido!

Escolha uma opcao: 4

Refrigerante adicionado ao pedido!

Escolha uma opcao: 5

Pedido finalizado!

====================================
       RESUMO DO PEDIDO
====================================
Total do pedido: R$ 25.00
Obrigado pela preferencia!
Sistema encerrado com sucesso.
```

*Exemplo ilustrativo: o programa apresenta novamente o cardápio entre as escolhas.*

## Validação de entradas

O sistema possui validações básicas para evitar o processamento de escolhas inválidas.

- Entradas não numéricas são identificadas através do retorno de `scanf()`.
- Caracteres inválidos são descartados para permitir uma nova tentativa.
- Opções inexistentes são tratadas pelo `default` do `switch`.
- O menu continua disponível após escolhas inválidas.

**Limitação conhecida:** entradas parcialmente numéricas, como `2abc`, ainda podem ser aceitas. Uma evolução possível seria utilizar `fgets()` e `strtol()` para validar a linha completa.

## Possíveis melhorias

- [ ] Permitir selecionar quantidades de cada produto.
- [ ] Exibir um resumo detalhado dos itens escolhidos.
- [ ] Implementar remoção de produtos do pedido.
- [ ] Adicionar testes automatizados.
- [ ] Melhorar a validação de entradas com `fgets()` e `strtol()`.
- [ ] Representar valores monetários em centavos inteiros para evitar imprecisões de ponto flutuante.

## Contexto acadêmico

**Curso:** Sistemas de Informação  
**Instituição:** Universidade Cruzeiro do Sul  
**Disciplina:** Algoritmos e Pensamento Computacional  
**Atividade:** Experiência Prática II — Estruturas de Decisão, Controle e Repetição em Linguagem C

O projeto tem finalidade educacional, com foco na aplicação prática dos fundamentos de programação estruturada.