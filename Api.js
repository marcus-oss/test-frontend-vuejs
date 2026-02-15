/**
 * @fileoverview Serviço de integração com a API OMDb.
 * @module services/api
 */

import axios from 'axios';

/**
 * Instância configurada do Axios para comunicação com a OMDb.
 * @type {import('axios').AxiosInstance}
 */
const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: 'http://www.omdbapi.com/?apiKey=' //chave da api retorna pelo id,
  },
});

/**
 * Busca filmes por título através da API.
 * * @async
 * @function fetchMovies
 * @param {string} query - O termo de busca (título do filme).
 * @returns {Promise<Array<Object>>} Uma promessa que resolve em um array de objetos de filmes.
 * @throws {Error} Lança um erro caso a API retorne uma falha ou o filme não seja encontrado.
 */
export const fetchMovies = async (query) => {
  const { data } = await api.get('', { params: { s: query } });
  if (data.Response === "False") throw new Error(data.Error);
  return data.Search;
};
