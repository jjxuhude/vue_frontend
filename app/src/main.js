// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import header_block from '@/components/Header'
import view_block from '@/components/View'
import './components/Common'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import axios from 'axios'
import Lockr from 'lockr'
import _ from 'underscore'
import store from './vuex/store'
import Cookies from 'js-cookie'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import jQuery from 'jquery'




axios.defaults.baseURL = HOST
axios.defaults.timeout = 1000 * 15
axios.defaults.withCredentials=true
axios.defaults.headers.session_id = Lockr.get('session_id')?Lockr.get('session_id'):''
axios.defaults.headers['Content-Type'] = 'application/json'

window.Vue=Vue
window.store=store
window.router=router
window.axios=axios
window.Lockr=Lockr
window._=_
window.Cookies=Cookies
window.Nprogress=Nprogress


jQuery(document).ajaxSend(function() {
    Nprogress.start();
});
jQuery(document).ajaxComplete(function() {
    Nprogress.done();
});


Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  Nprogress.start();
  if(Cookies.get('user')){

      store.dispatch('setCurrentUser',JSON.parse(Cookies.get('user')));
  }

    next();
})
router.afterEach(route => {
    if(!Cookies.get('user') || !Cookies.get('session_id')){
        router.push('/');
    }
    Nprogress.done();
})








/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App,header_block,view_block },
})
