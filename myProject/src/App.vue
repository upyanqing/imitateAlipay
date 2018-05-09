<template>
  <div id="app">   
    <router-view/>
    <div id="appfoot">
      <router-link to="/">
        <div class="appfootmeau">
           <div class="meauPic">
              <img src="./assets/img/alipay.png" /> 
            </div>
            <div class="footfont">
               首页
            </div>
         </div>
      </router-link>
       <router-link to="/Fortune">
        <div class="appfootmeau">
           <div class="meauPic">
              <img src="./assets/img/fortune.png" /> 
            </div>
            <div class="footfont">
               财富
            </div>
         </div>
      </router-link>
       <router-link to="/Praise">
        <div class="appfootmeau">
           <div class="meauPic">
              <img src="./assets/img/praise.png" /> 
            </div>
            <div class="footfont">
               口碑
            </div>
         </div>
      </router-link>
       <router-link to="/Frends">
        <div class="appfootmeau">
           <div class="meauPic">
              <img src="./assets/img/frends.png" /> 
            </div>
            <div class="footfont">
               朋友
            </div>
         </div>
      </router-link>
       <router-link to="/My">
        <div class="appfootmeau">
           <div class="meauPic">
              <img src="./assets/img/my.png" /> 
            </div>
            <div class="footfont">
               我的
            </div>
         </div>
      </router-link>
      </div> 
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
#app{
 width:100%;
      height: 100%;
}
#appfoot {
  position: fixed;
  display: flex;
  display: -webkit-flex;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e3e1e1;
  bottom: 0;
  height: 8%;
  width: 100%; 
  flex-wrap: nowrap;
  justify-content: space-around;
  padding: 7px 0;
  border-top: 1px solid #ebe7e7f5;
  z-index: 1;
   background-color: rgba(255, 255, 255, 0.945);
}
.appfootmeau{
  display: flex;
  flex-direction: column;
  width:100%;
  height: 100%;
}
.appfootmeau img{
  width:50%;
  height:50%;
}
.appinlinetop {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  height: 50%;
  justify-content: space-around;
}
.appinlineblow {
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  height: 50%;
  justify-content: space-around;
}
.spanimg img {
  width: 45%;
  height: 45%;
}
.footfont {
  color: rgba(186, 186, 229, 0.774);
  font-size: 0.9em;
  line-height: 145%;
}
.spanimg {
  height: 100%;
  width: 20%;
}
a{
  text-decoration: none;
}
</style>
