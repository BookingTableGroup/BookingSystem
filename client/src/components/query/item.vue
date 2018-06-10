<template>
  <div id="foodList">
    <p id="itemPrice">¥ {{item.price}}</p>
    <p id="itemName">{{item.name}}</p>
    <img id="deleteIcon" src="../../assets/icon/deleteIcon.png" />
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>

  #foodList{
    margin-left: 100px;
    float: left;
    width: 300px;
    border: 3px groove white;
  }

  #itemName, #itemPrice{
    float: left;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: rgba(102, 93, 102, 1);
    font-size: 20px;
    font-family: Roboto;
    border: 3px solid rgba(255, 255, 255, 1);
  }

  #deleteIcon {
    float: right;
    padding-top: 10px;
    padding-right: 5px;
  }

</style>
