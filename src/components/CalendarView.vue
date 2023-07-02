<template>
  <div
    :class="{ dark: calendar_switch }"
    class="py-5 border-b-[#e6e6e6] border-b dark:border-b-[#25272e]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3
          class="text-xl font-bold my-3 ml-3 text-[#374d5b] dark:text-[#ffffff]"
          ref="command"
        >
          音乐日历
        </h3>
        <div
          class="flex items-center text-base ml-2 bg-[#ccc] rounded-2xl dark:bg-[#25272e]"
        >
          <div class="text-[#374d5b] dark:text-[#ffffff]">
            今日{{ Calendar.length }}条
          </div>
          <Icon
            icon="iconamoon:arrow-right-2-duotone"
            class="text-[#374d5b] dark:text-[#ffffff] text-[25px]"
          />
        </div>
      </div>
      <Icon
        icon="iconamoon:menu-kebab-vertical-bold"
        class="text-2xl dark:text-[#ffffff]"
        @click.native.capture="calendar"
      />
    </div>
    <div>
      <ul
        class="w-[95%] m-auto overflow-hidden bg-[#ffffff] rounded-2xl dark:bg-[#25272e]"
      >
        <li
          v-for="(item, index) in Calendar_filter"
          :key="item.id"
          class="flex justify-between items-center w-[90%] my-4 m-auto"
        >
          <div
            class="w-[75%]"
            :style="{
              borderBottom: `${
                index == Calendar_filter.length - 1 ? '' : '1px solid #ccc'
              }`,
            }"
          >
            <div class="text-[#ccc]">
              <span>今天</span>
              <span>{{ dayjs(item.onlineTime).format('MM/DD ') }}</span>
              <span
                class="text-[red]"
                :style="{
                  color: `${
                    item.tag == '预告'
                      ? '#5d75a6'
                      : item.tag == '发布'
                      ? 'blue'
                      : ''
                  }`,
                }"
                >{{ item.tag }}</span
              >
            </div>
            <div class="my-3 text-[#374d5b] dark:text-[#ffffff]">
              {{ item.title }}
            </div>
          </div>
          <img
            :src="item.imgUrl"
            alt=""
            class="w-[70px] h-[70px] rounded-2xl"
          />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Icon } from '@iconify/vue2';
export default {
  name: 'CalendarView',
  props: ['Calendar', 'calendar_switch'],
  components: {
    Icon,
  },
  computed: {
    Calendar_filter() {
      return this.Calendar.filter((item, index) => {
        return index < 2;
      });
    },
  },
  methods: {
    calendar() {
      this.$emit('update-message', this.$refs.command.innerHTML);
    },
  },
};
</script>
<style scoped></style>
