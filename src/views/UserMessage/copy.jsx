<div class="bg-[#f5f5f5] h-[100vh] overflow-hidden">
<div class="flex items-center bg-[#ffffff] py-3 ">
<Icon icon="mingcute:arrow-left-line" class="text-[8vw] mx-3" nativeOnClick={this.icon}/>
<h3>我的资料</h3>
</div>
<div class="">
 {this.data1.map((item,index1) =>(
     <ul key={item.id} class="bg-[#ffffff]">
         {item.uldata.map((item1,index)=>(
             <li key={item1.id} class="flex items-center my-[2.5vw] ml-[4vw] py-[2.5vw]  justify-between" style={{borderBottom:`${index!=item.uldata.length-1?'1px solid #ccc':''}`}} onClick={() => this.all(index,index1)}>
        
                 <div>{item1.title}</div>
                 <div class="mr-[4vw] text-[#ccc]">
                     {item1.content=='img' && <img src={require('@/assets/user.jpg')} alt="" class="w-[15vw] h-[15vw] rounded-[50%]"/> }
                     {/* mingcute:qrcode-line */}
                     {
                         item1.content=="icon" && 
                         <Icon icon="mingcute:qrcode-line"  class="text-[#ccc] text-[7vw]"/>
                     }
                     {(item1.content!=='img'&& item1.content!=="icon") && item1.content}
                 </div>
             </li>
         ))}
     </ul>
 ))}

</div>
<div class='bg-[#ffffff] pt-[3vw] pl-[4vw] pb-[20vw]'>账号和绑定设置</div>
</div>