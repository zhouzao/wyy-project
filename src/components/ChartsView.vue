<template>
  <div
    :class="{ dark: chartswitch }"
    class="py-5 border-b-[#e6e6e6] border-b dark:border-b-[#25272e]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3
          class="text-xl my-3 ml-3 text-[#374d5b] dark:text-[#ffffff]"
          ref="command"
        >
          排行榜
        </h3>

        <Icon
          icon="iconamoon:arrow-right-2-duotone"
          class="text-[#374d5b] dark:text-[#ffffff] text-2xl"
        />
      </div>
      <Icon
        icon="iconamoon:menu-kebab-vertical-bold"
        class="text-2xl dark:text-[#ffffff]"
        @click.native="chars"
      />
    </div>
    <div class="w-[100%] overflow-hidden" ref="scroll3">
      <div class="flex w-[2145px]">
        <ul
          v-for="item in blocks"
          :key="item.id"
          class="w-[100%] ml-5 bg-[#ffffff] rounded-2xl dark:bg-[#25272e]"
        >
          <div class="flex items-center justify-between w-[90%] mx-auto">
            <div class="flex items-center mt-2">
              <h3
                style="font-size: 20px"
                class="text-[#374d5b] dark:text-[#ffffff]"
              >
                {{ item.uiElement.mainTitle.title }}
              </h3>
              <Icon
                icon="iconamoon:arrow-right-2-duotone"
                class="text-[#374d5b] dark:text-[#ffffff] text-[25px]"
              />
            </div>
            <div class="text-[#ccc]">
              {{ item.uiElement.mainTitle.titleDesc }}
            </div>
          </div>
          <li
            v-for="(item1, index) in item.resources"
            :key="item1.id"
            class="flex items-center h-[100px] w-[90%] mx-auto"
          >
            <img
              :src="
                item1.resourceExtInfo
                  ? item1.resourceExtInfo.songData.album.blurPicUrl
                  : item1.uiElement.image.imageUrl
              "
              alt=""
              style="width: 70px; height: 70px; border-radius: 15px"
            />
            <span
              style="margin: 0 12px"
              class="font-bold"
              :style="{
                color: `${
                  index == 0 ? '#ca952a' : index == 1 ? '#757ea0' : '#be7444'
                }`,
              }"
              >{{ index + 1 }}</span
            >
            <div class="text-[#374d5b] dark:text-[#ffffff]">
              <div
                class="text-ellipsis overflow-hidden whitespace-nowrap w-[164px] text-[14px]"
              >
                {{
                  item1.resourceExtInfo
                    ? item1.resourceExtInfo.songData.name
                    : item1.uiElement.mainTitle.title
                }}
              </div>
              <div
                class="text-ellipsis overflow-hidden whitespace-nowrap w-[164px] text-[13px]"
              >
                {{
                  item1.resourceExtInfo
                    ? item1.resourceExtInfo.artists[0].name
                    : ''
                }}
              </div>
            </div>
            <span
              style="margin-left: 3px"
              class="text-[red] text-[13px]"
              :style="{
                color: `${
                  item1.uiElement.labelText.text == '新晋' ? '#90d4ba' : ''
                }`,
              }"
              >{{ item1.uiElement.labelText.text }}</span
            >
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
  name: 'ChartsView',
  props: ['blocks', 'value', 'chartswitch'],

  components: {
    Icon,
  },
  mounted() {
    this.init3();
  },
  methods: {
    init3() {
      this.scroll3 = new BScroll(this.$refs.scroll3, {
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
    chars() {
      this.$emit('update-message', this.$refs.command.innerHTML);
    },
  },
};
</script>
