<template>
  <div class="fixed bottom-0 h-[12.5vw] w-[100%] bg-[#F9F9FA]">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">发现</van-tabbar-item>
      <van-tabbar-item icon="search">博客</van-tabbar-item>
      <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
      <van-tabbar-item icon="setting-o">社区</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>
