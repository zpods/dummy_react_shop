import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMainPageProducts } from '../../../axiosCalls/axiosCalls'
import { current } from 'immer';

const  temp_products = fetchMainPageProducts();
export const fetchProducts = createAsyncThunk(
  'mainShopPage/fetchProducts',
    async () => {
      const response = await temp_products;
      return response;
    }
  )


export const mainShopPageSlice = createSlice({
  name: 'mainShopPage',
  initialState: {
    products: [],
    isLoading: true,
    error: [],
    cart: [],
  },
  reducers: {
    addProductToCart(state, action){
      const product = action.payload;
      const productsInCart = state.cart;
      let found = false;

      for(const [key, value] of Object.entries(productsInCart)){
        if(value.product.id === product.id){
          found = true;
          break;
        }         
      }

      if(!found){
        return {
          ...state,
          cart: {
            ...state.cart,
            [product.id] : {
              product: {
                ...product,
                  inCart: 1,
                  inStock: product.inStock - 1
              }
            }
          }
        }
      }else{
        return {
          ...state,
          cart: {
            ...state.cart,
            [product.id]: {
              product: {
                ...product,
                inCart: state.cart[product.id].product.inCart + 1,
                inStock: state.cart[product.id].product.inStock - 1
              }
            }
          }
        }
      }       
    },
    buySingleProduct(state, action){
      const product = action.payload;
      return {
        ...state,
        cart: {
          ...state.cart,
          [product.id]: {
            product: {
              ...product, 
              inCart: 1,
              inStock: product.inStock - 1
            }
          }
        }
      }
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

export const { addProductToCart, buySingleProduct } = mainShopPageSlice.actions;

export default mainShopPageSlice.reducer