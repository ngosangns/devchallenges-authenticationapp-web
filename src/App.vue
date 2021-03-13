<template>
<div id="container">
  <div id="card">
    <router-view></router-view>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

.spinner-border {
    width: 1rem!important;
    height: 1rem!important;
    border-width: .18rem!important;
}
.alert {
    font-size: .9rem!important;
}
</style>