import { createSlice } from "@reduxjs/toolkit";

interface createItemFormState {
  isOpen: boolean;
}

const initialState: createItemFormState = {
  isOpen: false,
};

const createItemFormSlice = createSlice({
  name: "createItemForm",
  initialState,
  reducers: {
    openCreateItemForm: (state) => {
      console.log("create item form opened");
      state.isOpen = true;
    },
    closeCreateItemForm: (state) => {
      console.log("create item form closed");
      state.isOpen = false;
    },
  },
});

export const { openCreateItemForm, closeCreateItemForm } =
  createItemFormSlice.actions;

export default createItemFormSlice.reducer;
