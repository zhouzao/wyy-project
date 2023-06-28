<template>
  <div class="w-[100vw] overflow-hidden">
    <div class="w-[90vw] m-auto flex top">
      <div>
        <Icon icon="ri:menu-line" font-size="30px" />
      </div>
      <div class="w-[290px] relative">
        <Icon icon="ion:search-outline" class="icon_search" />
        <input type="text" placeholder="春暖花开" />
        <Icon icon="mdi:line-scan" class="icon_scan" />
      </div>
      <div>
        <Icon icon="arcticons:recorder" color="black" font-size="30px" />
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="swiper" style="position: relative">
      <van-swipe
        class="my-swipe"
        indicator-color="red"
        :autoplay="3000"
        @change="onChange"
      >
        <van-swipe-item v-for="item in banners" :key="item.id">
          <img :src="item.pic" alt="" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/{{ banners.length }}
          </div>
        </template>
      </van-swipe>
    </div>
    <!-- 菜单部分 -->
    <div class="menu" ref="scroll">
      <ul class="flex list">
        <li v-for="item in menulist" :key="item.id" class="item">
          <img :src="item.iconUrl" alt="" class="red-image" />
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <!-- 推荐歌单 -->
    <div class="flex command">
      <h3 style="font-size: 20px; font-weight: bold; margin: 10px 0 10px 10px">
        推荐歌单
      </h3>
      <Icon icon="icon-park:right" font-size="25px" />
      <Icon
        icon="iconamoon:menu-kebab-vertical-bold"
        font-size="25px"
        style="margin-left: 250px"
      />
    </div>
    <div
      style="width: 100%; overflow: hidden; position: relative"
      ref="scroll1"
    >
      <ul class="flex" style="width: 780px; justify-content: space-around">
        <li v-for="item in result" :key="item.id" class="command_item">
          <img :src="item.picUrl" alt="" class="img" />
          <div class="text">{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <!-- 新歌新碟\数字专辑 -->
    <div class="flex command">
      <h3 style="font-size: 20px; font-weight: bold; margin: 10px 0 10px 10px">
        新歌新碟\数字专辑
      </h3>
      <Icon icon="icon-park:right" font-size="25px" />
    </div>
    <div class="outside" ref="scroll2">
      <div class="flex outside_list">
        <ul v-for="item in topsong" :key="item.id" style="width: 350px">
          <li
            v-for="item1 in item.resources"
            :key="item1.id"
            class="flex"
            style="align-items: center; height: 80px"
          >
            <img
              :src="item1.uiElement.image.imageUrl"
              alt=""
              class="song_img"
            />
            <div style="margin-left: 10px; font-size: 12px">
              <div>
                {{ item1.uiElement.mainTitle.title }}
              </div>
              <div class="line">
                <span class="red_title"></span>
                <span class="bot_title">{{
                  item1.uiElement.subTitle.title
                }}</span>
                <span class="author">
                  <Icon icon="pepicons-pencil:line-x" />
                </span>
                <span
                  v-for="item2 in item1.resourceExtInfo.artists"
                  :key="item2.id"
                  >{{ item2.name + '/' }}</span
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 排行榜 -->
    <div class="flex command">
      <h3 style="font-size: 20px; font-weight: bold; margin: 10px 0 10px 10px">
        排行榜
      </h3>
      <Icon icon="icon-park:right" font-size="25px" />
    </div>
    <div style="width: 100%; overflow: hidden" ref="scroll3">
      <div class="flex chart_outside" style="width: 2000px">
        <ul v-for="item in blocks" :key="item.id" class="chart_list">
          <div class="flex" style="align-items: center">
            <h3
              style="
                font-size: 20px;
                font-weight: bold;
                margin: 10px 0 10px 10px;
              "
            >
              {{ item.uiElement.mainTitle.title }}
            </h3>
            <Icon icon="icon-park:right" font-size="25px" />
            <div style="flex: 1; margin-left: 65px">
              {{ item.uiElement.mainTitle.titleDesc }}
            </div>
          </div>
          <li
            v-for="(item1, index) in item.resources"
            :key="item1.id"
            style="display: flex; align-items: center; height: 100px"
          >
            <img
              :src="
                item1.resourceExtInfo
                  ? item1.resourceExtInfo.songData.album.blurPicUrl
                  : ''
              "
              alt=""
              style="width: 70px; height: 70px; border-radius: 15px"
            />
            <span style="margin: 0 12px">{{ index + 1 }}</span>
            <div>
              <div class="over">
                {{
                  item1.resourceExtInfo
                    ? item1.resourceExtInfo.songData.name
                    : ''
                }}
              </div>
              <div class="over">
                {{
                  item1.resourceExtInfo
                    ? item1.resourceExtInfo.artists[0].name
                    : ''
                }}
              </div>
            </div>
            <span style="margin-left: 3px; color: red">{{
              item1.uiElement.labelText.text
            }}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 音乐日历 -->
    <div class="flex command">
      <h3 style="font-size: 20px; font-weight: bold; margin: 10px 0 10px 10px">
        音乐日历
      </h3>
      <Icon icon="icon-park:right" font-size="25px" />
    </div>
    <div>
      <ul
        style="
          width: 95%;
          margin: 0 auto;
          background: rgba(0, 0, 0, 0.1);
          overflow: hidden;
        "
      >
        <li
          v-for="item in Calendar"
          :key="item.id"
          class="flex"
          style="
            justify-content: space-between;
            align-items: center;
            width: 90%;
            margin: 18px auto;
          "
        >
          <div>
            <div>{{ dayjs(item.onlineTime).format('MM/DD ') }}</div>
            <div>{{ item.title }}</div>
          </div>
          <img
            :src="item.imgUrl"
            alt=""
            style="width: 70px; height: 70px; border-radius: 15px"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import BScroll from '@better-scroll/core';
import { BlockPage, DragonBall, Personalized, Calendar } from '@/request/index';
export default {
  components: {
    Icon,
  },
  data() {
    return {
      menulist: [], //菜单
      banners: [], //轮播图
      current: 0, //轮播图
      result: [], //推荐音乐
      topsong: [], //新歌新碟\数字专辑
      blocks: [], //排行榜
      Calendar: [], //音乐日历
    };
  },
  mounted() {
    this.init();
    this.init1();
    this.init2();
    this.init3();
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    init() {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollX: true,
        scrollY: false,
        click: true,
        probeType: 1,
        scrollbar: {
          fade: false,
          interactive: true,
          scrollbarTrackClickable: true,
          scrollbarTrackOffsetType: 'clickedPoint', // can use 'step'
        },
      });
    },
    init1() {
      this.scroll1 = new BScroll(this.$refs.scroll1, {
        scrollX: true,
        scrollY: false,
        click: true,
        probeType: 1,
        scrollbar: {
          fade: false,
          interactive: true,
          scrollbarTrackClickable: true,
          scrollbarTrackOffsetType: 'clickedPoint', // can use 'step'
        },
      });
    },
    init2() {
      this.scroll2 = new BScroll(this.$refs.scroll2, {
        scrollX: true,
        scrollY: false,
        click: true,
        probeType: 1,
        scrollbar: {
          fade: false,
          interactive: true,
          scrollbarTrackClickable: true,
          scrollbarTrackOffsetType: 'clickedPoint', // can use 'step'
        },
      });
    },
    init3() {
      this.scroll3 = new BScroll(this.$refs.scroll3, {
        scrollX: true,
        scrollY: false,
        click: true,
        probeType: 1,
        scrollbar: {
          fade: false,
          interactive: true,
          scrollbarTrackClickable: true,
          scrollbarTrackOffsetType: 'clickedPoint', // can use 'step'
        },
      });
    },
  },
  created() {
    BlockPage().then((res) => {
      this.banners = res.data.data.blocks[0].extInfo.banners;
      this.topsong = res.data.data.blocks[5].creatives;
      this.blocks = res.data.data.blocks[3].creatives;
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
.top {
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}
.top input {
  border: 1px solid #ccc;
  width: 290px;
  border-radius: 20px;
  height: 32px;
}
.top input::placeholder {
  padding-left: 50px;
}
.icon_search {
  position: absolute;
  left: 20px;
  top: 6px;
  font-size: 20px;
}
.relative {
  position: relative;
}
.icon_scan {
  position: absolute;
  right: 20px;
  top: 6px;
  font-size: 20px;
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
.item {
  width: 20%;
}
.list {
  width: 780px;
  text-align: center;
}
.menu {
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 10px 0;
}
.bscroll-indicator {
  width: 20% !important;
}
.bscroll-horizontal-scrollbar {
  text-align: center !important;
  width: 100%;
}
/* 推荐歌单 */
.command {
  align-items: center;
}
.img {
  width: 120px;
  height: 120px;
}
.command_item {
  width: 120px;
}
.text {
  width: 100px;
  height: 52px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示三行文本 */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
.song_img {
  width: 70px;
  height: 70px;
  border-radius: 15px;
}
.outside {
  width: 100%;
  overflow: hidden;
  margin-left: 20px;
}
.outside_list {
  width: 2800px;
}
.bot_title {
  width: 115px;
  white-space: nowrap; /* 禁止文本换行 */
  overflow: hidden; /* 超出容器范围部分隐藏 */
  text-overflow: ellipsis; /* 末尾显示省略号 */
  display: inline-block;
  margin-left: 10px;
}
.author {
  margin-left: 10px;
}
.line {
  display: flex;
  align-items: center;
}
/* 排行榜 */
.chart_list {
  width: 90%;
  margin: 0 0 0 20px;
  background: rgba(0, 0, 0, 0.1);
}
.over {
  width: 164px;
  white-space: nowrap;
  overflow: hidden; /* 超出容器范围部分隐藏 */
  text-overflow: ellipsis; /* 末尾显示省略号 */
}
</style>
