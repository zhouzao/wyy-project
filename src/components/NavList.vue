<template>
  <div class="fixed bottom-0 h-[12.5vw] w-[100%] bg-[#F9F9FA]">
    <van-tabbar
      v-model="active"
      active-color="red"
      inactive-color=" #9598a4"
      route:true
    >
      <van-tabbar-item to="/home">
        <template>
          <Icon icon="ri:netease-cloud-music-fill" class="text-[6vw]" />
        </template>
        <span>发现</span>
      </van-tabbar-item>
      <van-tabbar-item to="/mvlist">
        <template>
          <Icon icon="icon-park-outline:share-sys" class="text-[6vw]" />
        </template>
        <span>博客</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <template>
          <Icon icon="majesticons:music-line" class="text-[6vw]" />
        </template>
        <span>我的</span>
      </van-tabbar-item>
      <van-tabbar-item>
        <template>
          <Icon icon="fluent:chat-multiple-32-regular" class="text-[6vw]" />
        </template>
        <span>社区</span>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
export default {
  components: {
    Icon,
  },
  data() {
    return {
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
      },
    };
  },
};
</script>
