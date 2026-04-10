<template>
  
    


<!-- TopNavBar -->

<!-- Main Content -->

<!-- Dashboard Header -->
<div class="mb-8 flex justify-between items-end">
<div>
<h2 class="text-3xl font-headline font-light tracking-tight text-primary">Gestión de Inventario</h2>
<p class="text-on-surface-variant text-sm mt-1">Control editorial y flujo de existencias de la colección.</p>
</div>
<div class="flex gap-3">
<button class="px-4 py-2 bg-surface-container-highest text-on-surface-variant rounded-md text-sm font-medium hover:bg-stone-200 transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-lg">file_download</span>
                    Exportar PDF
                </button>
</div>
</div>
<!-- Stock Summary Grid -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
<div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div class="relative z-10">
<p class="text-xs font-medium text-on-surface-variant uppercase tracking-widest mb-1">Stock Total Disponible</p>
<h3 class="text-4xl font-headline font-bold text-primary">12,482</h3>
<p class="text-xs text-stone-500 mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-sm text-green-600">trending_up</span>
                        +2.4% vs mes anterior
                    </p>
</div>
<span class="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-stone-200/40 group-hover:scale-110 transition-transform duration-500">inventory</span>
</div>
<div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div class="relative z-10">
<p class="text-xs font-medium text-on-surface-variant uppercase tracking-widest mb-1">Entradas del Mes</p>
<h3 class="text-4xl font-headline font-bold text-primary">342</h3>
<p class="text-xs text-stone-500 mt-2">Nuevas adquisiciones y donaciones</p>
</div>
<span class="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-stone-200/40 group-hover:scale-110 transition-transform duration-500">input</span>
</div>
<div class="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
<div class="relative z-10">
<p class="text-xs font-medium text-on-surface-variant uppercase tracking-widest mb-1">Salidas del Mes</p>
<h3 class="text-4xl font-headline font-bold text-primary">128</h3>
<p class="text-xs text-stone-500 mt-2 flex items-center gap-1">
<span class="material-symbols-outlined text-sm text-amber-600">warning</span>
                        12 bajas por daño
                    </p>
</div>
<span class="material-symbols-outlined absolute -right-4 -bottom-4 text-9xl text-stone-200/40 group-hover:scale-110 transition-transform duration-500">output</span>
</div>
</div>
<div class="grid grid-cols-1 gap-8 items-start">
<!-- Movement History Table (Expanded to full width) -->
<section class="w-full">
<div class="bg-surface p-6 mb-4 flex justify-between items-center">
<h4 class="font-headline text-lg font-semibold text-primary">Historial de Movimientos</h4>
<div class="flex gap-2">
<button class="p-2 hover:bg-stone-100 rounded-md transition-colors">
<span class="material-symbols-outlined text-stone-500">filter_list</span>
</button>
</div>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left border-separate border-spacing-y-3">
<thead>
<tr class="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">
<th class="pb-2 px-4 font-normal">Libro / ISBN</th>
<th class="pb-2 px-4 font-normal">Tipo</th>
<th class="pb-2 px-4 font-normal">Cant.</th>
<th class="pb-2 px-4 font-normal">Ubicación</th>
<th class="pb-2 px-4 font-normal">Responsable</th>
<th class="pb-2 px-4 font-normal">Fecha</th>
</tr>
</thead>
<tbody>
<!-- Row 1: Low Stock Warning -->
<tr class="bg-surface-container-lowest hover:bg-stone-50 transition-colors shadow-sm shadow-stone-900/5 group">
<td class="py-4 px-4 rounded-l-lg">
<div class="flex flex-col">
<span class="text-sm font-medium text-primary">La Sombra del Viento</span>
<span class="text-[10px] text-stone-400">978-84-08-04364-5</span>
</div>
</td>
<td class="py-4 px-4">
<span class="px-2 py-1 bg-red-100 text-red-700 text-[10px] font-bold rounded-sm uppercase tracking-wider">Ajuste de Auditoría</span>
</td>
<td class="py-4 px-4 text-sm font-semibold text-error">-5</td>
<td class="py-4 px-4">
<div class="flex flex-col">
<span class="text-xs text-stone-600">Almacén General</span>
<span class="text-[10px] text-stone-400">P-04 | N2</span>
</div>
</td>
<td class="py-4 px-4">
<div class="flex items-center gap-2">
<div class="w-6 h-6 rounded-full bg-stone-200 overflow-hidden">
<img alt="Usuario" class="w-full h-full object-cover" data-alt="close-up portrait of a male librarian in professional attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8TysxXHN1erCZqIeORNHCEXQBypyxqz-tocwVt4eGrkJokmClwGzvPMEz0PNDWTWqfKKqxN2MzbrhTg9XBX6I8fHxKR4DtPHa1Cmw7z0edwLBV9OTAW7jUEf3gK5-G9M7dbUV-pZRnoO7Jm4Gi5GQrwuWiIqRfreQbJinHCknfkmiyz7YE25v0JNv4qollZ718E0IU9WJvZCaIgyvz-fNS2dVUbY_wfz7Gf3e23ACG8-Dbm83UFenu_klD5rIdvPwABxd4TFedvVn"/>
</div>
<span class="text-xs">J. Márquez</span>
</div>
</td>
<td class="py-4 px-4 rounded-r-lg">
<span class="text-xs text-stone-500">Hoy, 10:45</span>
</td>
</tr>
<!-- Row 2: Normal Purchase -->
<tr class="bg-surface-container-lowest hover:bg-stone-50 transition-colors shadow-sm shadow-stone-900/5">
<td class="py-4 px-4 rounded-l-lg">
<div class="flex flex-col">
<span class="text-sm font-medium text-primary">Cien Años de Soledad</span>
<span class="text-[10px] text-stone-400">978-03-07-47472-8</span>
</div>
</td>
<td class="py-4 px-4">
<span class="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-sm uppercase tracking-wider">Compra</span>
</td>
<td class="py-4 px-4 text-sm font-semibold text-green-700">+20</td>
<td class="py-4 px-4">
<div class="flex flex-col">
<span class="text-xs text-stone-600">Almacén General</span>
<span class="text-[10px] text-stone-400">P-01 | N1</span>
</div>
</td>
<td class="py-4 px-4">
<div class="flex items-center gap-2">
<div class="w-6 h-6 rounded-full bg-stone-200 overflow-hidden">
<img alt="Usuario" class="w-full h-full object-cover" data-alt="portrait of a woman in business attire" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAng1hDljYWn4yA-EUR_PtkD6CQohfMNb01E31V4Kze5AhK1anYLJGX20eAnICFnf10-4wDhGCaggnvzUEt9I8_WD72MTFWFLLyBaUPoQJuQ_8t7wSDfb1QxFgo3vUb7Kk80L8Q07QrRtEvLkWMowbLrsVPLG-ypLVea-LL-Z7YQv2QBlapGSasHs7kr1J8PAVH19lHJ03tQrX_7fwB6PBTLBmslKhvDP3qNV_T1JMJ7dnGWTcrbsOZiWN4I0AxwAJRco4emq4aW5f8"/>
</div>
<span class="text-xs">E. Thorne</span>
</div>
</td>
<td class="py-4 px-4 rounded-r-lg">
<span class="text-xs text-stone-500">Hoy, 09:12</span>
</td>
</tr>
<!-- Row 3: Pending Confirmation -->
<tr class="bg-amber-50/50 border border-amber-200/50 hover:bg-amber-100/50 transition-colors shadow-sm shadow-stone-900/5 border-dashed">
<td class="py-4 px-4 rounded-l-lg">
<div class="flex flex-col">
<span class="text-sm font-medium text-amber-900">Meditaciones (Marco Aurelio)</span>
<span class="text-[10px] text-amber-700/60">Pendiente de Confirmación</span>
</div>
</td>
<td class="py-4 px-4">
<span class="px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-sm uppercase tracking-wider">Devolución</span>
</td>
<td class="py-4 px-4 text-sm font-semibold text-amber-700">+1</td>
<td class="py-4 px-4">
<div class="flex flex-col">
<span class="text-xs text-amber-800">Reserva Especial</span>
<span class="text-[10px] text-amber-700/60">PENDIENTE</span>
</div>
</td>
<td class="py-4 px-4">
<div class="flex items-center gap-2">
<div class="w-6 h-6 rounded-full bg-stone-200 overflow-hidden opacity-50">
<span class="material-symbols-outlined text-xs flex items-center justify-center h-full">person</span>
</div>
<span class="text-xs text-amber-800">Sistema Aut.</span>
</div>
</td>
<td class="py-4 px-4 rounded-r-lg">
<span class="text-xs text-amber-700/70 italic">En proceso...</span>
</td>
</tr>
<!-- Row 4: Damage -->
<tr class="bg-surface-container-lowest hover:bg-stone-50 transition-colors shadow-sm shadow-stone-900/5">
<td class="py-4 px-4 rounded-l-lg">
<div class="flex flex-col">
<span class="text-sm font-medium text-primary">Don Quijote de la Mancha</span>
<span class="text-[10px] text-stone-400">978-84-20-41214-6</span>
</div>
</td>
<td class="py-4 px-4">
<span class="px-2 py-1 bg-stone-200 text-stone-600 text-[10px] font-bold rounded-sm uppercase tracking-wider">Daño</span>
</td>
<td class="py-4 px-4 text-sm font-semibold text-stone-600">-1</td>
<td class="py-4 px-4">
<div class="flex flex-col">
<span class="text-xs text-stone-600">Restauración</span>
<span class="text-[10px] text-stone-400">Lab-01</span>
</div>
</td>
<td class="py-4 px-4">
<div class="flex items-center gap-2">
<div class="w-6 h-6 rounded-full bg-stone-200 overflow-hidden">
<img alt="Usuario" class="w-full h-full object-cover" data-alt="professional portrait of a man with spectacles in a neutral library environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALsk9fp2HR5ZjBQNKALQqGAKo6Cxye1scSQSnKP3j_I6-_OgIMhJNjTn3fj1cy2WX3oZ9BOO1r1VOY8tARmbiZX5xVyqF2YW_0ndv-Xc0WVtnkrAsyai5mRJxmRuEn1PMACwgFOuaHHpW49N8UIpa3sJF1wZyfLBkWWCGbGEybvWC8rcF03ICCLK_MppZZTZqkRWP0kjgtms44I5ljlP3JHEkSMlQ72-dnlUm9oaduoDQ6McD2V4UmXTng5hoblVK3entKZYjAPgZW"/>
</div>
<span class="text-xs">R. Soler</span>
</div>
</td>
<td class="py-4 px-4 rounded-r-lg">
<span class="text-xs text-stone-500">Ayer, 16:30</span>
</td>
</tr>
</tbody>
</table>
</div>
<!-- Low Stock Alert Canvas -->
<div class="mt-8 bg-error-container/30 border-l-4 border-error p-6 rounded-r-xl">
<div class="flex items-start gap-4">
<span class="material-symbols-outlined text-error" style="font-variation-settings: 'FILL' 1;">error</span>
<div class="flex-1">
<h5 class="text-sm font-bold text-on-error-container uppercase tracking-wide">Alertas de Stock Bajo</h5>
<div class="mt-3 flex flex-wrap gap-4">
<div class="bg-white/60 p-3 rounded-lg flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-error"></div>
<span class="text-xs font-medium text-primary">Crónica de una Muerte Anunciada</span>
<span class="text-[10px] px-2 py-0.5 bg-error text-white rounded-full">2 uds.</span>
</div>
<div class="bg-white/60 p-3 rounded-lg flex items-center gap-3">
<div class="w-2 h-2 rounded-full bg-error"></div>
<span class="text-xs font-medium text-primary">Ensayo sobre la Ceguera</span>
<span class="text-[10px] px-2 py-0.5 bg-error text-white rounded-full">0 uds.</span>
</div>
</div>
</div>
<button class="text-[10px] font-bold text-error uppercase tracking-widest border-b border-error">Gestionar Pedido</button>
</div>
</div>
</section>
</div>

<!-- Contextual FAB (Only on relevant screens) -->
<div class="fixed bottom-8 right-8 flex flex-col gap-3">
<button class="w-14 h-14 bg-primary text-on-primary rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform group">
<span class="material-symbols-outlined text-3xl">qr_code_scanner</span>
<span class="absolute right-full mr-4 px-3 py-1 bg-primary text-on-primary text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Escanear Libro</span>
</button>
</div>

  
</template>

<script setup>
</script>

<style scoped>
</style>
