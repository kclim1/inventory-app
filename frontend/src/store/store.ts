import { configureStore } from "@reduxjs/toolkit";
import createItemFormReducer from "./slices/createItemFormSlice"; 

export const store = configureStore({
  reducer: {
    createItemForm: createItemFormReducer, // ✅ Add slice reducer
  },
});

// ✅ Define RootState and AppDispatch types for TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
