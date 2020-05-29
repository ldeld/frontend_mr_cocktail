<template>
  <div class="home">
    <h1>Welcome to Mr Cocktail</h1>
    <button class="primary-btn" @click="openModal()">Add a cocktail</button>
    <CocktailsIndex/>
    <NewCocktailModal :isOpen="isModalOpen"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CocktailsIndex from '@/components/cocktails/CocktailsIndex.vue'
import NewCocktailModal from '@/components/cocktails/NewCocktailModal.vue'

export default {
  name: 'Home',
  components: {
    CocktailsIndex,
    NewCocktailModal
  },
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal() { this.isModalOpen = true }
  }
}
</script>
