<template>
  <div>
    <div class="flex items-center">
      <h3 class="text-xl font-bold my-3 ml-3">新歌新碟\数字专辑</h3>
      <Icon icon="icon-park:right" class="text-2xl" />
    </div>
    <div class="w-[100%] overflow-hidden ml-5" ref="scroll2">
      <div class="flex w-[2800px]">
        <ul v-for="item in topsong" :key="item.id" class="width-[350px]">
          <li
            v-for="item1 in item.resources"
            :key="item1.id"
            class="flex items-center h-[80px]"
          >
            <img
              :src="item1.uiElement.image.imageUrl"
              alt=""
              class="w-[70px] h-[70px] rounded-2xl"
            />
            <div class="ml-2 text-xs">
              <div>
                {{ item1.uiElement.mainTitle.title }}
              </div>
              <div class="flex items-center my-3">
                <span class="red_title"></span>
                <span
                  class="w-[96px] text-ellipsis overflow-hidden whitespace-nowrap inline-block ml-2"
                  >{{ item1.uiElement.subTitle.title }}</span
                >
                <span class="ml-2">
                  <Icon icon="pepicons-pencil:line-x" />
                </span>
                <span
                  v-for="item2 in item1.resourceExtInfo.artists"
                  :key="item2.id"
                  >{{ item2.name + '/' }}</span
                >
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
import BScroll from '@better-scroll/core';
export default {
  name: 'NewSong',
  props: ['topsong'],
  components: {
    Icon,
  },
  methods: {
    init2() {
      this.scroll2 = new BScroll(this.$refs.scroll2, {
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
  },
  mounted() {
    this.init2();
  },
};
</script>
