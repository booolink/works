import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueGAPI from "vue-gapi"

new Vue({
  router,
  components: { App },
  // template: '<App/>',
  render: h => h(App)
}).$mount('#app')

// const apiConfig = {

//   clientId: "1LTd0wEnly2L4T_d0u7A4w5Qjm__Ky8eVURUpzPgRPKc.apps.googleusercontent.com",
//   discoveryDocs: ["https://docs.google.com/spreadsheets/d/1LTd0wEnly2L4T_d0u7A4w5Qjm__Ky8eVURUpzPgRPKc/edit#gid=0"],
//   scope: "https://www.googleapis.com/auth/spreadsheets" // See, edit, create, and delete your spreadsheets in Google Drive
//   // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
// };

// Vue.use(VueGAPI, apiConfig);
Vue.config.productionTip = false



  