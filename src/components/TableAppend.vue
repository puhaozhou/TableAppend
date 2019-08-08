<template>
  <div>
  <table class="table table-bordered">
        <thead>
            <tr>
                <th v-for="column in tableAppend.tableColumns" :id="column.ColumnName">
                    {{column.Name}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in tableAppend.tableData">
            <td v-for="key in keys">
                <label>{{row[key]}}</label>
                <input type="input" class="table_input" style="display:none"></input>
                <span class="glyphicon glyphicon-pencil" @click="label_edit($event)" v-if="settings.editable" style="float:right;cursor:pointer;"></span>
                <span class="glyphicon glyphicon-ok" @click="save_edit($event)" style="float:right;display:none;cursor:pointer;"></span>
                <span class="glyphicon glyphicon-remove" @click="cancel_edit($event)" style="float:right;display:none;cursor:pointer;"></span>
            </td>
            </tr>
        </tbody>
    </table>
    <router-link v-bind:to="'/'">Home</router-link>
    </div>
</template>

<script>
export default {
  name: 'TableAppend',
  props:{
        pageData:Object
    },
  computed: {
        tableAppend: function(){
          var tableAppend = {};
          if(this.pageData != null && this.pageData.hasOwnProperty('tableAppend')){
              tableAppend = this.pageData.tableAppend;
          }
          return tableAppend;
        },
        keys:function(){
            var result = [];
            this.tableAppend.tableColumns.map(
                function(i){
                    result.push(i.ColumnName);
                }
            );
            return result;
        },
        settings:function(){
          var result = {};
          if(this.tableAppend.hasOwnProperty('settings')){
            result = this.tableAppend.settings;
          }
          if(!result.hasOwnProperty("editable")){
            result.editable = false;
          }
          if(!result.hasOwnProperty("edit_callback")){
            result.edit_callback = function(){};
          }
          if(!result.hasOwnProperty("save_callback")){
            result.save_callback = function(){};
          }
          if(!result.hasOwnProperty("cancel_callback")){
            result.cancel_callback = function(){};
          }
          return result;
        }
    },
    methods:{
       label_edit(obj){
          var edit_button = obj.currentTarget;
          $(edit_button).siblings("label").hide();
          var label_value = $(edit_button).siblings("label").text();
          $(edit_button).siblings("input").val(label_value);
          $(edit_button).siblings("input").show();
          $(edit_button).hide();
          $(edit_button).siblings(".glyphicon.glyphicon-ok").show();
          $(edit_button).siblings(".glyphicon.glyphicon-remove").show();
          this.settings.edit_callback();
       },
       save_edit(obj){
        var save_button = obj.currentTarget;
        $(save_button).siblings('input').hide();
        var input_value = $(save_button).siblings('input').val();
        $(save_button).siblings('label').text(input_value);
        $(save_button).siblings('label').show();
        $(save_button).siblings(".glyphicon.glyphicon-pencil").show();
        $(save_button).siblings(".glyphicon.glyphicon-remove").hide();
        $(save_button).hide();
        this.settings.save_callback();
       },
       cancel_edit(obj){
        var cancel_button = obj.currentTarget;
        $(cancel_button).siblings('input').hide();
        $(cancel_button).siblings('label').show();
        $(cancel_button).siblings(".glyphicon.glyphicon-pencil").show();
        $(cancel_button).siblings(".glyphicon.glyphicon-ok").hide();
        $(cancel_button).hide();
        this.settings.cancel_callback();
       }
    }
}
</script>