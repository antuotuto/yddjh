import Vue from 'vue'
import Router from 'vue-router'



const home = (resolve) => {
    import ('./home').then((module) => {
        resolve(module)
    })
}

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },{
        path: '/home',
        component: home,
      }
]

export default new Router({
    mode: 'hash',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return false
    }
})