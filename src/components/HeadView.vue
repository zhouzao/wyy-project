<template>
  <div class="w-[90vw] flex justify-between items-center mx-auto m-2.5">
    <div>
      <Icon
        icon="ri:menu-line"
        class="text-3xl cursor-pointer"
        @click.native.stop="change"
      />
    </div>
    <div class="w-[290px] relative">
      <Icon icon="ion:search-outline" class="absolute left-5 top-2 text-xl" />

      <input
        type="text"
        placeholder="春暖花开"
        class="border-solid border-2 w-[290px] h-[32px] rounded-3xl"
      />
      <Icon icon="mdi:line-scan" class="absolute right-5 top-2 text-xl" />
    </div>
    <div>
      <Icon icon="arcticons:recorder" class="text-3xl" />
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
export default {
  name: 'HeadView',
  components: {
    Icon,
  },
  methods: {
    change() {
      console.log(123);
      this.$emit('update-message');
    },
  },
};
</script>
<style></style>
