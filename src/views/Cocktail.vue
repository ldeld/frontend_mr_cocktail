<template>
  <div class="cocktail show">
    <img v-if="cocktail.id" :src="getCocktailImageSource()" :alt="cocktail.name + ' image'" class="cocktail-show-image">
    <h1>{{cocktail.name}}</h1>
    <p :key="ingredient.name" v-for="ingredient in cocktail.ingredients">
      {{ingredient.name}} - {{ ingredient.dose }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'cocktail',
    data() {
      return {
        cocktail: {}
      }
    },
    methods: {
      getCocktailImageSource() {
        return this.cocktail.image_url || require('../assets/cocktail_placeholder.jpg')
      }
    },
    created() {
      this.$api.get(`/cocktails/${this.$route.params.id}`)
        .then(res => this.cocktail = res.data)
        .catch(err => console.log(err))
    }
  }

</script>

<style scoped>
.cocktail-show-image {
  height: 400px;
}

</style>
