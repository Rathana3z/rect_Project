import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice/cartSlice";
import productReducer from "./productSlice/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer
  },
});

export default store;
