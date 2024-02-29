<template>
  <div class="container mx-auto">
    <h1>{{ product.title }}</h1>
    <p>{{ product.price }}</p>
    <p>{{ product.id }}</p>

  </div>
</template>

<script setup>
import axios from 'axios';

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await axios.get(uri)
</script>

<style></style>