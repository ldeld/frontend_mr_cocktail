<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.primary-btn {
  background-color: #3A7BF9;
  color: white;
  padding: 5px 10px;
  border-radius: 3px;
  border: none;
  transition: 0.2s;
  font-size: 20px;
  &:hover {
    background-color: #2670FA;
  }
}

</style>
