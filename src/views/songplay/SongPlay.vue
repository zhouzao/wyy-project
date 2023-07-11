<template>
  <div class="bg-[#303438] w-screen h-screen relative z-[199]">
    <div class="flex items-center w-[90%] mx-auto justify-between">
      <Icon
        icon="mingcute:down-line"
        class="text-[8vw] text-[#ffffff] mr-[4vw]"
      />
      <div class="flex-1">
        <van-notice-bar scrollable text="笼(电影 《消失的她》片尾主题曲)" />
        <div class="flex items-center text-[4vw] justify-center text-[#ffffff]">
          <div>张碧晨</div>
          <div class="ml-[3vw] bg-[#595e5c] px-[2vw] rounded-lg">关注</div>
        </div>
      </div>
      <Icon
        icon="clarity:share-line"
        class="text-[#ffffff] text-[8vw] ml-[4vw]"
      />
    </div>
    <div class="h-[38vw]">
      <img
        src="@/assets/needle-ab.png"
        alt=""
        class="h-[42vw] relative top-[10vw] left-[42vw]"
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
            src="@/assets/circle.jpg"
            alt=""
            class="w-[100%] h-[100%] rounded-[50%]"
          />
        </div>
      </div>
    </div>
    <div class="w-[85%] mx-auto flex items-center">
      <Icon icon="iconamoon:heart-light" class="text-[#ffffff]" />
      <Icon
        icon="streamline:interface-download-button-2-arrow-bottom-down-download-internet-network-server-upload"
        class="text-[#ffffff]"
      />
      <div class="text-[#ffffff]">词</div>
      <Icon icon="uil:comment-lines" class="text-[#ffffff]" />
      <Icon icon="ri:more-2-line" class="text-[#ffffff]" />
    </div>
    <div>
      <Icon icon="carbon:play-filled" class="text-[#ffffff] text-[8vw]" />
      <Icon icon="zondicons:pause-solid" class="text-[#ffffff] text-[7vw]" />
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  components: {
    Icon,
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
</style>
