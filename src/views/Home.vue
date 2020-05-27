<template>
  <div class="home">
    <h1>Welcome to Mr Cocktail</h1>
    <CocktailsIndex/>
  </div>
</template>

<script>
// @ is an alias to /src
import CocktailsIndex from '@/components/cocktails/CocktailsIndex.vue'

export default {
  name: 'Home',
  components: {
    CocktailsIndex
  }
}
</script>
