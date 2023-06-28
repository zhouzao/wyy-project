<template>
  <div>
    <div class="flex items-center">
      <h3 class="text-xl font-bold my-3 ml-3">排行榜</h3>
      <Icon icon="icon-park:right" class="text-2xl" />
    </div>
    <div class="w-[100%] overflow-hidden" ref="scroll3">
      <div class="flex w-[2000px]">
        <ul v-for="item in blocks" :key="item.id" class="w-[100%] ml-5">
          <div class="flex" style="align-items: center">
            <h3
              style="
                font-size: 20px;
                font-weight: bold;
                margin: 10px 0 10px 10px;
              "
            >
              {{ item.uiElement.mainTitle.title }}
            </h3>
            <Icon icon="icon-park:right" font-size="25px" />
            <div style="flex: 1; margin-left: 65px">
              {{ item.uiElement.mainTitle.titleDesc }}
            </div>
          </div>
          <li
            v-for="(item1, index) in item.resources"
            :key="item1.id"
            style="display: flex; align-items: center; height: 100px"
          >
            <img
              :src="
                item1.resourceExtInfo
                  ? item1.resourceExtInfo.songData.album.blurPicUrl
                  : ''
              "
              alt=""
              style="width: 70px; height: 70px; border-radius: 15px"
            />
            <span style="margin: 0 12px">{{ index + 1 }}</span>
            <div>
              <div
                class="text-ellipsis overflow-hidden whitespace-nowrap w-[164px]"
              >
                {{
                  item1.resourceExtInfo
                    ? item1.resourceExtInfo.songData.name
                    : ''
                }}
              </div>
              <div
                class="text-ellipsis overflow-hidden whitespace-nowrap w-[164px]"
              >
                {{
                  item1.resourceExtInfo
                    ? item1.resourceExtInfo.artists[0].name
                    : ''
                }}
              </div>
            </div>
            <span style="margin-left: 3px; color: red">{{
              item1.uiElement.labelText.text
            }}</span>
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
  props: ['blocks'],
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
  },
};
</script>
