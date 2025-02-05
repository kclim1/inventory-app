import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// ✅ Custom hook for dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// ✅ Custom hook for selecting state
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
