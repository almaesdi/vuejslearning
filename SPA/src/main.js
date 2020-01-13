import Vue from 'vue'
import App from './components/App.vue'
import router from './router/index.js';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

window.not_found = function () {
  console.log('Not Found '+router.currentRoute.fullPath);
  router.replace('/404');
}

window.not_found_unless = function (condition) {
  if(! condition){
    not_found();
  }
}

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
