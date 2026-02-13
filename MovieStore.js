import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useMovieStore = defineStore('movie', () => {
  const movies = ref([]);
  const favorites = ref([]);
  const isLoading = ref(false);
  const errorMessage = ref(null);

  // Getter para verificar se um filme é favorito (Reatividade Instantânea)
  const isFavorite = (id) => favorites.value.some(m => m.imdbID === id);

  const toggleFavorite = (movie) => {
    const index = favorites.value.findIndex(m => m.imdbID === movie.imdbID);
    index > -1 ? favorites.value.splice(index, 1) : favorites.value.push(movie);
  };

  return { movies, favorites, isLoading, errorMessage, isFavorite, toggleFavorite };
});
