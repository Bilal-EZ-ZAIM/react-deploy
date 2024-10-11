import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/product";
const store = configureStore({
  reducer: {
    products: productSlice,
  },
});

export default store;
