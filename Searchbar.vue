<template>
  <div class="relative max-w-2xl mx-auto mb-12">
    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl">🔍</span>
    <input 
      v-model="searchInput"
      type="text" 
      placeholder="Busque por títulos (ex: Matrix, Star Wars...)"
      class="w-full bg-gray-900 border-2 border-gray-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:border-indigo-500 focus:outline-none transition-all shadow-2xl"
    />
    <div v-if="isLoading" class="absolute right-4 top-1/2 -translate-y-1/2">
      <div class="animate-spin h-5 w-5 border-2 border-indigo-500 border-t-transparent rounded-full"></div>
    </div>
  </div>
</template>

<script setup>
import { useMovieSearch } from '@/composables/useMovieSearch';
import { useMovieStore } from '@/stores/movieStore';
import { storeToRefs } from 'pinia';

const { searchInput } = useMovieSearch();
const store = useMovieStore();
const { isLoading } = storeToRefs(store); // Mantém a reatividade ao desestruturar
</script>
