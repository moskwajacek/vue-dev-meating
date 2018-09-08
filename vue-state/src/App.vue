<template>
    <div id="app">
    <h2>My list</h2>
    <ItemsList :products="products" @item-remove="removeItem"></ItemsList>
    <AddProduct @add-product="onAddProduct"></AddProduct>

  </div>
</template>

<script>
import ItemsList from './components/ItemsList';
import AddProduct from './components/AddProduct';

import axios from 'axios'

export default {
  name: 'app',
  components: {
    ItemsList,
    AddProduct
  },
  async created() {
    this.products = await axios.get('http://localhost:3000/products').then(res => res.data);
  },
  data() {
    return {
      products: []
    }
  },
  methods: {
    onAddProduct(product) {
      this.products.push(product);
    },
    removeItem(itemId) {
      this.products = this.products.filter( el => el.id !== itemId )
    }
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
