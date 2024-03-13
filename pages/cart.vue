<template>
  <div class="container mx-auto">
    <p class="text-[50px] mb-4">Cart</p>
    <div class="mx-auto flex flex-row gap-10">
      <div class="grow grid grid-cols-1 gap-5">
        <div v-for="product in products">
          <CartItem :product="product" />
        </div>
      </div>
      <div class="max-w-sm">
        Class
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios';

const store = useCartStore()
console.log(store.cartItems)
// TODO :: Fetch the items in the cart from the API

const products = ref([])

for (let index = 0; index < store.cartItems.length; index++) {
  const id = store.cartItems[index];
  const uri = 'https://fakestoreapi.com/products/' + id
  const { data: product } = await axios.get(uri)
  products.value.push(product)
}


</script>

<style></style>