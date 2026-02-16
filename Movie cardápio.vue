<template>
  <div class="flex flex-col bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-indigo-500 transition-all">
    
    <div class="aspect-[2/3] w-full relative overflow-hidden bg-gray-800">
      <img 
        :src="movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'" 
        class="w-full h-full object-cover shadow-inner"
        loading="lazy"
      />
    </div>

    <div class="p-3 md:p-4 flex flex-col flex-grow">
      <h3 class="text-white font-bold text-base md:text-lg line-clamp-1">
        {{ movie.Title }}
      </h3>
      <p class="text-gray-500 text-xs md:text-sm">{{ movie.Year }}</p>
      
      <button 
        @click="$emit('toggle-favorite', movie)"
        class="mt-auto pt-4 w-full text-sm font-medium transition-colors"
        :class="isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-indigo-400'"
      >
        {{ isFavorite ? '★ Favorito' : '☆ Favoritar' }}
      </button>
    </div>
  </div>
</template>
