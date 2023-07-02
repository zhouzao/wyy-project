<template>
  <div
    :class="{ dark: switchsong }"
    class="py-5 border-b-[#e6e6e6] border-b dark:border-b-[#25272e]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3
          class="text-xl font-bold my-3 ml-3 text-[#374d5b] dark:text-[#ffffff]"
          ref="command"
        >
          新歌新碟\数字专辑
        </h3>
        <Icon
          icon="iconamoon:arrow-right-2-duotone"
          class="text-[#374d5b] dark:text-[#ffffff] text-[25px]"
        />
      </div>
      <Icon
        icon="iconamoon:menu-kebab-vertical-bold"
        class="text-2xl dark:text-[#ffffff]"
        @click.native="newsong"
      />
    </div>
    <div class="w-[100%] overflow-hidden ml-5" ref="scroll2">
      <div class="flex w-[2800px]">
        <ul v-for="item in topsong" :key="item.id" class="w-[350px]">
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
            <div class="ml-2 text-[black] dark:text-[#ffffff]">
              <div class="font-bold text-[14px]">
                {{ item1.uiElement.mainTitle.title }}
              </div>
              <div class="flex items-center text-[14px]">
                <span
                  class="w-[96px] text-ellipsis overflow-hidden whitespace-nowrap inline-block"
                  >{{ item1.uiElement.subTitle.title }}</span
                >
                <span>
                  <Icon icon="pepicons-pencil:line-x" />
                </span>
                <span
                  v-for="(item2, index) in item1.resourceExtInfo.artists"
                  :key="item2.id"
                  >{{ item2.name }}
                  <span
                    v-if="index !== item1.resourceExtInfo.artists.length - 1"
                    >/</span
                  >
                </span>
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
  props: ['topsong', 'switchsong'],
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
    newsong() {
      this.$emit('update-message', this.$refs.command.innerHTML);
    },
  },
  mounted() {
    this.init2();
  },
};
</script>
