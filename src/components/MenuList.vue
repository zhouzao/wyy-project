<template>
  <div
    class="w-[100%] overflow-hidden relative my-3"
    ref="scroll"
    :class="{ dark: switch_menu }"
  >
    <ul class="flex w-[780px] text-center">
      <li v-for="item in menulist" :key="item.id" class="w-[20%]">
        <div class="relative w-[17vw] h-[17vw] left-[5px]">
          <img :src="item.iconUrl" alt="" class="red-image w-[17vw] h-[17vw]" />
          <div
            v-if="item.name == '每日推荐'"
            class="absolute top-5 left-7 text-white"
            :class="`${day < 10 ? 'left-[25px]' : ''}`"
          >
            {{ day }}
          </div>
        </div>
        <div class="dark:text-[#fffffff] text-[#666F7D]">{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
export default {
  name: 'MenuList',
  props: ['menulist', 'switch_menu'],
  data() {
    return {
      day: '',
    };
  },
  methods: {
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
    time() {
      let today = new Date();
      var day = today.getDate(); // 获取当前日期
      console.log(day);
      this.day = day;
    },
  },
  created() {
    this.time();
  },
  mounted() {
    this.init();
  },
};
</script>
