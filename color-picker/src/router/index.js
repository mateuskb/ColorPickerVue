import Vue from 'vue';
import Router from 'vue-router';
import Estilo1 from '@/components/Estilo1';
import Estilo2 from '@/components/Estilo2';
import Start from '@/components/Start';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
    },
    {
      path: '/estilo1',
      name: 'Estilo1',
      component: Estilo1,
    },
    {
      path: '/estilo2',
      name: 'Estilo2',
      component: Estilo2,
    },
  ],
});
