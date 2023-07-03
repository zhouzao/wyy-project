<template>
  <div
    :class="{ dark: result_switch }"
    class="py-5 border-b-[#e6e6e6] border-b dark:border-b-[#25272e]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3
          class="text-xl my-3 ml-3 text-[#374d5b] dark:text-[#ffffff]"
          ref="command"
        >
          推荐歌单
        </h3>
        <Icon
          icon="iconamoon:arrow-right-2-duotone"
          class="text-[#374d5b] dark:text-[#ffffff] text-[25px]"
        />
      </div>
      <Icon
        icon="iconamoon:menu-kebab-vertical-bold"
        class="text-2xl dark:text-[#ffffff]"
        @click.native="change"
      />
    </div>
    <div ref="scroll1" class="w-[100%] overflow-hidden">
      <!-- <button @click="express">点击</button> -->
      <ul class="flex" style="width: 780px; justify-content: space-around">
        <li
          class="w-[120px] border-t-[6px] border-[#ccc] rounded-t-[20px] dark:border-[#25272e]"
        >
          <div class="w-[120px] h-[120px] relative overflow-hidden">
            <transition
              name="abc"
              v-for="(item, index) in result_banner.resources"
              :key="item.id"
            >
              <div class="absolute top-0 left-0" v-if="index == current">
                <img
                  :src="
                    result_banner.resources[current].uiElement.image.imageUrl
                  "
                  alt=""
                  class="w-[120px] h-[120px] rounded-2xl"
                />
                <Icon
                  icon="iconoir:infinite"
                  class="absolute right-1 top-0 text-[30px] text-[#ffffff]"
                />
              </div>
            </transition>
          </div>
          <div
            class="text-[14px] h-[45px] line-clamp-2 overflow-hidden text-[#3E4759] dark:text-[#ffffff]"
            v-if="result_banner"
          >
            {{ result_banner.resources[current].uiElement.mainTitle.title }}
            <!-- {{ 123 }} -->
          </div>
        </li>
        <!-- border-top: 5px solid #ccc; -->
        <!-- border-radius: 20px 20px 0 0; -->
        <li
          v-for="item in result"
          :key="item.id"
          class="w-[120px] border-t-[6px] border-[#ccc] rounded-t-[20px] dark:border-[#25272e]"
        >
          <div class="relative">
            <img
              :src="item.resources[0].uiElement.image.imageUrl"
              alt=""
              class="w-[120px] h-[120px] rounded-2xl"
            />
            <div class="absolute right-1 top-0 flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  color="white"
                >
                  <path
                    fill="currentColor"
                    d="M18.4 12.5L9 18.38L8 19V6l10.4 6.5m-1.9 0L9 7.8v9.4l7.5-4.7Z"
                  />
                </svg>
              </span>
              <span
                class="text-white"
                v-if="
                  item.resources[0].resourceExtInfo.playCount >= 10000 &&
                  item.resources[0].resourceExtInfo.playCount < 100000000
                "
                >{{
                  parseInt(
                    item.resources[0].resourceExtInfo.playCount / 10000
                  ).toFixed(1) + '万'
                }}</span
              >
              <span
                class="text-white"
                v-if="item.resources[0].resourceExtInfo.playCount >= 100000000"
                >{{
                  parseInt(
                    item.resources[0].resourceExtInfo.playCount / 100000000
                  ).toFixed(1) + '亿'
                }}</span
              >
            </div>
            <div class="absolute bottom-2 right-2">
              <Icon icon="fe:play" class="w-[28px] h-[28px] text-[#fff]" />
            </div>
          </div>
          <div
            class="text-[15px] h-[45px] line-clamp-2 text-[#3E4759] dark:text-[#ffffff]"
          >
            {{ item.resources[0].uiElement.mainTitle.title }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import BScroll from '@better-scroll/core';
export default {
  components: {
    Icon,
  },
  name: 'CommandSong',
  props: ['result', 'result_banner', 'result_switch'],
  data() {
    return {
      // message: false,
      // visible1: false, //轮播图
      current: 0, //默认第一张图片
      // textdata: [],
      index: 0,
      timer: null,
    };
  },

  methods: {
    init1() {
      this.scroll1 = new BScroll(this.$refs.scroll1, {
        scrollX: true,
        scrollY: false,
        click: true,
        probeType: 1,
        scrollbar: {
          fade: false,
          interactive: true,
          scrollbarTrackClickable: true,
          scrollbarTrackOffsetType: 'clickedPoint', // can use 'step'
        },
      });
    },
    change() {
      // this.message = !this.message;
      this.$emit('update-message', this.$refs.command.innerHTML);
    },
  },
  mounted() {
    this.init1();
  },
  created() {
    this.timer = setInterval(() => {
      this.current++;
      if (this.current == 3) {
        this.current = 0;
      }
    }, 4000);
  },
};
</script>
<style scope>
.abc-enter {
  transform: translateY(100%) scale(0.7);
}
.abc-enter-active {
  transition: all ease-in-out 1.2s;
}
.abc-enter-to {
  transform: translateY(0) scale(1);
}
.abc-leave {
  transform: translateY(0) scale(1);
}
.abc-leave-active {
  transition: all ease-in-out 1.2s;
}
.abc-leave-to {
  transform: translateY(-100%) scale(0.7);
}
</style>
