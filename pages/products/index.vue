<template>
  <p class="text-[70px]">Men</p>
  <p class="text-[50px] mb-4">Newest Arrivals</p>
  <div class="grid grid-cols-4 gap-7 container mx-auto">
    <div v-for="product in products">

      <ProductCard :product="product"/>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';

const { data: products } = await axios.get('https://fakestoreapi.com/products')
</script>

<style scoped>

</style>