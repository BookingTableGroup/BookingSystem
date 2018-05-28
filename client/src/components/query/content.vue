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
      <p id="foodTitle">菜品信息</p>
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
    float: left;
    height: 400px;
    width: 20%;
  }

  #curOrder, #hisOrder {
    height: 40px;
    width: 60%;
    background-color: rgba(237, 194, 130, 1);
    color: rgba(255, 255, 255, 1);
    font-size: 25px;
    font-family: Roboto;
    border: 3px solid rgba(255, 255, 255, 1);
    margin-top: 40px;
  }

  #hisOrder {
    margin-top: 0px;
    background-color: rgba(217, 150, 72, 1);
    color: rgba(110, 56, 7, 1);
  }

  #tableInfo {
    float: left;
    height: 400px;
    width: 40%;
  }

  #deleteTable, #foodTitle{
    margin-top: 40px;
    float: left;
    width: 100%;
    height: 50px;
    color: rgba(16, 16, 16, 1);
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
    border: 3px groove white;
    color: rgba(102, 93, 102, 1);
    font-family: Roboto;

  }

  #table8{
    float: left;
    height: 150px;
    width: 240px;
  }

  #tableId{
    margin-top: 25px;
    font-size: 50px;
  }

  #tablePhone {
    margin-top: 20px;
    float: left;
    height: 100px;
  }

  #foodInfo {
    float: left;
    height: 400px;
    width: 40%;
  }

  #menu {
    float: left;
    height: 300px;
  }

</style>
