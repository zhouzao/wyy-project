<template>
  <div
    class="w-[360px] mx-auto overflow-hidden rounded-2xl"
    style="position: relative"
  >
    <van-swipe
      class="my-swipe relative"
      :autoplay="3000"
      indicator-color="white"
      width="360"
    >
      <van-swipe-item
        v-for="item in banners"
        :key="item.id"
        class="mx-auto"
        width="360"
      >
        <img :src="item.pic" alt="" />
      </van-swipe-item>
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
  methods: {},
};
</script>
<style>
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
.van-swipe__indicator {
  width: 10px;
  height: 10px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 50%;
  margin-left: 5px;
}
.van-swipe__indicators {
  position: absolute;
  top: 85%;
  left: 30%;
  display: flex;
}
</style>
