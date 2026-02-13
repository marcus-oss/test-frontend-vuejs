import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useMovieStore = defineStore('movie', () => {
  const movies = ref([]);
  const favorites = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const setMovies = (data) => (movies.value = data);
  
  const toggleFavorite = (movie) => {
    const index = favorites.value.findIndex(m => m.imdbID === movie.imdbID);
    if (index > -1) {
      favorites.value.splice(index, 1);
    } else {
      favorites.value.push(movie);
    }
  };

  return { movies, favorites, loading, error, setMovies, toggleFavorite };
});
