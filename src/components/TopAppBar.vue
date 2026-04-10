<template>
  <header class="w-full sticky top-0 z-40 bg-[#fcf9f4]/80 dark:bg-[#1c1c19]/80 backdrop-blur-md flex justify-between items-center px-4 md:px-8 h-16 border-b border-[#e5e2dd]">
    <div class="flex items-center gap-4">
      <button @click="$emit('toggle-sidebar')" class="md:hidden p-2 text-[#5D4037] hover:bg-[#e5e2dd]/50 transition-colors rounded-full">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <h2 class="text-lg md:text-xl font-bold tracking-tighter text-[#422b27] dark:text-[#fcf9f4] font-manrope">{{ title }}</h2>
    </div>
    <div class="flex items-center gap-4">
      <div class="hidden sm:flex items-center gap-2">
        <button class="p-2 text-[#5D4037] hover:bg-[#e5e2dd]/50 transition-colors rounded-full">
          <span class="material-symbols-outlined">notifications</span>
        </button>
        <button class="p-2 text-[#5D4037] hover:bg-[#e5e2dd]/50 transition-colors rounded-full">
          <span class="material-symbols-outlined">settings</span>
        </button>
      </div>
      <div class="hidden sm:block h-8 w-px bg-outline-variant/30 mx-1"></div>
      <div class="flex items-center gap-3">
        <div class="text-right hidden sm:block">
          <p class="text-xs font-bold text-primary">Elena Curador</p>
          <p class="text-[10px] text-on-surface-variant font-medium">Bibliotecaria Jefe</p>
        </div>
        <img alt="Foto de perfil" class="w-10 h-10 rounded-full border-2 border-primary-fixed ring-2 ring-surface object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUQ2Kjz-dPdWh-Rr6mAxL6bRQzzhCXCFuC4joT9HwKGu97JohPObfk8laBM44m8iN6_0FH5u6DqPyV7u5bOfvmK0vxs_g0fu7hmbZGMmdlK2B--XseR0ZhE0Rh9dikggQGoWO2yzuyFzipNDxxDbLo8KkuYRYeA1qgsFo_i4-SSQB3gpiJRmUazKQgoO-VYHYaUkvsbFcycWy8Er2JYamZKPxIVvjyerYjvVOBRWMO-rDPfG_BxJw73u6y8w9qFUmHd6LfjdfvX8qE"/>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()

defineEmits<{
  'toggle-sidebar': []
}>()
</script>
