import styled from "styled-components-vue"
const Wrapper = styled.div ``
// background-color: orange;
// width: 100px;
// height: 100px;
// `
import { Icon } from '@iconify/vue2';
export default{
    
    render(){
        return <Wrapper>
           <div class=" relative bg-[#00ff00]">
                <img src={this.img} alt="" />
                <div class="px-2 absolute bottom-[7vw] right-[4vw] border-[1px] border-[#ccc] bg-black text-[#ffffff] rounded-2xl">TA的照片</div>
           </div>
           <div class=" bg-[#f5f5f5] h-[100vh]">
            <div class=" absolute left-[40%] z-[99] top-[38vw]">
                <img src={require("@/assets/user.jpg")} alt="" class="w-[17vw] h-[17vw] rounded-[50%]" />
            </div>
            <div class="w-[90%] mx-auto bg-[#ffffff] rounded-xl relative top-[-4vw] overflow-hidden">
                <div class="my-[4vw] mx-auto w-[76vw] text-center">
                    <div class="mt-[10vw]">zh_zhou</div>
                    <div class="my-[4vw]">
                        <ul class="flex items-center justify-center">
                            <li class=" px-2 border-r border-[#ccc]">
                                <span>1</span>
                                <span>关注</span>
                            </li>
                            <li class=" px-2 border-r border-[#ccc]">
                                <span>0</span>
                                <span>粉丝</span>
                            </li>
                            <li class=" px-2 ">
                                <span>Lv.</span>
                                <span>0</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="flex items-center text-[2vw] justify-between">
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
                                <span>13天</span>
                            </li>
                        </ul>
                    </div>
                    <div class="flex items-center my-[4vw] justify-center">
                        <div class="px-[4vw] border border-[#ccc] rounded-xl mx-[2vw]">编辑照片</div>
                        <div class="w-[7vw] h-[7vw] rounded-[50%] border border-[#ccc]" onClick={this.change} >
                        <Icon icon="mingcute:down-line" class="relative top-[1vw] right-[-1vw]" />
                        </div>
                    </div>
                   {this.visible && <div>123</div>}
                </div>
            </div>
            <nav class="flex justify-evenly h-[15vw] items-center font-semibold relative ">
            <div class="text-[#2a3146] text-[3.3vw]">主页</div>
            <div class="text-[#9095a1] text-[3.3vw]">动态</div>
            <div class="text-[#9095a1] text-[3.3vw]">播客</div>
            <div class="absolute bg-[#eb474e] w-[4vw] h-[1vw] rounded-[20vw] bottom-[3vw] left-[21.4vw]"></div>
          </nav>
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
                    {5}首
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
          <div class="w-[90%] mx-auto bg-[#ffffff] overflow-hidden">
            <div class="flex items-center w-[85vw] justify-between mx-auto my-[5vw]">
                <div>基本信息</div>
                <div class="px-[3vw] border border-[#ccc] rounded-xl">领取村名证</div>
            </div>
            <div class="w-[85vw] mx-auto">
                <span>村邻:</span>
                <span>13天</span>
                <span>(2023年06月注册)</span>
            </div>
            <div class='my-[5vw] w-[85vw] mx-auto'>
                <span>地区:</span>
                <span>湖北</span>
                <span>武汉</span>
            </div>
          </div>
    </div>
          
           
        </Wrapper>
    },
    data(){
        return {
            img:require("@/assets/login.jpg"),
            visible:false
        }
    },
    methods:{
        change(){
            this.visible =!this.visible
        }
    }
}