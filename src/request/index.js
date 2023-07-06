// 所有的请求都定义在这个位置
import axios from 'axios';
import store from 'storejs';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
// http.interceptors.request.use(function(config){
//   console.log(config)
// })
http.interceptors.request.use(function (config) {
  const cookie = store.get("__m__cookie") ?? '';
  config.params = config.params || {};
  config.params.cookie = cookie;
  return config
})
// 轮播图 新歌新碟 数字专辑 排行榜
export const BlockPage = () => http.get('/homepage/block/page');

// 每日推荐
export const DragonBall = () =>http.get("/homepage/dragon/ball");

// 推荐歌单
// export const Personalized = () =>http.get("/personalized?limit=6");

// 音乐日历
// export const Calendar = () =>http.get("/calendar?startTime=1687836243619&endTime=1687922643618");
// 
let nowDate = new Date()
let start = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()} 00:00:00`)
let end = new Date(`${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()} 23:59:59`)
export const Calendar = () =>http.get(`/calendar?startTime=${start.getTime()}&endTime=${end.getTime()}`);

// 默认搜索\搜索\搜索建议
 // 
 export const fetchSearchDefault = () => http.get("/search/default")

 export const fetchSearchResult = (params) => http.get("/search",{
   params
 })
 // 
 export const fetchSearchSuggest = (params) => http.get("/search/suggest",{
   params
 })

// 
// 榜单
export async  function playlist() {
  const res = await http.get('/toplist/detail');
 const playlist =await  Promise.all(res.data.list.map(({id}) => http.get('/playlist/detail', {params: {id}})));
  // console.log(playlist.map(item => item.data.playlist));
  return playlist
}

// 歌单头部详情
export const songdetail = (id) => http.get(`/playlist/detail`,{params:{id}})

// 歌单所有详情
export const trackAll = (id) => http.get(`/playlist/track/all`,{params:{id}})

// 二维码
  export const getQrkey  = () => http.get('/login/qr/key');

  export const getQrInfo = (key,qrimg=1) =>http.get("/login/qr/create",{params:{key,qrimg}})

 export const checkqr = (key) =>http.get("/login/qr/check",{params:{key,timestamp:Date.now()}})

