<template>
  <div>
    <div class="flex items-center bg-[#ffffff] py-3">
      <Icon
        icon="mingcute:arrow-left-line"
        class="text-[8vw] mx-3"
        @click.native="$router.go(-1)"
      />
      <h3>MV排行榜</h3>
    </div>
    <div>
      <van-tabs @click="onClick">
        <van-tab :title="item" v-for="item in title" :key="item.id">
          <div>
            <ul class="w-[92vw] mx-auto">
              <div class="my-[5vw] flex items-center font-bold">
                <span>更新时间:</span>
                <span>{{ dayjs(time).format('M' + '月' + 'D' + '日') }}</span>
                <Icon icon="ic:outline-info" class="text-[#cccccc]" />
              </div>
              <li v-for="(item, index) in list" :key="item.id">
                <div class="relative">
                  <img :src="item.cover" alt="" @click="mv(item.id)" />
                  <div class="absolute right-0 top-0 flex items-center">
                    <Icon icon="radix-icons:play" class="text-[#ffffff]" />
                    <div
                      class="text-[#ffffff]"
                      v-if="
                        item.playCount >= 10000 && item.playCount < 100000000
                      "
                    >
                      {{ parseFloat(item.playCount / 10000).toFixed(1) + '万' }}
                    </div>
                    <div
                      class="text-[#ffffff]"
                      v-if="item.playCount >= 100000000"
                    >
                      {{
                        parseFloat(item.playCount / 100000000).toFixed(1) + '亿'
                      }}
                    </div>
                  </div>
                </div>
                <div class="flex items-center my-[4vw] line-clamp-1">
                  <div>
                    <div
                      class="text-[5vw]"
                      :class="index < 3 ? 'text-[#ff3c36]' : 'text-[#ccc]'"
                    >
                      {{ index + 1 }}
                    </div>
                    <div v-if="item.lastRank === index + 1">
                      <Icon icon="mdi:horizontal-line" />
                    </div>
                    <div
                      class="flex items-center"
                      v-if="item.lastRank > index + 1"
                    >
                      <Icon icon="mdi:triangle" class="text-[2vw] text-[red]" />
                      <div class="text-[2vw]">
                        {{ item.lastRank - (index + 1) }}
                      </div>
                    </div>
                    <div
                      class="flex items-center"
                      v-if="item.lastRank < index + 1 && item.lastRank != -1"
                    >
                      <Icon
                        icon="pepicons-pop:triangle-down-filled"
                        class="text-[3vw] text-[green]"
                      />
                      <div class="text-[2vw]">
                        {{ index + 1 - item.lastRank }}
                      </div>
                    </div>
                    <div
                      class="text-[1vw] text-green-400"
                      v-if="item.lastRank === -1"
                    >
                      NEW
                    </div>
                  </div>
                  <div class="ml-[6vw]">
                    <div class="text-[3.5vw] font-bold">{{ item.name }}</div>
                    <div
                      class="text-[2vw] text-[#808080] w-[308px] overflow-hidden text-ellipsis whitespace-nowrap"
                    >
                      <span
                        v-for="(item1, index1) in item.artists"
                        :key="item1.id"
                      >
                        <span>{{ item1.name }}</span>
                        <span v-if="index1 != item.artists.length - 1">/</span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { mvlist } from '@/request/index';
import { Icon } from '@iconify/vue2';
import { Toast } from 'vant';
export default {
  components: { Icon },
  data() {
    return {
      title: ['内地', '港台', '欧美', '韩国', '日本'],
      initial: '内地',
      list: [],
      time: '',
    };
  },
  methods: {
    mv(id) {
      console.log(id);
      this.$router.push({ name: 'videoplayer', params: { id } });
    },
    onClick(name, title) {
      //   Toast(title);
      //   console.log(title);
      this.initial = title;
    },
    areadata(initial) {
      mvlist(initial).then((res) => {
        // console.log(res);
        this.list = res.data.data;
        this.time = res.data.updateTime;
        console.log(this.list);
      });
    },
  },
  created() {
    this.areadata(this.initial);
  },
  watch: {
    initial(value) {
      console.log(value);
      this.areadata(value);
    },
  },
};
</script>
