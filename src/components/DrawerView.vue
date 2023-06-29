<template>
  <div>
    <div class="">
      <transition name="slide">
        <div
          v-show="visible"
          class="w-screen h-[220px] bg-white absolute left-0 right-0 bottom-0 z-[999] rounded-t-2xl"
        >
          <div class="border-b-2 border-[#ccc]">
            <slot name="header">header slot default value</slot>
          </div>
          <div>
            <slot> </slot>
          </div>
        </div>
      </transition>
      <div
        v-if="visible"
        class="bg-black opacity-20 absolute top-0 right-0 bottom-0 left-0 z-[998]"
      ></div>
    </div>
    <div>
      <transition name="left_slide">
        <div
          v-show="visible"
          class="w-screen h-[220px] bg-white absolute left-0 right-0 bottom-0 z-[999] rounded-t-2xl"
        >
          <div class="border-b-2 border-[#ccc]">
            <slot name="header">header slot default value</slot>
          </div>
          <div>
            <slot> </slot>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  // 单向数据流 (父级通过props传递子组件的数据,子组件没有权力修改)
  props: {
    visible: {
      type: Boolean,
      required: true,
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
  transform: translateY(110%);
}
.slide-enter-active,
.left_slide-leave-active {
  transition: all ease-in-out 0.5s;
}
.left_slide-enter-to,
.left_slide-leave {
  transform: translateY(0);
}
</style>
