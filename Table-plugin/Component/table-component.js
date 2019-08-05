Vue.component('vue-table', {
    props: {
        tabledata:Array,
        tablecolumns:Array,
        settings:Object
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
                <input type="input" class="table_input" style="display:none"></input>
                <span class="glyphicon glyphicon-pencil" @click="label_edit($event)" v-if="settings.editable" style="float:right;cursor:pointer;"></span>
                <span class="glyphicon glyphicon-ok" @click="save_edit($event)" style="float:right;display:none;cursor:pointer;"></span>
                <span class="glyphicon glyphicon-remove" @click="cancel_edit($event)" style="float:right;display:none;cursor:pointer;"></span>
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
          var edit_button = obj.currentTarget;
          $(edit_button).siblings("label").hide();
          var label_value = $(edit_button).siblings("label").text();
          $(edit_button).siblings("input").val(label_value);
          $(edit_button).siblings("input").show();
          $(edit_button).hide();
          $(edit_button).siblings(".glyphicon.glyphicon-ok").show();
          $(edit_button).siblings(".glyphicon.glyphicon-remove").show();
          var settings = this.$props.settings;
          if(settings.hasOwnProperty('edit_callback')){
            settings.edit_callback();
          }
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
        var settings = this.$props.settings;
        if(settings.hasOwnProperty('save_callback')){
            settings.save_callback();
        }
       },
       cancel_edit(obj){
        var cancel_button = obj.currentTarget;
        $(cancel_button).siblings('input').hide();
        $(cancel_button).siblings('label').show();
        $(cancel_button).siblings(".glyphicon.glyphicon-pencil").show();
        $(cancel_button).siblings(".glyphicon.glyphicon-ok").hide();
        $(cancel_button).hide();
        var settings = this.$props.settings;
        if(settings.hasOwnProperty('cancel_callback')){
            settings.cancel_callback();
        }
       }
    },
});