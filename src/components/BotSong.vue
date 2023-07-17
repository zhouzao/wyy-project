<template>
  <div
    class="fixed bottom-0 px-[5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#ccc] flex items-center w-[100vw]"
    @click="$router.push('/song')"
  >
    <div class="flex items-center">
      <div
        class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation"
      >
        <img
          src="@/assets/play.png"
          alt=""
          class="absolute top-0 left-0 z-[1]"
        />
        <img
          :src="$player._currentTrack?.al?.picUrl"
          alt=""
          class="w-[7vw] h-[7vw] rounded-[50%]"
        />
      </div>
      <div
        class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]"
      >
        <span class="text-[#3E485E]"> {{ $player._currentTrack.name }}</span>

        <span v-if="$player._currentTrack && $player._currentTrack.ar"
          >-{{ $player._currentTrack.ar[0].name }}</span
        >
      </div>
    </div>
    <div class="w-[5.6vw] h-[5.6vw] relative overflow-hidden">
      <van-circle
        v-model="currentRate"
        :rate="($player._progress * 100) / $player._duration"
        size="5.2vw"
        :stroke-width="120"
        color="#475165"
        layer-color="#C7CBD2"
      />
      <Icon
        :icon="`${$player._playing ? 'carbon:pause-filled' : 'ph:play-fill'}`"
        width="11px"
        class="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute"
        @click.native="pause"
      />
    </div>
    <!-- 播放列表 -->
    <div class="pl-[4.5vw]">
      <Icon
        icon="iconamoon:playlist-fill"
        class="text-[6vw] text-[#3b4152]"
        @click.native="show = !show"
      />
    </div>
    <!-- 播放列表 -->
    <van-popup
      class="rounded-t-[20px] px-[5.4vw]"
      v-model="show"
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div class="playmusic py-[6vw]">
        <h1 class="text-[4vw] font-extrabold">
          当前播放
          <span class="text-[2vw] text-[#929293]" v-if="music.length > 0"
            >({{ music.length }})
          </span>
        </h1>
        <div class="flex justify-between mt-[6.6vw] items-center">
          <div class="flex">
            <!-- 列表循环图标 -->
            <Icon
              icon="arcticons:loopboard"
              :horizontalFlip="true"
              class="text-[5vw] text-[#B1B1B1]"
            />
            <h1 class="ml-[1.5vw] text-[3.4vw] font-medium">列表循环</h1>
          </div>
          <div class="flex w-[30vw] justify-between">
            <!-- 下载图标 -->
            <Icon
              icon="mi:download"
              :horizontalFlip="true"
              class="text-[5vw] text-[#B1B1B1]"
            />
            <!-- 收藏图标 -->
            <Icon
              icon="fluent:collections-20-regular"
              :horizontalFlip="true"
              class="text-[5vw] text-[#B1B1B1]"
            />
            <!-- 删除 -->
            <Icon
              icon="fluent-mdl2:delete"
              :horizontalFlip="true"
              class="text-[5vw] text-[#B1B1B1]"
            />
          </div>
        </div>
      </div>
      <!-- 歌曲列表 -->
      <div>
        <div
          v-for="(item, index) in music"
          :key="index.id"
          class="flex justify-between items-center h-[14vw]"
        >
          <div class="flex items-center">
            <img
              src="@/assets/wave.gif"
              class="red-image w-[2vw] h-[2vw]"
              v-if="item.id === $player._currentTrack.id"
              alt=""
            />
            <h1
              class="text-[4.1vw] ml-[2vw] w-[60vw] line-clamp-1"
              :class="
                item.id === $player._currentTrack.id ? 'text-[#D15B57]' : ''
              "
            >
              {{ item.name }}
              <span
                :class="
                  item.id === $player._currentTrack.id ? 'text-[#D15B57]' : ''
                "
                class="text-[3vw] text-[#BCBCBC]"
                v-if="item && item.ar"
                >-{{ item.ar[0].name }}</span
              >
            </h1>
          </div>
          <div class="flex items-center">
            <p
              class="text-[3vw] mr-[6vw] text-[#BCBCBC]"
              v-if="item.id === $player._currentTrack.id"
            >
              播放来源
            </p>
            <Icon
              icon="ic:baseline-close"
              :horizontalFlip="true"
              class="text-[5vw] text-[#B1B1B1]"
            />
          </div>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import Player from '@/components/player/player';
import store from 'storejs';
export default {
  components: { Icon },
  data() {
    return {
      // player: new Player(),
      switchPlaybackPause: false,
      count: 0,
      music: [], //所有歌单
      currentRate: 0,
      show: false,
    };
  },
  //   computed: mapState(['switchPlaybackPause']),
  created() {
    // location.reload();
    // window.$player = this.player;
    // console.log(this.$player);
    this.music = store.get('cookie_music');

    // console.log(this.music);
  },
  methods: {
    pause() {
      this.$player.playOrPause();
    },
  },
};
</script>
<style>
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
</style>
