<template>
  
    
<!-- SideNavBar (Authority: JSON) -->


<!-- TopAppBar (Authority: JSON) -->

<div class="max-w-7xl mx-auto px-8 pt-8 space-y-8">
<!-- KPI Section - Bento Grid Style -->
<section class="grid grid-cols-1 md:grid-cols-3 gap-6">
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 shadow-sm flex items-center gap-5">
<div class="w-14 h-14 rounded-lg bg-secondary-container flex items-center justify-center text-secondary">
<span class="material-symbols-outlined text-3xl" data-icon="payments">payments</span>
</div>
<div>
<p class="text-xs font-semibold text-on-surface-variant tracking-wider uppercase">Total Ventas (Periodo)</p>
<h3 class="text-2xl font-black text-primary font-headline mt-1">$42,850.50</h3>
<p class="text-[10px] text-green-700 font-medium flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-xs" data-icon="trending_up">trending_up</span>
                            +12% vs mes anterior
                        </p>
</div>
</div>
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 shadow-sm flex items-center gap-5">
<div class="w-14 h-14 rounded-lg bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed-variant">
<span class="material-symbols-outlined text-3xl" data-icon="confirmation_number">confirmation_number</span>
</div>
<div>
<p class="text-xs font-semibold text-on-surface-variant tracking-wider uppercase">Ticket Promedio</p>
<h3 class="text-2xl font-black text-primary font-headline mt-1">$1,245.00</h3>
<p class="text-[10px] text-on-surface-variant font-medium mt-1">Basado en 34 transacciones</p>
</div>
</div>
<div class="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 shadow-sm flex items-center gap-5">
<div class="w-14 h-14 rounded-lg bg-error-container flex items-center justify-center text-on-error-container">
<span class="material-symbols-outlined text-3xl" data-icon="cancel">cancel</span>
</div>
<div>
<p class="text-xs font-semibold text-on-surface-variant tracking-wider uppercase">Ventas Anuladas</p>
<h3 class="text-2xl font-black text-primary font-headline mt-1">4</h3>
<p class="text-[10px] text-error font-medium flex items-center gap-1 mt-1">
<span class="material-symbols-outlined text-xs" data-icon="warning">warning</span>
                            Requiere revisión
                        </p>
</div>
</div>
</section>
<!-- Filters Bar -->
<section class="bg-surface-container p-4 rounded-lg flex flex-wrap items-center gap-6">
<div class="flex items-center gap-2">
<span class="text-xs font-semibold text-on-surface-variant uppercase tracking-tight">Fecha:</span>
<div class="flex bg-surface-container-highest rounded-md p-1 gap-1">
<button class="px-3 py-1 text-xs font-medium bg-surface-container-lowest text-primary rounded shadow-sm">Hoy</button>
<button class="px-3 py-1 text-xs font-medium text-on-surface-variant hover:text-primary transition-colors">Semana</button>
<button class="px-3 py-1 text-xs font-medium text-on-surface-variant hover:text-primary transition-colors">Mes</button>
<button class="px-3 py-1 text-xs font-medium text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1">
<span class="material-symbols-outlined text-xs" data-icon="calendar_today">calendar_today</span>
                            Custom
                        </button>
</div>
</div>
<div class="flex items-center gap-2">
<span class="text-xs font-semibold text-on-surface-variant uppercase tracking-tight">Método:</span>
<select class="bg-surface-container-highest border-none rounded-md text-xs font-medium py-1.5 focus:ring-1 focus:ring-tertiary">
<option>Todos</option>
<option>Efectivo</option>
<option>Tarjeta</option>
<option>Transferencia</option>
</select>
</div>
<div class="flex items-center gap-2">
<span class="text-xs font-semibold text-on-surface-variant uppercase tracking-tight">Estado:</span>
<select class="bg-surface-container-highest border-none rounded-md text-xs font-medium py-1.5 focus:ring-1 focus:ring-tertiary">
<option>Todos</option>
<option>Completada</option>
<option>Anulada</option>
</select>
</div>
<div class="ml-auto">
<button class="text-primary text-xs font-bold flex items-center gap-2 hover:underline">
<span class="material-symbols-outlined text-sm" data-icon="filter_list">filter_list</span>
                        Limpiar Filtros
                    </button>
</div>
</section>
<!-- Main Table Section -->
<section class="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10">
<table class="w-full border-collapse">
<thead>
<tr class="bg-surface-container-low text-left">
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">ID Venta</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Fecha y Hora</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Cliente</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Productos</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Total</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Método</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Estado</th>
<th class="px-6 py-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest text-center">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-surface-container">
<!-- Row 1 (Expanded / Active Example) -->
<tr class="hover:bg-surface-container-low/50 transition-colors bg-surface-container-low">
<td class="px-6 py-4 font-mono text-sm text-primary font-semibold">#77291</td>
<td class="px-6 py-4 text-xs text-on-surface-variant">24 May 2024, 14:20</td>
<td class="px-6 py-4 text-sm font-medium">Beatriz Olmedo</td>
<td class="px-6 py-4 text-xs">3 items</td>
<td class="px-6 py-4 font-bold text-sm text-primary">$3,420.00</td>
<td class="px-6 py-4">
<span class="bg-surface-container-highest px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter">Tarjeta</span>
</td>
<td class="px-6 py-4">
<span class="flex items-center gap-1 text-green-700 font-bold text-[10px] uppercase tracking-wider">
<span class="w-1.5 h-1.5 bg-green-700 rounded-full"></span>
                                    Completada
                                </span>
</td>
<td class="px-6 py-4 text-center">
<button class="p-1 hover:text-tertiary transition-colors"><span class="material-symbols-outlined" data-icon="keyboard_arrow_up">keyboard_arrow_up</span></button>
</td>
</tr>
<!-- Detail View (Nested for Row 1) -->
<tr class="bg-surface-container-low">
<td class="px-8 pb-8" colspan="8">
<div class="bg-surface-container-lowest rounded-xl p-6 shadow-inner border border-outline-variant/15 grid grid-cols-1 lg:grid-cols-3 gap-8">
<div class="lg:col-span-2">
<h4 class="text-xs font-black text-primary uppercase tracking-widest mb-4">Detalle de Libros</h4>
<div class="space-y-4">
<div class="flex items-center justify-between border-b border-surface-container pb-3">
<div class="flex gap-3">
<div class="w-10 h-14 bg-surface-container rounded overflow-hidden flex-shrink-0">
<img alt="Book Cover" data-alt="close-up of a classic leather-bound book cover with gold foil lettering in a dimly lit library" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7UR17zkAFQqaB5qETzTiLPAbB164goKMYbIeiIVjuIhbzeZ9Lo57Av2BsZ8PgcGdRksf-q8p8NacANpP5MpooUZ-S1VnbqegxWLQIpFD0k6ZAmhzzECYnEJ8zAs55PCd51rX_r0hDjcafBWuMc3K5UTkyBJ0T-HwY4mgyfddiYKQYR3czq27uoD_BXo_4xVYMHWa9Wh1hvFglxskK8uYfZHA_jOdhcZrDOl85GsPx-iPf8jnNQW5JJ8RT9OxHPjOjayfATapWdF1W"/>
</div>
<div>
<p class="text-sm font-semibold text-primary">El Archivo de las Sombras</p>
<p class="text-[10px] text-on-surface-variant uppercase">ID: BK-8821 • Edición Coleccionista</p>
</div>
</div>
<div class="text-right">
<p class="text-sm font-medium">1 x $1,800.00</p>
<p class="text-xs font-bold text-primary">$1,800.00</p>
</div>
</div>
<div class="flex items-center justify-between border-b border-surface-container pb-3">
<div class="flex gap-3">
<div class="w-10 h-14 bg-surface-container rounded overflow-hidden flex-shrink-0">
<img alt="Book Cover" data-alt="aged paper texture with elegant calligraphy and ink stains suggestive of a historical manuscript" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0eGGftpM2bHDEhRjay6POC77K7rADp7n9DTKyumFJgW1KbIYB9MEO4sSw0qMAr4lo0sx7F3YcbH_xKfl9hiHQGXfHHwLa14uJ8kbRah92d4SWF-TOtgMeUxj8HlSwpbX4g4bdylNeY3DnUHI-P4xqf5S4dJ4BTnnwXMjzSG9yQHmEcBw2EFiMmQ9e3oT6yHJC5sA4aW26Yyt6ZVK2YHiohUFjKkYTSBEdB6ZOrS6IEmiYMpNyjIYVbil0ZKOWvoHY96DGlCPOSOUV"/>
</div>
<div>
<p class="text-sm font-semibold text-primary">Crónicas de la Vieja Librería</p>
<p class="text-[10px] text-on-surface-variant uppercase">ID: BK-1102 • Tapa Dura</p>
</div>
</div>
<div class="text-right">
<p class="text-sm font-medium">2 x $810.00</p>
<p class="text-xs font-bold text-primary">$1,620.00</p>
</div>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-lg p-5 flex flex-col">
<h4 class="text-xs font-black text-primary uppercase tracking-widest mb-6">Resumen Financiero</h4>
<div class="space-y-3 flex-1">
<div class="flex justify-between text-xs text-on-surface-variant">
<span>Subtotal</span>
<span class="font-semibold">$3,420.00</span>
</div>
<div class="flex justify-between text-xs text-on-surface-variant">
<span>Descuento (Miembro Gold)</span>
<span class="font-semibold text-tertiary">-$0.00</span>
</div>
<div class="flex justify-between text-xs text-on-surface-variant">
<span>IVA (16%)</span>
<span class="font-semibold">$0.00</span>
</div>
<div class="pt-4 mt-4 border-t border-outline-variant/30 flex justify-between">
<span class="text-sm font-bold text-primary">Total Final</span>
<span class="text-lg font-black text-primary font-headline">$3,420.00</span>
</div>
</div>
<div class="mt-8 flex flex-wrap gap-2">
<button class="flex-1 bg-surface-container-highest text-on-surface-variant py-2 px-3 rounded text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-outline-variant/30 transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="print">print</span>
                                                Reimprimir
                                            </button>
<button class="flex-1 bg-surface-container-highest text-on-surface-variant py-2 px-3 rounded text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-outline-variant/30 transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="picture_as_pdf">picture_as_pdf</span>
                                                Exportar
                                            </button>
<button class="w-full border border-error/20 text-error py-2 px-3 rounded text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-error-container/20 transition-colors mt-2">
<span class="material-symbols-outlined text-sm" data-icon="block">block</span>
                                                Anular Venta
                                            </button>
</div>
</div>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low/50 transition-colors">
<td class="px-6 py-4 font-mono text-sm text-primary">#77290</td>
<td class="px-6 py-4 text-xs text-on-surface-variant">24 May 2024, 11:05</td>
<td class="px-6 py-4 text-sm font-medium">Carlos Ruiz</td>
<td class="px-6 py-4 text-xs">1 item</td>
<td class="px-6 py-4 font-bold text-sm text-primary">$890.00</td>
<td class="px-6 py-4">
<span class="bg-surface-container-highest px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter">Efectivo</span>
</td>
<td class="px-6 py-4">
<span class="flex items-center gap-1 text-green-700 font-bold text-[10px] uppercase tracking-wider">
<span class="w-1.5 h-1.5 bg-green-700 rounded-full"></span>
                                    Completada
                                </span>
</td>
<td class="px-6 py-4 text-center">
<button class="p-1 text-stone-400 hover:text-primary transition-colors"><span class="material-symbols-outlined" data-icon="keyboard_arrow_down">keyboard_arrow_down</span></button>
</td>
</tr>
<!-- Row 3 (Canceled state) -->
<tr class="hover:bg-surface-container-low/50 transition-colors">
<td class="px-6 py-4 font-mono text-sm text-stone-400 line-through">#77289</td>
<td class="px-6 py-4 text-xs text-stone-400">23 May 2024, 18:45</td>
<td class="px-6 py-4 text-sm font-medium text-stone-400">Anónimo</td>
<td class="px-6 py-4 text-xs text-stone-400">5 items</td>
<td class="px-6 py-4 font-bold text-sm text-stone-400">$6,120.00</td>
<td class="px-6 py-4">
<span class="bg-surface-container text-stone-300 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter">Tarjeta</span>
</td>
<td class="px-6 py-4">
<span class="flex items-center gap-1 text-error font-bold text-[10px] uppercase tracking-wider">
<span class="w-1.5 h-1.5 bg-error rounded-full"></span>
                                    Anulada
                                </span>
</td>
<td class="px-6 py-4 text-center">
<button class="p-1 text-stone-400 hover:text-primary transition-colors"><span class="material-symbols-outlined" data-icon="keyboard_arrow_down">keyboard_arrow_down</span></button>
</td>
</tr>
<!-- Row 4 -->
<tr class="hover:bg-surface-container-low/50 transition-colors">
<td class="px-6 py-4 font-mono text-sm text-primary">#77288</td>
<td class="px-6 py-4 text-xs text-on-surface-variant">23 May 2024, 16:30</td>
<td class="px-6 py-4 text-sm font-medium">Elena Marqués</td>
<td class="px-6 py-4 text-xs">2 items</td>
<td class="px-6 py-4 font-bold text-sm text-primary">$1,560.00</td>
<td class="px-6 py-4">
<span class="bg-surface-container-highest px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tighter">Transferencia</span>
</td>
<td class="px-6 py-4">
<span class="flex items-center gap-1 text-green-700 font-bold text-[10px] uppercase tracking-wider">
<span class="w-1.5 h-1.5 bg-green-700 rounded-full"></span>
                                    Completada
                                </span>
</td>
<td class="px-6 py-4 text-center">
<button class="p-1 text-stone-400 hover:text-primary transition-colors"><span class="material-symbols-outlined" data-icon="keyboard_arrow_down">keyboard_arrow_down</span></button>
</td>
</tr>
</tbody>
</table>
<div class="p-4 bg-surface-container-low border-t border-outline-variant/10 flex items-center justify-between">
<span class="text-xs text-on-surface-variant">Mostrando 4 de 124 transacciones</span>
<div class="flex gap-1">
<button class="w-8 h-8 rounded border border-outline-variant/30 flex items-center justify-center text-stone-400 hover:bg-surface-container-highest transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="chevron_left">chevron_left</span>
</button>
<button class="w-8 h-8 rounded bg-primary text-on-primary text-xs font-bold">1</button>
<button class="w-8 h-8 rounded border border-outline-variant/30 text-xs font-medium hover:bg-surface-container-highest transition-colors">2</button>
<button class="w-8 h-8 rounded border border-outline-variant/30 text-xs font-medium hover:bg-surface-container-highest transition-colors">3</button>
<button class="w-8 h-8 rounded border border-outline-variant/30 flex items-center justify-center hover:bg-surface-container-highest transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="chevron_right">chevron_right</span>
</button>
</div>
</div>
</section>
</div>

<!-- Floating Action Button (FAB) Suppression: Hide for details screen context as per instructions -->

  
</template>

<script setup>
</script>

<style scoped>
</style>
