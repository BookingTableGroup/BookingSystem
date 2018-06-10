<template>
  <div id="topInfo">
    <h1 style="color:white">{{title}}</h1>
    <div id="user">
      <p id = "userId">{{userId}}</p>
      <img id="userIcon" src="../../assets/icon/userIcon.png"/>
    </div>
    <div id="notice">
      <p id="noticeContent">☺{{notice}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: '我的订单',
      userId: 12345678901,
      notice: ' 请及时就餐，祝您就餐愉快！'
    }
  }
}
</script>

<style>

  #topInfo {
    height: 120px;
    width:100%;
    background-color: rgb(000, 188, 212);
    box-shadow: #666 0px 0px 5px;
  }

  h1 {
    width: 300px;
    height: 80px;
    line-height: 104px;
    color: white;
    font-size: 40px;
    font-family: Roboto;
  }

  #user {
    float: right;
    margin-top: -80px;
  }

  #userId {
    float: left;
    margin-left: 200px;
    font-size: 20px;
    color:white;
  }

  #userIcon {
    margin-top: -4px;
    height: 22px;
    padding-top:5px;
  }

  #notice {
    float: left;
    color: white;
    margin-top: 10px;
    margin-left: 500px;
  }

  #horn {
    float: left;
    width: 20px;
    height: 20px;
    color: red;
  }

  #noticeContent {
    float: left;
    margin-left: 20px;
  }

</style>
