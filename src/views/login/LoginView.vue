<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="w-[90%] mx-auto flex justify-between items-center mt-4">
      <Icon icon="uiw:left" class="text-[7vw]" />
      <div>游客登录</div>
    </div>
    <div class="mt-[16vw] mb-[10vw]">
      <img :src="svg" class="w-[39vw] h-[7vw] mx-auto" />
    </div>
    <div class="" v-if="state == 0 || state == 801">
      <img :src="qrcode" alt="" class="mx-auto" />
      <div class="mt-[10vw] text-[3vw]">
        <div class="mx-auto w-[46vw]">
          <span>使用</span>
          <span class="text-[#1461a0]">网易云音乐APP</span>
          <span>扫码登录</span>
        </div>
      </div>
    </div>
    <div v-if="state == 800" class="relative">
      <div class="flex justify-center">
        <img :src="qrcode" alt="" />
      </div>
      <div
        class="absolute top-[5vw] left-[25vw] bg-[#dfdfdf] w-[50vw] h-[50vw]"
        :style="{ backgroundColor: `rgba(255,255,255,.5)` }"
      >
        <div
          class="text-center w-[20vw] h-[8vw] bg-[#fe020f] rounded-[16vw] leading-[8vw] text-[#fff] mx-auto mt-[16vw]"
          @click="change"
        >
          点击刷新
        </div>
      </div>
      <div class="text-[3vw] mt-[10vw]">
        <div class="mx-auto w-[46vw]">
          <span>使用</span>
          <span class="text-[#1461a0]">网易云音乐APP</span>
          <span>扫码登录</span>
        </div>
      </div>
    </div>
    <div v-if="state == 802">
      <div class="">
        <img
          src="@/assets/success.png"
          alt=""
          class="bg-[#ffffff] mx-auto w-[40vw] h-[40vw]"
        />
      </div>
      <div class="text-center my-5 text-[5vw]">扫描成功</div>
      <div class="text-center">请在手机上确认登录</div>
    </div>
    <div class="fixed bottom-0">
      <img src="@/assets/login.jpg" alt="" />
    </div>
  </div>
</template>
<script>
import fillSvg from '@/assets/logo.fill.svg';
import { Icon } from '@iconify/vue2';
import {
  getQrkey,
  getQrInfo,
  checkqr,
  getUserAccount,
  getUserDetail,
  loginstatus,
} from '@/request/index';
import store from 'storejs';
export default {
  components: { Icon },
  data() {
    return {
      svg: fillSvg,
      qrcode: '',
      state: 0,
      id: '',
    };
  },
  methods: {
    change() {
      this.state = 0;
    },
    pollingCheck(key, interval = 1000) {
      const timer = setInterval(async () => {
        const res = await checkqr(key);
        if (res.data.code == 800) {
          // alert('此二维码已过期,请刷新');
          clearInterval(timer);
          this.state = 800;
        } else if (res.data.code == 803) {
          clearInterval(timer);
          store.set('_m_cookie', res.data.cookie); //存cookie
          console.log(res);
          this.state = 803;
          const user = await getUserAccount();
          store.set('_user_', user.data); //存用户信息
          console.log('用户信息', user.data);

          const userdata = await getUserDetail(user.data.account.id);
          store.set('_userdata_', userdata.data); //存账号信息
          console.log('账号信息', userdata.data);
          // getUserDetail(this.id).then((res) => {
          //   store.set('_userdata_', res.data);
          //   console.log(res);
          // });
          const login = await loginstatus();
          console.log(login);
          // loginstatus().then((res) => {
          //   console.log(res);
          // });
          this.$router.push('/home');

          //   store.set("_m_cookie",res.data.cookie)
        } else if (res.data.code == 802) {
          this.state = 802;
        } else if (res.data.code == 801) {
          this.state = 801;
        }
      }, interval);
      this.$on('hook:beforeDestroy', () => {
        clearInterval(timer);
      });
    },
  },
  async created() {
    const res = await getQrkey().catch((err) => {
      console.log(err);
    });
    console.log(res);
    const qrcode = await getQrInfo(res.data.data.unikey);
    console.log(qrcode);
    this.qrcode = qrcode.data.data.qrimg;
    this.pollingCheck(res.data.data.unikey);
  },
};
</script>
