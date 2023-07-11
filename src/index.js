import Vue from 'vue/dist/vue.esm.js';
import './index.css';
import router from '@/router/index';
import App from "@/App.vue"
// import homeView from "./views/home.vue"
// import indexView from "./views/index.vue"
import { Toast } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Sticky,Button } from 'vant';
import { NoticeBar } from 'vant';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import DrawerView from '@/components/DrawerView.vue';
import SwitchView from "@/components/SwitchView.vue"
import { Dialog } from 'vant';
import 'vant/lib/index.css';
import Vuex from '@/store/index';

Vue.use(Vuex)
// 全局注册
Vue.use(Dialog);
Vue.component('DrawerView', DrawerView)
Vue.component("SwitchView",SwitchView)
dayjs.extend(relativeTime);
Vue.prototype.dayjs = dayjs;

import { Tab, Tabs } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Area } from 'vant';
import { Popup } from 'vant';

Vue.use(Popup);

Vue.use(Area);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sticky);
Vue.use(Button)
Vue.use(NoticeBar)
const store = new Vuex.Store({
  state:{
    switchPlaybackPause:false
  },
 mutations:{
  isPlay(){
    state.switchPlaybackPause = !state.switchPlaybackPause
  }
 }
})
const vm = new Vue({
  // 挂载节点
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
