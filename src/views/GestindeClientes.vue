<template>
  
    
<!-- SideNavBar (Authority: JSON) -->

<!-- Main Content Area -->

<!-- TopNavBar (Authority: JSON) -->

<!-- Content Canvas -->
<div class="flex-1 overflow-hidden flex flex-row p-8 gap-8">
<!-- Main Grid/Table Section -->
<section class="flex-1 bg-surface-container-lowest rounded-xl overflow-hidden flex flex-col shadow-sm">
<div class="p-6 flex justify-between items-end border-b border-outline-variant/10 bg-surface-container-low/30">
<div>
<h2 class="text-2xl font-headline font-bold text-primary tracking-tight">Directorio de Clientes</h2>
<p class="text-sm text-secondary/70 font-light mt-1">Gestiona el acceso y perfiles de tu comunidad académica.</p>
</div>
<button class="flex items-center gap-2 bg-primary text-on-primary px-5 py-2.5 rounded-md text-sm font-medium hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-lg" data-icon="person_add">person_add</span>
                        Crear nuevo cliente
                    </button>
</div>
<div class="flex-1 overflow-y-auto custom-scrollbar">
<table class="w-full text-left border-collapse">
<thead class="sticky top-0 bg-surface-container-high/90 backdrop-blur-sm z-10 text-[11px] uppercase tracking-widest text-secondary/60 font-semibold">
<tr>
<th class="px-6 py-4">Nombre Completo</th>
<th class="px-6 py-4">Documento</th>
<th class="px-6 py-4">Contacto</th>
<th class="px-6 py-4">Registro</th>
<th class="px-6 py-4">Estado</th>
<th class="px-6 py-4 text-right">Acciones</th>
</tr>
</thead>
<tbody class="divide-y divide-outline-variant/10">
<!-- Row 1: Selected state simulation -->
<tr class="hover:bg-surface-container-low/50 transition-colors group cursor-pointer bg-surface-container-lowest border-l-4 border-tertiary">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-md bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline font-bold text-xs">
                                            AM
                                        </div>
<div>
<p class="text-sm font-semibold text-primary">Alejandro Mendoza</p>
<p class="text-[11px] text-secondary/60">Investigador Senior</p>
</div>
</div>
</td>
<td class="px-6 py-5 text-sm text-on-surface-variant font-medium">DNI 45678291</td>
<td class="px-6 py-5">
<p class="text-sm text-on-surface-variant">a.mendoza@academia.edu</p>
<p class="text-[11px] text-secondary/60">+51 987 654 321</p>
</td>
<td class="px-6 py-5 text-sm text-on-surface-variant font-light tracking-tight">12 Oct, 2023</td>
<td class="px-6 py-5">
<span class="px-2.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">Activo</span>
</td>
<td class="px-6 py-5 text-right">
<div class="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-1.5 hover:bg-surface-container-high rounded text-secondary" title="Editar"><span class="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
<button class="p-1.5 hover:bg-surface-container-high rounded text-secondary" title="Desactivar"><span class="material-symbols-outlined text-lg" data-icon="block">block</span></button>
<button class="p-1.5 hover:bg-red-50 rounded text-error/70" title="Eliminar"><span class="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
</div>
</td>
</tr>
<!-- Row 2 -->
<tr class="hover:bg-surface-container-low/50 transition-colors group cursor-pointer">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-md bg-tertiary-fixed flex items-center justify-center text-on-tertiary-fixed font-headline font-bold text-xs">
                                            BE
                                        </div>
<div>
<p class="text-sm font-semibold text-primary">Beatriz Espinoza</p>
<p class="text-[11px] text-secondary/60">Estudiante Posgrado</p>
</div>
</div>
</td>
<td class="px-6 py-5 text-sm text-on-surface-variant font-medium">RUC 10452367812</td>
<td class="px-6 py-5">
<p class="text-sm text-on-surface-variant">b.espinoza@univ.pe</p>
<p class="text-[11px] text-secondary/60">+51 912 345 678</p>
</td>
<td class="px-6 py-5 text-sm text-on-surface-variant font-light tracking-tight">05 Nov, 2023</td>
<td class="px-6 py-5">
<span class="px-2.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 border border-emerald-200">Activo</span>
</td>
<td class="px-6 py-5 text-right">
<div class="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-1.5 hover:bg-surface-container-high rounded text-secondary"><span class="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
<button class="p-1.5 hover:bg-surface-container-high rounded text-secondary"><span class="material-symbols-outlined text-lg" data-icon="block">block</span></button>
<button class="p-1.5 hover:bg-red-50 rounded text-error/70"><span class="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
</div>
</td>
</tr>
<!-- Row 3 -->
<tr class="hover:bg-surface-container-low/50 transition-colors group cursor-pointer">
<td class="px-6 py-5">
<div class="flex items-center gap-3">
<div class="w-9 h-9 rounded-md bg-surface-container-highest flex items-center justify-center text-on-surface-variant font-headline font-bold text-xs">
                                            RC
                                        </div>
<div>
<p class="text-sm font-semibold text-primary">Ricardo Casals</p>
<p class="text-[11px] text-secondary/60">Docente Invitado</p>
</div>
</div>
</td>
<td class="px-6 py-5 text-sm text-on-surface-variant font-medium">DNI 09321456</td>
<td class="px-6 py-5">
<p class="text-sm text-on-surface-variant">rcasals@correo.com</p>
<p class="text-[11px] text-secondary/60">+51 944 556 677</p>
</td>
<td class="px-6 py-5 text-sm text-on-surface-variant font-light tracking-tight">20 Ene, 2024</td>
<td class="px-6 py-5">
<span class="px-2.5 py-0.5 rounded-sm text-[10px] font-bold uppercase tracking-wider bg-surface-container-highest text-on-surface-variant border border-outline-variant/30">Inactivo</span>
</td>
<td class="px-6 py-5 text-right">
<div class="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button class="p-1.5 hover:bg-surface-container-high rounded text-secondary"><span class="material-symbols-outlined text-lg" data-icon="edit">edit</span></button>
<button class="p-1.5 hover:bg-surface-container-high rounded text-emerald-600" title="Activar"><span class="material-symbols-outlined text-lg" data-icon="check_circle">check_circle</span></button>
<button class="p-1.5 hover:bg-red-50 rounded text-error/70"><span class="material-symbols-outlined text-lg" data-icon="delete">delete</span></button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
<div class="p-4 bg-surface-container-low/10 flex items-center justify-between text-[11px] font-medium text-secondary/60 uppercase tracking-tighter">
<span>Mostrando 1-10 de 1,248 clientes</span>
<div class="flex gap-2">
<button class="p-1 hover:bg-surface-container-high rounded transition-colors"><span class="material-symbols-outlined" data-icon="chevron_left">chevron_left</span></button>
<button class="p-1 hover:bg-surface-container-high rounded transition-colors"><span class="material-symbols-outlined" data-icon="chevron_right">chevron_right</span></button>
</div>
</div>
</section>
<!-- Detailed Client Panel (Asymmetric Placement) -->
<aside class="w-96 bg-surface-container-low rounded-xl border border-outline-variant/10 overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
<div class="relative h-32 overflow-hidden">
<div class="absolute inset-0 bg-primary/20 backdrop-blur-sm z-10"></div>
<img alt="Library interior background" class="w-full h-full object-cover" data-alt="blurred interior of a classic library with tall wooden bookshelves and soft ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC63wqOfZJpaLkYa5_8KnNVNfXTU1sB-JH8-HPMyx0NCNMEI3nlwBpvvMuhRhyUOQTggeFx3qj-fK6I9izceHVAnJReaZbwRsQac4mKaPNmbggWVJozyO4AgWm8bXsR1skZwzjHOjP-jf5JJLRvDUrdy2F7Sj6430BgoIX3QBLJQd15uaxq1RttKmx64tkjBZl2FGmlavwm93xzy0rnHf24u8gkpfYluFdQPlwmXgTZjYs6k5B7vTpEdMdSs3y1H20XENU7rzN98n64"/>
<button class="absolute top-4 right-4 z-20 text-white/70 hover:text-white transition-colors">
<span class="material-symbols-outlined" data-icon="close">close</span>
</button>
</div>
<div class="px-6 -mt-10 relative z-20 flex-1 flex flex-col pb-6 overflow-y-auto custom-scrollbar">
<div class="flex flex-col items-center mb-6">
<div class="w-20 h-20 rounded-xl bg-white shadow-xl flex items-center justify-center border-4 border-surface overflow-hidden">
<span class="text-2xl font-headline font-extrabold text-primary">AM</span>
</div>
<h3 class="mt-3 text-lg font-bold text-primary font-headline">Alejandro Mendoza</h3>
<p class="text-xs text-secondary/60 italic tracking-wide">Miembro desde Octubre 2023</p>
</div>
<div class="space-y-6">
<!-- Contact Section -->
<section>
<h4 class="text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold mb-3 border-b border-outline-variant/20 pb-1">Información de Contacto</h4>
<div class="space-y-3">
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary/60 text-lg" data-icon="mail">mail</span>
<div>
<p class="text-[10px] text-secondary/50 font-bold uppercase">Correo Institucional</p>
<p class="text-xs text-on-surface">a.mendoza@academia.edu</p>
</div>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary/60 text-lg" data-icon="call">call</span>
<div>
<p class="text-[10px] text-secondary/50 font-bold uppercase">Teléfono Móvil</p>
<p class="text-xs text-on-surface">+51 987 654 321</p>
</div>
</div>
<div class="flex items-start gap-3">
<span class="material-symbols-outlined text-secondary/60 text-lg" data-icon="location_on">location_on</span>
<div>
<p class="text-[10px] text-secondary/50 font-bold uppercase">Dirección Principal</p>
<p class="text-xs text-on-surface">Av. Los Olmos 452, Urb. San Isidro, Lima.</p>
</div>
</div>
</div>
</section>
<!-- Purchase History -->
<section>
<div class="flex justify-between items-end mb-3 border-b border-outline-variant/20 pb-1">
<h4 class="text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold">Historial de Compras</h4>
<span class="text-[10px] font-bold text-primary">Total: S/ 1,450.00</span>
</div>
<div class="space-y-2">
<div class="bg-white/40 p-3 rounded-lg border border-outline-variant/5 hover:border-outline-variant/30 transition-all cursor-default">
<div class="flex justify-between items-start mb-1">
<span class="text-[11px] font-bold text-primary">#ORD-2024-001</span>
<span class="text-[10px] text-secondary/60">Hace 2 días</span>
</div>
<div class="flex justify-between items-center">
<span class="text-[10px] text-on-surface-variant italic">3 ítems: Arqueología Peruana, Ensayos...</span>
<span class="text-xs font-semibold text-tertiary">S/ 245.00</span>
</div>
</div>
<div class="bg-white/40 p-3 rounded-lg border border-outline-variant/5 hover:border-outline-variant/30 transition-all cursor-default">
<div class="flex justify-between items-start mb-1">
<span class="text-[11px] font-bold text-primary">#ORD-2023-452</span>
<span class="text-[10px] text-secondary/60">15 Dic, 2023</span>
</div>
<div class="flex justify-between items-center">
<span class="text-[10px] text-on-surface-variant italic">1 ítem: Historia Crítica del Arte</span>
<span class="text-xs font-semibold text-tertiary">S/ 120.00</span>
</div>
</div>
</div>
<button class="w-full mt-4 text-[11px] font-bold text-secondary hover:text-primary underline underline-offset-4 decoration-outline-variant transition-colors">
                                Ver historial completo
                            </button>
</section>
</div>
<div class="mt-8 pt-6 border-t border-outline-variant/20 flex gap-3">
<button class="flex-1 border border-outline-variant text-secondary text-xs font-bold py-2 rounded hover:bg-surface-container-highest transition-colors">
                            Editar Perfil
                        </button>
<button class="px-3 border border-outline-variant text-secondary rounded hover:bg-surface-container-highest transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="more_horiz">more_horiz</span>
</button>
</div>
</div>
</aside>
</div>


  
</template>

<script setup>
</script>

<style scoped>
</style>
