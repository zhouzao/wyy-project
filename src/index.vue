<template>
  <div class="w-screen h-screen">
    <h2 class="text-center text-xl font-bold">歌单广场</h2>
    <div class="scroll-wrapper" ref="scroll">
      <ul class="flex my-4 scroll-content">
        <li
          v-for="(item, index) in menu"
          :key="item.id"
          class="top_item scroll-item"
          :class="{ active: activeMenuItem == index }"
          @click="toggleMenu(index)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div>
      <ul class="flex list">
        <li v-for="item in playlists" :key="item.id" class="item">
          <div>
            <img :src="item.coverImgUrl" alt="" />
          </div>
          <div class="content">
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BScroll from '@better-scroll/core';
import Scrollbar from '@better-scroll/scroll-bar';
BScroll.use(Scrollbar);
export default {
  data() {
    return {
      menu: [],
      activeMenuItem: 0,
      playlists: [],
    };
  },
  methods: {
    toggleMenu(index) {
      this.activeMenuItem = index;
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
  },
  created() {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot'
      )
      .then((res) => {
        this.menu = res.data.tags;
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist?cat=%E5%8D%8E%E8%AF%AD',
        {
          params: {
            cat: '华语',
          },
        }
      )
      .then((res) => {
        console.log(res);
        this.playlists = res.data.playlists;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.active {
  color: red;
}
.list {
  flex-wrap: wrap;
}
.item {
  width: 30%;
  margin: 0px 6px;
  height: 190px;
}
.content {
  height: 52px;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 显示三行文本 */
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
.top_item {
  width: 80px;
  text-align: center;
}
.scroll-wrapper {
  width: 80vw;
  overflow: hidden;
}
.scroll-content {
  width: 200vw;
}
</style>
