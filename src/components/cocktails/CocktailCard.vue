<template>
<div class="cocktail-card">
  <router-link :to="cocktail.url">
    <img v-if="cocktail.image_url" :src="cocktail.image_url" alt="" class="cocktail-card_image">
    <img v-else src="../../assets/cocktail_placeholder.jpg" alt="">
    <div class="cocktail-card_info">
      {{cocktail.name}}
    </div>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'cocktail-index',
  props: ['cocktail']
}

</script>

<style>
.cocktail-card {
  height: 300px;
}

.cocktail-card_image {
  height: 220px;
}

</style>
