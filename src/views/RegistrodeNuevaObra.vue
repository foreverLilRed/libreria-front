<template>
<div class="max-w-6xl mx-auto">
  <button @click="$router.push('/inventario-completo')" class="flex items-center gap-2 text-stone-400 hover:text-primary transition-colors mb-8 group">
    <span class="material-symbols-outlined text-sm">arrow_back</span>
    <span class="font-label text-[10px] tracking-widest uppercase">VOLVER AL CATÁLOGO</span>
  </button>

  <div class="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
    <div class="max-w-2xl">
      <h1 class="text-4xl font-headline font-light tracking-tight text-primary mb-4">Registro de Nueva Obra</h1>
      <p class="text-on-surface-variant font-light leading-relaxed">
        Incorpore un nuevo ejemplar al archivo digital del Santuario. Puede registrar manualmente o buscar en Open Library para importar datos automáticamente.
      </p>
    </div>
    <div class="flex gap-4">
      <button @click="$router.push('/inventario-completo')" class="px-8 py-3 rounded-md bg-surface-container-highest text-on-surface-variant font-medium text-sm hover:bg-outline-variant/30 transition-all duration-300">
        CANCELAR
      </button>
      <button @click="handleSave" :disabled="!form.title || !form.author" class="px-8 py-3 rounded-md bg-gradient-to-br from-primary to-primary-container text-on-primary font-medium text-sm shadow-xl shadow-primary/10 hover:opacity-90 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed">
        GUARDAR LIBRO
      </button>
    </div>
  </div>

  <!-- Success Message -->
  <div v-if="showSuccess" class="mb-8 p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 animate-fade-in">
    <span class="material-symbols-outlined text-emerald-600">check_circle</span>
    <p class="text-sm text-emerald-800 font-medium">Libro registrado exitosamente en el catálogo.</p>
    <button @click="showSuccess = false" class="ml-auto text-emerald-600 hover:text-emerald-800">
      <span class="material-symbols-outlined text-sm">close</span>
    </button>
  </div>

  <!-- Open Library Search Section -->
  <section class="mb-12">
    <div class="flex items-center gap-4 mb-6">
      <span class="w-8 h-[1px] bg-outline-variant"></span>
      <h3 class="font-headline text-xs font-bold tracking-[0.2em] text-secondary">BUSCAR EN OPEN LIBRARY</h3>
    </div>
    <div class="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 shadow-sm">
      <div class="flex gap-4 mb-6">
        <div class="relative flex-1">
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">search</span>
          <input
            v-model="apiSearchQuery"
            @keyup.enter="handleApiSearch"
            class="w-full pl-10 pr-4 py-3 bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:border-tertiary focus:ring-0 text-sm transition-all rounded-t-md placeholder:text-stone-300"
            placeholder="Buscar título, autor, ISBN en Open Library..."
            type="text"
          />
        </div>
        <button @click="handleApiSearch" :disabled="!apiSearchQuery.trim() || isSearching" class="px-6 py-3 bg-secondary text-on-secondary rounded-md text-sm font-semibold hover:brightness-110 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2">
          <svg v-if="isSearching" class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          {{ isSearching ? 'Buscando...' : 'Buscar' }}
        </button>
      </div>

      <!-- Search Error -->
      <div v-if="searchError" class="p-4 bg-error-container/20 rounded-lg flex items-center gap-3 mb-4">
        <span class="material-symbols-outlined text-error text-sm">error</span>
        <p class="text-sm text-error">{{ searchError }}</p>
      </div>

      <!-- Search Results Grid -->
      <div v-if="apiResults.length > 0" class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(result, index) in apiResults" :key="index" class="bg-surface-container-low rounded-lg overflow-hidden border border-outline-variant/10 hover:shadow-md transition-all group">
          <div class="aspect-[3/4] bg-surface-container-highest overflow-hidden">
            <img v-if="result.cover" :src="result.cover" :alt="result.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" @error="($event.target as HTMLImageElement).style.display='none'" />
            <div v-if="!result.cover" class="w-full h-full flex items-center justify-center">
              <span class="material-symbols-outlined text-4xl text-stone-300">auto_stories</span>
            </div>
          </div>
          <div class="p-3">
            <h4 class="font-headline text-sm font-semibold text-primary line-clamp-2 leading-tight mb-1">{{ result.title }}</h4>
            <p class="text-xs text-on-surface-variant truncate">{{ result.author }}</p>
            <p v-if="result.year" class="text-[10px] text-stone-400 mt-0.5">{{ result.year }}</p>
            <button @click="importFromApi(result)" class="mt-3 w-full py-2 bg-primary/10 text-primary rounded text-xs font-semibold hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-1">
              <span class="material-symbols-outlined text-[14px]">add</span>
              Agregar al catálogo
            </button>
          </div>
        </div>
      </div>

      <!-- No results -->
      <div v-if="hasSearched && apiResults.length === 0 && !isSearching && !searchError" class="py-8 text-center">
        <span class="material-symbols-outlined text-3xl text-stone-300 mb-2">search_off</span>
        <p class="text-sm text-stone-400">No se encontraron resultados para "{{ apiSearchQuery }}"</p>
      </div>
    </div>
  </section>

  <!-- Manual Form Layout -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-8 space-y-12">
      <!-- Section: Bibliográfica -->
      <section>
        <div class="flex items-center gap-4 mb-8">
          <span class="w-8 h-[1px] bg-outline-variant"></span>
          <h3 class="font-headline text-xs font-bold tracking-[0.2em] text-secondary">INFORMACIÓN BIBLIOGRÁFICA</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <div class="col-span-2">
            <label class="block font-headline text-sm text-on-surface-variant mb-2">Título del libro*</label>
            <input v-model="form.title" class="w-full bg-surface-container-low border-b-2 border-outline-variant/20 border-t-0 border-x-0 focus:border-tertiary focus:ring-0 px-0 py-3 transition-all placeholder:text-stone-300 font-light" placeholder="Ej: Las Ruinas Circulares" type="text"/>
          </div>
          <div>
            <label class="block font-headline text-sm text-on-surface-variant mb-2">Autor*</label>
            <input v-model="form.author" class="w-full bg-surface-container-low border-b-2 border-outline-variant/20 border-t-0 border-x-0 focus:border-tertiary focus:ring-0 px-0 py-3 transition-all placeholder:text-stone-300 font-light" placeholder="Ej: Jorge Luis Borges" type="text"/>
          </div>
          <div>
            <label class="block font-headline text-sm text-on-surface-variant mb-2">ISBN</label>
            <input v-model="form.isbn" class="w-full bg-surface-container-low border-b-2 border-outline-variant/20 border-t-0 border-x-0 focus:border-tertiary focus:ring-0 px-0 py-3 transition-all placeholder:text-stone-300 font-light" placeholder="978-3-16-148410-0" type="text"/>
          </div>
        </div>
      </section>

      <!-- Section: Edición -->
      <section>
        <div class="flex items-center gap-4 mb-8">
          <span class="w-8 h-[1px] bg-outline-variant"></span>
          <h3 class="font-headline text-xs font-bold tracking-[0.2em] text-secondary">DETALLES DE EDICIÓN</h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
          <div>
            <label class="block font-headline text-sm text-on-surface-variant mb-2">Precio (€)*</label>
            <input v-model.number="form.price" class="w-full bg-surface-container-low border-b-2 border-outline-variant/20 border-t-0 border-x-0 focus:border-tertiary focus:ring-0 px-0 py-3 transition-all placeholder:text-stone-300 font-light" placeholder="19.90" type="number" step="0.01" min="0"/>
          </div>
          <div>
            <label class="block font-headline text-sm text-on-surface-variant mb-2">Stock inicial*</label>
            <input v-model.number="form.stock" class="w-full bg-surface-container-low border-b-2 border-outline-variant/20 border-t-0 border-x-0 focus:border-tertiary focus:ring-0 px-0 py-3 transition-all placeholder:text-stone-300 font-light" placeholder="10" type="number" min="0"/>
          </div>
          <div>
            <label class="block font-headline text-sm text-on-surface-variant mb-2">Género</label>
            <select v-model="form.genre" class="w-full bg-surface-container-low border-b-2 border-outline-variant/20 border-t-0 border-x-0 focus:border-tertiary focus:ring-0 px-0 py-3 transition-all font-light">
              <option value="">Seleccionar...</option>
              <option>Ficción</option>
              <option>Ensayo</option>
              <option>Filosofía</option>
              <option>Historia</option>
              <option>Ciencia</option>
              <option>Fantasía</option>
              <option>Poesía</option>
            </select>
          </div>
          <div>
            <label class="block font-headline text-sm text-on-surface-variant mb-2">Año de publicación</label>
            <input v-model.number="form.year" class="w-full bg-surface-container-low border-b-2 border-outline-variant/20 border-t-0 border-x-0 focus:border-tertiary focus:ring-0 px-0 py-3 transition-all placeholder:text-stone-300 font-light" placeholder="1944" type="number"/>
          </div>
        </div>
      </section>
    </div>

    <!-- Preview Column -->
    <div class="lg:col-span-4">
      <div class="sticky top-32 p-8 bg-surface-container-low rounded-xl border border-outline-variant/10 shadow-sm">
        <h4 class="font-headline text-xs font-bold tracking-[0.2em] text-secondary mb-8">VISTA PREVIA DEL REGISTRO</h4>
        <div class="aspect-[3/4] w-full bg-surface-container-highest rounded-md mb-8 flex flex-col items-center justify-center border-2 border-dashed border-outline-variant overflow-hidden relative">
          <img v-if="form.cover" :src="form.cover" class="absolute inset-0 w-full h-full object-cover" alt="Portada"/>
          <div v-else class="flex flex-col items-center gap-3 text-stone-400">
            <span class="material-symbols-outlined text-4xl">add_photo_alternate</span>
            <span class="text-xs font-label uppercase tracking-widest">Sin Portada</span>
          </div>
        </div>
        <div class="space-y-6">
          <div class="flex justify-between items-center pb-4 border-b border-outline-variant/10">
            <span class="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Título</span>
            <span class="text-xs font-headline font-medium text-primary text-right max-w-[60%] truncate">{{ form.title || '—' }}</span>
          </div>
          <div class="flex justify-between items-center pb-4 border-b border-outline-variant/10">
            <span class="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Autor</span>
            <span class="text-xs font-headline font-medium text-primary">{{ form.author || '—' }}</span>
          </div>
          <div class="flex justify-between items-center pb-4 border-b border-outline-variant/10">
            <span class="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Precio</span>
            <span class="text-xs font-headline font-medium text-primary">{{ form.price ? form.price.toFixed(2) + '€' : '—' }}</span>
          </div>
          <div class="flex justify-between items-center pb-4">
            <span class="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">Stock</span>
            <span class="text-xs font-headline font-medium text-primary">{{ form.stock ?? '—' }}</span>
          </div>
        </div>
        <div class="mt-8 p-4 bg-tertiary-container/10 rounded-lg flex gap-3">
          <span class="material-symbols-outlined text-tertiary-container text-sm">info</span>
          <p class="text-[10px] leading-relaxed text-on-tertiary-container italic">
            El registro será verificado por el curador principal antes de su publicación definitiva en el catálogo público.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useBooks } from '../composables/useBooks'
import { searchOpenLibrary, type OpenLibraryResult } from '../api/books'

const { addBook } = useBooks()

const form = reactive({
  title: '',
  author: '',
  isbn: '',
  price: 0,
  stock: 0,
  genre: '',
  year: undefined as number | undefined,
  cover: ''
})

const showSuccess = ref(false)
const apiSearchQuery = ref('')
const apiResults = ref<OpenLibraryResult[]>([])
const isSearching = ref(false)
const searchError = ref('')
const hasSearched = ref(false)

function resetForm() {
  form.title = ''
  form.author = ''
  form.isbn = ''
  form.price = 0
  form.stock = 0
  form.genre = ''
  form.year = undefined
  form.cover = ''
}

function handleSave() {
  if (!form.title || !form.author) return

  addBook({
    title: form.title,
    author: form.author,
    isbn: form.isbn || undefined,
    price: form.price || 0,
    stock: form.stock || 0,
    genre: form.genre || undefined,
    year: form.year,
    cover: form.cover || undefined
  })

  showSuccess.value = true
  resetForm()
  setTimeout(() => { showSuccess.value = false }, 4000)
}

async function handleApiSearch() {
  if (!apiSearchQuery.value.trim()) return

  isSearching.value = true
  searchError.value = ''
  hasSearched.value = true

  try {
    apiResults.value = await searchOpenLibrary(apiSearchQuery.value)
  } catch (e: any) {
    searchError.value = e.message || 'Error al conectar con Open Library'
    apiResults.value = []
  } finally {
    isSearching.value = false
  }
}

function importFromApi(result: OpenLibraryResult) {
  form.title = result.title
  form.author = result.author
  form.isbn = result.isbn || ''
  form.year = result.year
  form.cover = result.cover || ''
  form.price = 0
  form.stock = 1

  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(-8px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}
</style>
