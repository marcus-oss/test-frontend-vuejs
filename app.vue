<template>
  <div class="min-h-screen bg-gray-950 px-4 py-8 md:px-8 lg:px-12">
    <header class="max-w-7xl mx-auto mb-10 text-center">
      <h1 class="text-3xl md:text-5xl font-black text-indigo-500 tracking-tight">
        MovieWise
      </h1>
      <p class="text-gray-400 mt-2 text-sm md:text-base">
        O seu dashboard de cinema responsivo.
      </p>
      
      <div class="mt-8 max-w-xl mx-auto">
        <input 
          v-model="searchInput"
          type="text" 
          placeholder="Busque um filme..."
          class="w-full bg-gray-900 border border-gray-800 rounded-xl px-5 py-3 text-white text-base focus:ring-2 focus:ring-indigo-500 outline-none"
        />
      </div>
    </header>

    <main class="max-w-7xl mx-auto">
      <MovieGrid />
    </main>
  </div>
</template>
