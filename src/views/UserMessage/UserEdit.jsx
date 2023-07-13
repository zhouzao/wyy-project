import styled from "styled-components-vue"
import { areaList } from '@vant/area-data';
import store from "storejs"
const Wrapper = styled.div `
.van-cell-group{
    margin: 4vw 0;
}
.van-cell{
    align-items: center;
}
.van-cell::after{
    border: 1px solid #ebedf0;
}
`
// background-color: orange;
// width: 100px;
// height: 100px;

// `
import { Icon } from '@iconify/vue2';
export default{
    
    render(){
        return <Wrapper>
            <div class="bg-[#f5f5f5] h-[100vh] w-[100%] overflow-hidden">
            <div class="flex items-center bg-[#ffffff] py-3 ">
            <Icon icon="mingcute:arrow-left-line" class="text-[8vw] mx-3"nativeOnClick={this.icon} />
            <h3>我的资料</h3>
            </div>
               
               <van-cell-group >
                    <van-cell title="头像">
                    <img src={this.useredit.profile.avatarUrl} alt="" class="w-[15vw] h-[15vw] rounded-[50%] float-right"/> 
                    </van-cell>
                    <van-cell title="昵称" value={this.useredit.profile.nickname} onClick={this.username}/>
                    <van-cell title="性别" value={this.useredit.profile.gender ==0?'保密':this.useredit.profile.gender ==1?'男':'女'} />
                    <van-cell title="二维码" >
                        <Icon icon="mingcute:qrcode-line"  class="text-[#ccc] text-[7vw] float-right"/> 
                    </van-cell>
                </van-cell-group>
                <van-cell-group >
                    <van-cell title="生日" value="1970-1-1">

                    </van-cell>
                    <van-cell title="地区" value="湖北省武汉市" onClick={this.showProp} />
                    <van-cell title="大学" value="未填写" />
                    <van-cell title="音乐标签" value="选择标签">
                       
                    </van-cell>
                    <van-cell title="简介" value="还没有简介">
                       
                    </van-cell>
                </van-cell-group>
                <van-cell-group >
                    <van-cell title="个人主页隐私设置">
                    
                    </van-cell>
                    <van-cell title="主页模块顺序设置" />
                 
                  
                </van-cell-group>
                <van-cell-group >
                    <van-cell title="账号和绑定设置">
                    
                    </van-cell>
                   
                  
                  
                </van-cell-group>
            </div>
            <van-popup
                v-model={this.show}
                position="bottom"
                style={{ height: '40%' }}
            >
                <van-area
                columns-num="2"
                confirm-button-text="完成"
                area-list={areaList}
                onConfirm={this.confirm}
                />
           </van-popup>
         
        <van-popup v-model={this.user}  position="bottom"
                style={{ height: '100%' }}>
        <div class="dark:bg-[#2C2C2C] flex justify-between w-[100%]  items-center h-[14vw] bg-[#FFFFFF] pl-[4vw] text-[3.5vw] pr-[4vw]">
                        <div class='flex items-center'>
                            <Icon icon="simple-line-icons:arrow-left" class="dark:text-[#FFFFFF] mr-[4vw] text-[4vw] text-[#333333]" nativeOnClick={() => {this.user = false}}/>
                            <div class="dark:text-[#f3f3f4]  flex items-center justify-center text-[#2a3146]  text-[4.2vw] font-[600]">修改昵称</div>
                        </div>
                       <div>
                           <p class={['text-[3.8vw]', 'float-right', 'font-semibold', this.duplicated ? 'text-[#ccc]' : 'text-[#000]']} >完成</p>
                       </div>
                    </div>
                    <div class="mt-[2.7vw] h-[11.2vw] ">
                        <input class="pl-[1.5vw] h-[11.2vw] w-[96vw] border-b-[1px] border-[#D9D9D9] " type="text" placeholder="请输入昵称" v-model={this.nickname}/>
                        {/* {this.duplicated ? <div class='h-[11vw] flex items-center text-[3.1vw] text-[#FE3C3A] pl-[4vw]'>{this.errors}</div>:<div></div>}
                        <div class='pl-[4vw]'>
                            {this.duplicated? <div class='px-[3.2vw] py-[2.5vw] rounded-[200px] bg-[#F3F3F3] text-[3vw] tetx-[#313131] inline-block'>{this.repeatNicname}</div>:<div></div>}
                        </div> */}
                    </div>

        </van-popup>
        </Wrapper>
         
    },
    data(){
        return {
           show: false,
           user:true,
           duplicated: false,//判断昵称是否重复
           nickname: "",//value值
           errors:'昵称已经被注册，请选择下列名称',
           useredit:{} ,//用户信息
        }
    },
    methods:{
        confirm(e){
          console.log(e)  
        },
        username(){
            this.user = !this.user
        },
        icon(){
           this.$router.push("/user")
        },
        showProp(){
            this.show = !this.show
        }
    },
    created(){
        this.useredit = store.get("_userdata_")
        console.log(store.get("_userdata_"))
        console.log(this.useredit)
    }
}