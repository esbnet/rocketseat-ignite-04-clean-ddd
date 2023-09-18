# DDD (Domain-drive Design)

Aqui temos uma API para um sistema de forum totalmente funcional escrita para a aplicação de padrões e métodos de desenvolvimentos 

Design dirigido à domínio

## Domínio

- Domain Experts
  - Conversa
- Linguagem ubíqua

- Usuário
  - Cliente
  - Fornecedor
  - Atendente
  - Barman

- Agregados
- Value Objects
- Eventso de domínio
- Subdomínios ( Bounded Contexts )
- Entidades
- Caso de uso


# Conceitos

- Patterns
  - Aggregate
  - WhatchedList

## Subdomínios

### Core: O que dá dinheiro
  - Compra
  - Catálogo
  - Pagamento
  - Entrega

### Supporting - Dá suporte para o core funcionar
  - Estoque
  
### Generic - É necessário, mas não são tão importantes
  - Notificação ao cliente
  - Promoção
  - Chat
