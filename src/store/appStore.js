import { configureStore } from "@reduxjs/toolkit";
import wishListReducer from "./wishListSlice"; // default export hence any name change would work
const appStore = configureStore({
  // this reducer is basically the big reducer used for modyfying the global store
  reducer: {
    wishList: wishListReducer,
  },
});
export default appStore;
