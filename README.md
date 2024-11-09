# Sistema de Agendamento de Suporte Técnico de TI

Este projeto é um sistema de agendamento de chamados para suporte técnico de TI, desenvolvido como Trabalho de Conclusão de Curso (TCC) de Sistemas de Informação. Ele permite que clientes solicitem suporte técnico e acompanhem o andamento dos chamados, enquanto os técnicos (administradores) gerenciam e atualizam o status de cada atendimento.

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Contribuição](#contribuição)

## Sobre o Projeto

Este sistema foi criado para facilitar o gerenciamento de solicitações de suporte técnico em uma empresa fictícia de TI. A plataforma oferece uma interface simples e prática tanto para clientes, que podem criar e acompanhar chamados, quanto para técnicos, que podem monitorar e atualizar o status das solicitações através da "Área Técnica".

## Funcionalidades

- **Login de Administrador**: Apenas técnicos têm acesso a funções administrativas, como atualização do status dos chamados.
- **Formulário de Solicitação de Suporte**: Clientes podem criar novos chamados detalhando seu problema.
- **Acompanhamento de Chamado**: Clientes podem visualizar o andamento do chamado a qualquer momento.
- **Gestão de Chamados**: Técnicos podem ver todas as solicitações, atualizar o status e adicionar observações.

## Tecnologias Utilizadas

- **Front-end**: [React](https://reactjs.org/) - biblioteca para construção da interface.
- **Estilização**: [Styled-components](https://styled-components.com/) - biblioteca para estilização dos componentes.
- **Banco de Dados**: [Firebase](https://firebase.google.com/) - armazenamento de dados.
- **UI e Componentes**:
  - **Material-UI**: Utilizado para componentes de interface.
  - **Bootstrap** e **React-Bootstrap**: Para estruturação e responsividade.
- **Outras Dependências**:
  - **React Router Dom**: Para roteamento entre páginas.
  - **Moment.js**: Para manipulação de datas.
  - **Recharts**: Para visualização de dados.
  - **React-Phone-Number-Input**: Para entrada de números de telefone.

## Como Usar

1. **Cliente**: Acesse o site, preencha o formulário de solicitação de suporte e acompanhe o andamento de seus chamados.
2. **Técnico**: Faça login como administrador para acessar a lista de chamados, atualizar o status dos atendimentos e gerenciar as solicitações de suporte.
