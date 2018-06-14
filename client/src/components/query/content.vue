<template>
  <div id="container">
    <div id="menu">
      <button id="curOrder">当前订单</button>
      <button id="hisOrder">历史订单</button>
    </div>
    <div id="tableInfo">
      <a id="deleteTable">餐桌信息<span><img id="deleteIcon" src="../../assets/icon/deleteIcon.png" /></span></a>
      <div id="tableMem">
        <img id="table8" src="../../assets/8.png">
        <p id="tableId">{{tableId}} 人桌</p>
        <p id="tableTime">用餐时间：{{tableTime}}</p>
      </div>
      <p id="tablePhone">联系电话： {{userId}}</p>
    </div>
    <div id="foodInfo">
      <div id="menu">
        <div v-for="item in items" :key="item.id">
          <item :item="item"></item>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import item from './item.vue'
export default {
  components: {
    item
  },
  data () {
    return {
      tableId: '8',
      tableTime: 'xxxx:xx:xx:xx',
      userId: '12345678901',
      items: [
        {name: '糖醋排骨', price: 50},
        {name: '红烧肉', price: 50},
        {name: '麻婆豆腐', price: 20},
        {name: '鱼香肉丝', price: 30},
        {name: '小鸡炖蘑菇', price: 60}
      ]
    }
  }
}
</script>

<style>
  #container {
    height: 400px;
    /* border: 1px solid blue; */
  }
  #menu {
    margin-left:-35px;
    height: 400px;
    width: 20%;
  }
  #curOrder {
    float: left;
    height: 40px;
    width: 60%;
    background-color: rgb(000, 188, 212);
    color: white;
    font-size: 25px;
    font-family: Roboto;
    box-shadow: #666 0px 0px 5px;
    margin-top: 40px;
  }
  #hisOrder {
    float: left;
    height: 40px;
    width: 60%;
    background-color: rgb(000, 188, 212);
    color: white;
    font-size: 25px;
    font-family: Roboto;
    box-shadow: #666 0px 0px 5px;
    margin-top: 40px;
  }
  #tableInfo {
    margin-top: 40px;
    background-color: white;
    float: left;
    height: 400px;
    width: 40%;
    box-shadow: #666 0px 0px 5px;
  }
  #deleteTable, #foodTitle{
    margin-top: 40px;
    float: left;
    width: 100%;
    height: 50px;
    color: black;
    font-size: 36px;
    font-family: Roboto;
  }
  #deleteIcon{
    width: 30px;
  }
  #tableMem {
    margin-top: 20px;
    float: left;
    width: 100%;
    height: 150px;
    border: 3px solid white;
    box-shadow: #666 0px 0px 5px;
    color: rgba(102, 93, 102, 1);
    font-family: Roboto;
  }
  #table8{
    float: left;
    height: 145px;
    width: 240px;
  }
  #tableId{
    color:black;
    margin-top: 25px;
    font-size: 50px;
  }
  #tableTime {
    height: 100px;
    color:white;
  }
  #tablePhone {
    margin-top: 100px;
    margin-left: 60%;

    color:black;
    font-size: 20px;
  }
  #foodTitle {
    height: 30px;
    color:black;
    margin-left:-75px;
    font-size:20px;
    font-family: Roboto;
  }
  #foodInfo {
    float:left;
    margin-top:-390px;
    margin-left:60%;
    height: 400px;
    width: 40%;
    color:red;
  }
  #menu {
    float: left;
    margin-left:25px;
    height: 250px;

  }
</style>