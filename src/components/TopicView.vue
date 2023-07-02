<template>
  <!-- :class="{ dark: result_switch }" -->
  <!-- class="py-5 border-b-[#e6e6e6] border-b dark:border-b-[#25272e]" -->
  <div>
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3
          class="text-xl font-bold my-3 ml-3 text-[#374d5b] dark:text-[#ffffff]"
          ref="command"
        >
          热门话题
        </h3>
        <Icon
          icon="iconamoon:arrow-right-2-duotone"
          class="text-[#374d5b] dark:text-[#ffffff] text-[25px]"
        />
      </div>
      <Icon
        icon="iconamoon:menu-kebab-vertical-bold"
        class="text-2xl dark:text-[#ffffff]"
        @click.native="topics"
      />
    </div>
    <div class="w-[100%] overflow-hidden" ref="scroll">
      <ul class="w-[2000px] flex">
        <li
          v-for="(item, index) in topic"
          :key="item.id"
          class="flex w-[70%] ml-2 rounded-2xl"
          :style="{
            background: `${
              index == 0
                ? '#a6967c'
                : index == 1
                ? '#a6897e'
                : index == 2
                ? '#a276c4'
                : index == 3
                ? '#a6967c'
                : index == 4
                ? '#a6897e'
                : '#a276c4'
            }`,
          }"
        >
          <div class="w-[90%] mx-auto py-3">
            <div>
              <div class="flex items-center">
                <div class="relative">
                  <Icon
                    icon="bx:message-rounded"
                    class="text-[30px] text-[#ffffff]"
                  />
                  <span class="absolute top-0 left-2 text-[#ccc]">#</span>
                </div>
                <div class="text-[#ffffff]">{{ item.title }}</div>
              </div>
              <div class="text-[#c1b9a9]">{{ item.count }}热度</div>
            </div>
            <div class="mt-3">
              <div class="w-[180px] text-[#fff] overflow-hidden line-clamp-2">
                {{ item.content }}
              </div>
            </div>
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
  name: 'TopicView',

  components: {
    Icon,
  },

  methods: {
    init1() {
      this.scroll = new BScroll(this.$refs.scroll, {
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
    topics() {
      this.$emit('update-message', this.$refs.command.innerHTML);
    },
  },
  mounted() {
    this.init1();
  },

  data() {
    return {
      imgs: [],
      topic: [
        {
          title: '寻找云村最会拍照的人!',
          count: '26万',
          content: '谢晓鹤是小西湖冲浪手:人生不相见 动如参与商',
        },
        {
          title: '每人一首最近单曲循环的歌!',
          count: '123万',
          content: '云音乐VIP:今日推歌云音乐VIP:今日推歌云音乐VIP:今日推歌',
        },
        {
          title: '最令你感动的那首情歌!',
          count: '448万',
          content:
            'Salnt_Denis:今日份的感动:"我希望我们两个之间的爱永远不要变"',
        },
        {
          title: '哪首歌藏着你的故事!',
          count: '22万',
          content: '保护我方漆头儿:丑就丑吧保护我方漆头儿:丑就丑吧',
        },
        {
          title: '宝藏歌曲推荐!',
          count: '56万',
          content: '音乐合伙人:《》飞鸽是周菲的启程宣言',
        },
        {
          title: '音乐节!',
          count: '178万',
          content: '旋风小耳:见信好,亲爱的捉刀客同学',
        },
      ],
    };
  },
};
</script>
