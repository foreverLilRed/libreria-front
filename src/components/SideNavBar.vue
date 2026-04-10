<template>
  <aside class="h-screen w-64 fixed left-0 top-0 bg-[#f6f3ee] dark:bg-[#1c1c19] border-r border-[#e5e2dd]/15 flex flex-col py-6 px-4 z-50">
    <div class="flex items-center gap-3 px-2 mb-10">
      <div class="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center overflow-hidden">
        <img alt="Logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb_b5-b5PyXcCSx6uQ574EynCGDY12Lse9Jpf_X4gH8UfZG9WqbIpuqvShR_l7FnEp_Il0tpC4p4XRnZCFWR_KkUBj7-PuWuT-ZLDzKGdxvFUIc5ZfKwguqPgA3RgDEs26s0UKa_ONS2SnUiZC4tXpOJYphFTukPPGeCikFRe6WGFUweoU5oxRUFWTN2H3gEI2H53loYQiFmdFugQJ3IZjjjJASrYh_vaVhypOhDFo57RLmCnfERkQSqsxj8c7RUiqvLaECC6y_PrF"/>
      </div>
      <div>
        <h1 class="text-lg font-black text-[#422b27] dark:text-[#fcf9f4] font-manrope">El Santuario</h1>
        <p class="text-xs text-[#422b27]/70 dark:text-[#e5e2dd]/50 font-manrope uppercase tracking-widest">Administrador</p>
      </div>
    </div>
    <nav class="flex-1 space-y-1">
      <router-link to="/" class="flex items-center gap-3 px-4 py-3 text-sm font-manrope font-regular transition-all duration-300 hover:pl-6" active-class="text-[#5D4037] dark:text-[#d7ccc8] font-bold border-r-2 border-[#5D4037] bg-[#e5e2dd]/30" :class="[$route.path === '/' ? '' : 'text-[#422b27]/70 dark:text-[#e5e2dd]/50 hover:text-[#5D4037]']">
        <span class="material-symbols-outlined" data-icon="dashboard">dashboard</span>
        <span>Dashboard / Reportes</span>
      </router-link>
      <router-link to="/inventario" class="flex items-center gap-3 px-4 py-3 text-sm font-manrope font-regular transition-all duration-300 hover:pl-6" active-class="text-[#5D4037] dark:text-[#d7ccc8] font-bold border-r-2 border-[#5D4037] bg-[#e5e2dd]/30" :class="[$route.path === '/inventario' ? '' : 'text-[#422b27]/70 dark:text-[#e5e2dd]/50 hover:text-[#5D4037]']">
        <span class="material-symbols-outlined" data-icon="list_alt">list_alt</span>
        <span>Inventario</span>
      </router-link>
      <router-link to="/inventario-completo" class="flex items-center gap-3 px-4 py-3 text-sm font-manrope font-regular transition-all duration-300 hover:pl-6" active-class="text-[#5D4037] dark:text-[#d7ccc8] font-bold border-r-2 border-[#5D4037] bg-[#e5e2dd]/30" :class="[$route.path === '/inventario-completo' ? '' : 'text-[#422b27]/70 dark:text-[#e5e2dd]/50 hover:text-[#5D4037]']">
        <span class="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
        <span>Colecciones</span>
      </router-link>
      <router-link to="/historial-ventas" class="flex items-center gap-3 px-4 py-3 text-sm font-manrope font-regular transition-all duration-300 hover:pl-6" active-class="text-[#5D4037] dark:text-[#d7ccc8] font-bold border-r-2 border-[#5D4037] bg-[#e5e2dd]/30" :class="[$route.path === '/historial-ventas' ? '' : 'text-[#422b27]/70 dark:text-[#e5e2dd]/50 hover:text-[#5D4037]']">
        <span class="material-symbols-outlined" data-icon="history">history</span>
        <span>Historial Ventas</span>
      </router-link>
      <router-link to="/pos" class="flex items-center gap-3 px-4 py-3 text-sm font-manrope font-regular transition-all duration-300 hover:pl-6" active-class="text-[#5D4037] dark:text-[#d7ccc8] font-bold border-r-2 border-[#5D4037] bg-[#e5e2dd]/30" :class="[$route.path === '/pos' ? '' : 'text-[#422b27]/70 dark:text-[#e5e2dd]/50 hover:text-[#5D4037]']">
        <span class="material-symbols-outlined" data-icon="payments">payments</span>
        <span>Punto de Venta</span>
      </router-link>
      <router-link to="/clientes" class="flex items-center gap-3 px-4 py-3 text-sm font-manrope font-regular transition-all duration-300 hover:pl-6" active-class="text-[#5D4037] dark:text-[#d7ccc8] font-bold border-r-2 border-[#5D4037] bg-[#e5e2dd]/30" :class="[$route.path === '/clientes' ? '' : 'text-[#422b27]/70 dark:text-[#e5e2dd]/50 hover:text-[#5D4037]']">
        <span class="material-symbols-outlined" data-icon="group">group</span>
        <span>Usuarios</span>
      </router-link>
    </nav>
    <div class="mt-auto space-y-1 pt-6 border-t border-[#e5e2dd]">
      <router-link to="/nueva-obra" class="w-full block text-center mb-6 bg-gradient-to-tr from-primary to-primary-container text-white py-3 rounded-md font-manrope font-semibold text-sm shadow-lg hover:brightness-110 transition-all">
        <span class="flex items-center justify-center gap-2">
          <span class="material-symbols-outlined text-sm">add</span>
          Nueva Entrada
        </span>
      </router-link>
      <button @click="handleLogout" class="w-full flex items-center gap-3 px-4 py-3 text-[#422b27]/70 dark:text-[#e5e2dd]/50 hover:text-[#5D4037] hover:pl-6 transition-all duration-300 font-manrope text-sm">
        <span class="material-symbols-outlined" data-icon="logout">logout</span>
        <span>Cerrar Sesión</span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { useAuth } from '../composables/useAuth'

const { logout } = useAuth()

function handleLogout() {
  logout()
}
</script>
