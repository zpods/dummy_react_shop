import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

//const  temp_products = fetchMainPageProducts();

const api = axios.create({
  baseURL: "http://localhost:8000/api/products",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});


export const fetchProducts = createAsyncThunk(
  'mainShopPage/fetchProducts',
    async () => {
      const response = await api();
      console.log(response);
      return response.data;
    }
  )

export const setTotalPriceAndQuantity = (state) => {
  let cart = [];

  if(typeof state === 'undefined'){
    return;
  }
  if(typeof state.singleProductCart === 'undefined' || state.singleProductCart.length === 0){
    cart = state.cart;
  }else{
    cart = state.singleProductCart;
  }
  
  state.totalQuantity = cart.reduce((result, item)=>result + item.inCart,0)
  state.totalPrice = cart.reduce((result, item)=>result + item.price * item.inCart,0)
}
  
export const mainShopPageSlice = createSlice({
  name: 'mainShopPage',
  initialState: {
    products: [],
    isLoading: true,
    error: [],
    cart: [],
    singleProductCart: [],
    totalPrice: 0,
    totalQuantity: 0,   
  },
  reducers: {
    addProductToCart(state, action){
      const product = action.payload;
      let index = null;
      const productsInCart = state.cart;
      let found = false;

      productsInCart.find((item, key) => {
        index = key;
        if(item.id === product.id){
          found = true;
        }         
        return found;
      })

      if(found){
        const varInStock = state.cart[index].inStock;
        const varInCart = state.cart[index].inCart;
        state.cart[index] = {...product, inStock: varInStock - 1, inCart: varInCart + 1};
        setTotalPriceAndQuantity(state);        
      }else{
        const varInStock = product.inStock;
        state.cart.push({...product, inStock: varInStock - 1, inCart: 1});
        setTotalPriceAndQuantity(state);
      }       
    },
    buySingleProduct(state, action){
      state.singleProductCart = [];
      const product = action.payload; 
      const products = state.products;
      let index = null;

      products.find((item, key) => {
        index = key;
        if(item.id === product.id){
          const varInStock = state.products[index].inStock;
          state.products[index] = {...product, inStock: varInStock - 1};
        }         
      })

      state.singleProductCart.push({...product, inCart: 1});
      setTotalPriceAndQuantity(state);      
    },
    clearCart(state, action){
      state.singleProductCart = [];
      state.cart = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false
    }).addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
    }).addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action;
    });
  },
})

export const { addProductToCart, buySingleProduct, clearCart } = mainShopPageSlice.actions;

export default mainShopPageSlice.reducer