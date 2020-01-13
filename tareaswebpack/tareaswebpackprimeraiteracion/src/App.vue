<template>
  <div id="app" class="container">

      <h2>Tareas</h2>

      <ul class="list-group tasks">
          <app-task v-for="(task,index) of tasks" v-bind:key="task.id" :task="task" :index="index" v-on:remove="deleteTask"></app-task>
      </ul>

      <form v-on:submit.prevent="createTask">
          <input type="text" v-model="new_task" class="form-control">
          <button class="btn btn-primary">Crear Tarea</button>
      </form>

  </div>
</template>

<script>
import Task from './Task.vue'

export default {
  components: {
    'app-task' : Task
  },
  created() {
    this.tasks.forEach(
      (task,index) => this.$set(task,'id',index+1)
    );

    /*
    this.tasks.forEach(function(task,index){
      //task.id = index +1; //Este metodo no funciona cuando se agrega propiedades nuevas
      this.$set(task,'id',index+1);
    }.bind(this)); //Con bind atamos la funcion anonima al objeto VM o componente Vue
    */

  },
  data : function() {
    return {
      new_task : '',
      tasks : [{
              description : 'Primera Tarea',
              pending : true,
          },
          {
              description : 'Segunda Tarea',
              pending : true,
          },
          {
              description : 'Tercera Tarea',
              pending : false,
          }
      ]
    }
  },
  methods : {
      createTask : function(){
          this.tasks.push({
              description : this.new_task,
              pending : true,
          });

          this.new_task = '';
      },
      deleteTask(index){
          this.tasks.splice(index,1);
      }
  }
}
</script>

<style>
  .editing {
      border-style: groove;
      border-width: 2px;
      border-color: gray;
  }

  .completed {
      text-decoration: line-through;
      color: gray;
  }

  .completed .glyphicon {
      color: gray;
  }
</style>
