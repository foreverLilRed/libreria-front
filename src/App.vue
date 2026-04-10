<template>
  <div class="font-inter bg-[#fcf9f4] text-[#1c1c19] min-h-screen flex">
    <!-- Overlay para cerrar sidebar en móvil -->
    <div
      v-if="sidebarOpen && !isLoginRoute"
      class="fixed inset-0 bg-black/30 z-40 md:hidden"
      @click="sidebarOpen = false"
    ></div>

    <SideNavBar
      v-if="!isLoginRoute"
      :open="sidebarOpen"
      @close="sidebarOpen = false"
    />

    <main :class="['flex-1 relative', { 'md:ml-64': !isLoginRoute }]">
      <TopAppBar
        v-if="!isLoginRoute"
        :title="($route.name as string) || ''"
        @toggle-sidebar="sidebarOpen = !sidebarOpen"
      />
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import SideNavBar from './components/SideNavBar.vue'
import TopAppBar from './components/TopAppBar.vue'

const route = useRoute()
const sidebarOpen = ref(false)
const isLoginRoute = computed(() => route.path === '/login')

watch(() => route.path, () => {
  sidebarOpen.value = false
})
</script>

<style scoped>
</style>
