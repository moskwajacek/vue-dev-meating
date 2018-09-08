<template>
  <div>
    <ul>
      <Item v-for="p in products" :key="p.id" :products=p @item-remove="removeItem"></Item>
    </ul>
    <p v-if="!products.length">No item!</p>
  </div>
</template>

<script>
import Item from './Item'

  export default {
    
    name: "ItemsList",
    components: {
      Item
    },
    props: {
      products: {
        type: Array,
      }
    },
    methods: {
      removeItem(itemId) {
        this.$emit('item-remove', itemId)
      }
    }
  }
</script>

<style scoped>

</style>
