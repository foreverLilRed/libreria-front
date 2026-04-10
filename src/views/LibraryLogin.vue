<template>
<!-- Barra superior -->
<header class="fixed top-0 w-full z-50 bg-[#fcf9f4]/80 backdrop-blur-xl flex justify-between items-center px-8 py-4">
  <div class="text-2xl font-bold text-[#422b27] font-headline tracking-tight">
    El Santuario Literario
  </div>
  <div class="flex items-center gap-6">
    <button class="text-stone-500 font-light hover:text-[#5d4037] transition-colors duration-300 flex items-center gap-2">
      <span class="material-symbols-outlined" data-icon="help_outline">help_outline</span>
      <span class="text-sm">Ayuda</span>
    </button>
  </div>
</header>

<main class="flex-grow flex items-center justify-center relative parchment-texture pt-20">
  <div class="absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
    <div class="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary-container blur-[120px]"></div>
    <div class="absolute bottom-0 right-0 w-full h-full opacity-10">
      <img alt="Interior de biblioteca difuminado" class="object-cover w-full h-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJQ5i0W1JSy93v5s9zVMihCLXs79t4Tm6Q17gzhGvdKuQhfDd0GORB5vsZqBr11z6mt_vpVHZsL6w1N4K57jil6ant_F5p8NsEKLhXxly1XjPLVFKfcMctAisApISmctSUE9KjP4YkMPzJ-GRAxLuEaIW66OJHKlouqTzUzGfgHnKVTkLAUk0L0GoZiNAWz84td93wY7txxEOSwDh6f-Cw2xIA1MLMeMJG9LcocEG66dx9E3tWWTqyS-Gk34F7jue3-EKdbWnKBB_4"/>
    </div>
  </div>

  <div class="relative z-10 w-full max-w-md px-6">
    <div class="bg-surface-container-lowest/80 glass-card p-10 rounded-xl shadow-[0_40px_80px_-20px_rgba(28,28,25,0.06)] border border-outline-variant/15">
      <div class="mb-10 text-center md:text-left">
        <h1 class="font-headline text-3xl font-extrabold text-primary tracking-tight mb-2">Bienvenido</h1>
        <p class="text-on-surface-variant font-light text-sm">Autentíquese para acceder al archivo curado.</p>
      </div>

      <form class="space-y-8" @submit.prevent="handleLogin">
        <div class="group relative">
          <label class="font-headline text-sm font-semibold text-primary mb-2 block uppercase tracking-wider" for="library-id">Usuario / Correo</label>
          <input
            v-model="username"
            class="w-full bg-surface-container-low border-0 border-b border-outline-variant/20 py-3 px-0 focus:ring-0 focus:border-tertiary transition-all duration-300 placeholder:text-stone-300 font-light"
            id="library-id"
            name="library-id"
            placeholder="ej. curador_0821"
            type="text"
          />
        </div>

        <div class="group relative">
          <label class="font-headline text-sm font-semibold text-primary mb-2 block uppercase tracking-wider" for="access-key">Contraseña</label>
          <input
            v-model="password"
            class="w-full bg-surface-container-low border-0 border-b border-outline-variant/20 py-3 px-0 focus:ring-0 focus:border-tertiary transition-all duration-300 placeholder:text-stone-300 font-light"
            id="access-key"
            name="access-key"
            placeholder="••••••••••••"
            type="password"
          />
        </div>

        <div class="pt-4 flex flex-col gap-6">
          <button
            :disabled="isLoading"
            class="w-full py-4 px-6 bg-gradient-to-r from-[#422b27] to-[#5b413c] text-on-primary rounded-md font-headline text-sm font-semibold tracking-widest hover:shadow-lg transition-all duration-300 hover:scale-[1.01] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            type="submit"
          >
            <svg v-if="isLoading" class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
            </svg>
            {{ isLoading ? 'AUTENTICANDO...' : 'INGRESAR AL ARCHIVO' }}
          </button>
          <div class="flex justify-between items-center px-1">
            <router-link class="text-stone-400 font-light text-xs hover:text-primary transition-colors duration-300" to="#">
              ¿Olvidó sus credenciales?
            </router-link>
            <div class="flex items-center gap-1 text-stone-300">
              <span class="material-symbols-outlined text-sm" data-icon="lock" data-weight="fill" style="font-variation-settings: 'FILL' 1;">lock</span>
              <span class="text-[10px] uppercase tracking-tighter">Conexión Segura</span>
            </div>
          </div>
        </div>
      </form>
    </div>

    <div class="mt-8 flex justify-center opacity-40">
      <div class="w-px h-12 bg-outline-variant"></div>
    </div>
    <p class="mt-4 text-center font-headline text-[10px] uppercase tracking-[0.3em] text-on-surface-variant/60">
      Fundado MCMXCIV
    </p>
  </div>
</main>

<footer class="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#f6f3ee] dark:bg-stone-900 border-t border-outline-variant/5">
  <p class="font-inter text-sm font-light tracking-wide text-stone-400 dark:text-stone-500">
    © 2024 El Santuario Literario. Todos los derechos reservados.
  </p>
  <div class="flex gap-8">
    <router-link class="font-inter text-sm font-light tracking-wide text-stone-400 dark:text-stone-500 hover:text-stone-800 dark:hover:text-stone-100 transition-all duration-300" to="#">Política de Privacidad</router-link>
    <router-link class="font-inter text-sm font-light tracking-wide text-stone-400 dark:text-stone-500 hover:text-stone-800 dark:hover:text-stone-100 transition-all duration-300" to="#">Términos de Servicio</router-link>
    <router-link class="font-inter text-sm font-light tracking-wide text-stone-400 dark:text-stone-500 hover:text-stone-800 dark:hover:text-stone-100 transition-all duration-300" to="#">Acceso al Archivo</router-link>
  </div>
</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '../composables/useAuth'

const router = useRouter()
const { login } = useAuth()

const username = ref('')
const password = ref('')
const isLoading = ref(false)

async function handleLogin() {
  isLoading.value = true
  await login(username.value, password.value)
  isLoading.value = false
  router.push('/')
}
</script>

<style scoped>
</style>
