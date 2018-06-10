<template>
  <div id="container">
    <div id="sidebar">
      <button type="button" class="select">精选套餐</button>
      <button type="button" class="select">推荐菜式</button>
      <button type="button" class="select">本店招牌</button>
      <button type="button" class="select">饭后甜品</button>
      <button type="button" class="select">冷热饮品</button>
    </div>
    <div id="dishes">
      <div class="dish" v-for="item in items" v-bind:key="item.foodId">
        <img class="picture" src="../../static/chicken.jpg"/>
        <img class="star" src="../../static/staricon.png"/>
        <span class="price">¥ {{item.price}}</span>
        <div class="iteminfo">
          <input type="checkbox" class="check" :checked=item.isChosen>
          <span class="name">{{item.name}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [{foodId: 1, price: 50, isChosen: true, name: '炸鸡块块'},
        {foodId: 2, price: 100, isChosen: false, name: '香肠鸡腿'},
        {foodId: 3, price: 200, isChosen: false, name: '炸鸡汉堡'},
        {foodId: 4, price: 400, isChosen: true, name: '非常好吃'},
        {foodId: 5, price: 400, isChosen: true, name: '非常好吃'}]
    }
  }
}
</script>

<style>

#container {
  height: 400px;
  position: relative;
}

#sidebar {
  float: left;
  height: 400px;
  width: 20%;
}

#dishes {
  float: right;
  width: 80%;
  height: 400px;
  position: relative;
}

.select {
  width: 99%;
  height: 50px;
  line-height: 41px;
  border-radius: 9px;
  background-color: rgba(217, 150, 72, 1);
  color: rgba(120, 47, 6, 1);
  font-size: 28px;
  text-align: center;
  font-family: "Microsoft YaHei";
  border: 5px solid rgba(255, 255, 255, 1);
  position: relative;
  outline: none;
}
.name, .check, .star, .price {
  float: right;
  position: relative;
}

.check {
  width: 10%;
  height: 48%;
  background: none;
  border: none;
  position: relative;
  top: 25%;
  outline: none;
}

.picture {
  width: 50%;
  height: 60%;
  position: relative;
}

.star {
  right: 3%;
  top: 15%;
  width: 8%;
  height: 15%;
  background: none;
  border: none;
  position: relative;
}

.dish {
  width: 22%;
  height: 30%;
  line-height: 20px;
  text-align: left;
  float: left;
  border: 1px solid rgba(187, 187, 187, 1);
  position: relative;
  margin-left: 1.4%;
  margin-right: 1.4%;
  margin-top: 0.5%;
  margin-bottom: 0.5%;
}

.iteminfo {
  width: 98%;
  height: 34%;
  float: center;
  color: rgba(16, 16, 16, 1);
  border: 1px solid rgba(187, 187, 187, 1);
  position: relative;
}

.name {
  font-size: 120%;
  font-family: Microsoft Yahei;
  position: relative;
  border: none;
  right: 50%;
  top: 20%;
}

.price {
  width: 18%;
  height: 15%;
  color: rgba(229, 28, 35, 1);
  font-size: 100%;
  font-family: Roboto;
  align-content: center;
  border: none;
  margin-top: 15%;
  margin-bottom: 6%;
  margin-right: 5%;
}

</style>
