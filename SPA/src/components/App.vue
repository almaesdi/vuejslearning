<template>
  <div id="app" class="container">
      <h1>Aplicacion de Tareas</h1>

      <ul class="nav nav-tabs">
        <router-link tag="li" active-class="active" exact to="/"><a>Dashboard</a></router-link>
        <router-link tag="li" active-class="active" to="/tasks"><a>Tareas</a></router-link>
      </ul>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {

  }
</script>
