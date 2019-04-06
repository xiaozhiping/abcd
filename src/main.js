import Vue from "vue";
// 全局
//import MintUi from "mint-ui";
//import 'mint-ui/lib/style.css'//固定引入方式
 //import { Button } from 'mint-ui'
// Vue.component(Button.name,Button)
 import App from './App.vue'
import { Header } from "mint-ui";
Vue.component(Header.name, Header);
import "./lib/mui/css/mui.css";
//Vue.use(MintUi)
const vm = new Vue({
  el: "#app",
  render: c => c(App)
});
