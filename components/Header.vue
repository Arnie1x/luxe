<template>
  <header class="container sticky">
    <nav class="mx-auto py-6 flex flex-row justify-between font-montserrat text-2xl">
      <div class="flex flex-row gap-10 items-baseline">
        <NuxtLink to="/" class="font-title text-[60px] text-gold font-bold">luxe</NuxtLink>
        <NuxtLink to="/products">Men</NuxtLink>
        <NuxtLink to="/products">Women</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
      </div>
      <div class="flex flex-row gap-4 items-baseline">
        <NuxtLink to="/">
          <Icon name="ic:outline-help-outline" size="2.5rem" />
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="ic:outline-account-circle" size="2.5rem" />
        </NuxtLink>
        <NuxtLink to="/">
          <Icon name="ic:outline-shopping-cart" size="2.5rem" />
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style></style>