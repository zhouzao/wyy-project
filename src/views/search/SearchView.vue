<template>
  <div class="bg-[#eeeeee] overflow-hidden w-screen h-screen">
    <div>
      <div class="flex items-center w-[90vw] mx-auto my-3">
        <Icon icon="carbon:arrow-left" class="text-[30px]" />
        <div class="w-[288px] relative text-center">
          <input
            type="text"
            class="border-[1px] w-[255px] h-[35px] rounded-2xl text"
            :placeholder="defaultSearch"
            v-model="value"
          />
          <Icon
            icon="ion:search-outline"
            class="absolute left-[29px] top-[7px] text-[22px]"
          />
          <Icon
            icon="iconamoon:close-thin"
            class="absolute top-[6px] right-[26px] text-[25px]"
            v-if="value != ''"
            @click.native="close"
          />
        </div>
        <div @click="searchHandler(defaultSearch)" class="w-[40px]">搜索</div>
      </div>
      <div v-if="value == '' && !visible">
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
            <div class="flex items-center justify-center">
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
        <li v-for="item in search_song" :key="item.id">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <!-- 猜你喜欢  -->
    <div
      class="flex w-[90vw] mx-auto items-center justify-between my-3"
      v-if="value == ''"
    >
      <div>猜你喜欢</div>
      <Icon icon="iconoir:refresh" class="text-[#ccc] font-bold" />
    </div>
    <div class="w-[90vw] mx-auto" v-if="value == ''">
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
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import { Search } from 'vant';
import { fetchSearchDefault, fetchSearchResult } from '@/request/index';
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
      like: ['可不可以', '张杰', '张碧晨', '消失的她', '薛子谦'],
      value: '',
      defaultSearch: {}, //默认搜索
      search_song: [],
      visible: false,
    };
  },
  methods: {
    close() {
      this.value = '';
      // this.search_song = [];
      this.visible = !this.visible;
      // console.log('134');
    },
    searchHandler(defaultSearch) {
      fetchSearchResult({
        keywords: this.value || defaultSearch,
      }).then((res) => {
        // console.log(res);
        this.search_song = res.data.result.songs;
      });
    },
  },
  created() {
    fetchSearchDefault().then((res) => {
      // console.log(res);
      this.defaultSearch = res.data.data.showKeyword;
    });
  },
};
</script>
<style></style>
