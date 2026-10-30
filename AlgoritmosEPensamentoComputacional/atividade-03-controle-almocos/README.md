# 🍽️ Controle de Almoços — Linguagem C

Sistema de terminal desenvolvido em linguagem C para registrar e analisar a quantidade de almoços servidos durante os sete dias da semana.

O projeto faz parte da **Experiência Prática III** da disciplina de Algoritmos e Pensamento Computacional, do curso de Sistemas de Informação da Universidade Cruzeiro do Sul.

## Funcionalidades

- Registro da quantidade de almoços servidos em cada dia da semana.
- Armazenamento das informações em um vetor de 7 posições.
- Validação de entradas não numéricas e valores negativos.
- Exibição de um relatório organizado por dia.
- Cálculo do total semanal de almoços.
- Cálculo da média diária de almoços (desafio bônus).

## Tecnologias

- Linguagem C
- GCC
- Padrão C11
- Interface de linha de comando (CLI)

## Conceitos aplicados

| Conceito | Aplicação |
|---|---|
| Arrays | Armazenamento dos dados dos sete dias |
| `for` | Leitura, processamento e exibição |
| `if` | Validação de dados |
| Funções | Separação da rotina de entrada |
| `fgets()` | Leitura de dados do terminal |
| `strtol()` | Conversão e validação de números |
| Casting | Cálculo de média com casas decimais |
| `printf()` | Exibição do relatório |

## Como executar

### Pré-requisitos

É necessário ter o GCC instalado.

Em Ubuntu ou sistemas derivados:

```bash
sudo apt update
sudo apt install build-essential
```

### Compilação

Execute no diretório do projeto:

```bash
gcc -std=c11 -Wall -Wextra -Wpedantic main.c -o controle-almocos
```

### Execução

```bash
./controle-almocos
```

## Exemplo de saída

```text
========== RELATORIO SEMANAL ==========

Segunda-feira   : 120 almocos
Terca-feira     : 135 almocos
Quarta-feira    : 140 almocos
Quinta-feira    : 125 almocos
Sexta-feira     : 160 almocos
Sabado          : 180 almocos
Domingo         : 85 almocos

=======================================
Total semanal: 945 almocos
Media diaria: 135.00 almocos
=======================================
```

## Estrutura do projeto

```text
atividade-03-controle-almocos/
├── main.c
├── README.md
└── .gitignore
```

## Possíveis melhorias

- [ ] Permitir o registro de várias semanas.
- [ ] Identificar os dias com maior e menor consumo.
- [ ] Exportar os resultados para um arquivo CSV.
- [ ] Adicionar gráficos para visualizar o consumo.
- [ ] Implementar testes automatizados.
- [ ] Tratar adequadamente entradas maiores que o buffer e possíveis overflows no acumulador.

## Contexto acadêmico

**Curso:** Sistemas de Informação  
**Instituição:** Universidade Cruzeiro do Sul  
**Disciplina:** Algoritmos e Pensamento Computacional  
**Atividade:** Experiência Prática III — Utilização de Vetores e Matrizes em Linguagem C

Projeto educacional desenvolvido para praticar armazenamento sequencial de dados, laços de repetição e processamento de informações.