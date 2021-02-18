<template>
  <div id="app">
    <treeTable/>
  </div>
</template>

<script>
import treeTable from './components/treeTable.vue'

export default {
  name: 'App',
  components: {
    treeTable
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
