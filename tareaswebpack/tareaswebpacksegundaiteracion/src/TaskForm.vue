<template>

  <form v-on:submit.prevent="createTask">
      <input type="text" v-model="new_task" class="form-control">
      <button class="btn btn-primary">Crear Tarea</button>
  </form>

</template>

<script>

export default {
  components : {

  },
  data () {
    return {
      new_task : '',
    }
  },
  methods: {
    createTask(){
      this.$emit('create', {
          description : this.new_task,
          pending : true,
      });

      this.new_task = '';
    },
  },
}

</script>

<style>

</style>
