import Vue from 'vue'
import Router from 'vue-router'

import simple from '@/components/simple'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'simple',
      component: simple
    }
  ]
})
