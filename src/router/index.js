import VueRouter from 'vue-router';
import Vue from 'vue';
import HomeView from "@/views/home.vue"
import SearchView from "@/views/search/SearchView.vue"
import SongDetail from "@/views/songdetail/SongDetail.vue"
Vue.use(VueRouter);
const router = new VueRouter({
  routes:[
    // 路径重定向
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      component: HomeView,
    },
    {
      path: '/search',
      component: SearchView,
    },
    {
      path: '/songdetail',
      component: SongDetail,
    },
  ]
});
export default router;