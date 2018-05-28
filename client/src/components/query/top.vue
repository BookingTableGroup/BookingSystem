<template>
  <div id="topInfo">
    <h1>{{title}}</h1>
    <div id="user">
      <p id = "userId">{{userId}}</p>
      <img id="userIcon" src="../../assets/icon/userIcon.png"/>
    </div>
    <div id="notice">
      <img id="horn" src="../../assets/icon/hornIcon.png"/>
      <p id="noticeContent"> {{notice}}</p>
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
    background-color: rgba(110, 56, 7, 1);
  }

  h1 {
    width: 500px;
    height: 80px;
    line-height: 104px;
    color: rgba(237, 194, 130, 1);
    font-size: 60px;
    text-align: center;
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
    color:#FCEACF;
  }

  #userIcon {
    margin-top: -4px;
    height: 22px;
    padding-top:5px;
  }

  #notice {
    float: left;
    color: antiquewhite;
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
