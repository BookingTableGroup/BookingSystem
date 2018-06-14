<template>
  <div id="container">
    <div id="menu">
      <button id="curOrder">当前订单</button>
      <button id="hisOrder">历史订单</button>
    </div>
    <div id="tableInfo">
      <div id="foodTitle">餐桌信息</div>
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
      tableTime: '11:00-14:00',
      userId: '12345678901',
      items: [
        {name: '降龙爪爪', price: 10},
        {name: '香辣鸡腿', price: 10},
        {name: '炸鸡汉堡', price: 20},
        {name: '巨无霸', price: 20},
        {name: '羊肉泡馍', price: 20}
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
    border:  3px solid rgb(000, 188, 212);
  }
  #foodTitle{
    margin-top: 40px;
    float: left;
    width: 100%;
    height: 100px;
    color: black;
    font-size:120px;
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
    /*box-shadow: #666 0px 0px 5px;*/
    color: rgba(102, 93, 102, 1);
    font-family: Roboto;
  }
  #table8{
    float: left;
    height: 145px;
    width: 240px;
    box-shadow: #666 0px 0px 10px;
    /*border:  3px solid rgb(000, 188, 212);*/
  }
  #tableId{
    color:black;
    margin-top: 50px;
    font-size: 35px;
    margin-right: -35px;
  }
  #tableTime {
    float: right;
    margin-top: 33px;
    margin-right: 46%;
    width: 50%;
    color:black;
    font-size: 22px;
    font-family: Roboto;
  }
  #tablePhone {
    float: right;
    margin-top: 30px;
    margin-left: 60%;
    color:black;
    font-size: 20px;
  }
  #foodTitle {
    float: right;
    height: 30px;
    color:black;
    margin-right:-120px;
    font-size:35px;
    font-family: Roboto;
  }
  #foodInfo {
    float:left;
    margin-top:-405px;
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