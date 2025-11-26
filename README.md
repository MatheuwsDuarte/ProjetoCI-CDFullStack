# Projeto: Engenharia Web e DevOps - CI/CD e Testes

[![Deploy React (Vite) App to GitHub Pages](https://github.com/MatheuwsDuarte/ProjetoCI-CDFullStack/actions/workflows/deploy.yml/badge.svg)](https://github.com/MatheuwsDuarte/ProjetoCI-CDFullStack/actions/workflows/deploy.yml)

Este repositório contém a implementação prática das atividades da disciplina de **Engenharia Web e DevOps**. O objetivo foi configurar uma esteira completa de desenvolvimento de software, partindo de uma aplicação React (Vite) até a entrega contínua com garantia de qualidade.

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)

---

## 🚀 Projeto 1: Implementação de CI/CD

Nesta etapa, foi configurado um pipeline de **Integração Contínua e Entrega Contínua (CI/CD)** utilizando o **GitHub Actions**.

### Funcionalidades da Esteira:
- **Trigger:** A esteira é ativada automaticamente a cada `push` na branch `main`.
- **Ambiente:** Configuração automática de ambiente Linux (Ubuntu) e Node.js.
- **Instalação:** Gerenciamento de dependências do projeto.
- **Build:** Transpilação do projeto React/Vite para arquivos estáticos prontos para produção.
- **Deploy:** Publicação automática no **GitHub Pages**.

---

## 🧪 Projeto 2: Testes Automatizados de Software

Nesta etapa, foi definida e implementada uma estratégia de testes para garantir a qualidade do código antes do deploy.

### Estratégia de Teste:
- **Nível:** Teste Unitário / Componente.
- **Ferramentas:** Vitest, React Testing Library e jsdom.
- **Escopo:** Verificação da renderização correta do componente principal (`App.jsx`) e presença de elementos chaves na tela.

### Quality Gate (Portão de Qualidade):
A execução dos testes foi integrada ao pipeline do GitHub Actions.
1. O GitHub Actions roda os testes (`npm run test`) **antes** de tentar fazer o build.
2. **Se os testes falharem:** O pipeline é interrompido imediatamente e o deploy é cancelado, prevenindo que código com erro chegue à produção.
3. **Se os testes passarem:** O pipeline segue para o Build e Deploy.

---

## 🛠️ Tecnologias Utilizadas

- **Front-end:** React.js + Vite
- **CI/CD:** GitHub Actions
- **Hospedagem:** GitHub Pages
- **Testes:** Vitest + React Testing Library

## 📦 Como rodar localmente

Clone o projeto e entre na pasta:

```bash
git clone [https://github.com/MatheuwsDuarte/ProjetoCI-CDFullStack.git](https://github.com/MatheuwsDuarte/ProjetoCI-CDFullStack.git)
cd ProjetoCI-CDFullStack
