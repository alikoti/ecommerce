
import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    users: [],
    products: [],
    cartItems: [],
  },
  getters: {
    getUsers: (state) => state.users,
    getProducts: (state) => state.products,
    getCartTtems: (state) => state.cartItems,
    cartTotal(state) {
      return state.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        const usersData = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        commit("SET_USERS", usersData.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
   async fetchProducts({ commit }) {
      try {
        const productsData = await axios.get(
          "http://10.10.0.58:3003/api/products"
        );
        commit("SET_PRODUCTS", productsData.data);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    addToCart({ commit }, product) {
      commit('addToCart', product);
    },

  },
  mutations: {
    SET_USERS(state, users) {
      state.users = users;
    },
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      const existingProduct = state.cartItems.find(item => item.product_id === product.product_id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    //   state.cartItems.push(product);
    // },
    
    
  },
});


