<template>
  <div id="mydiv">
   
      <div id="mytop">
          <div id="mytoptitle">我的</div>
          <router-link to="/Wait" style="color:rgb(245, 244, 233) line-height:20%">设置</router-link>
      </div>
      <div id="mymain">
          <div id="mymaintop">
              <div id="mymaintopleft">
                  <div id="myhead">
                      <img src="../assets/img/panda.png" alt="">
                  </div>
                  <div id="myinformation">
                     <div class="myname">长青</div>
                     <div class="mytel">18155775823</div>
                  </div>
              </div>
              <div id="jiantou">
                  <img src="../assets/img/arrow.png" alt="">
              </div>
          </div>
      <div class="tem" v-if="lists1.length">
          <Mylist
           v-for="listitem in lists1"
           :key= "listitem.id"
           :listitem="listitem"
            />
      </div>
       <div class="tem" v-if="lists2.length">
          <Mylist
           v-for="listitem in lists2"
           :key= "listitem.id"
           :listitem="listitem"
            />
      </div>
       <div class="tem" v-if="lists3.length">
          <Mylist
           v-for="listitem in lists3"
           :key= "listitem.id"
           :listitem="listitem"
            />
      </div>
       <div class="tem" v-if="lists4.length">
          <Mylist
           v-for="listitem in lists4"
           :key= "listitem.id"
           :listitem="listitem"
            />
      </div>
      </div>
  </div>
</template>

<script>
import Mylist from "./my/Mylist.vue";
let nextTodoId = 1;
export default {
  name: "My",
  components: {
    Mylist
  },
  data() {
    return {
      mes: "I from My!",
      imgurl: "../src/assets/img/",
      lists1: [
        {
          id: nextTodoId++,
          imgname: "myhy.png",
          listname: "蚂蚁会员"
        },
        {
          id: nextTodoId++,
          imgname: "ye.png",
          listname: "商家服务"
        }
      ],
      lists2: [
        {
          id: nextTodoId++,
          imgname: "zd.png",
          listname: "账单"
        },
        {
          id: nextTodoId++,
          imgname: "zzc.png",
          listname: "总资产"
        },
        {
          id: nextTodoId++,
          imgname: "ye.png",
          listname: "余额"
        },
        {
          id: nextTodoId++,
          imgname: "yeb.png",
          listname: "余额宝"
        },
        {
          id: nextTodoId++,
          imgname: "ye.png",
          listname: "余利宝"
        },
        {
          id: nextTodoId++,
          imgname: "yhk.png",
          listname: "银行卡"
        }
      ],
      lists3: [
        {
          id: nextTodoId++,
          imgname: "ye.png",
          listname: "蚂蚁财富"
        },
        {
          id: nextTodoId++,
          imgname: "zmxy.png",
          listname: "芝麻信用"
        },
        {
          id: nextTodoId++,
          imgname: "bx.png",
          listname: "保险"
        },
        {
          id: nextTodoId++,
          imgname: "ye.png",
          listname: "网商贷"
        },
        {
          id: nextTodoId++,
          imgname: "hb.png",
          listname: "花呗"
        },
        {
          id: nextTodoId++,
          imgname: "wsyh.png",
          listname: "网商银行"
        }
      ],
      lists4: [
        {
          id: nextTodoId++,
          imgname: "gy.png",
          listname: "公益"
        },
        {
          id: nextTodoId++,
          imgname: "ylb.png",
          listname: "娱乐宝"
        }
      ]
    };
  }
};
</script>

<style scoped>
a {
  width: 14%;
  padding: 0;
  padding: 0 10px;
  text-align: center;
  color: rgb(37, 36, 35);
  line-height: 300%;
}
#mydiv {
  width: 100%;
  height: 100%;
}
#mytop {
  position: fixed;
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: flex-end;
  height: 7%;
  background-color: rgb(39, 108, 236);
  z-index: 1;
}
#mytoptitle {
  width: 72%;
  text-align: center;
  color: white;
  font-size: 1.2em;
  padding: 8px 0;
}
#mymain {
  padding-top: 52px;
  height: 69%;
  overflow: auto;
   padding-bottom: 82px;
}
.tem {
  margin-bottom: 15px;
  border-top: 0.5px solid #d5d5dabe;
  border-bottom: 0.5px solid #d5d5dabe;
  background-color: rgba(255, 255, 255, 0.945);
}
#mymaintop {

  display: flex;
  justify-content: space-between;
  background: rgb(39, 108, 236);
}
#mymaintopleft {
  display: flex;
}
#myinformation {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.myname {
  font-size: 1.1em;
  color: aliceblue;
  padding: 5px;
}
.mytel {
  font-size: 0.9em;
  color: rgb(221, 221, 216);
  padding: 5px;
}
#myhead {
  width: 30%;
}
#myhead img {
  width: 100%;
}
#jiantou {
  width: 13%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#jiantou img {
  position: relative;
  left: 10%;
  width: 55%;
  height: 28%;
}
</style>
