import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { current } from 'immer';

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
      return response.data;
    }
  )
  
export const mainShopPageSlice = createSlice({
  name: 'mainShopPage',
  initialState: {
    products: [],
    isLoading: true,
    error: [],
    cart: [],
    singleProductCart: [],
    totalPrice: [],
    totalQuantity: [],   
  },
  reducers: {
    addProductToCart(state, action){
      let productIndex = 0;
      const product = action.payload;

      const found = state.cart.find((item, index) => {
      if(product.id === item.id){
        productIndex = index;
        return true;
      }});
      
      if(found){       
          state.cart[productIndex].instock--; 
          state.cart[productIndex].inCart++;
          state.totalQuantity = state.cart.reduce((result, item)=>result + item.inCart,0)
          state.totalPrice= state.cart.reduce((result, item)=>result + item.price * item.inCart,0)
          console.log(state.totalPrice);
      }else{
        state.cart.push({  
          id: product.id,
          price: product.price,
          images: product.images,
          name: product.name,
          updated_at: product.updated_at,
          created_at: product.created_at,
          description: product.description, 
          instock: product.instock - 1 , 
          inCart: 1
        });
          state.totalQuantity = state.cart.reduce((result, item)=>result + item.inCart,0)
          state.totalPrice= state.cart.reduce((result, item)=>result + item.price * item.inCart,0)
          console.log(state.totalPrice);
      }       
    },
    buySingleProduct(state, action){
      state.singleProductCart = [];
      const product = action.payload; 
      const products = state.products;
      let productIndex = null;

      products.find((item, index) => {
        productIndex = index;
        if(item.id === product.id){
          state.products[productIndex].instock = product.instock--;
        }         
      })

      state.singleProductCart.push({...product, inCart: 1});
      state.totalQuantity = state.cart.reduce((result, item)=>result + item.inCart,0)
      state.totalPrice= state.cart.reduce((result, item)=>result + item.price * item.inCart,0)   
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