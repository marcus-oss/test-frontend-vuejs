/**
 * @module stores/movieStore
 * @description Gerenciamento de estado global da aplicação usando Pinia.
 */

export const useMovieStore = defineStore('movie', () => {
  /** @type {import('vue').Ref<Array>} Lista de filmes resultantes da busca. */
  const movies = ref([]);

  /** @type {import('vue').Ref<Array>} Lista de filmes marcados como favoritos. */
  const favorites = ref([]);

  /**
   * Alterna o estado de favorito de um filme.
   * Se o filme já existe na lista, ele é removido; caso contrário, é adicionado.
   * * @function toggleFavorite
   * @param {Object} movie - O objeto do filme a ser favoritado/removido.
   * @param {string} movie.imdbID - ID único do filme.
   */
  const toggleFavorite = (movie) => {
    // ...
  };

  return { movies, favorites, toggleFavorite };
});
