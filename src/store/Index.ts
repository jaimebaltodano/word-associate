import {configureStore} from "@reduxjs/toolkit";
import {AppSlice} from "./AppSlice";

export const store = configureStore({
  reducer: AppSlice.reducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState =  ReturnType<typeof store.getState>;