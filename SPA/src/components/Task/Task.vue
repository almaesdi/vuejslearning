<template>
  <li class="list-group-item" :class="{active: isActive, editing:editing, completed: !task.pending}">
      <a v-on:click="toggleStatus"><app-icon :img="task.pending ? 'unchecked':'check'"></app-icon></a>

      <!--Genera 2 template, se mostrara dependiendo si se esta editando o no-->
      <template v-if="!editing">
          <span @click="showDetails" class="description">{{task.title}}</span>
          <div class="pull-right">
              <a v-on:click="editTask"><app-icon img="edit"></app-icon></a>
              <a v-on:click="removeTask"><app-icon img="trash"></app-icon></a>
          </div>
      </template>

      <template v-else>
          <input type="text" v-model="draft">
          <div class="pull-right">
              <a v-on:click="updateTask"><app-icon img="ok"></app-icon></a>
              <a v-on:click="discardTask"><app-icon img="remove"></app-icon></a>
          </div>
      </template>
  </li>
</template>

<script>
import eventBus from 'src/event-bus.js'
import Icon from 'components/Icon.vue'

export default {
  components:{
    'app-icon' : Icon,
  },
  template: '#task-template',
  props: ['task','index'],
  data : function(){
      return {
          editing : false,
          draft : '',
      };
  },
  computed: {
    isActive() {
      return this.task.id == this.$route.params.id;
    }
  },
  created: function() {
      /*Escucharemos el evento "editing"
      el bind(this) es para asegurarnos que en la funcion anonima
      "this" se refiere al componente*/
      eventBus.$on('editing',
        (index) => {
          if(this.index != index){
              this.discardTask();
          }
        }
      );
      /*eventBus.$on('editing',function(index){
          if(this.index != index){
              this.discardTask();
          }
      }.bind(this));*/
  },
  methods: {
      toggleStatus(){
          this.task.pending = !this.task.pending;
      },
      showDetails(){
        //this.$router.push('/tasks/'+this.task.id);
        /*Gracias a nuestra property isActive, mejoramos este metodo para que deseleccione
        cuando este seleccionado y viceversa*/
        this.$router.push(this.isActive ? '/tasks' : '/tasks/'+this.task.id);

      },
      editTask(){
          /*Opcional depende del requerimiento:
          Haremos que una tarea se pueda editar a la vez, por lo que este evento
          le avisara a las demas tareas que se esta editando*/
          eventBus.$emit('editing', this.index);

          this.draft = this.task.description;
          this.editing = true;
      },
      updateTask : function(){
          this.task.description = this.draft;
          this.editing = false;
      },
      discardTask : function(){
          this.editing = false;
      },
      removeTask : function(){
          //Creamos un evento llamado "remove" que sera escuchado desde afuera con v-on
          this.$emit('remove',this.index);
      },
  }
}

</script>

<style scoped>
  .active a {
    color: white
  }
</style>
