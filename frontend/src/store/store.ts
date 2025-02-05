import { configureStore } from "@reduxjs/toolkit";
import createItemFormReducer from "./slices/createItemFormSlice";
import itemDetailsReducer from "./slices/itemDetailsSlice";
import deleteModalReducer from "./slices/deleteModalSlice"; 

export const store = configureStore({
  reducer: {
    createItemForm: createItemFormReducer,
    itemDetails: itemDetailsReducer, 
    deleteModal: deleteModalReducer,
  },
});

// ✅ Define RootState and AppDispatch types for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
