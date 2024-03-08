<template>
  <div class="container mx-auto">
    <p class="text-[50px] mb-4">Cart</p>
    <div class="mx-auto flex flex-row gap-10">
      <div class="grow grid grid-cols-1 gap-5">
        <div v-for="item in store.cartItems">
          <div class="flex flex-row justify-between gap-2">
            <div class="flex flex-row gap-5">
              <p>{{ item.title }}</p>
              <p>Item</p>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-sm">
        Class
      </div>
    </div>
  </div>
</template>

<script setup>
const store = useCartStore()
console.log(store.cartItems)
// TODO :: Fetch the items in the cart from the API
</script>

<style></style>