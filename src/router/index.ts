import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Reportes y Análisis',
    component: () => import('../views/ReportesyAnlisis.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Library Login',
    component: () => import('../views/LibraryLogin.vue')
  },
  {
    path: '/inventario',
    name: 'Gestión de Inventario (Actualizado)',
    component: () => import('../views/GestindeInventarioActualizado.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/inventario-completo',
    name: 'Gestión de Inventario Completa',
    component: () => import('../views/GestindeInventarioCompleta.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/pos',
    name: 'Registro de Ventas (POS)',
    component: () => import('../views/RegistrodeVentasPOS.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/historial-ventas',
    name: 'Historial y Detalle de Ventas',
    component: () => import('../views/HistorialyDetalledeVentas.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/nueva-obra',
    name: 'Registro de Nueva Obra',
    component: () => import('../views/RegistrodeNuevaObra.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/clientes',
    name: 'Gestión de Clientes',
    component: () => import('../views/GestindeClientes.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, _from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true'

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
