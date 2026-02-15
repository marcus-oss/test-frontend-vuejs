/**
 * @module composables/useMovieSearch
 * @description Composable para gerenciar a lógica de busca com debounce.
 */

import { ref, watch } from 'vue';
import { fetchMovies } from '@/services/api';
import debounce from 'lodash/debounce';

/**
 * Hook de busca de filmes.
 * * @returns {Object} Objeto contendo o estado reativo do input.
 * @property {import('vue').Ref<string>} searchTerm - Ref reativa vinculada ao input de busca.
 */
export function useMovieSearch() {
  const searchTerm = ref('');

  /**
   * Executa a busca na API com atraso (debounce).
   * @param {string} query - O termo digitado pelo usuário.
   */
  const performSearch = debounce(async (query) => {
    // Lógica interna...
  }, 500);

  return { searchTerm };
}
