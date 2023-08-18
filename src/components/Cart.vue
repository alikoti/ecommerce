<template>
  <div class="hello">
    <h2>Shopping Cart</h2>
    <div  class="jumbotron" v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div class="row" v-else>
      <div class="col-md-3" v-for="item in cartItems" :key="item.id">
        <div class="card">
          <img :src="item.image_url" class="card-img-top" alt="Product Image">
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">Price: ${{ item.price * item.quantity }}</p>
            <p class="card-text">Stock Quantity: {{ item.quantity }}</p>
          </div>
          <!-- <div class="card-footer">
            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
          </div> -->
        </div>
      </div>
          <p  class="btn btn-success" >Total Price: ${{ cartTotal }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const cartItems = computed(() => {
  return store.getters.getCartTtems;
});


const cartTotal = computed(() => {
  return store.getters.cartTotal;
});


</script>

<style scoped>
/* Add custom styles here if needed */
@import "~bootstrap/dist/css/bootstrap.min.css";

</style>