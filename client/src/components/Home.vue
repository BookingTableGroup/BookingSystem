<!--by linzeyun 2018-04-->

<template>
    <div id="homePage" v-show="showHome">
        <!--top information:including the title and userInfo-->
        <div id="topInfo">
            <h1 v-text="title"></h1>
            <div id="user" v-show="beforeLogin">
              <p v-text="loginFirst"></p>
            </div>
            <div id="admin" v-show="beforeLogin">
                <a></a>
                    <img id="adminIcon" src="../assets/admin.png">
                <p v-text="admin"></p>
            </div>
        </div>
        <!--show when login success on the top right-->
        <div id="userInfo" v-show="afterLogin">
            <p v-text="phone"></p>
            <img src="../assets/user.png">
        </div>
        <hr />
        <!--show pictures gallery about the restaurant dynamically-->
        <img src="../assets/left.png" id="left" v-on:click="moveLeft" v-bind:onmouseover ="clearAuto"
             v-bind:onmouseout="slideAuto">
        <ul id="photo-list" >
            <li v-for="(v,index) in items" :key="index">
                <img v-bind:src="items[(cur + index) % 8].src" class="pic">
            </li>
        </ul>
        <img src="../assets/right.png" id="right" v-on:click="moveRight" v-bind:onmouseover="clearAuto"
             v-bind:onmouseout="slideAuto">
        <hr />

        <!--choose things to do -->
        <div id="menu">
            <div class="selection">
                <div class="ellipse">
                    <img src="../assets/query.png">
                </div>
                <button v-text="query" class="btn"></button>
            </div>
            <div class="selection">
                <div class="ellipse">
                    <img src="../assets/table.png">
                </div>
                <button v-text="bookTable" class="btn"></button>
            </div>
            <div class="selection">
                <div class="ellipse">
                    <img src="../assets/food.png">
                </div>
                <button v-text="bookFood" class="btn"></button>
            </div>
        </div>
        <!--bottom information-->
        <div id="homeBottom">
            <div class="homeBottomInfo">
                <img src="../assets/time.png">
                <p v-text="time" class="bottomInfo"></p>
            </div>
            <div class="homeBottomInfo">
                <img src="../assets/user.png">
                <p v-text="manager" class="bottomInfo"></p>
            </div>
            <div class="homeBottomInfo">
                <img src="../assets/phone.png">
                <p v-text="tel" class="bottomInfo"></p>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data: function () {
      return {
        showHome: true,
        title: '餐厅预订系统',
        admin: '管理员',
        login: '登录',
        loginFirst: '请先登录',
        register: '注册',
        time: '开放时间：8:00-22:00',
        manager: '经理：XXX',
        tel: '客服：1234567890',
        query: '查看订单',
        bookTable: '预订餐桌',
        bookFood: '预订菜品',
        phone: '',
        password: '',
        errorPhone: '',
        errorPassword: '',
        beforeLogin: true,
        afterLogin: false,
        cur: 0,
        items: [
          {
            src: '../../static/newtable.jpg'
          },
          {
            src: '../../static/beef.jpg'
          },
          {
            src: '../../static/10.png'
          },
          {
            src: '../../static/drink.jpg'
          },
          {
            src: '../../static/sweet.jpg'
          },
          {
            src: '../../static/soup.jpg'
          },
          {
            src: '../../static/16.png'
          },
          {
            src: '../../static/chicken.jpg'
          }
        ]
      }
    },
    components: {},
    methods: {
      moveLeft: function () {
        this.cur = (this.cur + 1) % 8
      },
      clearAuto: function () {
        clearInterval(this.timer)
      },
      // 注意这里的this.moveLeft不要写成this.moveLeft(),因为需要getter和setter函数
      slideAuto: function () {
        this.timer = setInterval(this.moveLeft, 2000)
      },
      moveRight: function () {
        this.cur = (this.cur + 7) % 8
      }
    },
    mounted: function () {
      this.slideAuto()
    }
  }
</script>

<style>
    #topInfo {
        background-color: rgba(110,56,7,1);
        height:130px;
    }
    h1 {
        color:#EDC282;
        font-size:55px;
        padding-top:20px;
        padding-left: 100px;
        width:50%;
    }
    #user {
        margin-left:50%;
        width: 40%;
        margin-top:-95px;
    }
    #user p {
        width: 80px;
        text-align:right;
        margin-top:10px;
        margin-left: 85%;
        float: left;
        color: white;
        font-size: 16px;
    }
    .userIcon {
        width:7%;
        height:7%;
        margin-bottom : -9px;
    }
    input {
        width: 45%;
        height:32px;
        font-size: 17px;
    }
    #admin {
        width: 9%;
        margin-left:91%;
        margin-top: -115px;
    }

    #adminIcon {
        height: 75px;
        width:80px;
    }
    #admin p {
        color:#FAD59D;
        margin-top: -5px;
        padding-left: 18px;
        font-size:20px;
    }
    #userInfo {
        height: 120px;
        margin-left: 89%;
        margin-top: -120px;
    }
    #userInfo p {
        float: left;
        width: 78%;
        top: 14px;
        font-size: 20px;
        color:#FAD59D;
    }
    #userInfo img {
        width: 20%;
        height: 20%;
        top: -150px;
    }
    /*photo-list*/
    hr {
        margin-top:3px;
        border: 2px solid #F5BC67;
    }

    #photo-list {
        margin-left: 58px;
        margin-right: 58px;
        height: 155px;
        overflow:hidden;
    }
    ul {
        display: block;
    }
    li {
        display: inline-block;
        list-style: none;
        width: 20%;
    }
    #left,#right {
        padding-top: 50px;
        width: 58px;
        height:80px;
    }
    #left {
        float: left;
        padding-left:2px;
    }
    #right {
        margin-top: -155px;
        float: right;
    }
    .pic {
        margin-top:2px;
        width: 100%;
        height: 153px;
        float: left;
        overflow: hidden;
        display: inline-block;
    }
    /*menu*/
    #menu {
        height: 260px;
    }
    #homePage #homeBottom {
      height: 90px;
      background-color: rgba(110,56,7,1);
    }
    .homeBottomInfo {
        float:left;
        width:33.3%;
    }
    .selection {
        width: 32%;
        float: left;
    }
    .ellipse {
        width: 75%;
        height: 180px;
        margin-top: 10px;
        margin-left: 14%;
        margin-bottom: 16px;
        border: 3px solid #CC8B3F;
        border-radius: 50%;
    }
    .ellipse img {
        width: 60%;
        margin-left: 9%;
        height:100%;
        vertical-align: center;
    }
    #menu .btn {
        background-color:#EDC282;
        color:#6E3807;
        border-radius: 10px;
        width: 70%;
        height:35px;
        font-size:18px;
        margin-left:10%;
    }
    #homeBottom .homeBottomInfo img {
      width: 40px;
      height: 40px;
    }
    .bottomInfo {
      color:#FCEACF;
      text-align:center;
      padding-top:5px;
    }
</style>
