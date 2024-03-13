<template>
  <div class="flex flex-row justify-between gap-2">
    <div class="flex gap-5">
      <img :src="product.image" alt="product_card_img" class="h-[150px] w-min">
      <div>
        <p class="text-xl">{{ product.title }}</p>
      </div>
    </div>
    <div>
      <p class="text-[#FFFFFF] px-4 py-1 bg-artichoke rounded-full tracking-wider">&dollar; {{ product.price }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { product } = defineProps(['product'])
</script>

<style></style>