import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import WhatEver from '@/views/WhatEver.vue';
import Preview from '@/views/Preview.vue';

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/preview/:id',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/whatever',
    name: 'whatever',
    component: WhatEver
  },
  {
    path: '*',
    redirect: '/'
  }
];
