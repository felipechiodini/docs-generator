---
sidebar_position: 4
---

# Estrutura do projeto (proposta)

Abaixo, uma estrutura inicial sugerida para o projeto MVC.

```text
src/
  Controllers/
  Models/
  Views/
  Services/
  Repositories/
  Middlewares/
  Routes/
  Core/
public/
config/
storage/
tests/
```

## Responsabilidade por pasta

- **Controllers/**: entrada HTTP e coordenação do fluxo.
- **Models/**: entidades e regras de domínio.
- **Views/**: templates e componentes de apresentação.
- **Services/**: casos de uso e orquestração de negócio.
- **Repositories/**: persistência e consultas de dados.
- **Middlewares/**: validação transversal e controle de acesso.
- **Routes/**: mapeamento de endpoints para controllers.
- **Core/**: utilitários, abstrações e infraestrutura base.

## Convenções de organização

- Separar por contexto de domínio quando o projeto crescer.
- Evitar classes com múltiplas responsabilidades.
- Preferir nomes explícitos para arquivos e métodos.
