<template>
  <div id="app">
    <router-view 
    :data="gridData"
    :columns="gridColumns"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      gridColumns:[
        { ColumnName: "Vehicleid", Name: "VehicelID" },
        { ColumnName: "Brand", Name: "品牌" },
        { ColumnName: "Vehicle", Name: "车系" },
        { ColumnName: "minPrice", Name: "最低价(万元)" },
        { ColumnName: "avgPrice", Name: "均价(万元)" },
        { ColumnName: "maxPrice", Name: "最高价(万元)" },
        { ColumnName: "VehicleBodyType", Name: "车身类别" }
        ],
        gridData:[
        {VehicleBodyType:"adhufbwv", maxPrice: 32, avgPrice: 25, minPrice : 20, Vehicle : "abc", Brand : "audi", Vehicleid: "text1"},
        {VehicleBodyType:"efhwufue", maxPrice: 42, avgPrice: 35, minPrice : 30, Vehicle : "dfg", Brand : "bmw", Vehicleid: "text2"},
        {VehicleBodyType:"reuhnvue", maxPrice: 52, avgPrice: 45, minPrice : 40, Vehicle : "reg", Brand : "benz", Vehicleid: "text3"}
        ]
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
