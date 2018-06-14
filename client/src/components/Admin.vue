<!--by Mingyf 2018-05-->
<template>
<div class="admin" v-show="showAdmin">
  <div class = "admin_h1" v-html="title"></div>
  <div class = "line"> </div>
  <div id = "tablebox">
    <div class="leftbar">
      <div id = "homepageicon" @click="goHome($index)">
        <img id="adminIcon" src="../assets/14.png">
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
              <th class="text-center" style="color:white" v-text = "num"></th>
              <th class="text-center" style="color:white" v-text = "time"></th>
              <th class="text-center" style="color:white" v-text = "tabletyp"></th>
              <th class="text-center" style="color:white" v-text = "phonenum"></th>
              <th class="text-center" style="color:white" v-text = "foodmenu"></th>
              <th class="text-center" style="color:white" v-text = "operat"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="orderitem in orderitems">
              <td>{{orderitem.num}}</td>
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
      admininfo: '管理员：小明',
      orderList: '订单列表',
      num: '编号',
      time: '就餐时间',
      tabletyp: '桌型',
      phonenum: '联系人',
      foodmenu: '预订的菜单',
      operat: '操作',
      showAdmin: true,
      time1: '10:30-13:00',
      data: [],
      orderitems: [
        {
          num: '订单1',
          time: '11:00-14:00',
          tabletype: '8人桌',
          phonenumber: '13321037989',
          operation: 'delete'
        },
        {
          num: '订单2',
          time: '11:00-14:00',
          tabletype: '１0人桌',
          phonenumber: '15521030989',
          operation: 'delete'
        },
        {
          num: '订单3',
          time: '17:00-21:00',
          tabletype: '16人桌',
          phonenumber: '15521039989',
          operation: 'delete'
        },
        {
          num: '订单4',
          time: '17:00-21:00',
          tabletype: '1６人桌',
          phonenumber: '15521035989',
          operation: 'delete'
        }
      ]
    }
  },
  methods: {
    removeOrder: function (index) {
      alert('删除之后无法恢复，确认要删除吗？')
      this.orderitems.splice(index, 1)
    },

    seeMenu: function ($index) {
      this.$router.push('/query')
    },

    goHome: function ($index) {
      this.$router.push('/')
    }
  }

}
</script>

<style>

    .admin {
      margin-top:-3%;
    }

    #word {
      margin-right:20%;
      /*color: rgb(110, 86, 7);*/
      font-size: 20px;
      font-family: Roboto;
      color:white；
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

    .admin_h1 {
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

    #adminIcon {
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
