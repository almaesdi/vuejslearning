<template>
  <ul class="list-group tasks">
      <app-task v-for="(task,index) of tasks" v-bind:key="task.id" :task="task" :index="index" v-on:remove="deleteTask"></app-task>
  </ul>
</template>

<script>
import Task from './Task.vue'

  export default {
    components:{
      'app-task' : Task
    },
    props: ['tasks'],
    methods: {
      deleteTask(index){
          this.tasks.splice(index,1);
      }
    },
  }

</script>

<style>

</style>
