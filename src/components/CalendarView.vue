<template>
  <div>
    <div class="flex items-center">
      <h3 class="text-xl font-bold my-3 ml-3">音乐日历</h3>
      <Icon icon="icon-park:right" class="text-2xl" />
    </div>
    <div>
      <ul class="w-[95%] m-auto overflow-hidden">
        <li
          v-for="item in Calendar"
          :key="item.id"
          class="flex justify-between items-center w-[90%] my-4 m-auto"
        >
          <div>
            <div>{{ dayjs(item.onlineTime).format('MM/DD ') }}</div>
            <div>{{ item.title }}</div>
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
  props: ['Calendar'],
  components: {
    Icon,
  },
};
</script>
