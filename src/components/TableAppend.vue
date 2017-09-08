<template>
  <table class="table table-bordered">
      <thead>
        <tr>
            <th v-for="column in columns" :id="column.ColumnName">
                  {{column.Name}}
            </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data">
          <td v-for="key in keys">
            {{row[key]}}
          </td>
        </tr>
       </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableAppend',
  props:{
        data:Array,
        columns:Array
    },
    computed: {
        keys:function(){
            var result = [];
            this.columns.map(
                function(i){
                    result.push(i.ColumnName);
                }
            );
            return result;
        }
    }
}
</script>