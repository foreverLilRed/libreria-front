<template>
  
    






<!-- Dashboard Content -->
<div class="p-8 space-y-8">
<!-- KPI Section -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<!-- KPI 1 -->
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 group hover:bg-surface-container-high transition-all">
<div class="flex justify-between items-start mb-4">
<span class="p-2 bg-secondary-container rounded-lg text-secondary">
<span class="material-symbols-outlined">payments</span>
</span>
<span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+12.5%</span>
</div>
<p class="text-on-surface-variant text-sm font-medium mb-1">Total Ventas Hoy</p>
<h3 class="text-2xl font-black text-primary font-manrope">$1,240.50</h3>
<p class="text-[10px] text-on-surface-variant mt-2">vs. $1,102.00 ayer</p>
</div>
<!-- KPI 2 -->
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 group hover:bg-surface-container-high transition-all">
<div class="flex justify-between items-start mb-4">
<span class="p-2 bg-tertiary-fixed rounded-lg text-tertiary">
<span class="material-symbols-outlined">calendar_month</span>
</span>
<span class="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">+5.2%</span>
</div>
<p class="text-on-surface-variant text-sm font-medium mb-1">Total Mensual</p>
<h3 class="text-2xl font-black text-primary font-manrope">$32,850.00</h3>
<p class="text-[10px] text-on-surface-variant mt-2">vs. mes anterior</p>
</div>
<!-- KPI 3 -->
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 group hover:bg-surface-container-high transition-all">
<div class="flex justify-between items-start mb-4">
<span class="p-2 bg-primary-fixed rounded-lg text-primary">
<span class="material-symbols-outlined">history_edu</span>
</span>
<span class="text-xs font-bold text-primary-container bg-primary-fixed px-2 py-1 rounded">2024</span>
</div>
<p class="text-on-surface-variant text-sm font-medium mb-1">Total Anual</p>
<h3 class="text-2xl font-black text-primary font-manrope">$142,920.00</h3>
<p class="text-[10px] text-on-surface-variant mt-2">Acumulado fiscal</p>
</div>
<!-- KPI 4 -->
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 group hover:bg-surface-container-high transition-all">
<div class="flex justify-between items-start mb-4">
<span class="p-2 bg-outline-variant/20 rounded-lg text-on-surface">
<span class="material-symbols-outlined">receipt_long</span>
</span>
<span class="text-xs font-bold text-on-surface-variant bg-surface-variant px-2 py-1 rounded">24h</span>
</div>
<p class="text-on-surface-variant text-sm font-medium mb-1">Transacciones</p>
<h3 class="text-2xl font-black text-primary font-manrope">84</h3>
<p class="text-[10px] text-on-surface-variant mt-2">Ticket promedio: $14.75</p>
</div>
</div>
<!-- Charts Grid (Asymmetric Bento Style) -->
<div class="grid grid-cols-12 gap-6">
<!-- Main Sales Trend (Large) -->
<div class="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/5">
<div class="flex justify-between items-center mb-10">
<div>
<h4 class="text-lg font-bold text-primary font-manrope">Tendencia de Ventas</h4>
<p class="text-sm text-on-surface-variant">Desempeño diario en el mes actual</p>
</div>
<div class="flex gap-2">
<button class="p-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant/20">
<span class="material-symbols-outlined text-sm">download</span>
</button>
<button class="p-2 hover:bg-surface-container-low rounded-lg transition-colors border border-outline-variant/20">
<span class="material-symbols-outlined text-sm">more_vert</span>
</button>
</div>
</div>
<!-- Decorative Line Graph Visualization -->
<div class="relative h-64 w-full mt-4 flex items-end justify-between px-2">
<div class="absolute inset-0 border-b border-l border-outline-variant/20"></div>
<!-- Placeholder Chart bars/lines using CSS -->
<div class="flex-1 flex items-end justify-around h-full gap-2 z-10">
<div class="w-2 bg-primary-container/20 h-[30%] rounded-t-sm"></div>
<div class="w-2 bg-primary-container/30 h-[45%] rounded-t-sm"></div>
<div class="w-2 bg-primary-container/40 h-[40%] rounded-t-sm"></div>
<div class="w-2 bg-primary-container/50 h-[60%] rounded-t-sm"></div>
<div class="w-2 bg-primary-container/60 h-[75%] rounded-t-sm"></div>
<div class="w-2 bg-primary-container/70 h-[65%] rounded-t-sm"></div>
<div class="w-2 bg-primary-container/80 h-[90%] rounded-t-sm"></div>
<div class="w-2 bg-primary-container/90 h-[80%] rounded-t-sm"></div>
<div class="w-2 bg-primary h-[95%] rounded-t-sm shadow-lg shadow-primary/20"></div>
<div class="w-2 bg-primary-container/50 h-[60%] rounded-t-sm"></div>
<div class="w-2 bg-primary-container/40 h-[45%] rounded-t-sm"></div>
<div class="w-2 bg-primary-container/30 h-[55%] rounded-t-sm"></div>
</div>
</div>
<div class="flex justify-between mt-4 text-[10px] text-on-surface-variant font-bold uppercase tracking-tighter px-4">
<span>Día 01</span><span>Día 07</span><span>Día 14</span><span>Día 21</span><span>Día 30</span>
</div>
</div>
<!-- Distribution (Small) -->
<div class="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/5">
<h4 class="text-lg font-bold text-primary font-manrope mb-6">Distribución por Género</h4>
<div class="flex justify-center items-center py-4">
<!-- Decorative Donut Chart -->
<div class="relative w-48 h-48 rounded-full border-[16px] border-primary flex items-center justify-center">
<div class="absolute inset-0 rounded-full border-[16px] border-tertiary-fixed border-t-transparent border-l-transparent -rotate-45"></div>
<div class="absolute inset-0 rounded-full border-[16px] border-secondary-fixed border-b-transparent border-r-transparent border-l-transparent rotate-90"></div>
<div class="text-center">
<span class="text-3xl font-black text-primary block">1.2k</span>
<span class="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Ejemplares</span>
</div>
</div>
</div>
<div class="mt-8 space-y-3">
<div class="flex justify-between items-center text-sm">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-sm bg-primary"></div>
<span class="text-on-surface-variant">Ficción Clásica</span>
</div>
<span class="font-bold">45%</span>
</div>
<div class="flex justify-between items-center text-sm">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-sm bg-tertiary-fixed-dim"></div>
<span class="text-on-surface-variant">Filosofía</span>
</div>
<span class="font-bold">30%</span>
</div>
<div class="flex justify-between items-center text-sm">
<div class="flex items-center gap-2">
<div class="w-3 h-3 rounded-sm bg-secondary-fixed-dim"></div>
<span class="text-on-surface-variant">Historia</span>
</div>
<span class="font-bold">25%</span>
</div>
</div>
</div>
<!-- Monthly Comparison (Large Bottom) -->
<div class="col-span-12 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/5">
<div class="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
<div>
<h4 class="text-lg font-bold text-primary font-manrope">Comparativa Mensual</h4>
<p class="text-sm text-on-surface-variant">Este mes vs Mes anterior</p>
</div>
<div class="flex gap-4">
<button class="px-6 py-2 bg-surface-container-low text-primary text-sm font-semibold rounded-md border border-outline-variant/20 hover:bg-surface-container-high transition-colors flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                                Exportar PDF
                            </button>
<button class="px-6 py-2 bg-primary text-white text-sm font-semibold rounded-md shadow-md hover:brightness-110 transition-all flex items-center gap-2">
<span class="material-symbols-outlined text-[18px]">table_view</span>
                                Exportar Excel
                            </button>
</div>
</div>
<!-- Table: Libros más Vendidos -->
<div class="overflow-x-auto">
<table class="w-full text-left border-collapse">
<thead>
<tr class="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant border-b border-outline-variant/10">
<th class="py-4 px-4">Libro / Edición</th>
<th class="py-4 px-4">Categoría</th>
<th class="py-4 px-4 text-center">Unidades</th>
<th class="py-4 px-4 text-right">Ingresos</th>
<th class="py-4 px-4 text-right">Tendencia</th>
</tr>
</thead>
<tbody class="text-sm">
<tr class="border-b border-outline-variant/5 hover:bg-surface-container-low/30 transition-colors">
<td class="py-5 px-4 flex items-center gap-4">
<div class="w-10 h-14 bg-surface-container-high rounded shadow-sm overflow-hidden flex-shrink-0">
<img alt="Book cover" class="w-full h-full object-cover" data-alt="Classic leather bound book cover with intricate gold leaf patterns and elegant typography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWLozMBwTXKgGAHiYrpg5bZC4dhuAgIlqwHFpexQkZ-xCMpb9tbZqktxio21xPUxGU4iQ6sI1o835cHIp9csQ6fC-xdLWwP4eVEcsF3NvA-L1loAQpWW2fTiyNzIHwij0IhrrDgiQafgUJrTPJxjMQH10_HG0QXYvTNs-Z7LWx80MACI-G6uFbldmlglDaTHACjUnsyfz1dT6Y4MWEoUeVepw726AkPU6vApAKTLWUK9aae6NNE3NccC1yagfoFOSXOXmlXn-Dnvn9"/>
</div>
<div>
<p class="font-bold text-primary">Meditaciones</p>
<p class="text-xs text-on-surface-variant italic">Marco Aurelio</p>
</div>
</td>
<td class="py-5 px-4">
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded-sm">FILOSOFÍA</span>
</td>
<td class="py-5 px-4 text-center font-medium">124</td>
<td class="py-5 px-4 text-right font-bold">$3,100.00</td>
<td class="py-5 px-4 text-right">
<span class="text-emerald-600 flex items-center justify-end gap-1 text-xs">
<span class="material-symbols-outlined text-[14px]">trending_up</span>
                                            14%
                                        </span>
</td>
</tr>
<tr class="border-b border-outline-variant/5 hover:bg-surface-container-low/30 transition-colors">
<td class="py-5 px-4 flex items-center gap-4">
<div class="w-10 h-14 bg-surface-container-high rounded shadow-sm overflow-hidden flex-shrink-0">
<img alt="Book cover" class="w-full h-full object-cover" data-alt="Modern minimalist book cover with deep blue and gold geometric shapes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaIXfZfvgBdVQONczR2T-E8WFtkHNE3iS_NLqioBvfu38j5GgEUxXPfdnN7ixiWkLX17UG8ll1O89L2MN6gGqIdFTlmlAo8bwHlyzYrXz5KwkZJt6fD8qZ3sTtfLy3pbJiELzDPapljoWMuG5EdvKpbWL1pj856LbASNo_g29h0m1YyOWCUzKdvd8VRiDurq1ED4awtAehU0nZR3Z1z-5xrrNM8ebbDRkmrZHVG0S5C4E_9YesjO4qsy59rTZSV3PoyC-s_IvJ1LUH"/>
</div>
<div>
<p class="font-bold text-primary">El Guardián entre el Centeno</p>
<p class="text-xs text-on-surface-variant italic">J.D. Salinger</p>
</div>
</td>
<td class="py-5 px-4">
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded-sm">FICCIÓN</span>
</td>
<td class="py-5 px-4 text-center font-medium">98</td>
<td class="py-5 px-4 text-right font-bold">$1,960.00</td>
<td class="py-5 px-4 text-right">
<span class="text-emerald-600 flex items-center justify-end gap-1 text-xs">
<span class="material-symbols-outlined text-[14px]">trending_up</span>
                                            8%
                                        </span>
</td>
</tr>
<tr class="border-b border-outline-variant/5 hover:bg-surface-container-low/30 transition-colors">
<td class="py-5 px-4 flex items-center gap-4">
<div class="w-10 h-14 bg-surface-container-high rounded shadow-sm overflow-hidden flex-shrink-0">
<img alt="Book cover" class="w-full h-full object-cover" data-alt="Vintage atlas book cover with aged parchment texture and antique map illustrations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMitC6NRIPWe5SeJKxXYSaX3MEfLDLrhaYm9LSwrt-3fY5mXyDbXjBc0YIRPBd9LbU6wi324rcNFgmzb2XEPl_9r3y1ICejWrlsLBvRx1_tvmiCj3y0lzYWhi9mA9n1zGMhEoq7A-XM_D5ydP09tB7yQLz5Jpyt3bbSgzvYoedQXpCEoOl-ncOxsm_2agt3PyLX5q4bfNyxRv6ecrKfX9tFIp9X7I0EDC8hzzVNIroUpojPQJdNsX20VdqtVPes0BPNpU1rWpMnK9K"/>
</div>
<div>
<p class="font-bold text-primary">Breve Historia del Tiempo</p>
<p class="text-xs text-on-surface-variant italic">Stephen Hawking</p>
</div>
</td>
<td class="py-5 px-4">
<span class="bg-secondary-container text-on-secondary-container text-[10px] font-bold px-2 py-1 rounded-sm">CIENCIA</span>
</td>
<td class="py-5 px-4 text-center font-medium">76</td>
<td class="py-5 px-4 text-right font-bold">$1,520.00</td>
<td class="py-5 px-4 text-right">
<span class="text-amber-600 flex items-center justify-end gap-1 text-xs">
<span class="material-symbols-outlined text-[14px]">trending_flat</span>
                                            2%
                                        </span>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>

<!-- Floating Action Button - suppressed as per mandate for detailed/transactional pages -->

  
</template>

<script setup>
</script>

<style scoped>
</style>
