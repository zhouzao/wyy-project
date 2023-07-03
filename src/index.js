import Vue from 'vue';
import './index.css';
import router from '@/router/index';
import App from "@/App.vue"
// import homeView from "./views/home.vue"
// import indexView from "./views/index.vue"
import { Toast } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import DrawerView from '@/components/DrawerView.vue';
import SwitchView from "@/components/SwitchView.vue"
Vue.component('DrawerView', DrawerView)
Vue.component("SwitchView",SwitchView)
dayjs.extend(relativeTime);
Vue.prototype.dayjs = dayjs;
Vue.use(Swipe);
Vue.use(SwipeItem);
const vm = new Vue({
  // 挂载节点
  el: '#app',
  router,
  render: (h) => h(App),
});
