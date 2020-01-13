<template>
  <div id="app" class="container">

      <h2>Tareas</h2>
      <app-task-list :tasks="tasks"></app-task-list>

      <app-task-form @create="createTask"></app-task-form>

  </div>
</template>

<script>
import TaskList from './TaskList.vue'
import TaskForm from './TaskForm'

export default {
  components: {
    'app-task-list': TaskList,
    'app-task-form': TaskForm,
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
    createTask(task){
      this.tasks.push(task);
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
