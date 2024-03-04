<template>
  <NuxtLink :to="`/products/${product.id}`">
    <div class="flex flex-col rounded-2xl duration-300 hover:scale-[103%]">
      <div>
        <img :src="product.image" alt="product_card_img" class="h-[250px] w-min mx-auto">
        <p class="text-[#FFFFFF] absolute -translate-y-7 translate-x-4 px-4 py-1 bg-artichoke rounded-full tracking-wider">&dollar; {{ product.price }}</p>
      </div>
      <div class="mt-4 mx-4 capitalize">
        <p class="text-xl line-clamp-2 h-[60px]">{{ product.title }}</p>
        <p class="">{{ product.category }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>

const { product } = defineProps(['product'])
</script>

<style></style>