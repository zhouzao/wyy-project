<template>
  <div class="w-[100vw] overflow-hidden">
    <!-- 头部搜索框 -->
    <head-view></head-view>
    <!-- 轮播图 -->
    <banner-view :banners="banners"></banner-view>
    <!-- 菜单 -->
    <menu-view :menulist="menulist"></menu-view>
    <!-- 推荐歌单 -->
    <command-song :result="result"></command-song>
    <!-- 新歌新碟\数字专辑 -->
    <new-song :topsong="topsong"></new-song>
    <!-- 排行榜 -->
    <charts-view :blocks="blocks"></charts-view>
    <!-- 音乐日历 -->
    <calendar-view :Calendar="Calendar"></calendar-view>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import { BlockPage, DragonBall, Personalized, Calendar } from '@/request/index';
import HeadView from '@/components/HeadView.vue';
import MenuView from '@/components/MenuList.vue';
import BannerView from '@/components/BannerView.vue';
import CommandSong from '@/components/CommandSong.vue';
import NewSong from '@/components/NewSong.vue';
import ChartsView from '@/components/ChartsView.vue';
import CalendarView from '@/components/CalendarView.vue';
export default {
  name: 'home',
  components: {
    Icon,
    HeadView,
    MenuView,
    BannerView,
    CommandSong,
    NewSong,
    ChartsView,
    CalendarView,
  },
  data() {
    return {
      menulist: [], //菜单
      banners: [], //轮播图
      result: [], //推荐音乐
      topsong: [], //新歌新碟\数字专辑
      blocks: [], //排行榜
      Calendar: [], //音乐日历
    };
  },
  methods: {},
  created() {
    BlockPage().then((res) => {
      this.banners = res.data.data.blocks[0].extInfo.banners;
      this.topsong = res.data.data.blocks[5].creatives;
      this.blocks = res.data.data.blocks[3].creatives;
      console.log(res.data.data.blocks[5].creatives);
    });
    DragonBall().then((res) => {
      this.menulist = res.data.data;
    });
    Personalized().then((res) => {
      this.result = res.data.result;
    });
    Calendar().then((res) => {
      this.Calendar = res.data.data.calendarEvents;
    });
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

input::placeholder {
  padding-left: 50px;
}
/* 轮播图 */
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.van-swipe__track {
  display: flex;
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: white;
}
.bscroll-indicator {
  width: 20% !important;
}
.bscroll-horizontal-scrollbar {
  text-align: center !important;
  width: 100%;
}

.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
.over {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
