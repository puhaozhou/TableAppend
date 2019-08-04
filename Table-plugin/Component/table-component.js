Vue.component('vue-table', {
    props: {
        tabledata:Array,
        tablecolumns:Array
    },
    template: 
    `<table class="table table-bordered">
        <thead>
            <tr>
                <th v-for="column in tablecolumns" :id="column.ColumnName">
                    {{column.Name}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in tabledata">
            <td v-for="key in keys">
                <label>{{row[key]}}</label>
                <span class="glyphicon glyphicon-pencil" @click="label_edit($event)" style="float:right"></span>
                <span class="glyphicon glyphicon-ok" @click="save_edit($event)" style="float:right;display:none"></span>
                <span class="glyphicon glyphicon-remove" @click="cancel_edit($event)" style="float:right;display:none"></span>
            </td>
            </tr>
        </tbody>
    </table>`
    ,
    computed: {
        keys:function(){
            var result = [];
            this.tablecolumns.map(
                function(i){
                    result.push(i.ColumnName);
                }
            );
            return result;
        }
    },
    methods:{
       label_edit(obj){
          obj = obj.currentTarget;
          $(obj).prev().hide();
          var pre_value = $(obj).prev().text();
          var new_input = '<input value=' + pre_value + '></input>';
          $(obj).parent().append(new_input);
          $(obj).hide();
          $(obj).next().show();
          $(obj).next().next().show();
       },
       save_edit(obj){
          
       }
    },
});