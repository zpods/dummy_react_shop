import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { token } from '../loginRegisterLogout/loginRegisterLogout';
import { SITE_URL } from '../../../constants/constants';
import {current} from 'immer'

/**
 * axios call to fetch  shop products from backend
 */
export const fetchProducts = createAsyncThunk(
  'mainShopPage/fetchProducts',
    async (_, ThunkApi) => {
      const response = await axios({
        method: "GET",
        baseURL: SITE_URL + '/api/products',
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
   * save cart in localstorage
   * @param {JSON} cart 
   */
  export const saveCartInLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  /**
   * get cart items from localstorage
   * @returns {JSON}
   */
  export const getCartFromLocalStorage = () => {
    if(localStorage.getItem('cart')){
      return JSON.parse(localStorage.getItem('cart'));
    }
    return;
  }

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
  if(typeof state.cart === 'undefined'){
    state.totalPrice = 0;
    state.totalQuantity = 0;
    return;
  }else{
    state.totalQuantity = state.cart.reduce(( result, item ) => result + item.inCart, 0)
    state.totalPrice= state.cart.reduce((result, item ) => result + item.price * item.inCart, 0)
  }
}

/**
 * check instock variable in product object if instock is 0 or less 
 * if it is accordingly is calculated inCart, totalQuantity and totalPrice 
 * (both should not be updated to higher value when instock is 0)
 * if instock is not 0 or less varible inCart, instock and totalQuantity,
 * totalPrice are updated.
 * @param {Object} state
 * @param {number} productIndex
 */
export const checkInStockVarAndReturnProperStateIfProductFound = (state, productIndex) => {
  if(state.cart[productIndex].instock > 0 ){
    state.cart[productIndex].instock--;
    state.cart[productIndex].inCart++;
    calculateTotalQuantityAndPrice(state)
    saveCartInLocalStorage(state.cart);
  }else{
    state.cart[productIndex].instock = 0;
    calculateTotalQuantityAndPrice(state);
    saveCartInLocalStorage(state.cart);
  }
}

/**
 * if product not found creates new cart array for product and
 * adjust properly totalQuantity and totalPrice variable in state and
 * save cart data in localstorage 
 * @param {Object} state
 * @param {Array} product
 */
export const returnProperStateIfProductFirstInCheck = (state, product) => {
  state.cart.push({  
    id: product.id,
    price: product.price,
    images: product.images,
    name: product.name,
    updated_at: product.updated_at,
    created_at: product.created_at,
    description: product.description, 
    instock: (product.instock > 0) ? product.instock - 1 : 0 , 
    inCart: 1
  });
    calculateTotalQuantityAndPrice(state)
    saveCartInLocalStorage(state.cart);
}

export const mainShopPageSlice = createSlice({
  name: 'mainShopPage',
  initialState: {
    products: [],
    isLoading: false,
    error: null,
    cart: [],
    singleProductCart: [],
    totalPrice: 0,
    totalQuantity: 0, 
    message:'',
    currentPage: 1,  
  },
  reducers: {
    addProductToCart(state, action){
      let productIndex = 0;
      let product = null;
      product = action.payload;

      if(typeof state.cart === 'undefined') state.cart = [];
      const found = state.cart && state.cart.find((item, index) => {
        if(product.id === item.id){
          productIndex = index;
          return true
        }
        return false;
      });
      
      if(found){    
        checkInStockVarAndReturnProperStateIfProductFound(state, productIndex);   
      }else{
        returnProperStateIfProductFirstInCheck(state, product);
      }       
    },
    clearCart(state, action){
      state.singleProductCart = [];
      state.cart = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
      saveCartInLocalStorage(state.cart);
    },
    localStorageCart(state){
      state.cart = getCartFromLocalStorage();
      calculateTotalQuantityAndPrice(state);
    },
    setCurrentPage(state, action){
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.error = null;
      state.cart = getCartFromLocalStorage();
      calculateTotalQuantityAndPrice(state);
    }).addCase(fetchProducts.pending, (state, action) => {
        state.isLoading = true;
        state.error = 'Loading';
    }).addCase(fetchProducts.rejected, (state, action) => {
      console.log(action.payload);
        state.isLoading = false;
        state.error = 'Connection Error';
    });
    builder.addCase(storeUserCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.message = "Products Bought!";
      state.error = null;
    }).addCase(storeUserCart.pending, (state, action) => {
        state.isLoading = true;
        state.error = 'Loading';
    }).addCase(storeUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Cart Not Stored Or Products Not Bought';
    });
    builder.addCase(getUserCart.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cart =  cartFromBackendToCart(JSON.parse(action.payload.cart_products)) ? 
      cartFromBackendToCart(JSON.parse(action.payload.cart_products)): getCartFromLocalStorage();
      state.message = "Products In Cart!";
      state.error = null;
      calculateTotalQuantityAndPrice(state);
      saveCartInLocalStorage(state.cart);
    }).addCase(getUserCart.pending, (state, action) => {
        state.isLoading = true;
        state.error = 'Loading';
    }).addCase(getUserCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Connection Error';
    });
  },
})

export const { addProductToCart, buySingleProduct, clearCart, localStorageCart, setCurrentPage } = mainShopPageSlice.actions;

export default mainShopPageSlice.reducer