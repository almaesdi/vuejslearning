<template>
  <div>
    <div v-if="task">
      <h2>{{task.title}}</h2>
      <p>{{task.description}}</p>
    </div>
    <div v-else>
      <p>Tarea no encontrada</p>
    </div>
  </div>
</template>

<script>
import store from 'src/store';

export default {
  props:['id'],
  data() {
    return {
      task: null
    }
  },
  created(){
    this.findTask();
  },
  computed: {
    getTaskId(){
      return this.$route.params.id;
    },
  },
  watch: {
    id: 'findTask'
  },
  methods: {
    findTask(){
      this.task = store.findTask(this.id);

      /*Opcional: Dado que por etiquetas ya validamos la si existe la tarea
      o no, no seria necesario tirar error 404, pero queda como opcion*/
      not_found_unless(this.task);
    }
  }
}
</script>
