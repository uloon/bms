import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [{
      path: '/Roles',
      name: 'RolesList',
      component: () => import('../views/pages/RolesList.vue'),
    },
    {
      path: '/Users',
      name: "UsersList",
      component: () => import('../views/pages/UsersList.vue')
    }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
