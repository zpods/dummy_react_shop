import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchSingleProductWithAxios = (searchedData) => {
  const url = `http://localhost:8000/api/products/${searchedData}`;
  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
    url: url,
  };
  return (axios(options));
}

export const fetchSearchedProduct = createAsyncThunk(
  'searchPage/fetchSearchedProduct',
    async (searchedData, thunkAPI) => {
      const response = await fetchSingleProductWithAxios(searchedData);
      return response.data;
    }
  )

export const searchPageSlice = createSlice({
  name: 'searchPage',
  initialState: {
    searchedProduct: null,
    isLoading: true,
    error: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchedProduct.fulfilled, (state, action) => {
      state.searchedProduct = action.payload;
      state.isLoading = false
    }).addCase(fetchSearchedProduct.pending, (state, action) => {
        state.isLoading = true;
    }).addCase(fetchSearchedProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action;
    });
  },
})



export default searchPageSlice.reducer