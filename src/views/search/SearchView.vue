<template>
  <div class="bg-[#eeeeee] w-screen h-screen">
    <div class="overflow-hidden">
      <div class="flex items-center w-[90vw] mx-auto my-3">
        <Icon
          icon="carbon:arrow-left"
          class="text-[30px]"
          @click.native="home"
        />
        <div class="w-[288px] relative text-center">
          <input
            type="text"
            class="border-[1px] w-[255px] h-[35px] rounded-2xl text"
            :placeholder="defaultSearch"
            v-model="value"
            ref="inp"
          />
          <Icon
            icon="ion:search-outline"
            class="absolute left-[29px] top-[7px] text-[22px]"
          />
          <Icon
            icon="iconamoon:close-thin"
            class="absolute top-[6px] right-[26px] text-[25px]"
            @click.native="close"
            v-if="value !== ''"
          />
        </div>
        <div @click="searchHandler(defaultSearch)" class="w-[40px]">搜索</div>
      </div>
      <div>
        <ul class="flex items-center">
          <li
            v-for="(item, index) in menu"
            :key="item.id"
            class="w-[25vw]"
            :style="{
              borderRight: `${
                index != menu.length - 1 ? '1px solid #ccc' : ''
              }`,
            }"
          >
            <div
              class="flex items-center justify-center"
              v-if="search_song.length == ''"
            >
              <Icon :icon="item.icon" class="text-[red]" />
              <div class="ml-2">{{ item.text }}</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 搜索的数据 -->
    <div>
      <ul>
        <li
          v-for="item in search_song"
          :key="item.id"
          class="flex items-center h-[50px]"
        >
          <Icon icon="ion:search-outline" class="ml-5" />
          <div>
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
    <!-- 猜你喜欢  -->
    <div
      class="flex w-[90vw] mx-auto items-center justify-between my-3"
      v-if="search_song.length == ''"
    >
      <div>猜你喜欢</div>
      <Icon icon="iconoir:refresh" class="text-[#ccc] font-bold" />
    </div>
    <div class="w-[90vw] mx-auto" v-if="search_song.length == ''">
      <ul class="flex items-center flex-wrap">
        <li
          v-for="item in like"
          :key="item.id"
          class="px-2 bg-[#ffffff] h-[30px] leading-[30px] text-center rounded-3xl"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="w-[100%] overflow-hidden" v-if="search_song.length == ''">
      <van-swipe :loop="false" class="w-[61vw] h-auto" :show-indicators="false">
        <van-swipe-item
          v-for="item in playlist"
          :key="item.id"
          class="ml-4 bg-[#ffffff] my-3"
        >
          <div
            class="flex items-center h-[12vw] leading-[12vw] w-[52vw] mx-auto border-b border-[#ccc]"
          >
            <h2 class="px-[4vw] font-bold">{{ item.name }}</h2>
            <div class="flex items-center bg-[#ccc] h-[5vw] rounded-2xl px-1">
              <Icon icon="ri:play-fill" />
              <span class="text-[2vw]">播放</span>
            </div>
          </div>
          <div class="w-[52vw] mx-auto">
            <ul>
              <li
                v-for="(item1, index) in item.tracks.slice(0, 20)"
                :key="item1.id"
                class="mt-5"
              >
                <span :style="{ color: `${index < 3 ? 'red' : '#ccc'}` }">{{
                  index + 1
                }}</span>
                <span class="text-[3vw] ml-4">{{ item1.name }}</span>
              </li>
            </ul>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import { Search } from 'vant';
import {
  fetchSearchDefault,
  fetchSearchResult,
  fetchSearchSuggest,
  playlist,
} from '@/request/index';
export default {
  components: { Icon },

  data() {
    return {
      menu: [
        {
          icon: 'octicon:person-fill-24',
          text: '歌手',
        },
        {
          icon: 'clarity:book-solid',
          text: '曲风',
        },
        {
          icon: 'fluent-emoji-high-contrast:musical-notes',
          text: '专区',
        },
        {
          icon: 'ph:microphone-fill',
          text: '识曲',
        },
      ],
      like: ['陈奕迅', '林俊杰', '薛子谦'],
      value: '',
      defaultSearch: {}, //默认搜索
      search_song: [],
      visible: true,
      playlist: [],
    };
  },

  methods: {
    close() {
      this.value = '';
    },
    home() {
      this.$router.push('/home');
    },

    searchHandler(defaultSearch) {
      console.log(defaultSearch);
      this.value = defaultSearch;
      this.visible = false;

      fetchSearchResult({
        keywords: this.value || defaultSearch,
      }).then((res) => {
        // console.log(res);
        this.search_song = res.data.result.songs;
      });
    },
  },
  watch: {
    value(keywords) {
      if (this.value == '') {
        this.search_song = [];
      } else {
        fetchSearchSuggest({ keywords: keywords })
          .then((res) => {
            this.search_song = res.data.result.songs;
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },

  async created() {
    const res = await playlist();
    this.playlist = res.map((item) => item.data.playlist).slice(0, 10);
    console.log(this.playlist);
    fetchSearchDefault().then((res) => {
      this.defaultSearch = res.data.data.showKeyword;
    });
  },
};
</script>
<style></style>
