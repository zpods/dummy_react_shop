import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../loginRegisterLogout/loginRegisterLogout';
import { SITE_URL } from '../../../constants/constants';

/**
 * axios call to fetch  shop products from backend
 */
export const fetchProducts = createAsyncThunk(
  'mainShopPage/fetchProducts',
    async () => {
      const response = await axios({
        method: "GET",
        baseURL: SITE_URL + "/api/products",
        withCredentials: false,
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      });
      return response.data;
    }
  )
  
/**
 * send cart data of user to the backend 
 */
export const storeUserCart = createAsyncThunk(
  'loginRegisterLogout/storeUserCart',
    async (cart, ThunkApi) => { 
      const response = await axios({
          method: "POST",
          url: SITE_URL + '/api/cart',
          data: { 'data': JSON.stringify(cart)},
          headers: { 
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*" ,
            'Authorization': `Bearer ${token}`
          }
      });
      return response.data;
    }
  )

  /**
 * send cart data of user to the backend 
 */
export const getUserCart = createAsyncThunk(
  'loginRegisterLogout/getUserCart',
    async (_, ThunkApi) => { 
      const response = await axios({
          method: "GET",
          url: SITE_URL + '/api/cart',
          headers: { 
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "*" ,
            'Authorization': `Bearer ${token}`
          }
      });
      return response.data;
    }
  )

/**
 * Fetch cart stored in backend (Array of JSON) and convert it to cart
 * accepted by frontend 
 * @param {Array} cartFromBackend 
 * @returns {Array} 
 */
export const cartFromBackendToCart = (cartFromBackend) => {
  let newCartArray = [];
  cartFromBackend.map((item) => {
    const tempCartObject = { 
      id: item.id, 
      description: item.description,
      instock: item.instock,
      slug: item.slug,
      name: item.name,
      price: item.price,
      inCart: item.pivot.quantity,
      created_ad: item.created_at, 
      updated_at: item.updated_at
    }
    return newCartArray.push(tempCartObject);    
  })
  return newCartArray;
}

/**
 * calculate totalQuantity for display it in CartIcon
 * and totalPrice to show both value in summary of cart
 * @param {WritableDraft} state 
 */
export const calculateTotalQuantityAndPrice = (state) => {
  state.totalQuantity = state.cart.reduce((result, item)=>result + item.inCart,0)
  state.totalPrice= state.cart.reduce((result, item)=>result + item.price * item.inCart,0)
}

export const mainShopPageSlice = createSlice({
  name: 'mainShopPage',
  initialState: {
    products: [],
    isLoading: true,
    error: [],
    cart: [],
    cartFromBackend: [],
    singleProductCart: [],
    totalPrice: [],
    totalQuantity: [], 
    message:'',  
  },
  reducers: {
    addProductToCart(state, action){

      let productIndex = 0;
      let product = null;
      product = action.payload;
      const found = state.cart.find((item, index) => {
      if(product.id === item.id){
        productIndex = index;
        return true;
      }});
      
      if(found){       
          state.cart[productIndex].instock--; 
          state.cart[productIndex].inCart++;
          calculateTotalQuantityAndPrice(state);
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
        calculateTotalQuantityAndPrice(state);
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
      calculateTotalQuantityAndPrice(state); 
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
      state.isLoading = false;
      state.error = null;
    }).addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
    }).addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action;
    });
    builder.addCase(storeUserCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = "Products Bought!";
      state.error = null;
    }).addCase(storeUserCart.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
    }).addCase(storeUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action;
    });
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cart =  (state.cart.length > 0) ? state.cart : cartFromBackendToCart(JSON.parse(action.payload.cart_products));
      state.message = "Products In Cart!";
      state.error = null;
      calculateTotalQuantityAndPrice(state);
    }).addCase(getUserCart.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
    }).addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action;
    });
  },
})

export const { addProductToCart, buySingleProduct, clearCart } = mainShopPageSlice.actions;

export default mainShopPageSlice.reducer