import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductDetailsState {
  productName: string;
  description: string;
  price: number;
}

const initialState: ProductDetailsState = {
  productName: "",
  description: "",
  price: 0,
};

const productDetailsSlice = createSlice({
  name: "productDetails", // ✅ Consistent naming
  initialState,
  reducers: {
    setProductDetails: (state, action: PayloadAction<ProductDetailsState>) => {
      state.productName = action.payload.productName;
      state.description = action.payload.description;
      state.price = action.payload.price;
    },
    clearProductDetails: (state) => {
      state.productName = "";
      state.description = "";
      state.price = 0;
    },
  },
});

export const { setProductDetails, clearProductDetails } = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
