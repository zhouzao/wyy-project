<template>
  <div class="bg-[#303438] w-screen h-screen relative">
    <div class="flex items-center w-[90%] mx-auto justify-between">
      <Icon
        icon="mingcute:down-line"
        class="text-[8vw] text-[#ffffff] mr-[4vw]"
        @click.native="$router.go(-1)"
      />
      <div class="flex-1">
        <van-notice-bar scrollable :text="$player._currentTrack?.name" />
        <!-- <van-notice-bar scrollable text="123" /> -->
        <div class="flex items-center text-[4vw] justify-center text-[#ffffff]">
          <div v-if="$player._currentTrack && $player._currentTrack?.ar">
            {{ $player._currentTrack?.ar[0]?.name }}
          </div>
          <!-- <div>123</div> -->
          <div class="ml-[3vw] bg-[#595e5c] px-[2vw] rounded-lg">关注</div>
        </div>
      </div>
      <Icon
        icon="clarity:share-line"
        class="text-[#ffffff] text-[8vw] ml-[4vw]"
      />
    </div>
    <div v-if="!lyric1">
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
              @click="lyric1 = !lyric1"
              :src="$player._currentTrack?.al?.picUrl"
              alt=""
              class="w-[100%] h-[100%] rounded-[50%]"
              :class="$player._playing ? 'rotate' : ''"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- 歌词开始 -->
    <div
      class="w-[100vw] h-[130vw] flex items-center flex-wrap px-[6vw] justify-center overflow-hidden relative internalShadow"
      v-if="lyric1"
      @click="lyric1 = !lyric1"
    >
      <div
        class="absolute top-0 transition-all duration-1000"
        :style="{ top: -$player.lineHieght + 'vw' }"
      >
        <div
          v-for="(line, index) in $player.lyricLines"
          :key="line.id"
          class="text-[hsla(0,0%,88.2%,.8)] line-clamp-2 w-[100%] h-[12vw] px-[4vw] flex justify-center text-center"
          :style="{
            color: index === $player.lineIndex ? '#fff' : 'hsla(0,0%,88.2%,.7)',
          }"
        >
          {{ line.txt }}
        </div>
      </div>
    </div>

    <div class="fixed bottom-5 w-[100%] mx-auto">
      <div
        class="w-[85%] mx-auto flex items-center justify-between mt-[32vw]"
        v-if="!lyric1"
      >
        <Icon
          icon="fluent:heart-24-filled"
          class="text-[7vw]"
          :class="show1 ? 'text-[red]' : 'text-[#ffffff]'"
          @click.native="show1 = !show1"
        />
        <!-- <Icon icon="iconamoon:heart-light" /> -->
        <Icon
          icon="streamline:interface-download-button-2-arrow-bottom-down-download-internet-network-server-upload"
          class="text-[#ffffff] text-[7vw]"
        />
        <div
          class="text-[#ffffff] border border-[#ffffff] px-1 rounded-md"
          @click="lyric1 = true"
        >
          词
        </div>
        <Icon icon="uil:comment-lines" class="text-[#ffffff] text-[7vw]" />
        <Icon icon="ri:more-2-line" class="text-[#ffffff] text-[7vw]" />
      </div>
      <!-- 进度条 -->
      <div
        class="h-[8vw] w-[100vw] flex items-center px-[5vw] mt-[3vw] relative top-[9vw]"
      >
        <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-80">
          {{ timeModification($player._progress) }}
        </div>
        <vue-slider
          v-model="$player.progress"
          :duration="0"
          :process="true"
          tooltip="none"
          :drag-on-click="true"
          :min="0"
          :max="$player._duration"
          :interval="0.1"
          class="flex-1 mx-[2.5vw]"
        />
        <div class="text-[#fff] text-[1.6vw] scale-[0.8] opacity-50">
          {{ timeModification($player._duration) }}
        </div>
      </div>
      <div class="w-[85%] mx-auto flex items-center justify-between mt-[19vw]">
        <Icon
          icon="icon-park-outline:loop-once"
          class="text-[#fff] text-[6vw]"
        />
        <div class="flex items-center text-[8vw]">
          <!-- 上一首 -->
          <Icon
            icon="fluent:previous-16-filled"
            class="text-[#fff]"
            @click.native="PrevTrackCallback"
          />

          <Icon
            class="text-[#ffffff] text-[10vw] flex-1 mx-[9vw]"
            :icon="`${
              $player._playing ? 'zondicons:pause-solid' : 'carbon:play-filled'
            }`"
            @click.native="playFn"
          />
          <!-- 下一首 -->
          <Icon
            icon="fluent:next-20-filled"
            class="text-[#fff]"
            @click.native="nextTrackCallback"
          />
        </div>
        <div>
          <Icon
            icon="iconamoon:playlist-fill"
            class="text-[6vw] text-[#fff]"
            @click.native="show = !show"
          />
        </div>
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
            <span class="text-[2vw] text-[#929293]">({{ music.length }}) </span>
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
            @click="playSingle(item.id)"
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
                  item.id === $player._currentTrack.id ? 'text-[red]' : ''
                "
              >
                {{ item.name }}
                <span
                  :class="
                    item.id === $player._currentTrack?.id ? 'text-[red]' : ''
                  "
                  class="text-[3vw] text-[#BCBCBC]"
                  v-if="item && item.ar"
                  >-{{ item?.ar[0].name }}</span
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
    <!-- {{ dayjs.duration().hours(35940) }} -->
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import store from 'storejs';
import { lyricText } from '@/request/index';
import Lyric from 'lyric-parser';
export default {
  components: {
    Icon,
  },
  data() {
    return {
      show: false,
      show1: false,
      music: [],
      ids: [],
      // lyricStr: '',
      lyric: {}, //歌词
      lyric1: false,
      lyricsLoadingStatus: true,
      currentid: this.$player._currentTrack.id,
    };
  },
  created() {
    this.music = store.get('cookie_music');

    // console.log(this.music);
    // console.log(this.ids);
    this.music.map((item) => {
      // console.log(item.id);
      return this.ids.push(item.id);
    });
    console.log(this.currentid);
    lyricText(this.currentid).then((res) => {
      console.log(res);
      // this.lyricStr = res.data.lrc.lyric;
      this.lyric = new Lyric(res.data.lrc.lyric);
      // console.log(this.lyricStr);
      console.log(this.lyric);
    });
  },
  methods: {
    // fn(index, id) {
    //   console.log(123);
    //   if (this.$player._currentTrack.id === id) {
    //     this.playSingle(this.music[index + 1].id);
    //   }
    //   this.music.splice(index, 1);
    //   store.set('cookie_music', this.music);
    // },
    timeModification(time) {
      const minutes = Math.floor(time / 60);
      return `${String(minutes).padStart(2, '0')}:${String(
        Math.floor(time % 60)
      ).padStart(2, '0')}`;
    },
    playFn() {
      this.$player.playOrPause();
    },
    //点击替换
    playSingle(id) {
      // this.music = store.set('cookie_music');
      this.$player.replacePlaylist(
        this.$player.list.map((data) => data),
        '',
        '',
        id
      );
    },
    // 上一曲
    PrevTrackCallback() {
      // this.$refs.pointer.style = 'transform:rotate(-45deg)';
      setTimeout(() => {
        this.$player.playOrPause();
        if (this.ids.indexOf(this.$player._currentTrack.id) === 0) {
          // console.log(this.ids.indexOf(this.$player._currentTrack.id));
          this.currentid = this.ids[this.ids.length - 1];
          this.playSingle(this.ids[this.ids.length - 1]);
          // console.log(this.ids[this.$player.list.length - 1]);
        } else {
          // console.log(this.$player.list);
          // console.log(this.ids.indexOf(this.$player._currentTrack.id));
          this.currentid =
            this.ids[this.ids.indexOf(this.$player._currentTrack.id) - 1];
          this.playSingle(
            this.ids[this.ids.indexOf(this.$player._currentTrack.id) - 1]
          );
        }
      }, 500);
    },
    // 下一曲
    nextTrackCallback() {
      setTimeout(() => {
        this.$player.playOrPause();
        // console.log(this.$player._currentTrack.id);
        if (
          this.ids.lastIndexOf(this.$player._currentTrack.id) ==
          this.ids.length - 1
        ) {
          // console.log(this.ids.lastIndexOf(this.$player._currentTrack.id));
          this.playSingle(this.ids[0]);
          this.currentid = this.ids[0];
        } else {
          // console.log(this.$player.list);
          // console.log(
          //   this.ids[this.ids.lastIndexOf(this.$player._currentTrack.id) + 1]
          // );
          this.currentid =
            this.ids[this.ids.lastIndexOf(this.$player._currentTrack.id) + 1];
          this.playSingle(
            this.ids[this.ids.lastIndexOf(this.$player._currentTrack.id) + 1]
          );
        }
      }, 500);
    },
  },
  watch: {
    currentid(value) {
      this.currentid = value;

      lyricText(value).then((res) => {
        // console.log(res);
        // this.lyricStr = res.data.lrc.lyric;
        this.lyric = new Lyric(res.data.lrc.lyric);
        // // console.log(this.lyricStr);
        // console.log(this.lyric);
      });
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
.internalShadow {
  -webkit-mask-image: linear-gradient(
    180deg,
    hsla(0, 0%, 100%, 0) 0,
    hsla(0, 0%, 100%, 0.6) 15%,
    #fff 25%,
    #fff 75%,
    hsla(0, 0%, 100%, 0.6) 85%,
    hsla(0, 0%, 100%, 0)
  );
}
</style>
