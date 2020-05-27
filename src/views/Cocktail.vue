<template>
  <div class="cocktail show">
    <img v-if="cocktail.image_url" :src="cocktail.image_url" :alt="cocktail.name + ' image'" class="cocktail-show-image">
    <h1>{{cocktail.name}}</h1>
    <p :key="ingredient.name" v-for="ingredient in cocktail.ingredients">
      {{ingredient.name}} - {{ ingredient.dose }}
    </p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'cocktail',
    data() {
      return {
        cocktail: {}
      }
    },
    created() {
      axios.get(`http://localhost:3000/cocktails/${this.$route.params.id}.json`)
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
