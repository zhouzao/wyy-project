<template>
  <div class="w-[100%] overflow-hidden relative my-3" ref="scroll">
    <ul class="flex w-[780px] text-center">
      <li v-for="item in menulist" :key="item.id" class="w-[20%]">
        <div class="relative">
          <img :src="item.iconUrl" alt="" class="red-image" />
          <div
            v-if="item.name == '每日推荐'"
            class="absolute top-7 left-7 text-white"
          >
            {{ day }}
          </div>
        </div>
        <div>{{ item.name }}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core';
export default {
  name: 'MenuList',
  props: ['menulist'],
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
