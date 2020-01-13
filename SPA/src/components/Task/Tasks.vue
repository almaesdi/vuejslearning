<template>
  <div>
    <div class="col-xs-6 col-md-6">
      <app-task-list :tasks="tasks"></app-task-list>
    </div>

    <div class="col-xs-6 col-md-6">
      <router-view></router-view>
    </div>

    <app-task-form @create="createTask"></app-task-form>
  </div>
</template>

<script>
import TaskList from './TaskList.vue'
import TaskForm from './TaskForm'
import store from 'src/store/index.js'

export default {
  components: {
    'app-task-list': TaskList,
    'app-task-form': TaskForm,
  },
  created() {
    /*Se traspasa al archivo store:
    this.tasks.forEach(
      (task,index) => this.$set(task,'id',index+1)
    );*/

    /*Version sin funciones flecha
    this.tasks.forEach(function(task,index){
      //task.id = index +1; //Este metodo no funciona cuando se agrega propiedades nuevas
      this.$set(task,'id',index+1);
    }.bind(this)); //Con bind atamos la funcion anonima al objeto VM o componente Vue
    */
  },
  data : function() {
    return {
      new_task : '',
      tasks: store.state.tasks,
      /*tasks : [{
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
      ]*/
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
