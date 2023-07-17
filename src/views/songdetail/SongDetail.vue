<template>
  <div class="song_detail">
    <div class="bg-[#9a5653] overflow-hidden overflow-y: scroll;" ref="scroll">
      <div class="w-[92vw] mx-auto">
        <van-sticky class="bg-[#9a5653]">
          <div
            class="flex items-center text-[7vw] h-[14vw] text-[#ffffff] justify-between"
          >
            <div class="flex items-center">
              <Icon icon="solar:arrow-left-linear" @click.native="home" />

              <div class="ml-[5vw] text-[5vw]" v-if="!visible">歌单</div>
              <div class="ml-[5vw] text-[5vw]" v-else>
                <van-notice-bar
                  :scrollable="true"
                  background="#9a5653"
                  color="#fff"
                  :text="songdetail.name"
                />
              </div>
            </div>
            <div class="flex items-center">
              <Icon icon="ion:search-outline" />
              <Icon
                icon="iconamoon:menu-kebab-vertical-bold"
                class="ml-[9vw]"
              />
            </div>
          </div>
        </van-sticky>
      </div>
      <div class="flex items-start mt-[3vw] w-[92vw] mx-auto" v-show="!hide">
        <div>
          <img
            :src="songdetail.coverImgUrl"
            alt=""
            class="w-[28vw] h-[28vw] rounded-2xl border-t-[#eeeeee]"
          />
        </div>
        <div class="ml-[3vw] w-[54vw]">
          <div class="text-[4vw] text-[#ffffff]">{{ songdetail.name }}</div>
          <div class="flex items-center mb-[2vw] mt-2">
            <div class="relative">
              <img
                :src="songdetail.creator.avatarUrl"
                alt=""
                class="w-[6vw] h-[6vw] rounded-[50%]"
                v-if="songdetail.creator.avatarUrl"
              />
              <img
                :src="songdetail.creator.avatarDetail.identityIconUrl"
                alt=""
                class="absolute top-[9px] left-[14px] w-[4vw] h-[4vw] rounded-[50%]"
                v-if="songdetail.creator.avatarDetail"
              />
            </div>
            <div
              class="ml-[5vw] text-[#b0c3da] text-[3vw]"
              v-if="songdetail && songdetail.creator.nickname != ''"
            >
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
              <div class="text-[2vw] leading-[3vw]">
                {{ item }}
              </div>
              <Icon icon="mingcute:right-line" />
            </div>
          </div>
        </div>
        <div class="w-[5vw] h-[5vw] bg-[#ccc] rounded-[50%] mt-2">
          <Icon
            icon="mingcute:down-line"
            class="relative top-[0.5vw] left-[0.5vw]"
            @click.native="hide = !hide"
          />
        </div>
      </div>
      <div class="mt-[8vw] w-[100vw]" v-show="hide">
        <div class="flex justify-between">
          <div>喜欢这个歌单的用户也听了</div>
          <div class="w-[5vw] h-[5vw] bg-[#ccc] rounded-[50%]">
            <Icon
              icon="icon-park:up"
              class="relative top-[0] left-[0]"
              @click.native="hide = !hide"
            />
          </div>
        </div>
        <div class="w-[100%] overflow-hidden" ref="scroll">
          <!-- <button @click="express">点击</button> -->
          <ul class="flex w-[780px] justify-around">
            <li
              v-for="item2 in result"
              :key="item2.creativeId"
              class="w-[120px] border-t-[6px] border-[#ccc] rounded-t-[20px] dark:border-[#25272e]"
            >
              <div class="relative">
                <img
                  :src="item2.resources[0].uiElement.image.imageUrl"
                  alt=""
                  class="w-[120px] h-[120px] rounded-2xl"
                  @click="detail(item2.resources[0].resourceId)"
                />
                <div class="absolute right-1 top-0 flex">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      color="white"
                    >
                      <path
                        fill="currentColor"
                        d="M18.4 12.5L9 18.38L8 19V6l10.4 6.5m-1.9 0L9 7.8v9.4l7.5-4.7Z"
                      />
                    </svg>
                  </span>
                  <span
                    class="text-white"
                    v-if="
                      item2.resources[0].resourceExtInfo.playCount >= 10000 &&
                      item2.resources[0].resourceExtInfo.playCount < 100000000
                    "
                    >{{
                      parseInt(
                        item2.resources[0].resourceExtInfo.playCount / 10000
                      ).toFixed(1) + '万'
                    }}</span
                  >
                  <span
                    class="text-white"
                    v-if="
                      item2.resources[0].resourceExtInfo.playCount >= 100000000
                    "
                    >{{
                      parseInt(
                        item2.resources[0].resourceExtInfo.playCount / 100000000
                      ).toFixed(1) + '亿'
                    }}</span
                  >
                </div>
                <div class="absolute bottom-2 right-2">
                  <Icon icon="fe:play" class="w-[28px] h-[28px] text-[#fff]" />
                </div>
              </div>
              <div
                class="text-[15px] h-[45px] line-clamp-2 text-[#3E4759] dark:text-[#ffffff]"
              >
                {{ item2.resources[0].uiElement.mainTitle.title }}
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="text-[#94a8b9] text-[3vw] flex items-center my-[4vw] w-[92vw] mx-auto"
      >
        <div class="overflow-hidden line-clamp-1 text-[3vw]">
          {{ songdetail.description }}
        </div>
        <Icon
          icon="mingcute:right-line"
          class="text-[#ffffff] text-[4vw] ml-2"
        />
      </div>
      <!-- 分享 -->
      <div class="flex items-center justify-between w-[92vw] mx-auto mb-[5vw]">
        <div
          class="w-[28vw] h-[10vw] bg-[#b77f7d] justify-center leading-[10vw] flex items-center rounded-2xl text-[#fff]"
        >
          <Icon icon="majesticons:share" class="text-[6vw] text-[#ffffff]" />

          <div>{{ songdetail.shareCount }}</div>
        </div>
        <div
          class="w-[28vw] h-[10vw] bg-[#b77f7d] justify-center leading-[10vw] flex items-center rounded-2xl text-[#fff]"
        >
          <Icon
            icon="eva:message-circle-outline"
            class="text-[6vw] text-[#ffffff]"
          />
          <div>{{ songdetail.commentCount }}</div>
        </div>
        <div
          class="w-[28vw] h-[10vw] bg-[red] justify-center leading-[10vw] flex items-center rounded-2xl text-[#fff]"
        >
          <Icon icon="basil:add-outline" class="text-[6vw] text-[#ffffff]" />
          <div
            v-if="
              songdetail.subscribedCount >= 10000 &&
              songdetail.subscribedCount < 100000000
            "
          >
            {{
              parseFloat(songdetail.subscribedCount / 10000).toFixed(1) + '万'
            }}
          </div>
          <div v-if="songdetail.subscribedCount >= 100000000">
            {{
              parseFloat(songdetail.subscribedCount / 100000000).toFixed(1) +
              '亿'
            }}
          </div>
          <div v-if="songdetail.subscribedCount < 10000">
            {{ songdetail.subscribedCount }}
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#f1f1f1]">
      <div class="w-[92vw] mx-auto">
        <div class="flex items-center justify-between text-[8vw]">
          <div class="flex items-center">
            <Icon
              icon="gridicons:play"
              class="text-[red]"
              @click.native="playAll"
            />
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
          <ul class="mb-[16vw]">
            <li
              v-for="(item, index) in song"
              :key="item.id"
              class="mt-[5vw]"
              @click="playOne(item)"
            >
              <div class="flex items-center justify-between">
                <div class="text-[#ccc]">
                  {{ index + 1 }}
                </div>
                <div class="ml-[5vw]">
                  <div
                    class="text-[4vw] w-[61vw] text-ellipsis overflow-hidden whitespace-nowrap"
                  >
                    <span>{{ item.name }}</span>

                    <span v-if="item && item.tns">({{ item.tns[0] }})</span>
                    <span v-if="item && !item.tns && item.alia[0]"
                      >({{ item.alia[0] }})</span
                    >
                  </div>
                  <div
                    class="w-[60vw] text-[3vw] text-ellipsis overflow-hidden whitespace-nowrap"
                  >
                    <span></span>
                    <span v-for="item1 in item.ar" :key="item1.id">{{
                      item1.name
                    }}</span>
                    <span>-</span>
                    <span>{{ item.al.name }}</span>
                  </div>
                </div>
                <div class="mr-[5vw] text-[6vw]">
                  <Icon icon="arcticons:fpt-play" />
                </div>
                <div class="mr-[4vw] text-[6vw]">
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
import { songdetail, trackAll, BlockPage } from '@/request/index';
import { NoticeBar } from 'vant';
import { Icon } from '@iconify/vue2';
import BScroll from '@better-scroll/core';
import { Sticky } from 'vant';
import store from 'storejs';
import { all } from 'axios';
import BetterScroll from '@better-scroll/core';
export default {
  components: { Icon },
  data() {
    return {
      songdetail: {}, //歌单头部详情数据
      song: [], //歌单详情
      hide: false,
      vis: false,
      result: [],
      visible: false,
    };
  },

  methods: {
    playOne(item) {
      this.$player.replacePlaylist([item.id], '', '', item.id);
      store.set('cookie_music', this.song);
      this.$router.push('/song');
    },
    home() {
      this.$router.push('/home');
    },
    playAll() {
      // this.$player.playOrPause();
      // console.log(this.song);
      // this.$root;
      this.$player.replacePlaylist(
        this.song.map((song) => song.id),
        '',
        ''
      );
      store.set('cookie_music', this.song);
      this.$router.push('/song');
    },
    all,

    // change({ scrollTop: number, isFixed: boolean }) {
    //   // console.log(13);
    //   if (number > 50 && boolean == true) {
    //     this.visible = !this.visible;
    //   } else if (number == 0) {
    //     this.visible = false;
    //   }
    // },
    // init1() {
    //   this.scroll = new BScroll(this.$refs.scroll, {
    //     observeDOM: true,
    //     scrollX: true,
    //     scrollY: false,
    //     click: true,
    //     probeType: 1,
    //     scrollbar: {
    //       fade: false,
    //       interactive: true,
    //       scrollbarTrackClickable: true,
    //       scrollbarTrackOffsetType: 'clickedPoint', // can use 'step'
    //     },
    //   });
    // },
  },
  mounted() {
    // this.init1();
    // console.log(this.$refs.scroll);
  },
  created() {
    BlockPage().then((res) => {
      this.result = res.data.data.blocks[1].creatives.splice(1); //推荐歌单
    });
    songdetail(this.$route.query.id).then((res) => {
      // console.log(res);
      this.songdetail = res.data.playlist;
      // console.log(this.songdetail);
      // console.log(res.data.playlist.creator.avatarUrl);
    });
    trackAll(this.$route.query.id).then((res) => {
      // console.log(res);
      this.song = res.data.songs;
      // console.log(this.song);
    });
    // console.log(this.$refs.scroll);
  },
};
</script>
<style>
.van-sticky {
  background: #9a5653;
}
.van-notice-bar__wrap {
  width: 30vw;
}
/* .van-notice-bar {
  background-color: #9a5653;
} */
</style>
