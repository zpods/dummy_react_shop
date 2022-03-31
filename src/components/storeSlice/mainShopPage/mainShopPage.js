import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMainPageProducts } from '../../../axiosCalls/axiosCalls'

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
  },
  reducers: {
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


export default mainShopPageSlice.reducer