import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  return () => System.import(`components/views/${component}.vue`)
}

export default new VueRouter({
  routes: [
    { path: '/', component: load('Index') }, // Default
    { path: '/add', component: load('Add') },
    { path: '/done', component: load('Done') },
    { path: '*', component: load('Error404') } // Not found
  ]
})
