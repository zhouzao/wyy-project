<template>
  <div :class="{ dark: switch_toggle }">
    <div>
      <transition name="slide">
        <div
          v-show="visible"
          class="w-screen h-[220px] bg-white text-[#151515] fixed bottom-0 left-0 z-[994] rounded-t-2xl dark:bg-[#272727] dark:text-[#ffffff]"
        >
          <div class="border-b-2 border-[#ccc]">
            <slot name="header">header slot default value</slot>
          </div>
          <div>
            <div>
              <div style="font-size: 20px">
                <div class="flex my-4">
                  <Icon icon="heroicons:hand-thumb-up" class="text-3xl mx-3" />
                  <div>优先推荐</div>
                </div>
                <div class="flex my-4">
                  <Icon icon="basil:heart-off-outline" class="text-3xl mx-3" />
                  <div>减少推荐</div>
                </div>
                <div class="flex my-4">
                  <Icon icon="mingcute:more-4-line" class="text-3xl mx-3" />
                  <div>更多内容</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div
        v-if="visible"
        class="bg-black opacity-20 fixed top-0 right-0 bottom-0 left-0 z-[993]"
      ></div>
    </div>

    <div @click.stop="fun($event)">
      <div class="absolute top-0 w-[320px] z-[993]">
        <transition name="left_slide">
          <div
            v-show="internalVisible1"
            class="w-[320px] h-[1745px] dark:bg-[#272727] bg-[#eeeeee] absolute left-0 right-0 top-0 z-[999]"
          >
            <div class="w-[90%] mx-auto">
              <div
                class="flex justify-between my-3 items-center dark:text-[#ffffff]"
              >
                <div class="flex items-center">
                  <img
                    src="../assets/user.jpg"
                    alt=""
                    class="w-[35px] h-[35px] rounded-[50%]"
                  />
                  <div class="ml-2 dark:text-[#ffffff] text-[black]">
                    zh_zhou
                  </div>
                  <Icon
                    icon="iconamoon:arrow-right-2-duotone"
                    class="text-2xl dark:text-[#fff] text-[black]"
                  />
                  <!-- <Icon icon="icon-park:right" /> -->
                </div>
                <Icon
                  icon="mdi:line-scan"
                  class="text-2xl dark:text-[#ffffff] text-[black]"
                />
              </div>
              <div class="bg-[#4f4644] overflow-hidden rounded-2xl">
                <div
                  class="w-[90%] mx-auto flex justify-between border-b-2 border-[#a5928e] items-center"
                >
                  <div class="py-3">
                    <div class="text-[#f9e1dc] text-lg">黑胶VIP.壹</div>
                    <div class="text-[#897e7a]">黑胶有效期还剩3天</div>
                  </div>
                  <div
                    class="border-[#a5928e] border-2 p-1 rounded-2xl text-[#dabeb6]"
                  >
                    会员中心
                  </div>
                </div>
                <div class="w-[90%] mx-auto my-3 flex justify-between">
                  <div class="text-[13px] text-[#897e7a]">
                    您的黑胶VIP即将到期,点击立即续费
                  </div>
                </div>
              </div>
            </div>

            <ul
              v-for="item in user_msg"
              :key="item.id"
              class="w-[90%] mx-auto bg-[#ffffff] mt-5 dark:bg-[#2f2f2f] dark:text-[#ffffff]"
            >
              <div
                v-if="item.title"
                class="dark:border-[#333] ml-4 border-b-[1px] border-[#e6e6e6] h-[36px] leading-9 text-[12px] text-[#9d9d9d]"
              >
                <span>{{ item.title }}</span>
              </div>
              <li
                class="flex items-center justify-between ml-4 py-3"
                :style="{
                  borderBottom: `${
                    index1 !== item.msg1.length - 1 && !switch_toggle
                      ? '1px solid #e6e6e6'
                      : ''
                  }`,
                }"
                v-for="(item1, index1) in item.msg1"
                :key="item1.id"
              >
                <div class="flex items-center">
                  <Icon color="#000 dark:text-[#ffffff]" :icon="item1.icon" />
                  <div class="ml-4">{{ item1.text }}</div>
                </div>
                <div class="flex items-center">
                  <span class="text-[12px] text-[#9d9d9d]">{{
                    item1.desccript
                  }}</span>
                  <!--  -->

                  <switch-view
                    v-if="item1.icon1 == 'switch'"
                    class="mr-[18px]"
                    :style="{
                      marginRight: `${switch_toggle ? '23px' : '18px'}`,
                    }"
                    :value="switch_toggle"
                    @change_toggle="switch_fn"
                  ></switch-view>
                  <Icon
                    color="#ccc"
                    :icon="item1.icon1"
                    class="text-[25px] mr-3"
                    v-else
                  />
                </div>
              </li>
            </ul>
            <div
              class="dark:bg-[#2f2f2f] rounded-xl w-[90%] mx-auto my-5 bg-[#ffffff] h-[45px] text-center leading-[45px] text-[red]"
            >
              退出登录/关闭
            </div>
          </div>
        </transition>
      </div>
      <div
        v-if="internalVisible1"
        class="bg-black opacity-20 absolute top-0 right-0 h-[1745px] overflow-hidden bottom-0 left-0 z-[992]"
      ></div>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
import BScroll from '@better-scroll/core';
export default {
  // 单向数据流 (父级通过props传递子组件的数据,子组件没有权力修改)
  props: {
    visible: {
      type: Boolean,
      required: true,
    },
    visible1: {
      type: Boolean,
      required: true,
    },
    value: {
      type: Boolean,
      require: true,
    },
  },
  components: { Icon },
  data() {
    return {
      internalVisible1: this.visible1,
      switch_toggle: false, //switch
      user_msg: [
        {
          title: '',
          msg1: [
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '我的消息',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'simple-icons:shell',
              text: '云贝中心',
              desccript: '签到',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'iwwa:lightbulb',
              text: '创作者中心',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
          ],
        },
        {
          title: '音乐服务',
          msg1: [
            {
              icon: 'icon-park-outline:two-triangles',
              text: '趣测',
              desccript: '点击查看今日运势',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'fluent:ticket-diagonal-28-regular',
              text: '云春有票',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'system-uicons:cube',
              text: '多多西西口袋',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'mdi:shopping-outline',
              text: '商城',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:interface-signal-square-heart-line-stats-beat-square-graph',
              text: 'Beat专区',
              desccript: '顶尖制作邀您创作',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'tabler:bell-ringing-2',
              text: '口袋彩铃',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'fluent:games-16-regular',
              text: '游戏专区',
              desccript: '音乐浇灌治愈花园',
              icon1: 'teenyicons:right-small-outline',
            },
          ],
        },
        {
          title: '其它',
          msg1: [
            {
              icon: 'icon-park-outline:setting-one',
              text: '设置',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'bx:moon',
              text: '深色模式',
              desccript: '',
              icon1: 'switch',
            },
            {
              icon: 'iconamoon:clock-thin',
              text: '定时关闭',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:shopping-catergories-shirt-clothing-t-shirt-men-top',
              text: '个性装扮',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'circum:headphones',
              text: '边听边存',
              desccript: '未开启',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'solar:bag-music-2-line-duotone',
              text: '在线听歌免流量',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'mdi:prohibited',
              text: '音乐黑名单',
              desccript: '音乐浇灌治愈花园',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'ion:shield-checkmark-outline',
              text: '青少年模式',
              desccript: '未开启',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'iconamoon:clock-thin',
              text: '音乐闹钟',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
          ],
        },
        {
          title: '',
          msg1: [
            {
              icon: 'icon-park-outline:transaction-order',
              text: '我的订单',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'fluent:ticket-diagonal-28-regular',
              text: '优惠券',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'circum:headphones',
              text: '我的客服',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'material-symbols:refresh',
              text: '分享网易云音乐',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'tabler:message-2-plus',
              text: '个人信息收集与使用清单',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'tabler:chart-dots',
              text: '个人信息第三方共享清单',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'ic:outline-privacy-tip',
              text: '个人信息与隐私保护',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'mdi:about-circle-outline',
              text: '关于',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
          ],
        },
      ],
    };
  },
  watch: {
    visible1(value) {
      this.internalVisible1 = value;
    },
  },
  methods: {
    fun(event) {
      // console.log(event);
      if (event.clientX > 320) {
        this.$emit('fun_data');
      }
    },
    switch_fn() {
      this.switch_toggle = !this.switch_toggle;
      this.$emit('change_switch', this.switch_toggle);
    },
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
    mounted() {
      this.init1;
    },
  },
};
</script>
<style scoped>
.slide-enter,
.slide-leave-to {
  transform: translateY(110%);
}
.slide-enter-active,
.slide-leave-active {
  transition: all ease-in-out 0.5s;
}
.slide-enter-to,
.slide-leave {
  transform: translateY(0);
}
.left_slide-enter,
.left_slide-leave-to {
  transform: translateX(-110%);
}
.left_slide-enter-active,
.left_slide-leave-active {
  transition: all ease-in-out 0.5s;
}
.left_slide-enter-to,
.left_slide-leave {
  transform: translateX(0%);
}
</style>
