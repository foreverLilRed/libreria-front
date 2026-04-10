<template>
  
    
<!-- SideNavBar (Authority: JSON) -->

<!-- Main Content Area -->

<!-- Header (Authority: JSON/Design System) -->

<!-- POS Canvas -->
<div class="flex flex-1 p-8 gap-8">
<!-- Left Column: Catalog & Search -->
<section class="flex-[3] space-y-8">
<!-- Search Bar -->
<div class="relative group">
<div class="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-400 group-focus-within:text-tertiary transition-colors">
<span class="material-symbols-outlined" data-icon="search">search</span>
</div>
<input class="w-full pl-12 pr-4 py-5 bg-surface-container-low border-b-2 border-outline-variant/20 focus:border-tertiary focus:ring-0 text-lg transition-all rounded-t-lg font-light placeholder:text-stone-400" placeholder="Buscar por título, autor o ISBN..." type="text"/>
</div>
<!-- Best Sellers / Quick Access -->
<div>
<div class="flex items-center justify-between mb-4">
<h2 class="text-lg font-bold text-primary flex items-center">
<span class="material-symbols-outlined mr-2 text-tertiary-container" data-icon="auto_awesome">auto_awesome</span>
                            Libros más vendidos
                        </h2>
<span class="text-xs text-on-surface-variant/60 font-medium uppercase tracking-widest">Acceso Rápido</span>
</div>
<div class="grid grid-cols-5 gap-4">
<div class="bg-surface-container-highest p-3 rounded hover:bg-surface-container-high transition-all cursor-pointer group flex flex-col items-center text-center shadow-sm">
<div class="w-full aspect-[2/3] bg-stone-300 rounded mb-2 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="vintage book cover design with gold filigree and dark leather texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCn7JhONnbFCbYtss5vWCOy8XjkuMnKuSSEdFOyMfPFyPAQV_FotVp9YYjrr9lk1a8wLDHFE2ouOXUriIFndhPzCmkw756T0CMNCZIUMJ1GSuFF8L9wsr0np0acZhcALRZXj7N4DOGmi5jt-wNM4d9EMipHtPzh9g4AqSoyByLwP-LfdwxveiY0Sm_7a2IXH1yu9A4nwMJz_nH5rlKWi2KGzpgYlXL9mzYChu5Ri7wvwg4F4_wbf2fsDPlDJsj_-nk-1hSaL-T1B_3V"/>
</div>
<p class="text-xs font-bold text-primary leading-tight truncate w-full">Cien Años de Soledad</p>
<p class="text-[10px] text-on-surface-variant italic">$22.00</p>
</div>
<div class="bg-surface-container-highest p-3 rounded hover:bg-surface-container-high transition-all cursor-pointer group flex flex-col items-center text-center shadow-sm">
<div class="w-full aspect-[2/3] bg-stone-300 rounded mb-2 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="modern minimalist book cover with abstract circular art in sepia tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCawXiZgit5toGnQE1IDFYlwfAyE-qeCaEEkKK2jOAgwVEitc5oLB7_UuK6FQAjx825n8XPteo7R5MSASC1Py8hELkiEiQKTxxu955yjLBtX25pfZlbc5gny2SHp_b7LTEVFMHAR3QJG_TWWHAI6Sg940SkzjcZ0HWIwL2uJJowdGVrRAFf8ssDf3FiSHKS6syegnAlffb5itkGexymXF2516pmj5joQnW6tcZSeJid3MOFz2eOSr0_vrO62V7t790FggZxqkT7_g3t"/>
</div>
<p class="text-xs font-bold text-primary leading-tight truncate w-full">El Alquimista</p>
<p class="text-[10px] text-on-surface-variant italic">$18.50</p>
</div>
<div class="bg-surface-container-highest p-3 rounded hover:bg-surface-container-high transition-all cursor-pointer group flex flex-col items-center text-center shadow-sm">
<div class="w-full aspect-[2/3] bg-stone-300 rounded mb-2 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="classical literature book cover with ornate serif typography and cream parchment background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLe1IT5wYnMeize7k6ck0ldyYVtU2XV-EPr5RANgAAVVAQJ7XBcZFg_Dch_vQc9F6q0FNE2wNGRe--oZc4Z4zCX0EvznnfuvQ46zKBbOqpTMlGLnhYTsKLVI3IqcG42xRf9-AkiE3U4Wt8HxRYO1IYJ-i56Aku8hNx28JehM9yNeRh-Cp2vHU-ySOPzLsDhqGlcmSAFIgwnQX_CGoE_Hc-OddhfESQxVW4naq3AI_YiemL5Fzz_xc3qC93j0xg4laVw8MqgCClwbt2"/>
</div>
<p class="text-xs font-bold text-primary leading-tight truncate w-full">Don Quijote</p>
<p class="text-[10px] text-on-surface-variant italic">$35.00</p>
</div>
<div class="bg-surface-container-highest p-3 rounded hover:bg-surface-container-high transition-all cursor-pointer group flex flex-col items-center text-center shadow-sm">
<div class="w-full aspect-[2/3] bg-stone-300 rounded mb-2 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="old academic book with weathered spine and textured paper cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0acm0KV987aiEU4nUwUuUYO2BBikJ3ruEV8OLH0TyMMq4TzRztjoqsSbXm1jC2bq356Zs-24aVA4VrDMeKgGY7p2rgcQ8Rfuk4_dZQC2t4R-0AzCmsTvBHC6Ps0ZZ-DZx_DMOGbmA0ISNoUrFE5fNzEl7B7uWG4u2F1sFAhFv22YKmjZuOrb_QEZKRZfr_gMxOkvFk-tqM_v2RxcFMBMVZozzc9wv7cRGcWPz9vQAKGOrnxAKBa3E8jNVXUT2-isblGN5FLJ_BsmV"/>
</div>
<p class="text-xs font-bold text-primary leading-tight truncate w-full">Crónica de una muerte</p>
<p class="text-[10px] text-on-surface-variant italic">$15.00</p>
</div>
<div class="bg-surface-container-highest p-3 rounded hover:bg-surface-container-high transition-all cursor-pointer group flex flex-col items-center text-center shadow-sm">
<div class="w-full aspect-[2/3] bg-stone-300 rounded mb-2 overflow-hidden">
<img class="w-full h-full object-cover" data-alt="dark academia style book cover with a simple candle illustration" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjuN9cG4Hosuejy0bJs3x859A4ULd4_37EEJl9aTz31ZakVe5PuohMN6zFzwfMw_p9XiH56QrlL4OcpSjDG9nyIm13jOIVeSi9-RGM7D6KO_wVnoJeHGNnbhTv_8TvEB5I7J0RxlKl2HvyvxNH6ormEhHO2LivXcwdiWuW-xtR-2MLpTCiM6kvDrlhicY6JS_zKEUZcPmkbGZoPc4PH9pN_XoFzbIHwHch0nhx_j3i-lTJ3o9jxO44JCmZJ63W9Ttb_-2v9odaKTti"/>
</div>
<p class="text-xs font-bold text-primary leading-tight truncate w-full">La Sombra del Viento</p>
<p class="text-[10px] text-on-surface-variant italic">$28.90</p>
</div>
</div>
</div>
<!-- Search Results Grid -->
<div>
<h2 class="text-lg font-bold text-primary mb-4">Resultados</h2>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
<!-- Book Card 1 -->
<div class="flex bg-surface-container-low hover:bg-surface-container-high transition-all rounded-lg p-4 cursor-pointer group relative overflow-hidden">
<div class="w-24 h-36 bg-stone-200 rounded flex-shrink-0 overflow-hidden shadow-sm">
<img class="w-full h-full object-cover" data-alt="vibrant blue book cover with gold lettering and historical motif" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_ti8eEt1267AvwP3ARUv2GMxfQX9oCsVcNxM2zqekNzn8Z_a9zeFqJXhuHfb7SbBBb1EwMBNewX0raha55PEWSJ_BOHa3Zy8xgBFN_jqJ_nNHdNlBo2QYOdNK0oqQs1IsuLf_4x-H9_O1vRouEvIBl0MnRgrXYIc_ab7QBRW75iTEHiwpCpIZNXXpXrC84xiIYx8j9etqdAgSSybnjLbcRCK9k4gDKMuXO8GTC-h9T3BKr5KKec1KbC40nTrh00RM0th_q_TXDZL2"/>
</div>
<div class="ml-4 flex-1 flex flex-col">
<h3 class="text-base font-bold text-primary">El Laberinto de los Espíritus</h3>
<p class="text-sm italic text-secondary mb-2">Carlos Ruiz Zafón</p>
<div class="mt-auto flex justify-between items-end">
<div>
<p class="text-xs text-on-surface-variant">ISBN: 9788408163381</p>
<p class="text-xs font-semibold text-tertiary-container mt-1">Stock: 12 unidades</p>
</div>
<div class="text-right">
<p class="text-xl font-bold text-primary">$32.50</p>
</div>
</div>
</div>
<div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span class="bg-primary text-white p-2 rounded-full flex items-center justify-center">
<span class="material-symbols-outlined text-sm" data-icon="add">add</span>
</span>
</div>
</div>
<!-- Book Card 2 (Insufficient Stock) -->
<div class="flex bg-surface-container-low hover:bg-surface-container-high transition-all rounded-lg p-4 cursor-pointer group relative overflow-hidden ring-1 ring-error/20">
<div class="w-24 h-36 bg-stone-200 rounded flex-shrink-0 overflow-hidden opacity-60">
<img class="w-full h-full object-cover" data-alt="aged book pages with yellowed edges and elegant handwritten calligraphy" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwve-kTh7j0zZg5h3MPAf9ZZoEVgGK_iRH8hjqlYB84sDPtmtwUYy6PrQfh0YyOeZbN0PvtMxWwGhqHFgVrLqfBid9sLfh-jtuBoPaq1l_7uq1_mnktNhBK4tfnThM5busBJQynj3J7mtFReo52RJD_PzifQ8ZXY5PdMrtT6_lZ7DSSVxbBHkXeAHtZVqlPrZnPI_bsqGbnfp5XJBsjwEdZ1oOkNiToZCtiSPrxvhKDKu_IOtVCaccQyEzqf2epk0AyvMasCjb8n5x"/>
</div>
<div class="ml-4 flex-1 flex flex-col">
<h3 class="text-base font-bold text-primary">Memorias de Idhún</h3>
<p class="text-sm italic text-secondary mb-2">Laura Gallego</p>
<div class="mt-auto flex justify-between items-end">
<div>
<p class="text-xs text-on-surface-variant">ISBN: 9788467502695</p>
<p class="text-xs font-bold text-error mt-1 flex items-center">
<span class="material-symbols-outlined text-xs mr-1" data-icon="warning">warning</span>
                                            Stock insuficiente: 0
                                        </p>
</div>
<div class="text-right">
<p class="text-xl font-bold text-primary opacity-50">$24.00</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<!-- Right Column: Current Sale / Cart -->
<aside class="flex-[2] bg-surface-container-lowest rounded-xl p-6 flex flex-col shadow-2xl shadow-stone-200/50 sticky top-24 h-[calc(100vh-8rem)]">
<div class="flex items-center space-x-2 border-b border-outline-variant/10 pb-4 mb-6">
<span class="material-symbols-outlined text-tertiary" data-icon="shopping_basket">shopping_basket</span>
<h2 class="text-xl font-bold text-primary">Venta Actual</h2>
</div>
<!-- Cart Items List -->
<div class="flex-1 overflow-y-auto pr-2 -mr-2 space-y-4">
<!-- Item 1 -->
<div class="flex items-center p-3 rounded-lg bg-surface-container-low/50">
<div class="w-12 h-16 rounded overflow-hidden flex-shrink-0 shadow-sm">
<img class="w-full h-full object-cover" data-alt="thumbnail of book cover in warm palette" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrXb8RZZodRV-1h4tcEh28Ml3CBblAGzHt5nv-deGC4PeW7yehGdSxEW44PUYEbRxi28zBDsfTHUmCi3aFaqPRzIZzQmBRfAcm1wc6M0bsq09dx9F6MsgIKNpd2te7F6m8GKanLQFwWWSYzoMmvxcjUaEuO3clNGRiTsR_Ce2w-kEiPLefNghWMcV4hvJBE1JbMNgDMYhpL5TPH1Hp4O6hZUsjVFk_oy9dPVGMxI9APw2IzGD9OHb4_3PvYNVsCeE_oweq0TcGhEkr"/>
</div>
<div class="ml-4 flex-1">
<h4 class="text-sm font-bold text-primary leading-tight">Cien Años de Soledad</h4>
<p class="text-xs text-on-surface-variant mb-1">$22.00 unit.</p>
<div class="flex items-center space-x-3">
<div class="flex items-center bg-surface-container-highest rounded-md overflow-hidden ring-1 ring-outline-variant/10">
<button class="px-2 py-1 hover:bg-outline-variant/20 transition-colors">
<span class="material-symbols-outlined text-xs" data-icon="remove">remove</span>
</button>
<span class="px-3 text-sm font-semibold">1</span>
<button class="px-2 py-1 hover:bg-outline-variant/20 transition-colors">
<span class="material-symbols-outlined text-xs" data-icon="add">add</span>
</button>
</div>
</div>
</div>
<div class="text-right ml-4">
<p class="text-sm font-bold text-primary">$22.00</p>
<button class="text-error hover:text-error/80 mt-2 transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="delete">delete</span>
</button>
</div>
</div>
<!-- Item 2 -->
<div class="flex items-center p-3 rounded-lg bg-surface-container-low/50 ring-1 ring-error/30">
<div class="w-12 h-16 rounded overflow-hidden flex-shrink-0 shadow-sm">
<img class="w-full h-full object-cover" data-alt="thumbnail of book cover with ornate details" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcCdsmTxk9fELxMHW0Ezbg2f5-hssNpvtZIRnIYTAciDvc3ns9av09aUL4ykZT4OM1jUsue-kmZEvWDHeQZ1DqTCfDVOt4fpOUtxsg7Yx7FWNoB58B5LNJpWdP6CoJJhPgALS7ngIxA6PpOYTfV4uIYZYRsAgLQ-a3ghtlesX-Dtng_mTtjyFsrPbW-s5H_A80EIOSaD7Nd0_3QPYVrwUfi-duMgcNuy_ISuFxoXUeVvJO2MWxv78XAJK0-Q_0pSky6hqHmsib0qfT"/>
</div>
<div class="ml-4 flex-1">
<h4 class="text-sm font-bold text-primary leading-tight">Don Quijote de la Mancha</h4>
<p class="text-xs text-on-surface-variant mb-1">$35.00 unit.</p>
<div class="flex items-center space-x-3">
<div class="flex items-center bg-surface-container-highest rounded-md overflow-hidden ring-1 ring-outline-variant/10">
<button class="px-2 py-1 hover:bg-outline-variant/20 transition-colors">
<span class="material-symbols-outlined text-xs" data-icon="remove">remove</span>
</button>
<span class="px-3 text-sm font-semibold">2</span>
<button class="px-2 py-1 hover:bg-outline-variant/20 transition-colors">
<span class="material-symbols-outlined text-xs" data-icon="add">add</span>
</button>
</div>
<span class="text-[10px] font-bold text-error uppercase">Stock insuficiente</span>
</div>
</div>
<div class="text-right ml-4">
<p class="text-sm font-bold text-primary">$70.00</p>
<button class="text-error hover:text-error/80 mt-2 transition-colors">
<span class="material-symbols-outlined text-sm" data-icon="delete">delete</span>
</button>
</div>
</div>
</div>
<!-- Order Summary & Checkout -->
<div class="mt-8 border-t border-outline-variant/10 pt-6 space-y-4">
<div class="space-y-2">
<div class="flex justify-between text-sm">
<span class="text-on-surface-variant">Subtotal</span>
<span class="font-medium">$92.00</span>
</div>
<div class="flex justify-between items-center text-sm">
<span class="text-on-surface-variant">Descuento (%)</span>
<input class="w-16 h-8 text-right bg-surface-container-low border-none focus:ring-1 focus:ring-tertiary rounded text-sm p-1 font-semibold" type="number" value="0"/>
</div>
<div class="flex justify-between text-sm">
<span class="text-on-surface-variant">Impuestos (16%)</span>
<span class="font-medium">$14.72</span>
</div>
</div>
<div class="flex justify-between items-center pt-4 border-t border-outline-variant/10">
<span class="text-lg font-bold text-primary">Total Final</span>
<span class="text-3xl font-extrabold text-primary tracking-tighter">$106.72</span>
</div>
<!-- Payment Method -->
<div class="grid grid-cols-3 gap-2 mt-4">
<button class="flex flex-col items-center justify-center p-3 rounded-lg bg-tertiary text-on-tertiary ring-1 ring-tertiary shadow-sm transition-all">
<span class="material-symbols-outlined mb-1" data-icon="payments">payments</span>
<span class="text-[10px] font-semibold uppercase tracking-wider">Efectivo</span>
</button>
<button class="flex flex-col items-center justify-center p-3 rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high transition-all">
<span class="material-symbols-outlined mb-1" data-icon="credit_card">credit_card</span>
<span class="text-[10px] font-semibold uppercase tracking-wider">Tarjeta</span>
</button>
<button class="flex flex-col items-center justify-center p-3 rounded-lg bg-surface-container-highest text-on-surface-variant hover:bg-surface-container-high transition-all">
<span class="material-symbols-outlined mb-1" data-icon="account_balance">account_balance</span>
<span class="text-[10px] font-semibold uppercase tracking-wider">Transf.</span>
</button>
</div>
<!-- Actions -->
<div class="pt-4 flex flex-col space-y-3">
<button class="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-md shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all uppercase tracking-widest text-sm">
                            Registrar Venta
                        </button>
<button class="w-full py-3 bg-surface-container-highest text-on-surface-variant font-semibold rounded-md hover:bg-surface-container-high transition-all uppercase tracking-widest text-xs">
                            Cancelar Pedido
                        </button>
</div>
</div>
</aside>
</div>

<!-- FAB (Suppressed per rule - focused task) -->
<!-- Navigation suppresses per Destination rule in transactional screen -->

  
</template>

<script setup>
</script>

<style scoped>
</style>
