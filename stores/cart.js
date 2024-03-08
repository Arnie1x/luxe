import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('id', () => {
  const cartItems = ref([])

  function addToCart(id) {
    cartItems.value.push(id)
  }
  function removeFromCart(id) {
    cartItems.value.pop(id)
  }
  function clearCart(id) {
    cartItems.value = []
  }

  return { cartItems, addToCart, removeFromCart, clearCart }
})
