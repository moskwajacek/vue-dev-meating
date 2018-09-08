<template>
  <div id="app">
    <h2>Name list</h2>
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.name }}<button v-on:click="removeItem()"></button></li>
    </ul>

    <p v-if="!products.length">No items!</p>

    <button v-on:click="addItem()">Add static item</button>
    <div v-show="errors.has('product')">{{ errors.first('product') }}</div>

    <form v-on:submit.prevent="addItemInput">
        Item Name: <input type="text" name="fname" v-model="itemName" v-validate="'required|min:3'"><br>
        <input type="submit" value="Submit">
      </form>
  </div>
</template>

<script>
import uuid from 'uuid';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);


export default {
  name: 'app',

  data() {
    return {
        itemName: "",

        products: [{
          id: 0,
          name: 'Jacek'
        }, 
        {
          id: 1,
          name: 'Szymon'
        },
        {
            id: 2,
            name: "Marcin"

        }]
      }
  },
  methods: {

        addItem() {
          this.products.push({
              id: uuid(),
              name: this.products.length + 1
          });
        },
        addItemInput() {
          this.$validator.validateAll().then(result => {
            if (!result) {
              return;
            }
            this.products.push({
              id: uuid(),
              ...this.newProduct
            });
            this.newProduct.name = '';
            this.$validator.reset();
          });
        }
        // removeItem() {
        //     this.products.
        // }
      }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>