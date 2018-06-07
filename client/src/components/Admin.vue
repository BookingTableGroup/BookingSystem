<!--by Mingyf 2018-05-->
<template>
<div id="admin" v-show="showAdmin">
  <router-view></router-view>
  <h1 v-html="title"></h1>
  <div class = "line"> </div>
  <div id = "tablebox">
    <div class="leftbar">
      <div id = "homepageicon">
        <img id="adminIcon" src="../assets/homepage.png"  @click="navigateTo({name: 'register'})">
      </div>
      <div id = "adminicon">
        <img src="../assets/admin1.png">
        <div v-text = "admininfo"></div>
      </div>
      <div id = "alerticon">
        <img id = "img1" src="../assets/9.png">
        <span> 一旦删除无法恢复</span>
      </div>
    </div>
    <div class = "order">
      <span v-text = "orderList"> </span>
      <div class = "tablescroll">
        <table  class="table">
          <thead>
            <tr>
              <th class="text-center" v-text = "time"></th>
              <th class="text-center" v-text = "tabletyp"></th>
              <th class="text-center" v-text = "tablenum"></th>
              <th class="text-center" v-text = "phonenum"></th>
              <th class="text-center" v-text = "foodmenu"></th>
              <th class="text-center" v-text = "operat"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ orderitem.time }}</td>
              <td>{{ orderitem.tabletype }}</td>
              <td>{{ orderitem.tablenumber }}</td>
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
      tablenum: '桌号',
      phonenum: '联系人',
      foodmenu: '预订的菜单',
      operat: '操作',
      showAdmin: true,
      time1: '2018-01-31/10:30-13:00',
      orderitem: [
        {
          time: '2018-01-31/10:30-13:00',
          tabletype: '8人',
          tablenumber: 'A0801',
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

    .line {
        margin-top:0.5%;
        width:100%;
        height:1%;
        border:solid 1px #CC8B3F;
        background:#CC8B3F;
    }

    h1 {
        width:100%;
        height:70px;
        margin-left:auto;
        margin-right:auto;
        margin-top:50px;
        text-align:left;
        padding-left:3%;
        padding-top:1%;
        background: #6E3807;
        font-size:33px;
    }

    #tablebox {
        width:100%;
        height:500px;
        margin:auto;
        margin-top:5px;
        border: solid 2px 2px 2px 2px black;
    }

    .leftbar {
        float:left;
        width:12%;
        height:100%;
        background: #6E3807;
    }

    #homepageicon {
        float:left;
        width:35px;
        height:30px;
        margin-top:2%;
        margin-left:2%;
    }

    #adminIcon {
        width:100%;
        height:95%;
    }

    #homepageicon:hover {
        cursor:pointer
    }

    #adminicon {
        width:70%;
        margin-top:60%;
        margin-left:25%;
        font-size:15px;
    }

    #adminicon img {
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
        border: 0px solid;
    }

    .table {
        margin-left:0px;
        width:100%;
        border-collapse:collapse;
    }

    .text-center {
        height:30px;
        border: solid 2px gray;
        background: #EDC282;
    }

    td {
        height: 20px;
        border:solid 1.5px gray;
        background: white;
    }

    tr img {
        cursor:pointer;
    }
</style>
