<!--10- 1. There's a <template> part -->
<template>
  <div id="app">
    <h2>Name list</h2>
    <ul>
      <li v-for="p in products">{{ p.name }}<button v-on:click="removeItem()"></button></li>
    </ul>

    <p v-if="!products.length">No items!</p>

    <button v-on:click="addItem()">Add static item</button>

    <form v-on:submit.prevent="addItemInput">
        Item Name: <input type="text" name="fname" v-model="itemName"><br>
        <input type="submit" value="Submit">
      </form>
  </div>
</template>

<script>

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
              id: this.products.length,
              name: this.products.length + 1
          });
        },
        addItemInput() {
          this.products.push({
              id: this.products.length,
              name: this.itemName
          });
          this.itemName = ""
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