<template>
<div class="cocktail-card">
  <router-link :to="cocktail.url">
    <img :src="getCocktailImageSource()" alt="" class="cocktail-card_image">

    <div class="cocktail-card_info">
      {{cocktail.name}}
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'cocktail-index',
  props: {
    cocktail: Object
  },
  methods: {
    getCocktailImageSource() {
      return this.cocktail.image_url || require('../../assets/cocktail_placeholder.jpg')
    }
  }
}

</script>

<style>
.cocktail-card {
  height: 300px;
  margin: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 3px;
  border-radius: 5px;
}

.cocktail-card_image {
  height: 250px;
  width: 250px;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}

</style>
