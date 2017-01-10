if (!window.localStorage.getItem('clerk-register')) {
  window.location.href = `./register.html`
}

import Vue from 'vue'
import App from './app'
import vueTap from 'v-tap'
Vue.use(vueTap)
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
