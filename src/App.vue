<template>
  <div>
    <!-- 声明式导航 -->
    <!-- <router-link :to="{ path: '/home' }">go to index</router-link> -->
    <!-- <router-link to="/IndexView">go to index</router-link> -->
    <router-view />
    <!--  播放器-->
    <bot-song></bot-song>
    <!-- 菜单 -->
  </div>
</template>
<script>
import BotSong from '@/components/BotSong.vue';
export default {
  components: { BotSong },
  created() {
    // setTimeout(() => {
    //   // 编程式导航
    //   this.$router.push('/IndexView');
    // }, 10000);
  },
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
