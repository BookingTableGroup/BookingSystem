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
        <img class="picture" src="../assets/dishes/chicken.jpg"/>
        <img class="star" src="../assets/2.png"/>
        <span class="price">¥ {{item.price}}</span>
        <div class="iteminfo">
          <input type="checkbox" class="check" :checked="item.isChosen" v-model="item.isChosen">
          <span class="name">{{item.name}}</span>
        </div>
      </div>
    </div>
    <div>
      <button type="button" id = "tableButton1" v-on:click="postData">确认订单</button>
      <button type="button" id = "tableButton2" v-on:click="reset">重置订单</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Food',
  data () {
    return {
      items: [{foodId: 1, price: 50, isChosen: false, name: '炸鸡块块'},
        {foodId: 2, price: 100, isChosen: false, name: '香肠鸡腿'},
        {foodId: 3, price: 20, isChosen: false, name: '炸鸡汉堡'},
        {foodId: 4, price: 40, isChosen: false, name: '巨无霸'},
        {foodId: 5, price: 60, isChosen: false, name: '羊肉泡馍'},
        {foodId: 6, price: 30, isChosen: false, name: '酱骨架'},
        {foodId: 7, price: 100, isChosen: false, name: '可乐鸡翅'},
        {foodId: 8, price: 30, isChosen: false, name: '白切鸡'},
        {foodId: 9, price: 10, isChosen: false, name: '水煮牛肉'},
        {foodId: 10, price: 10, isChosen: false, name: '鱼香肉丝'},
        {foodId: 11, price: 10, isChosen: false, name: '清蒸鳜鱼'},
        {foodId: 12, price: 5, isChosen: false, name: '夫妻肺片'}]
    }
  },
  methods: {
    postData: function () {
      var foodList = [{foodId: 1, price: 50, isChosen: this.items[0].isChosen, name: '炸鸡块块'},
          {foodId: 2, price: 100, isChosen: this.items[1].isChosen, name: '香肠鸡腿'},
          {foodId: 3, price: 20, isChosen: this.items[2].isChosen, name: '炸鸡汉堡'},
          {foodId: 4, price: 40, isChosen: this.items[3].isChosen, name: '巨无霸'},
          {foodId: 5, price: 60, isChosen: this.items[4].isChosen, name: '羊肉泡馍'},
          {foodId: 6, price: 30, isChosen: this.items[5].isChosen, name: '酱骨架'},
          {foodId: 7, price: 100, isChosen: this.items[6].isChosen, name: '可乐鸡翅'},
          {foodId: 8, price: 30, isChosen: this.items[7].isChosen, name: '白切鸡'},
          {foodId: 9, price: 10, isChosen: this.items[8].isChosen, name: '水煮牛肉'},
          {foodId: 10, price: 20, isChosen: this.items[9].isChosen, name: '鱼香肉丝'},
          {foodId: 11, price: 15, isChosen: this.items[10].isChosen, name: '清蒸鳜鱼'},
          {foodId: 12, price: 55, isChosen: this.items[11].isChosen, name: '夫妻肺片'}]
      console.log(foodList)
      try {
        this.$http.post('http://localhost:8080/#/Food', {
          items: foodList
        }, {
          emulateJSON: true
        }).then(function (res) {
          alert(res.data)
        }, function (res) {
          alert(res.status)
        })
      } catch (error) {
        console.log(error)
      }
      alert('预订菜品成功!')
      this.$router.push('/')
    },
    reset: function () {
      for (var i = 0; i < 12; i++) {
        this.items[i].isChosen = false
      }
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
  background-color: rgb(000, 188, 212);
  color: white;
  font-size: 28px;
  text-align: center;
  font-family: "Microsoft YaHei";
  /*border: 5px solid rgba(255, 255, 255, 1);*/
  position: relative;
  outline: none;
  box-shadow: #666 0px 0px 10px;
}
.check, .star, .price {
  float: right;
  position: relative;
}

.check {
  width: 10%;
  height: 48%;
  background: none;
  border: none;
  position: relative;
  top: 30%;
  outline: none;
  content: "\a0";
  display: inline-block;
  vertical-align: .2em;
  margin-right: .2em;
  border-radius: .2em;
  background-color: silver;
  text-indent: .15em;
  line-height: .65;
}

.picture {
  width: 50%;
  height: 60%;
  position: relative;
}

.star {
  right: 3%;
  top: 15%;
  width: 25px;
  height: 25px;
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
  box-shadow: #666 0px 0px 10px;
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
  float: left;
  font-size: 120%;
  font-family: Microsoft Yahei;
  position: relative;
  border: none;
  top: 30%;
  left: 10%;
}

.price {
  width: 60px;
  height: 20px;
  color: rgba(229, 28, 35, 1);
  font-size: 100%;
  font-family: Roboto;
  align-content: center;
  border: none;
  margin-top: 15%;
  margin-bottom: 6%;
  margin-right: 5%;
}

#tableButton1 {
    background-color:rgb(000, 188, 212);
    border: none;
    color: white;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    margin-left:500px;
    box-shadow: #666 0px 0px 5px;
  }

  #tableButton2 {
    background-color:rgb(000, 188, 212);
    border: none;
    color: white;
    padding: 8px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 12px;
    margin-left:100px;
    box-shadow: #666 0px 0px 5px;
  }

</style>
