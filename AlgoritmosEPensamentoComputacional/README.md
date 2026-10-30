# Algoritmos e Pensamento Computacional

Repositório de projetos práticos desenvolvidos durante a disciplina de **Algoritmos e Pensamento Computacional**, do curso de **Sistemas de Informação da Universidade Cruzeiro do Sul**.

As atividades têm como objetivo aplicar conceitos fundamentais de programação utilizando a linguagem C, incluindo variáveis, operadores, estruturas condicionais, laços de repetição, funções e estruturas de dados.

## Projetos desenvolvidos

### 01 — Monitoramento de Preços da Cesta Básica

Sistema para registrar e comparar os preços de três produtos da cesta básica, calculando a variação percentual de cada item.

**Conceitos aplicados:**
- Variáveis e tipos de dados
- Operadores aritméticos
- Estruturas condicionais
- Cálculos percentuais
- Entrada e saída de dados

[Ver projeto — Cesta Básica](./atividade-01-cesta-basica/)

### 02 — Cardápio Digital

Sistema interativo de pedidos para uma hamburgueria, permitindo selecionar produtos de um cardápio e calcular o valor total da compra.

**Conceitos aplicados:**
- Estruturas condicionais com `switch`
- Laços de repetição com `do-while`
- Acumuladores
- Validação de entradas
- Organização de menus no terminal

[Ver projeto — Cardápio Digital](./atividade-02-cardapio-digital/)

### 03 — Controle de Almoços

Sistema para registrar a quantidade de almoços servidos durante os sete dias da semana, gerando um relatório com o total semanal e a média diária.

**Conceitos aplicados:**
- Vetores (`arrays`)
- Laços de repetição com `for` e `while`
- Estruturas condicionais
- Validação de entradas
- Cálculo de total e média
- Formatação de relatórios no terminal

[Ver projeto — Controle de Almoços](./atividade-03-controle-almocos/)

## Tecnologias utilizadas

- **Linguagem:** C
- **Compilador:** GCC
- **Padrão:** C11
- **Ambiente:** Linux
- **Interface:** Terminal (CLI)

## Como executar os projetos

Clone o repositório e navegue até a pasta da atividade desejada.

Para compilar um dos programas:

```bash
gcc -std=c11 -Wall -Wextra -Wpedantic main.c -o programa
```

Para executar:

```bash
./programa
```

Cada projeto possui seu próprio `README.md` com informações sobre suas funcionalidades e implementação.

## Estrutura do repositório

```text
AlgoritmosEPensamentoComputacional/
├── atividade-01-cesta-basica/
│   ├── main.c
│   └── README.md
├── atividade-02-cardapio-digital/
│   ├── main.c
│   └── README.md
├── atividade-03-controle-almocos/
│   ├── main.c
│   └── README.md
└── README.md
```

## Objetivo acadêmico

Consolidar os fundamentos da programação por meio de aplicações práticas que simulam situações do cotidiano, desenvolvendo habilidades de resolução de problemas, organização de código e pensamento computacional.

---

**Curso:** Sistemas de Informação  
**Instituição:** Universidade Cruzeiro do Sul  
**Disciplina:** Algoritmos e Pensamento Computacional