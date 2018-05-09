<template>
    <div id="alipay" >
        <!-- <AlipayTop>

        </AlipayTop> -->
        <div id="alitop">
             <div id="alitopput">
                  <img id="imgleft" src="../assets/img/sousuo.png" alt=""> 
                <input id="aliinput" type="text" :value='randmsg'> 
                 <img id="imgright" src="../assets/img/huatong.png" alt=""> 
            </div>
             <div>

             </div>
        </div>
        <div id="fourmeau">
             <router-link to="wait">
        <div class="appfootmeau">
           <div class="meauPic">
               <img src="../assets/img/saoyisao.png" alt="">
            </div>
            <div class="footfont">
               扫一扫
            </div>
         </div>
      </router-link>
           <router-link to="/wait">
        <div class="appfootmeau">
           <div class="meauPic">
               <img src="../assets/img/fuqian.png" alt="">
            </div>
            <div class="footfont">
               付钱
            </div>
         </div>
      </router-link>
       <router-link to="/wait">
        <div class="appfootmeau">
           <div class="meauPic">
               <img src="../assets/img/shouqian.png" alt="">
            </div>
            <div class="footfont">
               收钱
            </div>
         </div>
      </router-link>
       <router-link to="/wait">
        <div class="appfootmeau">
           <div class="meauPic">
               <img src="../assets/img/kabao.png" alt="">
            </div>
            <div class="footfont">
               卡包
            </div>
         </div>
      </router-link> 
        </div>
       <div id="fourtext"></div>
    </div>
</template>
<script>
// import AlipayTop from './alipay/AlipayTop.vue'
var randdata = ["共享单车", "基金", "天猫超市", "花呗"];
var randmsg = "搜我";

export default {
  name: "Alipay",
  data() {
    return {
      randmsg: randmsg
    };
  },
  components: {
    // AlipayTop
  }
};
</script>
<style scoped>
#alipay{
    height:100%;
     width:100%;
}
#alitop{
    height: 40px;
    background:  rgb(39, 108, 236);
}
#aliinput{
    margin:5px 0 5px 10px;
    border: 0;
    width: 60%;
    color: aliceblue;
    height: 30px;
     background:  rgb(4, 47, 126);
     padding-left: 35px;
}
#fourmeau{
     background:  rgb(39, 108, 236);
    height: 30%;
    
  display: flex;
  display: -webkit-flex;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e3e1e1;
  
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 7px 0;
 }
   
#fourmeau img{
    height: 14%;
    width:34%;
}
#alitopput{
    display: flex;
}
#imgleft{
    position: absolute;
    left: 17px;;
  height: 4%;
    width:6%;
    top:6px;
}
#imgright{
    position: absolute;
    left: 254px;;
  height: 4%;
    width:6%;
     top:6px;
}
</style>
