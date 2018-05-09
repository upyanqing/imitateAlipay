import Vue from 'vue'
import Router from 'vue-router'
import Alipay from '@/components/Alipay'
import Fortune from '@/components/Fortune'
import Praise from '@/components/Praise'
import Frends from '@/components/Frends'
import My from '@/components/My'
import Wait from '@/components/my/Wait'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Alipay',
      component: Alipay
    },
    {
      path: '/Fortune',
      name: 'Fortune',
      component: Fortune
    },
    {
      path: '/Praise',
      name: 'Praise',
      component: Praise
    },
    {
      path: '/Frends',
      name: 'Frends',
      component: Frends
    },
    {
      path: '/Wait',
      name: 'Wait',
      component: Wait
    },
    {
      path: '/My',
      name: 'My',
      component: My
    }
  ]
})
