<template>
  <div class="bg-[#303438] w-screen h-screen relative z-[199]">
    <div class="flex items-center w-[90%] mx-auto justify-between">
      <Icon
        icon="mingcute:down-line"
        class="text-[8vw] text-[#ffffff] mr-[4vw]"
        @click.native="$router.go(-1)"
      />
      <div class="flex-1">
        <van-notice-bar scrollable text="笼(电影 《消失的她》片尾主题曲)" />
        <div class="flex items-center text-[4vw] justify-center text-[#ffffff]">
          <div>{{ $player._currentTrack.name }}</div>
          <div class="ml-[3vw] bg-[#595e5c] px-[2vw] rounded-lg">关注</div>
        </div>
      </div>
      <Icon
        icon="clarity:share-line"
        class="text-[#ffffff] text-[8vw] ml-[4vw]"
      />
    </div>
    <div class="h-[38vw]">
      <img
        src="@/assets/needle-ab.png"
        alt=""
        class="h-[45vw] relative top-[7vw] left-[45vw] rotated"
        :style="
          $player._playing
            ? `transform:rotate(5deg)`
            : `transform:rotate(-16deg)`
        "
      />
    </div>
    <div
      class="w-[72vw] h-[72vw] rounded-[50%] bg-[#524d4a] leading-[72vw] mx-auto flex items-center"
    >
      <div
        class="w-[65vw] h-[65vw] rounded-[50%] bg-[#0e0e0e] mx-auto flex items-center"
      >
        <div class="w-[45vw] h-[45vw] rounded-[50%] bg-[#ccc] mx-auto">
          <img
            :src="$player._currentTrack?.al?.picUrl"
            alt=""
            class="w-[100%] h-[100%] rounded-[50%]"
            :class="$player._playing ? 'rotate' : ''"
          />
        </div>
      </div>
    </div>
    <div class="fixed bottom-10 w-[100%] mx-auto">
      <div class="w-[85%] mx-auto flex items-center justify-between mt-[32vw]">
        <Icon
          icon="fluent:heart-24-filled"
          class="text-[7vw]"
          :class="show ? 'text-[red]' : 'text-[#ffffff]'"
          @click.native="show = !show"
        />
        <!-- <Icon icon="iconamoon:heart-light" /> -->
        <Icon
          icon="streamline:interface-download-button-2-arrow-bottom-down-download-internet-network-server-upload"
          class="text-[#ffffff] text-[7vw]"
        />
        <div class="text-[#ffffff] border border-[#ffffff] px-1 rounded-md">
          词
        </div>
        <Icon icon="uil:comment-lines" class="text-[#ffffff] text-[7vw]" />
        <Icon icon="ri:more-2-line" class="text-[#ffffff] text-[7vw]" />
      </div>
      <div class="w-[85%] mx-auto flex items-center justify-between mt-[19vw]">
        <Icon
          icon="icon-park-outline:loop-once"
          class="text-[#fff] text-[6vw]"
        />
        <div class="flex items-center text-[8vw]">
          <Icon icon="fluent:previous-16-filled" class="text-[#fff]" />

          <Icon
            class="text-[#ffffff] text-[10vw] flex-1 mx-[9vw]"
            :icon="`${
              $player._playing ? 'zondicons:pause-solid' : 'carbon:play-filled'
            }`"
            @click.native="playFn"
          />

          <Icon icon="fluent:next-20-filled" class="text-[#fff]" />
        </div>
        <div>
          <Icon icon="iconamoon:playlist-fill" class="text-[6vw] text-[#fff]" />
        </div>
      </div>
    </div>
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
      show: false,
    };
  },
  methods: {
    playFn() {
      this.$player.playOrPause();
    },
  },
};
</script>
<style scoped>
.van-notice-bar {
  background-color: #303438;
  height: 25px;
  font-size: 4vw;
  color: #ffffff;
}
@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.rotate {
  animation: rotate 10s infinite linear;
}
.rotated {
  transition: all 1s;
  transform-origin: left top;
}
.paused-animation {
  animation-play-state: paused;
}
.running-animation {
  animation-play-state: running;
}
</style>
