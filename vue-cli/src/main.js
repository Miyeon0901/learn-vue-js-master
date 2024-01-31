import Vue from 'vue'
import App from './App.vue' // App.vue의 내용을 가져와서 App이라는 변수에 넣어줌.

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
