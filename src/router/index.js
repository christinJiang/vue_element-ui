import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import StyleComponent from '@/components/StyleComponent';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/styles',
      name: 'StyleComponent',
      component: StyleComponent,
    },
  ],
});
