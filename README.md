# test-frontend-vuejs

## 🎥 Projeto: MovieWise - Mini Dashboard de Filmes

O objetivo é criar uma aplicação que consuma uma API pública de filmes, permita a busca.

### 🛠️ Requisitos Técnicos

* **Framework:** Vue.js 3 (Composition API preferencialmente).
* **Gerenciamento de Estado:** Pinia ou `reactive/ref` (para avaliar se ele sabe quando usar cada um).
* **Estilização:** CSS puro, Tailwind ou SCSS (deixe a escolha do candidato para ver o nível de capricho).
* **API Sugerida:** [OMDb API](http://www.omdbapi.com/) (Gratuita, requer apenas uma chave simples).

---

### 📝 O que o candidato deve entregar:

1. **Busca em Tempo Real:** Um campo de input que busca filmes conforme o usuário digita (bônus se implementar *debounce*).
2. **Lista de Resultados:** Exibir cards com o poster, título e ano do filme.

---

### 📂 Estrutura Sugerida (Para Avaliação)

Observe se o candidato organiza o projeto de forma escalável:

* `src/components/`: Componentes reutilizáveis (MovieCard, SearchBar).
* `src/composables/`: Lógica de busca ou favoritos extraída.
* `src/services/`: Configuração do Axios/Fetch.
* `src/stores/`: Se optar por Pinia.

---

### 🧐 Critérios de Avaliação (O que observar)

| Critério | O que demonstra? |
| --- | --- |
| **Componentização** | Ele separa a lógica do card da lógica da lista? |
| **Reatividade** | O estado de "favorito" atualiza instantaneamente na tela? |
| **Tratamento de Erros** | O que acontece se a API não retornar nada ou falhar? |
| **Performance** | Ele faz requisições a cada tecla digitada ou usa um atraso (*debounce*)? |
| **Clean Code** | Nomes de variáveis semânticos e código legível. |
