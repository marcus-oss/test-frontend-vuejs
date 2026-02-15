<script setup>
import MovieCard from './MovieCard.vue';
import { useMovieStore } from '@/stores/movieStore';

const store = useMovieStore();
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    <MovieCard 
      v-for="movie in store.movies" 
      :key="movie.imdbID" 
      :movie="movie"
      :is-favorite="store.isFavorite(movie.imdbID)"
      @toggle-favorite="store.toggleFavorite"
    />
  </div>
</template>
