import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: 'hot',
      children: [
        {
          path: '/hot',
          name: '热点',
          component: () => import('@/components/tab/Hot.vue'),
        },
        {
          path: '/roast',
          name: '吐槽',
          component: () => import('@/components/tab/Roast.vue'),
        },
        {
          path: '/learn',
          name: '学习',
          component: () => import('@/components/tab/Learn.vue'),
        },
        {
          path: '/find',
          name: '寻觅',
          component: () => import('@/components/tab/Find.vue'),
        },
        {
          path: '/together',
          name: '有约',
          component: () => import('@/components/tab/Together.vue'),
        },
        {
          path: '/mind',
          name: '思绪',
          component: () => import('@/components/tab/Mind.vue'),
        },
        {
          path: '/secret',
          name: '树洞',
          component: () => import('@/components/tab/Secret.vue'),
        },
      ],
    },
    {
      path: '/about',
      name: '关于',
      component: () => import('@/views/About.vue'),
    },
    {
      path: '/school',
      name: '学校',
      component: () => import('@/views/School.vue'),
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/join',
      name: '注册',
      component: () => import('@/views/Join.vue'),
    },
    // 小工具
    {
      path: '/drawer',
      name: '艺术画',
      component: () => import('@/components/SmallTools/Drawer.vue'),
    },
  ],
});
