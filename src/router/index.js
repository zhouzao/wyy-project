import VueRouter from 'vue-router';
import Vue from 'vue';
import HomeView from "@/views/home.vue"
import SearchView from "@/views/search/SearchView.vue"
import SongDetail from "@/views/songdetail/SongDetail.vue"
import LoginView from "@/views/login/LoginView.vue"
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
    {
      path:"/login",
      component:LoginView
    },
    {
      path:"/user",
    
      component:() => import(/*webpackChunkName:'jsx'*/ '@/views/UserMessage/User.jsx'),
    },
    {
      path:"/user/edit",
      component:() => import("@/views/UserMessage/UserEdit.jsx")
    },
    {
      path:"/song",
      component:() => import("@/views/songplay/SongPlay.vue")
    },
    {
      path:"/mvlist",
      component:() => import("@/views/mvlist/MvList.vue")
    }
  ]
});
export default router;