<template>
  <div id="container">
    <div>
        <top></top>
    </div>
    <div id="time">
       <p id="timeTitle">时间</p>
       <img id="calendarIcon" src="../assets/icon/calendar.png" hspace = "5" />
       <br/><br/><br/>

       <select id = "timeChoose" v-model="selected">
           <option disabled value="">选择时间</option>
           <option>11:00-14:00</option>
           <option>17:00-21:00</option>
       </select>

       <br/><br/><br/><br/><br/>

    </div>

    <div id="table" >
      <p id="tableTitle">餐桌</p>
      <img id="chairIcon" src="../assets/icon/chair.png" hspace = "5" />
      <div id="table1" >
        <img id="circle" src="../assets/18.png" />
        <p id = "peopleNum">8人桌</p>
        <img id="star" src="../assets/2.png" />
        <img id="tableSample" src="../assets/8.png" />
        <input type="radio" id="choose" value="8" v-model="picked">
      </div>

      <div id="table2" >
        <img id="circle" src="../assets/18.png" />
        <p id = "peopleNum">10人桌</p>
        <img id="star" src="../assets/2.png" />
        <img id="tableSample" src="../assets/10.png" />
        <input type="radio" id="choose" value="10" v-model="picked">
      </div>

      <div id="table3" >
        <img id="circle" src="../assets/18.png" />
        <p id = "peopleNum">16人桌</p>
        <img id="star" src="../assets/2.png" />
        <img id="tableSample" src="../assets/16.png" />
        <input type="radio" id="choose" value="16" v-model="picked">
      </div> 
    </div>
    <div id="space"></div>
     <div>
      <br/>
      <button type="button" id = "tableButton1"
      v-on:click="postData"
      >确认订单</button>
      <button type="button" id = "tableButton2">取消订单</button>
     </div>
     <div>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span>picked: {{ picked }}</span>
     </div>
     <div>
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
      <span>selected:{{selected}}</span>
     </div>
  </div>
</template>

<script>
import top from './query/top.vue'
import botto from './public/bottom.vue'

export default {
  componets: {
    top,
    botto
  },
  data () {
    return {
      picked: '',
      selected: ''
    }
  },
  methods: {
    postData: function (event) {
      alert('谢谢！您预订了： ' + this.picked + '人桌☺' + '时间:' + this.selected + '☺')
      this.$http.post('http://localhost:8088/query', {
        'tableTpye': this.picked,
        'tableTime': this.selected
      }, function (data, status, request) {
        console.log(request)
      })
    }
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #container {
    height: 400px;
    /* border: 1px solid blue; */
  }
  #space {
     margin-top:10px;
    float: right;
    height: 20px;
    width: 80%;
    /* border: 2px solid rgb(110, 86, 7); */
  }
  #table {
    margin-top:10px;
    float: right;
    height: 340px;
    width: 80%;
    /* border: 2px solid rgb(110, 86, 7); */
    background-color: white;
    box-shadow: #666 0px 0px 10px;
  }

  #table1 {
    float: left;
    margin-top:10px;
    margin-left:100px;
    height: 250px;
    width: 20%;
    border: 1px solid rgb(110, 86, 7);
    background-color: rgb(252, 252, 252);
    border-radius: 8px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
  }
  #table2 {
    float: left;
    margin-top:10px;
    margin-left:100px;
    height: 250px;
    width: 20%;
    border: 1px solid rgb(110, 86, 7);
    background-color: rgb(252, 252, 252);
    border-radius: 8px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
  }
  #table3 {
    float: left;
    margin-top:10px;
    margin-left:100px;
    height: 250px;
    width: 20%;
    border: 1px solid rgb(110, 86, 7);
    background-color: rgb(252, 252, 252);
    border-radius: 8px;
    -moz-box-shadow: #666 0px 0px 10px;
    box-shadow: #666 0px 0px 10px;
  }
  #time {
    margin-top:10px;
    float: left;
    height: 340px;
    width: 19%;
    border: 1% solid rgb(110, 86, 7);
    background-color: white;
    box-shadow: #666 0px 0px 10px;
  }

  #timeTitle{
    margin-top: 12px;
    float: left;
    width: 40%;
    /*color: rgb(110, 86, 7);*/
    font-size: 30px;
    font-family: Roboto;
  }

  #tableTitle{
    margin-top: 12px;
    float: left;
    width: 11%;
    /*color: rgb(110, 86, 7);*/
    font-size: 30px;
    font-family: Roboto;
  }

  #timeChoose {
    border:0;
    padding:15px;
    font-size:1.2em;
    font-family: Roboto;
    /*color: rgb(110, 86, 7);*/
    border:solid 1px #ccc;
    margin:0 0 20px;
    width:250px;
    -moz-box-shadow: inset 0 0 4px rgba(0,0,0,0.2);
    -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
    box-shadow: inner 0 0 4px rgba(0, 0, 0, 0.2);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
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
    box-shadow: #666 0px 0px 10px;
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
    box-shadow: #666 0px 0px 10px;
  }

  #calendarIcon {
    margin-top: 12px;
    margin-left: 100px;
    width: 15%;
  }

  #chairIcon {
    margin-top: 1px;
    margin-left: 1000px;
    width: 4%;
  }

  #circle {
    float: left;
    margin-left: 10px;
    width: 14%;
  }

  #peopleNum{
    float: left;
    margin-top: 10px;
  }

  #tableSample{
    float: left;
    margin-top: 10px;
    height: 150px;
    width: 100%;
  }
  #choose{
    
    margin-top: 10px;
    height: 30px;
    width: 100%;
  }

  #star{
    float: right;
    margin-left: 30px;
    margin-top: 5px;
    width: 12%;
  }
</style>
