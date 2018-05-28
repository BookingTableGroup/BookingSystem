<template>
  <nav id="navi">
    <div id="nav_1">
      <img id="nav_1Icon" src="../../assets/icon/homeIcon.png"/>
      <button class="navFont">首页</button>
    </div>
    <div id="nav_2">
      <img id="nav_2Icon" src="../../assets/icon/queryIcon.png"/>
      <button class="navFont">查看订单</button>
    </div>
    <div id="nav_3">
      <img id="nav_3Icon" src="../../assets/icon/tableIcon.png"/>
      <button class="navFont">预定餐桌</button>
    </div>
    <div id="nav_4">
      <img id="nav_4Icon" src="../../assets/icon/foodIcon.png"/>
      <button class="navFont">预订菜品</button>
    </div>
  </nav>
</template>

<style>
  #navi {
    left: 0px;
    height: 60px;
    line-height: 20px;
    background-color: rgba(138, 69, 6, 1);
    border: 1px solid rgba(187, 187, 187, 1);
  }

  #nav_1, #nav_2, #nav_3, #nav_4 {
    float: left;
    width: 25%;
  }

  #nav_1Icon, #nav_2Icon, #nav_3Icon, #nav_4Icon {
    margin-top: 8px;
    height: 40px;
    width: 40px;
    color: antiquewhite;
  }

  .navFont {
    font-size: 20px;
    font-family: Roboto;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(138, 69, 6, 1);
    border: none;
  }

</style>
