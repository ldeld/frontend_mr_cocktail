<template>
  <div class="cocktails-content">
    <div class="cocktails-wrapper">
      <CocktailCard v-for="cocktail in cocktails" :key="cocktail.id" :cocktail="cocktail"/>
    </div>
  </div>
</template>


<script>
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
    this.$api.get("/cocktails")
      .then(res => this.cocktails = res.data)
      .catch(err => console.log(err))
  }
}

</script>

<style>
.cocktails-content {
  display: flex;
  justify-content: center;
}

.cocktails-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 80%;
}

</style>
