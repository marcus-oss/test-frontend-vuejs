<template>
  <div class="min-h-screen bg-gray-950 text-gray-100 p-6">
    <header class="max-w-6xl mx-auto text-center mb-10">
      <h1 class="text-4xl font-extrabold text-indigo-500 mb-2">MovieWise</h1>
      <p class="text-gray-400">Encontre seus filmes favoritos em segundos.</p>
      
      <div class="mt-6 max-w-md mx-auto relative">
        <input 
          v-model="searchTerm"
          type="text" 
          placeholder="Digite o nome do filme..."
          class="w-full bg-gray-900 border border-gray-700 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        <span v-if="loading" class="absolute right-4 top-3 text-indigo-400 animate-pulse">⏳</span>
      </div>
    </header>

    <main class="max-w-6xl mx-auto">
      <div v-if="movies.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <MovieCard 
          v-for="movie in movies" 
          :key="movie.imdbID" 
          :movie="movie" 
        />
      </div>

      <div v-else-if="!loading" class="text-center py-20 bg-gray-900 rounded-xl border border-dashed border-gray-700">
        <p class="text-gray-500">Nenhum filme encontrado. Tente buscar por "Batman" ou "Avengers".</p>
      </div>
  <template>
  <div class="p-8 bg-gray-950 min-h-screen text-white">
    <input v-model="searchInput" placeholder="Busque um filme..." class="..." />
    <div v-if="store.isLoading" class="text-indigo-400">Buscando filmes...</div>
    <div v-if="store.errorMessage" class="bg-red-900/20 border border-red-500 p-4 rounded text-red-500">
      {{ store.errorMessage }}
    </div>
    <MovieGrid v-else />
  </div>
  </template>  
    </main>
  </div>
</template>
