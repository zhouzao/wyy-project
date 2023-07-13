import styled from "styled-components-vue"
import store from "storejs"
const Wrapper = styled.div `
.van-sticky {
  background: #ffffff;
 z-index: 199;
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
}
.van-tabs__wrap{
  width: 90%;
  margin: 0 auto 5vw;
 
}
.van-tabs__nav{
  background: #f5f5f5;
}
.van-tabs__content{
  /* height: 100vh; */
  /* text-align: center;
  margin: 10vw 0; */
  margin: 2vw 0;
}
`
// background-color: orange;
// width: 100px;
// height: 100px;
// `
import { Icon } from '@iconify/vue2';
import { fetchUserPlaylist} from "@/request/index"
import { Tab, Tabs } from 'vant';
export default{
    
    render(){
        return <Wrapper>
            <van-sticky >
            <div class=" mx-[3vw] flex items-center  text-[7vw] justify-between text-[#ccc] h-[70px]">
            <Icon icon="majesticons:arrow-left" nativeOnClick={this.home}/>
            <Icon icon="uim:ellipsis-v" />
            </div>
  </van-sticky>
            
           <div class=" relative h-[73vw] w-[100%]">
                <img src={this.user.profile.backgroundUrl} alt="" class=" h-[73vw] w-[100%]" />
                <div class="px-2 absolute bottom-[7vw] right-[4vw] border-[1px] border-[#ccc] bg-black text-[#ffffff] rounded-2xl">TA的照片</div>
               
           </div>
           <div class=" bg-[#f5f5f5]  mb-12">
            <div class=" absolute left-[40%] z-[99] top-[58vw]">
                {this.user && <img src={this.user.profile.avatarUrl} alt="" class="w-[17vw] h-[17vw] rounded-[50%]" />}
            </div>
            <div class="w-[90%] mx-auto bg-[#ffffff] rounded-xl relative top-[-4vw] overflow-hidden">
                <div class="my-[4vw] mx-auto ">
                    <div class="mt-[10vw] text-center">{this.user.nickname}</div>
                    <div class="my-[4vw]">
                        <ul class="flex items-center justify-center">
                            <li class=" px-2 border-r border-[#ccc]">
                                <span>{this.user.profile.follows}</span>
                                <span>关注</span>
                            </li>
                            <li class=" px-2 border-r border-[#ccc]">
                                <span>0</span>
                                <span>粉丝</span>
                            </li>
                            <li class=" px-2 ">
                                <span>Lv.</span>
                                <span>{this.user.level}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="flex items-center text-[2vw] justify-center mx-[5vw]">
                            <li class="px-[2vw] border rounded-xl border-[#ccc]">
                                <span>IP:</span>
                                <span>湖北</span>
                            </li>
                            <li  class="px-[2vw] border rounded-xl border-[#ccc]">
                                <span>70后</span>
                                <span>魔蝎座</span>
                            </li>
                            <li  class="px-[2vw] border rounded-xl border-[#ccc]">
                                <span>湖北</span>
                                <span>武汉</span>
                            </li>
                            <li  class="px-[2vw] border rounded-xl border-[#ccc]">
                                <span>村龄</span>
                                <span>{this.user.createDays}天</span>
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center my-[4vw] justify-center">
                        <div class="px-[4vw] border border-[#ccc] rounded-xl mx-[2vw]" onClick={this.edit}>编辑资料</div>
                        <div class="w-[7vw] h-[7vw] rounded-[50%] border border-[#ccc]" onClick={this.change} >
                       {!this.visible &&  <Icon icon="mingcute:down-line" class="relative top-[1vw] right-[-1vw]" />}
                        {this.visible &&  <Icon icon="mingcute:up-line" class="relative top-[1vw] right-[-1vw]"/>}
                        </div>
                    </div>
                   {this.visible && <div class="animate-pulse animate-pulse-1"> 
                    <ul>
                      <li>edwqhiocds</li>
                      <li>edwqhiocds</li>
                      <li>edwqhiocds</li>
                    </ul>
                    </div>}
                </div>
            </div>
            {/* <nav class="flex justify-evenly h-[15vw] items-center font-semibold relative ">
            <div class="text-[#2a3146] text-[3.3vw]">主页</div>
            <div class="text-[#9095a1] text-[3.3vw]">动态</div>
            <div class="text-[#9095a1] text-[3.3vw]">播客</div>
            <div class="absolute bg-[#eb474e] w-[4vw] h-[1vw] rounded-[20vw] bottom-[3vw] left-[21.4vw]"></div>
          </nav> */}
          <van-tabs v-model={this.activeName}>
            <van-tab title="主页" name="a">
               {/* 音乐品味开始 */}
            <div class=" w-[90%] mx-auto bg-[#fefefe] rounded-[15px] px-[4vw] pb-[4vw] pt-[5vw] mb-[4vw]">
            <p class="text-[#2a3146] font-semibold text-[5vw] mb-[2.4vw]">
              音乐品味
            </p>
            <div class="flex ">
              <div class="border-[2px] flex flex-wrap bg-[#f8e5e5] rounded-[3vw] h-[32vw] flex-1 p-[2vw] content-between">
                <div class="w-[100%] text-[2.6vw] text-[#7e7f8b]">
                  我的喜欢
                  <p class="mt-[2.6vw] text-[#545969] text-[3.5vw] font-semibold">
                    {0}首
                  </p>
                </div>
                <div class="w-[100%] text-[2.6vw] text-[#7e7f8b] flex items-center">
                  <Icon
                    icon="ph:heart-fill"
                    color="#a9aab2"
                    class=" mr-[0.8vw] text-[2.6vw]"
                  />
                  喜欢的音乐
                </div>
              </div>
              <div class="border-[2px] flex flex-wrap bg-[#f9eed5] rounded-[3vw] h-[32vw] flex-1 mx-[2vw] p-[2vw] content-between">
                <div class="w-[100%] text-[2.6vw] text-[#7e7f8b]">
                  累计听歌
                  <p class="mt-[2.6vw] text-[#545969] text-[3.5vw] font-semibold">
                    {this.user.listenSongs}首
                  </p>
                </div>
                <div class="w-[100%] text-[2.6vw] text-[#7e7f8b] flex items-center ">
                  <Icon
                    icon="ri:rhythm-line"
                    color="#a9aab2"
                    class=" mr-[0.8vw] text-[2.6vw]"
                  />
                  听歌排行
                </div>
              </div>
              <div class="border-[2px] flex flex-wrap bg-[#e5ecf6] rounded-[3vw] h-[32vw] flex-1 p-[2vw] content-between">
                <div class="w-[100%] text-[2.6vw] text-[#7e7f8b]">
                  本周关键词
                  <p class="mt-[2.6vw] text-[#545969] text-[3.5vw] font-semibold">
                    属于你的音乐档案
                  </p>
                </div>
                <div class="w-[100%] text-[2.6vw] text-[#7e7f8b] flex items-center ">
                  <Icon
                    icon="fa-solid:hourglass"
                    color="#a9aab2"
                    class=" mr-[0.8vw] text-[2.6vw]"
                  />
                  黑胶时光机
                </div>
              </div>
            </div>
            </div>
          {/* 音乐品味结束 */}
          {/* 基本信息 */}
          <div class="w-[90%] mx-auto bg-[#ffffff] overflow-hidden rounded-[15px]">
            <div class="flex items-center w-[85vw] justify-between mx-auto my-[5vw]">
                <div>基本信息</div>
                <div class="px-[3vw] border border-[#ccc] rounded-xl">{this.user.profileVillageInfo.title}</div>
            </div>
            <div class="w-[85vw] mx-auto">
                <span>村邻:</span>
                <span>{this.user.createDays}天</span>
                <span>(2023年06月注册)</span>
            </div>
            <div class='my-[5vw] w-[85vw] mx-auto'>
                <span>地区:</span>
                <span>湖北</span>
                <span>武汉</span>
            </div>
          </div>
          {/* 创建的歌单 */}
               
                 <div class=" w-[90%] mx-auto mt-3 bg-[#fff] rounded-[15px] px-[4vw] pb-[4vw] pt-[5vw]">
            <p class=" text-[4vw] mb-[4.4vw]">
              创建的歌单
              <span class="text-[#9599a3] text-[2.7vw] ml-[1.6vw]">
                ({this.create.length})个
              </span>
            </p>
            <ul class="">
              {this.create.map((item) => (
                <li class="flex mb-[1.5vw]" onClick={()=>this.detail(item.id)} >
                  <div class="relative pt-[1vw] mr-[2.6vw] ">
                    <img
                      src={item.coverImgUrl}
                      class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"
                    />
                    <div class="w-[9vw] h-[4vw] bg-[#f3f3f3] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[1]"></div>
                  </div>
                  <div class="flex flex-wrap items-center flex-1">
                    <p class="w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">
                     {item.name}
                    </p>
                    <p class="w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                      {item.trackCount}首，播放{item.playCount}次
                    
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          {/* 收藏的歌单 */}
          <div class=" w-[90%] mx-auto mt-3 bg-[#fff] rounded-[15px] px-[4vw] pb-[4vw] pt-[5vw]">
            <p class=" text-[4vw] mb-[4.4vw]">
              收藏的歌单
              <span class="text-[#9599a3] text-[2.7vw] ml-[1.6vw]">
                ({this.collect.length})个
              </span>
            </p>
            <ul class="">
              {this.collect.map((item) => (
                <li class="flex mb-[1.5vw]" onClick={()=>this.detail(item.id)}>
                  <div class="relative pt-[1vw] mr-[2.6vw] ">
                    <img
                      src={item.coverImgUrl}
                      class="w-[12vw] h-[12vw] rounded-[10px] bg-black z-[2] relative"
                    />
                    <div class="w-[9vw] h-[4vw] bg-[#f3f3f3] bg-opacity-50 absolute top-[0vw] left-1/2 -translate-x-1/2 rounded-[8px] z-[1]"></div>
                  </div>
                  <div class="flex flex-wrap items-center flex-1">
                    <p class="w-[100%] text-[3.8vw] text-[#3f4659] line-clamp-1">
                     {item.name}
                    </p>
                    <p class="w-[100%] text-[2.8vw] text-[#aaadb5] line-clamp-1">
                      {item.trackCount}首，By{ item.creator.nickname}，播放
                      {
                        item.playCount >= 10000 &&
                        item.playCount < 100000000 && <span>{parseInt(
                          item.playCount / 10000
                        ).toFixed(1) + '万'}</span>
                      }
                      {
                        item.playCount >= 100000000&& <span>{ parseInt(
                          item.playCount / 100000000
                        ).toFixed(1) + '亿'}</span>
                      }
                      
                    次
                    </p>
                  </div>
                </li>
               ))} 
            </ul>
          </div>
         
            </van-tab>
            <van-tab title="动态" name="b" class="text-center">暂时还没有动态</van-tab>
            <van-tab title="博客" name="c"  class="text-center">暂无声音</van-tab>
          </van-tabs>
             
         
    </div>
    
   
        </Wrapper>
        
    },
    data(){
        return {
          activeName:"a",
            img:require("@/assets/login.jpg"),
            visible:false,
            user:{}, //用户账号信息
            playlist:[],
        }
    },
    methods:{
      detail(id) {
        this.$router.push({ path: '/songdetail', query: { id } });
        // console.log(id)
      },
        change(){
            this.visible =!this.visible
        },
        edit(){
            this.$router.push("/user/edit")
            console.log(this.$router)
        },
        home(){
            // console.log("123")
            this.$router.push("/home")
        }
    },
    created(){
        this.user = store.get("_userdata_")
        console.log(store.get("_userdata_"))
        console.log(this.user)
        fetchUserPlaylist(this.user.profile.userId).then((res)=>{
            console.log(res.data.playlist)
            this.playlist = res.data.playlist
            
        })
      
    },
    computed:{
      create(){
      return this.playlist.filter((item)=>{
        return item.subscribed==false && item.name!="我喜欢的音乐"
        })
      },
      collect(){
        return this.playlist.filter((item)=>{
          return item.subscribed==true
        })
      }
    }
}