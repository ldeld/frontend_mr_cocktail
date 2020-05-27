
<template>
  <div class="cocktails-wrapper">
    <div v-for="cocktail in cocktails" :key="cocktail.id" class="cocktail-item">
      <CocktailCard :cocktail="cocktail"/>
    </div>
  </div>
</template>


<script>
import axios from 'axios'
import CocktailCard from './CocktailCard.vue'

export default {
  name: "cocktails-index",
  components: { CocktailCard },
  data() {
    return {
      cocktails: []
    }
  },
  created() {
    axios.get("http://localhost:3000/cocktails.json", {
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000'
      }
    }).then(res => this.cocktails = res.data)
      .catch(err => console.log(err))
  }
}

</script>

<style>


</style>
