// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'bootstrap'
import './assets/app.scss'
import axios from 'axios'

// Assign `$` to the jQuery variable in the window element
import jQuery from 'jquery'
window.$ = window.jQuery = jQuery

import 'popper.js'

Vue.config.productionTip = false
Vue.prototype.$http = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
