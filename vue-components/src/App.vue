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



export default {
  name: 'app',
  components: {
    ItemsList,
    AddProduct
  },
  data() {
    return {
      products: [{
        id: 0,
        name: 'Jacek'
      }, {
        id: 1,
        name: 'Szymon'
      }]
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
