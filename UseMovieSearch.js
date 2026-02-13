import { ref, watch } from 'vue';
import { searchMoviesInApi } from '@/services/movieService';
import { useMovieStore } from '@/stores/movieStore';
import debounce from 'lodash/debounce';

export function useMovieSearch() {
  const store = useMovieStore();
  const searchInput = ref('');

  // Performance: Debounce de 500ms
  const handleSearch = debounce(async (query) => {
    if (!query.trim()) {
      store.movies = [];
      return;
    }

    store.isLoading = true;
    store.errorMessage = null;

    try {
      const results = await searchMoviesInApi(query);
      store.movies = results;
    } catch (error) {
      // Tratamento de Erro: Feedback claro para o usuário
      store.errorMessage = "Filme não encontrado ou erro na conexão.";
      store.movies = [];
    } finally {
      store.isLoading = false;
    }
  }, 500);

  watch(searchInput, (newValue) => handleSearch(newValue));

  return { searchInput };
}
