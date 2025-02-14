import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: '/jobs', component: () => import('pages/JobsPage.vue') },
      { path: '/jobs/:id', component: () => import('pages/JobDetailsPage.vue') },
      { path: '/jobs/add', component: () => import('pages/AddNewJobPage.vue') },
      { path: '/jobs/edit/:id', component: () => import('pages/EditJobPage.vue') },
      { path: '/contact-us', component: () => import('pages/ContactPage.vue') },
    ],
  },
  {
    path: '/page-not-found',
    name: 'NotFoundPage',
    component: () => import('pages/PageNotFound.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    redirect: '/page-not-found',
  },
]

export default routes
