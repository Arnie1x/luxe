<template>
  <div class="container mx-auto">
    <p class="text-[50px] mb-4">Cart</p>
    <div class="mx-auto flex flex-row gap-10">
      <div class="grow grid grid-cols-1 gap-5">
        <div class="flex flex-row justify-between gap-2">
          <p>Title</p>
          <p>Price</p>
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


</script>

<style></style>