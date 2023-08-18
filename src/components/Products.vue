<template>
  <div class="hello">
    
    <h1>Products</h1>
    <form class="form-inline">
						<input class="form-control mr-sm-2" type="text" /> 
						<button class="btn btn-primary my-2 my-sm-0" type="submit">
							Search
						</button>
	  </form>
  <div class="row">
      <div class="col-md-4" v-for="product in getProducts" :key="product.id">
        <div class="card">
          <img :src="product.image_url" class="card-img-top" alt="Product Image">
         <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="card-text">Price: ${{ product.price }}</p>
            <p class="card-text">Stock Quantity: {{ product.stock_quantity }}</p>
          </div>
          <div class="card-footer">
            <button @click="addToCart(product)" class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
// const msg = ref("Welcome to my Vuex Store");

const getProducts = computed(() => {
  return store.getters.getProducts;
});
const addToCart = (product) => {
  store.dispatch('addToCart', product);
};

onMounted(() => {
  store.dispatch("fetchProducts");
});
</script>

<style scoped>
/* Add custom styles here if needed */
@import "~bootstrap/dist/css/bootstrap.min.css";

</style>