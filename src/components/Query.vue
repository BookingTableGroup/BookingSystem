<template>
  <section class="container"> <!-- 最外层容器 -->
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link to="/home">主页</router-link></el-menu-item>
    </el-menu>
    <div>
        <div id= "space"></div>

        <div>
          <div id="curOrder">
          <img id="menu_icon" src="../assets/food.png">
          当前订单
          <img id="menu_icon" src="../assets/food.png">
          </div>
        </div>
        <div id= "space"></div>
    </div>
    <div id="line_query"></div>
    <section class="content-container"><!-- 内容容器 -->
      <div id="container">
        <div id="tableInfo">
          <div id="ellipse_query">
            <img src="../assets/query.png">
          </div>
          <p id="tableTime">用餐时间：{{tableData.time}}</p>
          <p id="tablePhone">联系电话： {{tableData.phone}}</p>
        </div>
        <div id="table_type_query">
          <div id="ellipse_query">
            <img src="../assets/querychair.png">
          </div>
          <div id="tableMem">
            <p id="tableId">桌型：{{tableData.table}} 人桌</p>
          </div>
        </div>
        <div id="table_food_query">
          <div id="ellipse_query">
            <img src="../assets/food.png">
          </div>
          <div id="foodInfo">
            <div class="foodList">
              <el-table :data="tableData.foods">
                <el-table-column property="name" label="菜名" align="center" ></el-table-column>
                <el-table-column property="price" label="价格" align="center" ></el-table-column>
              </el-table>
              <div class="totalPrice">
                总价：{{total}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="line_query_2">
      </div>
      <div id="query_but">
        <el-button  @click="deleteOrder">删除订单</el-button>

      </div>
      <div id="line_query_3"></div>
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

  .foodList {
    margin-left: 150px;
    width: 40%;
    box-shadow: #666 0px 0px 5px;
    border:  3px solid rgb(000, 188, 212);
  }

</style>