<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Cart />
  </div>
</template>

<script>
// @ is an alias to /src
import Cart from '@/components/Cart.vue'

export default {
  name: 'HomeView',
  components: {
    Cart
  }
}
</script>
