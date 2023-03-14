import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter/counterSlice";

// store definition
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
