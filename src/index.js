import Vue from 'vue';
import './index.css';
import homeView from "./views/home.vue"
import { Toast } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import DrawerView from '@/components/DrawerView.vue';
Vue.component('DrawerView', DrawerView)
dayjs.extend(relativeTime);
Vue.prototype.dayjs = dayjs;
Vue.use(Swipe);
Vue.use(SwipeItem);
const vm = new Vue({
  // 挂载节点
  el: '#app',
  render: (h) => h(homeView),

});
