<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <router-link v-bind:to="'/TableAppend'" >TableAppend</router-link>
    </ul>
    <TableAppend :pageData="pageData"></TableAppend>
  </div>
</template>

<script>
import TableAppend from './TableAppend'
export default {
  name: 'hello',
  components:{
    TableAppend
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pageData:{
               tableAppend:{
                  // tableColumns:[
                  // { ColumnName: "Vehicleid", Name: "VehicelID" },
                  // { ColumnName: "Brand", Name: "品牌" },
                  // { ColumnName: "Vehicle", Name: "车系" },
                  // { ColumnName: "minPrice", Name: "最低价(万元)" },
                  // { ColumnName: "avgPrice", Name: "均价(万元)" },
                  // { ColumnName: "maxPrice", Name: "最高价(万元)" },
                  // { ColumnName: "VehicleBodyType", Name: "车身类别" }
                  // ],
                  // tableData:[
                  // {VehicleBodyType:"adhufbwv", maxPrice: 32, avgPrice: 25, minPrice : 20, Vehicle : "abc", Brand : "audi", Vehicleid: "text1"},
                  // {VehicleBodyType:"efhwufue", maxPrice: 42, avgPrice: 35, minPrice : 30, Vehicle : "dfg", Brand : "bmw", Vehicleid: "text2"},
                  // {VehicleBodyType:"reuhnvue", maxPrice: 52, avgPrice: 45, minPrice : 40, Vehicle : "reg", Brand : "benz", Vehicleid: "text3"}
                  // ]
               }
    }
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
