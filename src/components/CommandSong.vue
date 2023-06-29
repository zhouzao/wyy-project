<template>
  <div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3 class="text-xl font-bold my-3 ml-3" ref="command">推荐歌单</h3>
        <Icon icon="icon-park:right" class="text-2xl" />
      </div>
      <Icon
        icon="iconamoon:menu-kebab-vertical-bold"
        class="text-2xl"
        @click.native="change"
      />
    </div>
    <div ref="scroll1" class="w-[100%] overflow-hidden relative">
      <ul class="flex" style="width: 780px; justify-content: space-around">
        <li v-for="item in result" :key="item.id" class="w-[120px]">
          <div class="relative">
            <img
              :src="item.picUrl"
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
              <span class="text-white">{{
                parseInt(item.playCount / 10000).toFixed(1) + '万'
              }}</span>
            </div>
            <div class="absolute bottom-0 right-1">
              <svg
                color="white"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
              >
                <path
                  fill="currentColor"
                  d="M9.38 4.677a1.25 1.25 0 0 0-1.88 1.08v16.488a1.25 1.25 0 0 0 1.88 1.079l14.698-8.59a.85.85 0 0 0 0-1.467L9.381 4.677ZM6 5.757c0-2.124 2.304-3.447 4.138-2.375l14.697 8.59c1.552.907 1.552 3.15 0 4.057l-14.697 8.59C8.304 25.691 6 24.369 6 22.245V5.756Z"
                />
              </svg>
            </div>
          </div>
          <div class="w-[100px] h-[52px] over">
            {{ item.name }}
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
  props: ['result'],
  data() {
    return {
      // message: false,
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
};
</script>
