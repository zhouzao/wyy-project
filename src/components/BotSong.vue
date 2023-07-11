<template>
  <div
    class="h-[15vw] leading-[15vw] w-[100vw] fixed bottom-0 bg-[#ffffff] left-0 z-[99]"
  >
    <div class="w-[90%] mx-auto flex items-center justify-between">
      <div class="flex items-center">
        <img
          src="@/assets/user.jpg"
          alt=""
          class="w-[10vw] h-[10vw] rounded-[50%]"
        />
        <div class="ml-[3vw]">
          <span>{{ 123 }}</span>
          <span>{{ player._currentTrack.name }}</span>
        </div>
      </div>
      <div class="flex items-center">
        <!-- <van-circle
          v-model="currentRate"
          :rate="($player._progress * 100) / $player._duration"
          size="5.6vw"
          :stroke-width="120"
          color="#475165"
          layer-color="#C7CBD2"
        /> -->
        <!-- 暂停 -->
        <Icon
          icon="solar:pause-bold"
          class="text-[6vw] text-[#3b4152]"
          v-show="switchPlaybackPause"
          @click.native="play"
        />

        <!-- 播放 -->
        <Icon
          icon="solar:play-bold"
          class="text-[6vw] text-[#3b4152]"
          v-show="!switchPlaybackPause"
          @click.native="pause"
        />
        <Icon
          icon="iconamoon:playlist-fill"
          class="text-[6vw] text-[#3b4152] ml-[6vw]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import Player from '@/components/player/player';
import { mapState, mapMutations } from '@/store';
export default {
  components: { Icon },
  data() {
    return {
      player: new Player(),
      switchPlaybackPause: false,
      count: 0,
    };
  },
  //   computed: mapState(['switchPlaybackPause']),
  created() {
    window.$player = this.player;
  },
  methods: {
    // ...mapMutations(['isPlay']),
    play() {
      this.switchPlaybackPause = !this.switchPlaybackPause;
      window.$player.playOrPause();
    },
    pause() {
      this.switchPlaybackPause = !this.switchPlaybackPause;
      window.$player.playOrPause();
    },
  },
};
</script>
