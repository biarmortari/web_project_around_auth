# EUA Afora 🌎

## Descrição do Projeto

Este projeto, intitulado "Around the U.S.", é uma **plataforma interativa desenvolvida em React** que visa compartilhar fotos de diferentes lugares nos Estados Unidos. O objetivo é proporcionar aos visitantes uma experiência imersiva, permitindo que **compartilhem suas experiências, fotos e histórias** relacionadas a diferentes regiões do país.

Ele faz parte das últimas _sprints_ do bootcamp de Desenvolvimento Web da TripleTen, onde o foco foi a transição de JavaScript puro para o uso de uma biblioteca moderna como o **React** e a manutenção da **integração com a API** do servidor da TripleTen.

A aplicação utiliza React para:

- Construir interfaces dinâmicas e reativas.
- Gerenciar o estado de forma eficiente com _hooks_ (`useState`, `useEffect`).
- Promover a reutilização de componentes.
- Manter a conexão com o servidor para persistência de dados (CRUD).
- Criar rotas com redirecionamento para registro e login de usuários.

## Funcionalidades Implementadas

O projeto mantém as funcionalidades completas de uma aplicação moderna, agora implementadas com React:

✅ **Criação e Gerenciamento de Cartões:** Adição, visualização, curtidas e exclusão de cartões de imagem interativos.
✅ **Edição de Perfil:** Atualização de nome e descrição do usuário.
✅ **Interação com API:** O site consome a API do servidor da TripleTen para todas as operações de CRUD (_Create, Read, Update, Delete_).
✅ **Gerenciamento de Estado:** Uso de `useState` e `useEffect` para controle de componentes e reatividade da interface.
✅ **Autorização e autenticação:** Permite o registro e login de usuários.
✅ **UX Aprimorada:** Interface fluida e organizada, aproveitando a natureza declarativa do React.
✅ **Responsividade:** Design totalmente adaptável a diferentes tamanhos de tela (smartphones, tablets e desktops).

## Tecnologias e Boas Práticas

O desenvolvimento foi focado no uso eficiente das seguintes tecnologias e técnicas:

| Categoria       | Tecnologia/Técnica       | Descrição                                                                                                             |
| :-------------- | :----------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| **Framework**   | **React**                | Biblioteca JavaScript essencial para construção de interfaces dinâmicas e reativas, usando componentes reutilizáveis. |
| **Linguagem**   | **JSX (JavaScript XML)** | Facilita a escrita de componentes React, combinando JavaScript com a estrutura declarativa semelhante ao HTML.        |
| **Estilização** | **CSS Modularizado**     | Uso de **CSS Modules** para garantir o encapsulamento dos estilos e evitar conflitos globais entre classes.           |
| **Estrutura**   | **Organização Modular**  | Código estruturado de forma organizada, separando a lógica dos componentes e seguindo boas práticas de manutenção.    |
| **Web Vitals**  | **Estrutura Semântica**  | Manutenção da semântica HTML5, mesmo utilizando React, para acessibilidade e melhor organização do conteúdo.          |
| **Otimização**  | **Boas Práticas de SEO** | Inclusão de _metatags_ e estrutura de cabeçalho para otimizar a visibilidade em motores de busca.                     |

## Desafios enfrentados

Este projeto marcou a **transição do JavaScript puro para o React**, exigindo a reescrita de toda a lógica do DOM e do gerenciamento de estado para o modelo de componentes e _hooks_. O principal desafio foi:

- Dominar o **ciclo de vida dos componentes** e o uso correto de `useEffect` para sincronizar o estado da aplicação com a API externa.
- Garantir que todas as **funcionalidades de CRUD** fossem reimplementadas de forma eficiente e reativa no ecossistema React.

## Visite o site ao vivo

[**A aplicação foi implantada na Vercel e pode ser acessada aqui.**](https://webprojectaroundreact.vercel.app)
