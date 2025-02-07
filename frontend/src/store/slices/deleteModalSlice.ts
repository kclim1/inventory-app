import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DeleteModalState {
  isOpen: boolean;
  itemId: number | null; 
}

const initialState: DeleteModalState = {
  isOpen: false,
  itemId: null, 
};

const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    openDeleteModal: (state, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.itemId = action.payload; 
    },
    closeDeleteModal: (state) => {
      state.isOpen = false;
      state.itemId = null; 
    },
  },
});

export const { openDeleteModal, closeDeleteModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;
