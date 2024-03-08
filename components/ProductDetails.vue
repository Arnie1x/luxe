<template>
  <div class="container mx-auto">
    <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
      <div class="p-7">
        <img :src="`${product.image}`" class="mx-auto my-7 h-[350px] w-min" />
      </div>
      <div class="p-7">
        <h2 class="text-4xl my-5">{{ product.title }}</h2>
        <p class="text-xl my-5 font-bold border-b-2 mb-4 pb-2 text-artichoke border-onyx tracking-wider">&dollar;{{
          product.price }}</p>
        <p class="mb-7">{{ product.description }}</p>
        <div class="flex flex-row gap-5">
          <button @click="addToCart" class="btn hover:scale-[102%] duration-150 grow border-0">Add to Cart</button>
          <NuxtLink to="/cart" @click="addToCart" class="btn hover:scale-[102%] duration-150 grow cursor-pointer">Buy
            Now</NuxtLink>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { product } = defineProps(['product'])
const store = useCartStore()

async function addToCart() {
  // await useAsyncData('product', () => store.addToCart(product.id).then(() => true))
  store.addToCart(product.id)
}
</script>

<style></style>