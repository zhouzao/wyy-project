<template>
  <div :class="{ dark: value }">
    <div>
      <transition name="slide">
        <div
          v-show="visible"
          class="w-screen h-[220px] bg-white fixed bottom-0 left-0 z-[999] rounded-t-2xl dark:bg-[#151515] dark:text-[#151515]"
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
        class="bg-black opacity-20 fixed top-0 right-0 bottom-0 left-0 z-[998]"
      ></div>
    </div>

    <div @click="fun($event)">
      <transition name="left_slide">
        <div
          v-show="internalVisible1"
          ref="scroll"
          class="overflow-auto w-[320px] h-[100vh] dark:bg-[#151515] dark:text-[#151515] bg-[#eeeeee] absolute left-0 right-0 top-0 z-[999]"
        >
          <div class="w-[90%] mx-auto">
            <div class="flex justify-between my-3 items-center">
              <div class="flex items-center">
                <img
                  src="../assets/user.jpg"
                  alt=""
                  class="w-[35px] h-[35px] rounded-[50%]"
                />
                <div class="ml-2">zh_zhou</div>
                <Icon icon="icon-park:right" class="text-2xl" />
              </div>
              <Icon icon="mdi:line-scan" class="text-2xl" />
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
            class="w-[90%] mx-auto bg-[#ffffff] mt-5"
          >
            <div
              v-if="item.title"
              class="ml-4 border-b-[1px] border-[#e6e6e6] h-[36px] leading-9 text-[12px] text-[#9d9d9d]"
            >
              <span>{{ item.title }}</span>
            </div>
            <li
              class="flex items-center justify-between ml-4 py-3"
              :style="{
                borderBottom: `${
                  index1 !== item.msg1.length - 1 ? '1px solid #e6e6e6' : ''
                }`,
              }"
              v-for="(item1, index1) in item.msg1"
              :key="item1.id"
            >
              <div class="flex items-center">
                <Icon color="#000" :icon="item1.icon" />
                <div class="ml-4">{{ item1.text }}</div>
              </div>
              <div class="flex items-center">
                <span class="text-[12px] text-[#9d9d9d]">{{
                  item1.desccript
                }}</span>
                <Icon color="#ccc" :icon="item1.icon1" class="text-[25px]" />
              </div>
            </li>
          </ul>
          <div
            class="rounded-xl w-[90%] mx-auto my-5 bg-[#ffffff] h-[45px] text-center leading-[45px] text-[red]"
          >
            退出登录/关闭
          </div>
        </div>
      </transition>
      <div
        v-if="internalVisible1"
        class="bg-black opacity-20 absolute top-0 right-0 h-[1810px] bottom-0 left-0 z-[998]"
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
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '云贝中心',
              desccript: '签到',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
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
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '趣测',
              desccript: '点击查看今日运势',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '云春有票',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '多多西西口袋',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '商城',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: 'Beat专区',
              desccript: '顶尖制作邀您创作',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '口袋彩铃',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
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
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '设置',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '深色模式',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '定时关闭',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '个性装扮',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '边听边存',
              desccript: '未开启',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '在线听歌免流量',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '音乐黑名单',
              desccript: '音乐浇灌治愈花园',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '青少年模式',
              desccript: '未开启',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
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
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '我的订单',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '优惠券',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '我的客服',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '分享网易云音乐',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '个人信息收集与使用清单',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '个人信息第三方共享清单',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '个人信息与隐私保护',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '关于',
              desccript: '',
              icon1: 'teenyicons:right-small-outline',
            },
            {
              icon: 'streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close',
              text: '音乐闹钟',
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
