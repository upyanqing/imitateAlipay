<template>
<router-link class="mylist" to="/Wait">
    <div id="mylistcont">
         <div class="mylistimg">
             <img :src="'/static/img/'+listitem.imgname" alt="">
         </div>
         <div class="popur">
            <div class="mylisttext">
               <span>{{listitem.listname}}</span>
            </div>
            <div class="mylisttip"></div>
            <div class="mylistarrow">
                <img src="../../assets/img/arrow.png" alt="">
             </div> 
         </div> 
   
          
         </div>
         
 
</router-link>

 
</template>
<script>
export default {
  name: "Mylist",
  props: {
    listitem: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
a {
  width: 100%;
  height: 4%;
  display: flex;
  justify-content: space-between;
  margin: 0;
  font-size: 1.1em;
}
.popur{
    width: 89%;
    display: flex;
    justify-content: space-between;
     border-bottom: 0.5px solid #d5d5dabe; 
}
 
.mylisttext{
     display: flex;
  flex-direction: column;
  justify-content: center;

    width: 130px;
}
.mylistarrow {
     display: flex;
  flex-direction: column;
  justify-content: center;

    width: 20%;
}
.mylisttip{
    width: 40%;
}
#mylistcont {
  display: flex;
  justify-content: flex-start;
  height: 40px;
}
.mylistimg {
  width: 11%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5 5px;
}
.mylistimg img {
  width: 60%;
  height: 78%;
}
.mylistarrow img {
  position: relative;
  left: 45%;
  width: 18%;
  height: 71%;
}
span{
    width: 100%;
    text-align: start;
}
</style>


