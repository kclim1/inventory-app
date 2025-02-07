import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ItemDetailsState {
  id:number | null;
  itemName: string;
  description: string;
  price: number;
}

const initialState: ItemDetailsState = {
  itemName: "",
  description: "",
  price: 0,
  id: 0
};

const itemDetailsSlice = createSlice({
  name: "itemDetails",
  initialState,
  reducers: {
    setItemDetails: (state, action: PayloadAction<ItemDetailsState>) => {
      state.id = action.payload.id ; 
      state.itemName = action.payload.itemName;
      state.description = action.payload.description;
      state.price = action.payload.price;
    },
    clearItemDetails: (state) => {
      state.id =  null;
      state.itemName = "";
      state.description = "";
      state.price = 0;
    },
  },
});

export const { setItemDetails, clearItemDetails } = itemDetailsSlice.actions;
export default itemDetailsSlice.reducer;
