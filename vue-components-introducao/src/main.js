import Vue from 'vue'
import App from './App.vue'

//Essas linhas comentadar e para que o componente não fique disponivel de forma global no projeto,
//será adicionado apenas na pagina especifica
//import AppContador from './AppContador.vue'
//Vue.component('app-contador',AppContador)

new Vue({
 render : h => h(App)
}).$mount('#app')
