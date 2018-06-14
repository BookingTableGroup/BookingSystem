<!--by linzeyun 2018-04-->

<template>
    <div id="homePage" v-show="showHome">
        <!--top information:including the title and userInfo-->
        <div id="topInfo_home">
            <div id="h1_home" v-text="title"></div>
            <div id="user_home" v-show="beforeLogin">
              <p v-text="loginFirst"></p>
            </div>
            <div id="admin_home" v-show="beforeLogin">
                <a></a>
                    <button><img id="adminIcon_home" src="../assets/admin.png" @click="goAdmin"></button>
                <p v-text="admin"></p>
            </div>
        </div>
        <br/>
        <!--show when login success on the top right-->
        <div id="userInfo_home" v-show="afterLogin">
            <p v-text="phone"></p>
            <img src="../assets/user.png">
        </div>
        <div id="line_home"></div>
        <!--show pictures gallery about the restaurant dynamically-->
        <img src="../assets/left.png" id="left_home" v-on:click="moveLeft" v-bind:onmouseover ="clearAuto"
             v-bind:onmouseout="slideAuto">
        <ul id="photo-list_home" >
            <li v-for="(v,index) in items" :key="index">
                <img v-bind:src="items[(cur + index) % 8].src" class="pic_home">
            </li>
        </ul>
        <img src="../assets/right.png" id="right_home" v-on:click="moveRight" v-bind:onmouseover="clearAuto"
             v-bind:onmouseout="slideAuto">
        <div id="line_home"></div>
        <br/>
        <!--choose things to do -->
        <div id="menu_home">
            <div class="selection_home">
                <div class="ellipse_home">
                    <img src="../assets/query.png">
                </div>
                <button v-text="query" id="btn_home" @click="goQuery"></button>
            </div>
            
            <div class="selection_home">
                <div class="ellipse_home">
                    <img src="../assets/table.png">
                </div>
                <button v-text="bookTable" id="btn_home" @click="goBook"></button>
            </div>
            <div class="selection_home">
                <div class="ellipse_home">
                    <img src="../assets/food.png">
                </div>
                <button v-text="bookFood" id="btn_home" @click="goFood"></button>
            </div>
        </div>
        <br/>
        <!--bottom information-->
        <div id="homeBottom">
            <div class="homeBottomInfo">
                <img src="../assets/time.png">
                <p v-text="time" class="bottomInfo_home"></p>
            </div>
            <div class="homeBottomInfo">
                <img src="../assets/user.png">
                <p v-text="manager" class="bottomInfo_home"></p>
            </div>
            <div class="homeBottomInfo">
                <img src="../assets/phone.png">
                <p v-text="tel" class="bottomInfo_home"></p>
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
      },
      goQuery: function () {
        this.$router.push('/query')
      },
      goBook: function () {
        this.$router.push('/book')
      },
      goFood: function () {
        this.$router.push('/food')
      },
      goAdmin: function () {
        this.$router.push('/admin')
      }
    },
    mounted: function () {
      this.slideAuto()
    }
  }
</script>

<style>
    #topInfo_home {
        background-color: rgb(000, 188, 212);
        height:130px;
        box-shadow: #666 0px 0px 5px
    }
    #h1_home {
        color:white;
        font-size:400%;
        text-align: left;
        padding-top:3%;
        padding-left:2%;
        width:80%;
        height:80%;
    }
    #user_home {
        margin-left:50%;
        width: 40%;
        margin-top:-95px;
    }

    #user_home p {
        width: 80px;
        text-align:right;
        margin-top:1%;
        margin-left: 75%;
        float: left;
        color: white;
        font-size: 16px;
    }
    .userIcon_home {
        width:7%;
        height:7%;
        margin-bottom : -9px;
    }
    input {
        width: 45%;
        height:32px;
        font-size: 17px;
    }
    #admin_home {
        width: 15%;
        margin-left:85%;
    }

    #adminIcon_home {
        height:45%;
        width:45%;
        margin-top:-40px;
    }

    #admin_home p {
        color:white;
        margin-top: -5px;
        padding-left: 18px;
        font-size:100%;
    }
    #userInfo_home {
        height: 120px;
        margin-left: 89%;
        margin-top: -120px;
    }
    #userInfo_home p {
        float: left;
        width: 78%;
        top: 14px;
        font-size: 20px;
        color:#FAD59D;
    }
    #userInfo_home img {
        width: 20%;
        height: 20%;
        top: -150px;
    }
    /*photo-list*/
    #line_home {
        margin-top:0.5%;
        width:100%;
        height:1%;
        border:solid 2px rgb(000, 188, 212);
        background:rgb(000, 188, 212);
    }
    #photo-list_home {
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
    #left_home,#right_home {
        padding-top: 50px;
        width: 40px;
        height:90px;
        
    }
    #left_home {
        float: left;
        padding-left:2px;
    }
    #right_home {
        margin-top: -155px;
        float: right;
    }
    .pic_home {
        margin-top:2px;
        width: 80%;
        height: 153px;
        float: left;
        overflow: hidden;
        display: inline-block;
        box-shadow: #666 0px 0px 10px;
    }

    #menu_home {
        height: 300px;
        box-shadow: #666 0px 0px 10px;
    }
    #homePage #homeBottom {
      height: 90px;
      background-color: rgb(000, 188, 212);
    }
    .homeBottomInfo {
        float:left;
        width:33.3%;
    }
    .selection_home {
        margin-top:3%;
        margin-left:7%;
        height:20%;
        width: 25%;
        float: left;
    }
    .ellipse_home {
        width: 80%;
        height: 250%;
        margin-top: 0%;
        margin-left: 11%;
        margin-bottom: 16px;
        border: 4px solid rgb(000, 188, 212);
        border-radius: 50%;

    }
    .ellipse_home img {
        width: 80%;
        margin-left: 4%;
        margin-top:16px;
        height:80%;
        vertical-align: center;
    }
    #menu__home {
        background-color:rgb(000, 188, 212);
        color:white;
        border-radius: 10px;
        width: 70%;
        height:35px;
        font-size:18px;
        margin-left:10%;
    }
    #btn_home {
        background-color:rgb(000, 188, 212);
        color:white;
        border-radius: 10px;
        width: 100%;
        height:55%;
        font-size:18px;
        margin-left:0%;
    }
    #homeBottom .homeBottomInfo img {
      width: 40px;
      height: 40px;
    }
    .bottomInfo_home {
      color:white;
      text-align:center;
      padding-top:5px;
    }
</style>
