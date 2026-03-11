---
sidebar_position: 3
---

# Arquitetura MVC

A aplicação seguirá o padrão **MVC**, separando responsabilidades para melhorar legibilidade, teste e manutenção.

## Model

Responsável por:

- representar entidades e regras de negócio;
- validar dados de domínio;
- interagir com repositórios e camada de persistência.

## View

Responsável por:

- renderizar dados para o usuário;
- exibir feedback de sucesso/erro;
- manter consistência visual da interface.

## Controller

Responsável por:

- receber requisições;
- acionar serviços e modelos;
- preparar respostas para a camada de apresentação.

## Fluxo de requisição

1. A requisição chega na rota.
2. O controller processa entrada e chama o domínio.
3. O model executa regras e acessa dados.
4. O resultado retorna ao controller.
5. A view renderiza a resposta final.

## Princípios adotados

- Responsabilidade única por camada.
- Regras de negócio fora da view.
- Controllers finos e objetivos.
- Evolução orientada a módulos.
