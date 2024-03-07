<template>
  <div class="container mx-auto">
    <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
      <div class="p-7">
        <img :src="`${product.image}`" class="mx-auto my-7 h-[350px] w-min" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-5">{{ product.title }}</h2>
        <p class="text-xl my-5 font-bold border-b-2 mb-4 pb-2 text-artichoke border-onyx tracking-wider">&dollar;{{ product.price }}</p>
        <p class="mb-7">{{ product.description }}</p>
        <NuxtLink to="/" class="btn hover:scale-105 duration-150">Add to Cart</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>

<style></style>