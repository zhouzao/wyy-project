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
  const cookie = store.get("_m_cookie") ?? '';
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

// 歌单头部详情  收藏歌单
export const songdetail = (id) => http.get(`/playlist/detail`,{params:{id}})

// 歌单所有详情
export const trackAll = (id) => http.get(`/playlist/track/all`,{params:{id}})

// 二维码
  export const getQrkey  = () => http.get('/login/qr/key');

  export const getQrInfo = (key,qrimg=1) =>http.get("/login/qr/create",{params:{key,qrimg}})

 export const checkqr = (key) =>http.get("/login/qr/check",{params:{key,timestamp:Date.now()}})

//  用户信息
export const getUserAccount = () => http.get("/user/account")

// 用户详情
export const  getUserDetail = (id) => http.get("/user/detail",{params:{uid:id}})

// 登录状态
export  const loginstatus = () => http.get("/login/status")

// 账号信息
export const fetchUserPlaylist = (uid) => http.get('/user/playlist', { params: { uid } });

// 播放音乐
export const getMP3 = (id) => http.get("/song/url/v1",{params:{id,level:'standard'}})

export const getTrackDetail = (id) => http.get('/song/detail', { params: { ids: id } });

// 用户详情页面
export const getUserShou = () => http.get('/user/subcount');

getUserShou().then((res)=>{
  console.log(res)
})
/**
 * @descriptiong 获取用户评论
 */
export const fetchUserHistory = (uid) =>
  http.get('/user/comment/history', { params: { uid } });
 
/**
 * @descriptiong 获取用户歌单
 */
// 收藏歌单加我的评论


//修改昵称
export const fetchUserUpdata = (nickname) => http.get('/user/update', { params: { nickname } });
//昵称修改判断是否重复
export const featNicknameCheck = (nickname) => http.get('/nickname/check', { params: { nickname } });

// ip
export const getIPAddr = () => axios.get('https://api.ipify.org?format=json')
export const ip2Territory = (ip) => axios.get(`http://ip-api.com/json/${ip}?lang=zh-CN`)

// MV排行榜
export const mvlist = (area) => http.get("/top/mv",{params:{limit:50,area}})

export const getLyric = (id) => http.get("lyric",{params:{id}})

// mv播放信息
/**
* @description MV视频
*/
export const featMvUrl = (id) => http.get('/mv/url', { params: { id } });

/**
* @description MV视频信息
*/
export const featMvDetail = (mvid) => http.get('/mv/detail', { params: { mvid } });

/**
* @description 获取 mv 点赞转发评论数数据
*/
export const featMvDetailInfo = (mvid) => http.get('/mv/detail/info', { params: { mvid } });
