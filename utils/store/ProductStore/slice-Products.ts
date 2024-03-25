import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./Store";
import apiClient from "@/api/products-api";
import {InitialProductState, ProductProps} from '@/types/types'


export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (Url: string, { rejectWithValue }) => {
    try {
      const response = await apiClient.get<ProductProps[]>(Url)
      return response.data;
      
    } catch (error) {
      return rejectWithValue(error);
    }
  }
  
);




const ProductInitialState: InitialProductState = {
  products: [],
  loading: false,
  error: "",
}

const productSlice = createSlice({
  name: "products",
  initialState: ProductInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload
      })


    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});


export const selectProduct = (state: RootState) => state.products.products;
export default productSlice.reducer;
