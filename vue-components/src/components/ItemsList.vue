<template>
  <div>
    <ul>
      <li v-for="p in products" :key="p.id">{{ p.name }}</li>
    </ul>
    <p v-if="!products.length">No item!</p>
  </div>
</template>

<script>
  export default {
    name: "ItemsList",
    props: {
      products: {
        type: Array,
      }
    }
  }
</script>

<style scoped>

</style>
