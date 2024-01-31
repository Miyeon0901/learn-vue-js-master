import Vue from 'vue'
import App from './App.vue' // 컴포넌트 파일

Vue.config.productionTip = false

// var App = {
//   template: '<div>app</div>'
// }

new Vue({
  render: h => h(App), // 컴포넌트 파일을 집어넣고 render까지 했다.
}).$mount('#app') 

// new Vue({
//   el: '#app',
//   components: {
//     'app': App
//   }
// })
