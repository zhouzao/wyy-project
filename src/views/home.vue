<template>
  <div :class="{ dark: switch_toggle }">
    <div
      class="w-[100vw] overflow-hidden bg-[#f1f1f1] dark:bg-[#151515] dark:text-[#151515]"
      :style="{ height: `${leftvisible ? '1745px' : ''}` }"
    >
      <!-- 头部搜索框 -->

      <!-- <switch-view :value.sync="switch_toggle"></switch-view> -->
      <head-view
        @update-message="updateheadermessage"
        :switchVlaue="switch_toggle"
      ></head-view>
      <!-- 轮播图 -->
      <banner-view :banners="banners"></banner-view>
      <!-- 菜单 -->
      <menu-view :menulist="menulist" :switch_menu="switch_toggle"></menu-view>
      <!-- 推荐歌单 -->
      <command-song
        :result="result"
        :result_banner="result_banner"
        @update-message="updatemessage"
        :result_switch="switch_toggle"
      ></command-song>

      <!-- 新歌新碟\数字专辑 -->
      <new-song
        :topsong="topsong"
        @update-message="updatemessage"
        :switchsong="switch_toggle"
      ></new-song>
      <!-- 排行榜 -->
      <charts-view
        :blocks="blocks"
        @update-message="updatemessage"
        :chartswitch="switch_toggle"
      ></charts-view>
      <topic-view
        :banner="banners"
        @update-message="updatemessage"
        :result_switch="switch_toggle"
      ></topic-view>
      <!-- 音乐日历 -->
      <calendar-view
        :Calendar="Calendar"
        @update-message="updatemessage"
        :calendar_switch="switch_toggle"
      ></calendar-view>
      <!-- :messagfun_datae.sync="[parentMessage1, parentMessage2]" -->
      <drawer-view
        :visible.sync="drawerVisible"
        :visible1.sync="leftvisible"
        @fun_data="fun_data"
        @change_switch="change_switch"
      >
        <template #header>
          <div
            slot="header"
            class="w-[90%] flex justify-between items-center my-3 mx-auto"
          >
            <p class="text-base">{{ title }}</p>
            <Icon
              color="#ccc"
              icon="bi:x-circle"
              style="font-size: 25px"
              @click.native.stop="drawerVisible = !drawerVisible"
            />
          </div>
        </template>
      </drawer-view>
      <bot-song class="fixed bottom-11"></bot-song>
    </div>
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
import TopicView from '@/components/TopicView.vue';
// import BotSong from '@/components/BotSong.vue';
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
    TopicView,
  },
  data() {
    return {
      menulist: [], //菜单
      banners: [], //轮播图
      result: [], //推荐歌单
      result_banner: '', //推荐歌单轮播图
      topsong: [], //新歌新碟\数字专辑
      blocks: [], //排行榜
      Calendar: [], //音乐日历
      drawerVisible: false, //最下面过渡
      leftvisible: false,
      visible: false, //最左边过渡
      switch_toggle: false,
      title: '',
    };
  },
  methods: {
    updatemessage(payload) {
      this.drawerVisible = !this.drawerVisible;
      this.title = payload;
    },
    updateheadermessage() {
      // console.log(123);
      this.leftvisible = !this.leftvisible;
    },
    fun_data() {
      this.leftvisible = !this.leftvisible;
    },
    change_switch(payload) {
      this.switch_toggle = payload;
    },
  },
  created() {
    BlockPage().then((res) => {
      if (localStorage.getItem('_m_cookie')) {
        this.topsong = res.data.data.blocks[2].creatives; //新歌新碟
      } else {
        this.topsong = res.data.data.blocks[5].creatives; //新歌新碟
      }
      this.banners = res.data.data.blocks[0].extInfo.banners;

      this.blocks = res.data.data.blocks[3].creatives; //
      this.result = res.data.data.blocks[1].creatives.splice(1); //推荐歌单
      this.result_banner = res.data.data.blocks[1].creatives[0];
      console.log(this.topsong);
    });
    DragonBall().then((res) => {
      this.menulist = res.data.data;
    });
    // Personalized().then((res) => {
    //   this.result = res.data.result;
    // });
    Calendar().then((res) => {
      this.Calendar = res.data.data.calendarEvents;
      // let Calendar = Calendar1.filter((item, index, arr) => {
      //   return index < 2;
      // });
      // this.Calendar = Calendar;
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
  padding-left: 45px;
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
</style>
