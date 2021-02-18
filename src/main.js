import Vue from 'vue'
import App from './App.vue'
import _ from 'lodash'

require('./styles/main.scss');

Object.defineProperties(Vue.prototype, {
  $_: { value: _ },
})

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
