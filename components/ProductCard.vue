<template>
  <NuxtLink :to="`/products/${product.id}`">
    <div class="flex flex-col rounded-2xl duration-300 hover:scale-[103%]">
      <img :src="product.image" alt="product_card_img" class="h-[250px] w-min mx-auto">
      <p class="text-xl line-clamp-2 h-[60px] m-4">{{ product.title }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>

const { product } = defineProps(['product'])
</script>

<style></style>