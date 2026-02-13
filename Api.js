import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.omdbapi.com/',
  params: {
    apikey: '',
  },
});

export const fetchMovies = async (query) => {
  const { data } = await api.get('', { params: { s: query } });
  if (data.Response === "False") throw new Error(data.Error);
  return data.Search;
};
