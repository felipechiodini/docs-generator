---
sidebar_position: 5
---

# Padrões e convenções

Este documento define convenções para manter consistência desde o início do projeto.

## Código

- Aplicar princípios de coesão e baixo acoplamento.
- Manter métodos curtos e com objetivo único.
- Priorizar clareza de nomes sobre abreviações.

## Controllers

- Validar entrada e delegar para serviços.
- Não concentrar regra de negócio em controller.

## Models

- Centralizar regras do domínio.
- Evitar dependência de camada de apresentação.

## Views

- Manter foco em renderização.
- Evitar lógica de negócio na camada visual.

## Tratamento de erros

- Retornar mensagens consistentes para o cliente.
- Registrar erros relevantes para diagnóstico.

## Qualidade

- Adotar revisão de código por pull request.
- Criar testes para fluxos críticos desde o MVP.
