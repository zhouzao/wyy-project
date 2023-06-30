<template>
  <div
    class="w-[50px] h-[30px] rounded-[15px]"
    :class="`${value ? 'bg-red-400' : 'bg-black'}`"
    @click="toggle"
  >
    <div
      class="w-[30px] h-[30px] rounded-[15px] bg-white"
      :class="`${value ? 'translate-x-[20px]' : 'translate-x-0'}`"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: Boolean,
      require: true,
    },
  },
  methods: {
    toggle() {
      this.$emit('update:value', !this.value);
      //   this.$emit('change_toggle');
    },
  },
};
</script>
