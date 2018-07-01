<template>
  <section class="container"> <!-- 最外层容器 -->
    <section>
        <div id= "space"></div>
    </section>
    <section class="content-container"><!-- 内容容器 -->
      <div id="container">
        <div id="menu">
          <button id="curOrder">当前订单</button>
        </div>
        <div id="tableInfo">
          <div id="foodTitle">餐桌信息</div>
          <div id="tableMem">
            <img id="table8" src="../assets/8.png">
            <p id="tableId">{{tableData.table}} 人桌</p>
            <p id="tableTime">用餐时间：{{tableData.time}}</p>
          </div>
          <p id="tablePhone">联系电话： {{tableData.phone}}</p>
        </div>
        <div id="foodInfo">
          <div class="foodList">
            <el-table :data="tableData.foods">
              <el-table-column
                v-for="{ prop, label } in colConfigs"
                :key="prop"
                :prop="prop"
                :label="label">
              </el-table-column>
            </el-table>
            <div class="totalPrice">
              总价：{{total}}
            </div>
          </div>
        </div>
      </div>
    </section>
    <br/>
  </section>
</template>

<script>
import item from './item.vue'
export default {
  components: {
    item
  },
  data () {
    this.colConfigs = [
      { prop: 'price', label: '价格' },
      { prop: 'name', label: '菜名' }
    ]
    return {
      total: 0,
      tableData: [],
      loading: false
    }
  },
  methods: {
    getAll: function () {
      this.loading = true;
      let phone = localStorage.getItem('user');
      this.$http.post("/api/getFood",{phone}).then(
        function(response) {
          this.loading = false;
          this.tableData = response.body;
          this.computeTotal();
        },
        function() {
          this.loading = false;
          console.log("error");
        }
      );
    },
    computeTotal: function () {
       for (let index = 0; index <  this.tableData[0].foods.length; index++) {
        this.total = this.tableData[0].foods[index].price + this.total;
      }
    }
  },
    //页面初始化进来查询数据
  mounted: function() {
    this.getAll();
  }
}
</script>

<style>
  #space {
    float: right;
    width: 80%;
    /* border: 2px solid rgb(110, 86, 7); */
  }
   *{
    margin: 0;
    padding: 0;
  }



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

  .foodList {
    margin-left: 150px;
    width: 40%;
    box-shadow: #666 0px 0px 5px;
    border:  3px solid rgb(000, 188, 212);
  }

</style>