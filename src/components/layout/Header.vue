<template>
  <header class="header">
    <div id="nav">
      <router-link to="/">Cocktails</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>


</script>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
