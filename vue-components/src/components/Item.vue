<template>
      <li>{{ products.name }}<button @click="removeItem(products.id)">Del</button></li>
</template>

<script>
  export default {
    name: "Item",
    props: {
      products: {
        type: Object,
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