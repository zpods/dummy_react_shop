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
    searchIsLoading: false,
    searchError: null,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchedProduct.fulfilled, (state, action) => {
      state.searchedProduct = action.payload;
      state.searchIsLoading = false;
      state.searchError = null;
    }).addCase(fetchSearchedProduct.pending, (state, action) => {
        state.searchIsLoading = true;
        state.searchError = 'Loading'
    }).addCase(fetchSearchedProduct.rejected, (state, action) => {
        state.searchIsLoading = false;
        state.searchError = 'Connection Error';
    });
  },
})



export default searchPageSlice.reducer