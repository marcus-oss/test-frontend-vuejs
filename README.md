# 🎥 MovieWise - Mini Dashboard de Filmes

O **MovieWise** é uma aplicação Single Page (SPA) desenvolvida para o teste técnico de Front-end, utilizando o ecossistema mais moderno do **Vue.js 3**. A aplicação permite a busca de filmes em tempo real, exibição de detalhes e gerenciamento de favoritos, com foco total em performance e código limpo.



---

## 🛠️ Tecnologias e Decisões Técnicas

- **Vue 3 (Composition API):** Utilizado para uma melhor organização de lógica e reutilização de código.
- **Vite:** Escolhido como build tool pela sua velocidade superior no desenvolvimento.
- **Pinia:** Gerenciamento de estado global para garantir que os "Favoritos" sejam persistentes e reativos em toda a aplicação.
- **Tailwind CSS:** Utilizado para um design moderno, responsivo e suporte nativo ao **Dark Mode**.
- **JSDoc + Minami Theme:** Documentação técnica das classes e funções, gerando um portal estático para consulta.
- **Vitest:** Framework de testes unitários integrado ao Vite para garantir a qualidade dos componentes.

---

## 🚀 Funcionalidades Principais (Critérios de Avaliação)

1.  **Busca com Debounce:** Implementada no composable `useMovieSearch`, aguarda 500ms após a última tecla para disparar a API, economizando recursos e evitando travamentos.
2.  **Componentização Avançada:** Separação clara entre `MovieCard` (apresentação) e `MovieGrid` (lógica de lista/layout).
3.  **Tratamento de Erros e Estados:** A interface gerencia estados de `Loading`, `Error` (filme não encontrado ou falha de conexão) e `Empty State`.
4.  **Reatividade Instantânea:** O botão de favoritos reflete as mudanças imediatamente na UI graças ao estado reativo do Pinia.
5.  **Clean Code:** Código documentado, variáveis semânticas e separação de responsabilidades (Services, Stores, Composables).

---

## 📖 Documentação Técnica

Este projeto utiliza **JSDoc** com o tema **Minami** para documentar a lógica de negócio. Para visualizar a documentação das classes:

1.  Rode o comando: `npm run docs`
2.  Abra o arquivo `docs/index.html` no seu navegador.

-- 
## Estrutura do Projeto
src/
 ├── components/     # Componentes visualmente isolados (UI)
 ├── composables/    # Lógica reativa reutilizável (Busca/Debounce)
 ├── services/       # Integração com Axios e OMDb API
 ├── stores/         # Estado global com Pinia (Filmes e Favoritos)
 ├── __tests__/      # Testes unitários com Vitest



---

## 🧪 Como Executar o Projeto

### 1. Pré-requisitos
- Node.js (versão 18 ou superior)
- Uma chave da [OMDb API](http://www.omdbapi.com/apikey.aspx)

### 2. Instalação
```bash
# Clone o repositório
git clone [https://github.com/seu-usuario/moviewise-dashboard.git](https://github.com/seu-usuario/moviewise-dashboard.git)

# Entre na pasta
cd moviewise-dashboard

# Instale as dependências
npm install
# Iniciar servidor de desenvolvimento
npm run dev

# Rodar testes unitários
npm run test:unit

# Gerar documentação JSDoc
npm run docs

Desenvolvido com ☕ e Vue.js 
