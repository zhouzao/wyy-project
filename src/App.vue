<template>
  <div>
    <!-- 声明式导航 -->
    <!-- <router-link :to="{ path: '/home' }">go to index</router-link> -->
    <!-- <router-link to="/IndexView">go to index</router-link> -->
    <router-view />
    <!--  播放器-->
    <bot-song v-if="show"></bot-song>
    <!-- 菜单 -->
    <nav-list v-if="show1"></nav-list>
  </div>
</template>
<script>
import BotSong from '@/components/BotSong.vue';
import NavList from '@/components/NavList.vue';
export default {
  components: { BotSong, NavList },
  created() {
    console.log(this.$route.path);
  },
  computed: {
    show() {
      return this.$route.path != '/song' && this.$route.path != '/videoplayer';
    },
    show1() {
      return (
        this.$route.path != '/song' &&
        this.$route.path != '/mvlist' &&
        this.$route.path != '/videoplayer' &&
        this.$route.path != '/search'
      );
    },
  },
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
