<template>
  <ProductDetails :product="product"/>
</template>

<script setup>
import axios from 'axios';

const { id } = useRoute().params
const uri = 'https://fakestoreapi.com/products/' + id

const { data: product } = await axios.get(uri)
</script>

<style></style>