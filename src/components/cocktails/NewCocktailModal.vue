<template>
<div class="modal-bg" :class="{ active: isOpen }">
  <div class="modal">
    <h1 class="modal-title">Add a new cocktail</h1>
    <form @submit.prevent="handleSubmit" class="new-cocktail" ref="cocktailForm">
      <label for="cocktail[name]">Cocktail Name</label>
      <input type="text" placeholder="Daiquiri" name="cocktail[name]"><br>
      <label for="cocktail[photo]">Photo</label>
      <input type="file" @change="setFile" name="cocktail[photo]">
      <div class="cocktail-ingredient">
        <select name="cocktail[cocktail_ingredients_attributes][][ingredient_id]">
          <option disabled selected value>Select an ingredient</option>
          <option v-for="ingredient in ingredients" :key="ingredient.id" :value="ingredient.id">{{ ingredient.name }}</option>
        </select>
        <input type="text" name="cocktail[cocktail_ingredients_attributes][][dose]">
      </div>
      <input type="submit" value="Add cocktail">
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'new-cocktail-modal',
  props: { isOpen: Boolean },
  data() {
    return {
      ingredients: [],
    }
  },
  created() {
    this.$api.get('/ingredients')
      .then(res => this.ingredients = res.data)
      .catch(err => console.log(err))
  },
  methods: {
    handleSubmit() {
      this.$api.post('/cocktails', new FormData(this.$refs.cocktailForm))
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    },
    setFile(event) {
      this.cocktail.photo = event.target.files[0];
    }
  }
}


</script>

<style lang="scss">
.modal-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}

.modal {
  background: white;
  padding: 30px;

}

.modal-bg.active {
  display: flex;

  .modal {
  }
}

.modal-title {
  margin-top: 0;
}

</style>
