import { createRouter,
  createWebHashHistory,
  // createWebHistory
} from 'vue-router'
import HomeView from '@/pages/HomeView'
import AboutView from '@/pages/AboutView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/hello',
    name: 'hello',
    // 这个是异步加载的，会更快
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/pages/NewsView')
  },
  {
    path: '/news-detail/:name',
    name: 'newsDetail',
    component: () => import('@/pages/NewsDetail')
  }
]

const router = createRouter({
  /**
   * history => 代表web的访问方式
   * createWebHashHistory 哈希路由
   * createWebHistory 普通路由 (此种方法需要后端配合做重定向，否则会报404)
   */
  history: createWebHashHistory(),
  // history: createWebHistory(),
  routes
})

export default router
