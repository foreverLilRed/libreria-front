<template>
  <div class="font-inter bg-[#fcf9f4] text-[#1c1c19] min-h-screen flex">
    <SideNavBar v-if="$route.path !== '/login'" />
    <main :class="['flex-1 relative', { 'ml-64': $route.path !== '/login' }]">
      <TopAppBar v-if="$route.path !== '/login'" :title="($route.name as string) || ''" />
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import SideNavBar from './components/SideNavBar.vue'
import TopAppBar from './components/TopAppBar.vue'
</script>

<style scoped>
</style>
