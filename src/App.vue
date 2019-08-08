<template>
  <div id="app">
    <router-link v-bind:to="'/'">Home</router-link>
    <router-link v-bind:to="'/TableAppend'" >TableAppend</router-link>
    <router-view :pageData="pageData"></router-view>
    <!-- <TableAppend :tabledata="gridData" :tablecolumns="gridColumns" :settings="settings"></TableAppend> -->
  </div>
</template>

<script>
// import TableAppend from './components/TableAppend'
export default {
  name: 'app',
  // components:{
  //   TableAppend
  // },
  data () {
    return {
             pageData:{
               tableAppend:{
                  tableColumns:[
                  { ColumnName: "Vehicleid", Name: "VehicelID" },
                  { ColumnName: "Brand", Name: "品牌" },
                  { ColumnName: "Vehicle", Name: "车系" },
                  { ColumnName: "minPrice", Name: "最低价(万元)" },
                  { ColumnName: "avgPrice", Name: "均价(万元)" },
                  { ColumnName: "maxPrice", Name: "最高价(万元)" },
                  { ColumnName: "VehicleBodyType", Name: "车身类别" }
                  ],
                  tableData:[
                  {VehicleBodyType:"adhufbwv", maxPrice: 32, avgPrice: 25, minPrice : 20, Vehicle : "abc", Brand : "audi", Vehicleid: "text1"},
                  {VehicleBodyType:"efhwufue", maxPrice: 42, avgPrice: 35, minPrice : 30, Vehicle : "dfg", Brand : "bmw", Vehicleid: "text2"},
                  {VehicleBodyType:"reuhnvue", maxPrice: 52, avgPrice: 45, minPrice : 40, Vehicle : "reg", Brand : "benz", Vehicleid: "text3"}
                  ],
                  settings:{
                      editable: true,
                      save_callback: function(){
                          alert("success!!!");
                      }                    
                  }
               },   
             }             
           }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
