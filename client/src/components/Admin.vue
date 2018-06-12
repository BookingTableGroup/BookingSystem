<!--by Mingyf 2018-05-->
<template>
<div id="admin" v-show="showAdmin">
  <div id="h1_admin" v-html="title"></div>
  <div class = "line"> </div>
  <div id = "tablebox">
    <div class="leftbar">
      <div id = "homepageicon">
        <img id="adminIcon_admin" src="../assets/14.png"  @click="navigateTo({name: 'register'})">
      </div>
      <div id = "adminicon">
        <img src="../assets/12.png">
        <br/>
        <div id="word" v-text = "admininfo"></div>
      </div>
    </div>
    <div class = "order">
      <span v-text = "orderList"> </span>
      <div class = "tablescroll">
        <table  class="table">
          <thead>
            <tr>
              <th class="text-center" style="color:white" v-text = "time"></th>
              <th class="text-center" style="color:white" v-text = "tabletyp"></th>
              <th class="text-center" style="color:white" v-text = "phonenum"></th>
              <th class="text-center" style="color:white" v-text = "foodmenu"></th>
              <th class="text-center" style="color:white" v-text = "operat"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ orderitem.time }}</td>
              <td>{{ orderitem.tabletype }}</td>
              <td>{{ orderitem.phonenumber  }}</td>
              <td><img src="../assets/food1.png" @click="seeMenu($index)"></td>
              <td><img src="../assets/3.png" @click="removeOrder($index)"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div id = "bottombar"> </div>
</div>
</template>

<script>
export default {
  components: {},
  name: 'admin',
  data: function () {
    return {
      title: '所有顾客订单信息',
      admininfo: '管理员：xxx',
      orderList: '订单列表',
      time: '就餐时间',
      tabletyp: '桌型',
      phonenum: '联系人',
      foodmenu: '预订的菜单',
      operat: '操作',
      showAdmin: true,
      time1: '10:30-13:00',
      orderitem: [
        {
          time: '10:30-13:00',
          tabletype: '8人',
          phonenumber: '15521039989',
          operation: 'delete'
        }
      ]
    }
  },
  props: [
    'fromorderpage'
  ],
  methods: {
    removeOrder: function (index) {
      this.orderlist.splice(index, 1)
      //  删除之后应该有一个对顾客的通知，告诉顾客订单信息已经被取消了，
      //  同时还要删除数据库里面关于顾客的订单信息
    },

    navigateTo (route) {
      this.$router.push(route)
    },

    seeMenu: function ($index) {

    }
  }
}
</script>

<style>
    #space {
      margin-top:10px;
      float: right;
      height: 20px;
      width: 80%;
      /* border: 2px solid rgb(110, 86, 7); */
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin-left:auto;
        margin-right:auto;
        width:100%;
        height:100%;
        padding:0px;
        margin-top:0px;
    }
    #word {
      margin-right:20%;
      /*color: rgb(110, 86, 7);*/
      font-size: 20px;
      font-family: Roboto;
      color:white
    }

    #word2 {
      float: left;
      /*color: rgb(110, 86, 7);*/
      font-size: 25px;
      font-family: Roboto;
      color:white
    }

    .line {
        margin-top:0.5%;
        width:100%;
        height:1%;
        border:solid 1px rgb(000, 188, 212);
        background:rgb(000, 188, 212);
    }

    #h1_admin {
        width:100%;
        height:70px;
        margin-top:50px;
        text-align:left;
        padding-top:1%;
        background: white;
        font-size:30px;
        /*box-shadow: #666 0px 0px 10px;*/
    }
 
    #tablebox {
        width:100%;
        height:500px;
        margin:auto;
        margin-top:5px;
        border: solid 2px 2px 2px 2px rgb(000, 188, 212);
    }

    .leftbar {
        float:left;
        width:12%;
        height:100%;
        background: rgb(000, 188, 212);
        box-shadow: #666 0px 0px 4px;
    }

    #homepageicon {
        float:left;
        width:35px;
        height:30px;
        margin-top:2%;
        margin-left:2%;
    }

    #adminIcon_admin {
        margin-right:2%;
        /*float:left;*/
        width:100%;
        height:95%;
    }

    #homepageicon:hover {
        cursor:pointer
    }

    #adminicon {
        width:70%;
        margin-top:60%;
        margin-left:23%;
        font-size:15px;
    }

    #adminicon img {
        margin-top:0%;
        margin-right:40px;
        width:80%;
    }

    #alerticon {
        width:45%;
        margin-top:15%;
        margin-left:auto;
        margin-right:auto;
    }

    #alerticon img {
        float:left;
        width:90%;
    }

    #alerticon span {
        float:right;
        font-size:13px;
    }

     .order {
        float:right;
        margin-top:1%;
        width:88%;
        height:98%;
        text-align:center;
    }

    .order span {
        font-size:25px;
        float:left;
        margin-left:2%;
        margin-top:-1.5%;
    }

    .tablescroll {
        margin-top:2%;
        margin-left:1.5%;;
        width:98%;
        height:90%;
        overflow-y:scroll;
        /*border: 0px solid rgb(000, 188, 212);*/
        
    }

    .table {
        margin-left:0px;
        width:100%;
        border-collapse:collapse;
        box-shadow: #666 0px 0px 10px;
    }

    .text-center {
        height:50px;
        border: solid 4px white;
        background: rgb(000, 188, 212);
    }

    td {
        height: 20px;
        border:solid 1.5px rgb(000, 188, 212);
        background: white;
    }

    tr img {
        cursor:pointer;
    }
</style>
