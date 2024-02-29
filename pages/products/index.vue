<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="product in products">
      <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

const { data: products } = await axios.get('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>