<template>
<div class="max-w-7xl mx-auto space-y-8">
  <!-- Header Section -->
  <div class="flex justify-between items-end">
    <div>
      <h1 class="text-3xl font-extrabold text-primary tracking-tight">Gestión de Inventario</h1>
      <p class="text-on-surface-variant font-light mt-1">Supervise y gestione la colección de la biblioteca digital.</p>
    </div>
    <div class="text-sm text-stone-400 font-light italic">
      Última actualización: {{ new Date().toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }) }}
    </div>
  </div>

  <!-- KPI Summary -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden flex flex-col justify-between h-32 border-b-2 border-primary/10">
      <div class="flex justify-between items-start">
        <span class="text-sm font-medium text-secondary uppercase tracking-wider">Total de Libros</span>
        <span class="material-symbols-outlined text-primary/30">auto_stories</span>
      </div>
      <div class="text-4xl font-bold text-primary">{{ totalBooks }}</div>
      <div class="absolute -right-4 -bottom-4 opacity-5 rotate-12">
        <span class="material-symbols-outlined text-9xl">import_contacts</span>
      </div>
    </div>
    <div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden flex flex-col justify-between h-32 border-b-2 border-tertiary-fixed-dim">
      <div class="flex justify-between items-start">
        <span class="text-sm font-medium text-tertiary uppercase tracking-wider">Bajo Stock</span>
        <span class="material-symbols-outlined text-tertiary-fixed-dim">warning</span>
      </div>
      <div class="flex items-baseline gap-2">
        <div class="text-4xl font-bold text-tertiary">{{ String(lowStockBooks).padStart(2, '0') }}</div>
        <span class="text-xs font-semibold px-2 py-0.5 bg-tertiary-fixed rounded-sm text-on-tertiary-fixed">Alerta Ámbar</span>
      </div>
    </div>
    <div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden flex flex-col justify-between h-32 border-b-2 border-error/30">
      <div class="flex justify-between items-start">
        <span class="text-sm font-medium text-error uppercase tracking-wider">Agotados</span>
        <span class="material-symbols-outlined text-error">dangerous</span>
      </div>
      <div class="flex items-baseline gap-2">
        <div class="text-4xl font-bold text-error">{{ String(outOfStockBooks).padStart(2, '0') }}</div>
        <span class="text-xs font-semibold px-2 py-0.5 bg-error-container rounded-sm text-on-error-container">Crítico</span>
      </div>
    </div>
  </div>

  <!-- Toolbar & Inventory Table Section -->
  <section class="bg-surface-container-lowest rounded-xl shadow-[0_0_40px_rgba(28,28,25,0.04)] overflow-hidden border border-outline-variant/10">
    <div class="p-6 flex flex-wrap items-center justify-between gap-4 border-b border-outline-variant/10">
      <div class="flex flex-1 min-w-[300px] gap-4">
        <div class="relative flex-1 group">
          <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-primary transition-colors">search</span>
          <input
            v-model="searchQuery"
            class="w-full pl-10 pr-4 py-2 bg-surface-container-low border-0 border-b-2 border-outline-variant/20 focus:border-tertiary-fixed-dim focus:ring-0 text-sm transition-all rounded-t-md"
            placeholder="Buscar por título, autor o ISBN..."
            type="text"
          />
        </div>
      </div>
      <router-link to="/nueva-obra" class="bg-gradient-to-r from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-md flex items-center gap-2 text-sm font-medium shadow-lg hover:shadow-primary/20 transition-all active:scale-[0.98]">
        <span class="material-symbols-outlined text-[18px]">add</span>
        <span>Nuevo Libro</span>
      </router-link>
    </div>

    <!-- Inventory Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-surface-container-low/50 text-stone-500 font-headline text-xs uppercase tracking-[0.1em]">
            <th class="px-6 py-4 font-semibold">Título & Portada</th>
            <th class="px-6 py-4 font-semibold">Autor</th>
            <th class="px-6 py-4 font-semibold">ISBN</th>
            <th class="px-6 py-4 font-semibold">Género</th>
            <th class="px-6 py-4 font-semibold text-center">Stock</th>
            <th class="px-6 py-4 font-semibold text-right">Precio</th>
            <th class="px-6 py-4 font-semibold">Estado</th>
            <th class="px-6 py-4 font-semibold text-center">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-outline-variant/10">
          <tr v-if="filteredBooks.length === 0">
            <td colspan="8" class="px-6 py-12 text-center">
              <div class="flex flex-col items-center gap-3 text-stone-400">
                <span class="material-symbols-outlined text-4xl">search_off</span>
                <p class="text-sm">No se encontraron libros{{ searchQuery ? ' para "' + searchQuery + '"' : '' }}</p>
              </div>
            </td>
          </tr>
          <tr v-for="book in filteredBooks" :key="book.id" class="group hover:bg-surface-container-low transition-colors">
            <td class="px-6 py-4">
              <div class="flex items-center gap-4">
                <div class="w-10 h-14 bg-stone-200 rounded-sm overflow-hidden flex-shrink-0 shadow-sm border border-stone-100">
                  <img v-if="book.cover" :src="book.cover" class="w-full h-full object-cover" alt="Portada"/>
                  <div v-else class="w-full h-full flex items-center justify-center bg-surface-container-high">
                    <span class="material-symbols-outlined text-stone-400 text-sm">auto_stories</span>
                  </div>
                </div>
                <div>
                  <div class="font-headline font-semibold text-primary">{{ book.title }}</div>
                  <div v-if="book.subtitle" class="text-xs text-stone-400">{{ book.subtitle }}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 text-sm text-on-surface-variant">{{ book.author }}</td>
            <td class="px-6 py-4 text-xs font-mono text-stone-400 tracking-tight">{{ book.isbn || '—' }}</td>
            <td class="px-6 py-4">
              <span v-if="book.genre" class="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded-sm font-semibold uppercase">{{ book.genre }}</span>
              <span v-else class="text-xs text-stone-400">—</span>
            </td>
            <td class="px-6 py-4 text-center">
              <div class="flex flex-col items-center">
                <span class="font-bold" :class="book.stock === 0 ? 'text-error' : book.stock <= 10 ? 'text-tertiary' : 'text-primary'">
                  {{ String(book.stock).padStart(2, '0') }}
                </span>
              </div>
            </td>
            <td class="px-6 py-4 text-right font-headline font-medium text-primary">{{ book.price.toFixed(2) }}€</td>
            <td class="px-6 py-4">
              <div class="flex items-center gap-2">
                <template v-if="book.stock === 0">
                  <div class="w-2 h-2 rounded-full bg-red-500"></div>
                  <span class="text-xs font-medium text-red-700">Agotado</span>
                </template>
                <template v-else-if="book.stock <= 10">
                  <div class="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span class="text-xs font-medium text-amber-700">Bajo Stock</span>
                </template>
                <template v-else>
                  <div class="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span class="text-xs font-medium text-emerald-700">Disponible</span>
                </template>
              </div>
            </td>
            <td class="px-6 py-4">
              <div class="flex items-center justify-center gap-2 text-stone-400">
                <button class="p-1.5 hover:text-primary hover:bg-surface-container-high rounded transition-colors"><span class="material-symbols-outlined text-[20px]">edit</span></button>
                <button class="p-1.5 hover:text-tertiary hover:bg-surface-container-high rounded transition-colors"><span class="material-symbols-outlined text-[20px]">inventory</span></button>
                <button @click="handleDelete(book.id)" class="p-1.5 hover:text-error hover:bg-error-container rounded transition-colors"><span class="material-symbols-outlined text-[20px]">delete</span></button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination Footer -->
    <div class="px-6 py-4 bg-surface-container-low/30 border-t border-outline-variant/10 flex items-center justify-between text-xs text-on-surface-variant font-medium">
      <div>Mostrando {{ filteredBooks.length }} de {{ totalBooks }} libros</div>
    </div>
  </section>

  <!-- Bottom Section -->
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div class="lg:col-span-2 space-y-4">
      <h3 class="font-headline text-lg font-bold text-primary flex items-center gap-2">
        <span class="material-symbols-outlined text-secondary">history</span>
        Movimientos Recientes
      </h3>
      <div class="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10">
        <div class="divide-y divide-outline-variant/10">
          <div class="p-4 flex items-center justify-between hover:bg-surface-container/50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <span class="material-symbols-outlined text-sm">login</span>
              </div>
              <div>
                <div class="text-sm font-semibold text-primary">Entrada de stock</div>
                <div class="text-[11px] text-stone-400">Meditaciones (Marco Aurelio)</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-bold text-emerald-600">+15 uds</div>
              <div class="text-[10px] text-stone-400 uppercase tracking-tighter">Responsable: Elena M.</div>
            </div>
            <div class="text-xs text-stone-500 font-light ml-8">24 Oct, 09:12</div>
          </div>
          <div class="p-4 flex items-center justify-between hover:bg-surface-container/50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center">
                <span class="material-symbols-outlined text-sm">logout</span>
              </div>
              <div>
                <div class="text-sm font-semibold text-primary">Salida por préstamo</div>
                <div class="text-[11px] text-stone-400">El Hobbit (J.R.R. Tolkien)</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-bold text-orange-600">-01 ud</div>
              <div class="text-[10px] text-stone-400 uppercase tracking-tighter">Responsable: Sistema</div>
            </div>
            <div class="text-xs text-stone-500 font-light ml-8">23 Oct, 18:45</div>
          </div>
          <div class="p-4 flex items-center justify-between hover:bg-surface-container/50 transition-colors">
            <div class="flex items-center gap-4">
              <div class="w-10 h-10 rounded-full bg-primary-container text-white flex items-center justify-center">
                <span class="material-symbols-outlined text-sm">inventory</span>
              </div>
              <div>
                <div class="text-sm font-semibold text-primary">Ajuste manual</div>
                <div class="text-[11px] text-stone-400">Sapiens (Harari) - Muestra dañada</div>
              </div>
            </div>
            <div class="text-right">
              <div class="text-sm font-bold text-primary">-01 ud</div>
              <div class="text-[10px] text-stone-400 uppercase tracking-tighter">Responsable: Julian V.</div>
            </div>
            <div class="text-xs text-stone-500 font-light ml-8">23 Oct, 11:30</div>
          </div>
        </div>
        <button class="w-full py-3 text-xs text-secondary font-semibold hover:bg-surface-container-high transition-colors uppercase tracking-widest">Ver Historial Completo</button>
      </div>
    </div>

    <!-- Inventory Health Sidebar -->
    <div class="space-y-4">
      <h3 class="font-headline text-lg font-bold text-primary">Salud del Inventario</h3>
      <div class="bg-[#422b27] text-[#fcf9f4] p-6 rounded-xl space-y-6 relative overflow-hidden shadow-xl">
        <div class="relative z-10">
          <div class="text-xs opacity-60 uppercase tracking-widest mb-1">Capacidad Utilizada</div>
          <div class="flex items-end gap-2">
            <span class="text-3xl font-bold">84%</span>
            <span class="text-[10px] mb-1.5 opacity-60">+2.4% este mes</span>
          </div>
          <div class="w-full bg-white/10 h-1.5 rounded-full mt-3 overflow-hidden">
            <div class="bg-tertiary-fixed h-full w-[84%]"></div>
          </div>
        </div>
        <div class="relative z-10 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
          <div>
            <div class="text-[10px] opacity-60 uppercase tracking-tight">Estantes Libres</div>
            <div class="text-xl font-bold">124</div>
          </div>
          <div>
            <div class="text-[10px] opacity-60 uppercase tracking-tight">Nuevos Ingresos</div>
            <div class="text-xl font-bold">{{ totalBooks }}</div>
          </div>
        </div>
        <div class="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div class="absolute -left-8 -bottom-8 w-24 h-24 bg-tertiary-fixed/10 rounded-full blur-xl"></div>
      </div>
      <div class="bg-surface-container-high p-5 rounded-xl border border-outline-variant/10">
        <h4 class="text-xs font-bold text-primary uppercase tracking-widest mb-3 flex items-center justify-between">
          Alertas de Reposición
          <span v-if="outOfStockBooks > 0" class="w-2 h-2 rounded-full bg-error animate-pulse"></span>
        </h4>
        <ul class="space-y-3">
          <li v-if="lowStockBooks > 0" class="flex items-start gap-3">
            <div class="w-2 h-2 rounded-full bg-tertiary-fixed-dim mt-1.5 flex-shrink-0"></div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              <span class="font-semibold text-primary">Bajo Stock:</span> {{ lowStockBooks }} título(s) con stock bajo.
            </p>
          </li>
          <li v-if="outOfStockBooks > 0" class="flex items-start gap-3">
            <div class="w-2 h-2 rounded-full bg-error-container mt-1.5 flex-shrink-0"></div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              <span class="font-semibold text-primary">Agotados:</span> {{ outOfStockBooks }} título(s) sin stock disponible.
            </p>
          </li>
          <li v-if="lowStockBooks === 0 && outOfStockBooks === 0" class="flex items-start gap-3">
            <div class="w-2 h-2 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></div>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              <span class="font-semibold text-primary">Todo en orden.</span> No hay alertas de reposición.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

<router-link to="/nueva-obra" class="fixed bottom-8 right-8 w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50">
  <span class="material-symbols-outlined">add</span>
</router-link>
</template>

<script setup lang="ts">
import { useBooks } from '../composables/useBooks'

const { searchQuery, filteredBooks, totalBooks, lowStockBooks, outOfStockBooks, deleteBook } = useBooks()

function handleDelete(id: string) {
  if (confirm('¿Estás seguro de que deseas eliminar este libro?')) {
    deleteBook(id)
  }
}
</script>

<style scoped>
</style>
