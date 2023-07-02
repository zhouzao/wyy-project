<template>
  <div
    class="w-[35px] h-[20px] rounded-[15px]"
    :class="`${value ? 'bg-red-400' : 'bg-[#ccc]'}`"
    @click="toggle"
  >
    <div
      class="w-[20px] h-[20px] rounded-[15px] bg-white"
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
  data() {
    return {};
  },
  methods: {
    toggle() {
      //   this.$emit('update:value', !this.value);
      this.$emit('change_toggle', !this.value);
    },
  },
};
</script>
