<template>
  <div class="song_detail">
    <div class="bg-[#9a5653] overflow-hidden">
      <div class="w-[92vw] mx-auto my-[5vw]">
        <div
          class="flex items-center text-[7vw] text-[#ffffff] justify-between"
        >
          <div class="flex items-center">
            <Icon icon="solar:arrow-left-linear" />
            <div class="ml-[5vw] text-[5vw]">歌单</div>
          </div>
          <div class="flex items-center">
            <Icon icon="ion:search-outline" />
            <Icon icon="iconamoon:menu-kebab-vertical-bold" class="ml-[9vw]" />
          </div>
        </div>
        <div class="flex items-start mt-[8vw]">
          <div>
            <img
              :src="songdetail.coverImgUrl"
              alt=""
              class="w-[28vw] h-[28vw] rounded-2xl border-t-[#eeeeee]"
            />
          </div>
          <div class="ml-[3vw] w-[54vw]">
            <div class="text-[4vw] text-[#ffffff]">{{ songdetail.name }}</div>
            <div class="flex items-center mb-[2vw]">
              <div class="relative">
                <img
                  :src="songdetail.creator.avatarUrl"
                  alt=""
                  class="w-[6vw] h-[6vw] rounded-[50%]"
                />
                <img
                  :src="songdetail.creator.avatarDetail.identityIconUrl"
                  alt=""
                  class="absolute top-[9px] left-[14px] w-[4vw] h-[4vw] rounded-[50%]"
                  v-if="songdetail.creator.avatarDetail.identityIconUrl"
                />
              </div>
              <div class="ml-[5vw] text-[#b0c3da]">
                {{ songdetail.creator.nickname }}
              </div>
              <div
                class="flex items-center bg-[#7392ae] pr-[2vw] rounded-md text-[#ffffff]"
              >
                <Icon icon="carbon:add" />
                <div class="text-[2vw] leading-[3vw]">关注</div>
              </div>
            </div>
            <div class="flex items-center">
              <div
                v-for="item in songdetail.algTags"
                :key="item.id"
                class="bg-[#7392ae] pl-[2vw] rounded-md text-[#ffffff] flex items-center"
              >
                <div class="text-[2vw] leading-[3vw]">{{ item }}</div>
                <Icon icon="mingcute:right-line" />
              </div>
            </div>
          </div>
        </div>
        <div class="text-[#94a8b9] text-[3vw] flex items-center my-[4vw]">
          <div class="w-[86vw] overflow-hidden line-clamp-1 text-[3vw]">
            {{ songdetail.creator.description }}
          </div>
          <Icon
            icon="mingcute:right-line"
            class="text-[#ffffff] text-[4vw] ml-2"
          />
        </div>
        <!-- 分享 -->
        <div class="flex items-center justify-between">
          <div
            class="w-[28vw] h-[10vw] bg-[#b77f7d] justify-center leading-[10vw] flex items-center rounded-2xl text-[#fff]"
          >
            <Icon icon="uil:share" />
            <div>{{ songdetail.shareCount }}</div>
          </div>
          <div
            class="w-[28vw] h-[10vw] bg-[#b77f7d] justify-center leading-[10vw] flex items-center rounded-2xl text-[#fff]"
          >
            <Icon icon="eva:message-circle-outline" />
            <div>{{ songdetail.commentCount }}</div>
          </div>
          <div
            class="w-[28vw] h-[10vw] bg-[red] justify-center leading-[10vw] flex items-center rounded-2xl text-[#fff]"
          >
            <Icon icon="basil:add-outline" />
            <div>{{ songdetail.subscribedCount }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#fff]">
      <div class="w-[92vw] mx-auto">
        <div class="flex items-center justify-between text-[6vw] mt-2">
          <div class="flex items-center">
            <Icon icon="gridicons:play" class="text-[red]" />
            <div class="ml-[6vw]">
              <span class="text-[5vw]"> 播放全部</span>
              <span class="text-[#b5b0af] text-[3vw]"
                >({{ songdetail.trackIds.length }})</span
              >
            </div>
          </div>
          <div class="flex items-center">
            <Icon icon="iconamoon:upload-thin" class="mr-[6vw]" />
            <Icon icon="mdi:playlist-tick" />
          </div>
        </div>
        <div>
          <ul>
            <li v-for="(item, index) in song" :key="item.id" class="mt-[5vw]">
              <div class="flex items-center justify-between">
                <div class="text-[#ccc]">{{ index + 1 }}</div>
                <div class="ml-[5vw]">
                  <div
                    class="text-[4vw] w-[67vw] text-ellipsis overflow-hidden whitespace-nowrap"
                  >
                    <span>{{ item.name }}</span>

                    <span v-if="item && item.tns">({{ item.tns[0] }})</span>
                    <span v-if="item && !item.tns && item.alia[0]"
                      >({{ item.alia[0] }})</span
                    >
                  </div>
                  <div
                    class="w-[67vw] text-[3vw] text-ellipsis overflow-hidden whitespace-nowrap"
                  >
                    <span></span>
                    <span v-for="item1 in item.ar" :key="item1.id">{{
                      item1.name
                    }}</span>
                    <span>-</span>
                    <span>{{ item.al.name }}</span>
                  </div>
                </div>
                <div class="mr-[7vw]">
                  <Icon icon="jam:play-square" />
                </div>
                <div class="mr-[4vw]">
                  <Icon
                    icon="iconamoon:menu-kebab-vertical-bold"
                    class="text-2xl text-[5vw]"
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { songdetail, trackAll } from '@/request/index';
import { Icon } from '@iconify/vue2';
export default {
  components: { Icon },
  data() {
    return {
      songdetail: {}, //歌单头部详情数据
      song: [], //歌单详情
    };
  },
  created() {
    console.log();
    songdetail(this.$route.query.id).then((res) => {
      // console.log(res);
      this.songdetail = res.data.playlist;
      console.log(this.songdetail);
    });
    trackAll(this.$route.query.id).then((res) => {
      console.log(res);
      this.song = res.data.songs;
      console.log(this.song);
    });
  },
};
</script>
