<template>
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
</template>
<script>
export default {
  name: 'BannerView',
  data() {
    return {
      current: 0, //轮播图
    };
  },
  props: ['banners'],
  methods: {
    onChange(index) {
      this.current = index;
    },
  },
};
</script>
