import Vue from 'vue'
import App from './App.vue'

import ResponsiveContainer from './components/ResponsiveContainer.vue';
import ListItem from './components/ListItem.vue';

Vue.component('list-item', ListItem);
Vue.component('responsive-container', ResponsiveContainer);

new Vue({
  el: '#app',
  render: h => h(App)
})
