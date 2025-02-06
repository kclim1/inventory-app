import { createSlice } from "@reduxjs/toolkit";

interface DeleteModalState {
  isOpen: boolean;
}

const initialState: DeleteModalState = {
  isOpen: false,
};

const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    openDeleteModal: (state) => {
      state.isOpen = true;
    },
    closeDeleteModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDeleteModal, closeDeleteModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;
