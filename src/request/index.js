// 所有的请求都定义在这个位置
import axios from 'axios';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
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

// 歌单详情
export const songdetail = (params) => http.get(`/playlist/detail?id=${params}`)

// export  const res = ()=>http.get('/toplist/detail')
// const  data = res.data.list.map((item)=>{
//   return item.id
// })

// export const playlist =(data) => http.get('aylist/detail',{params:{id}})