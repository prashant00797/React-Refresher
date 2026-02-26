import { createSlice, current } from "@reduxjs/toolkit";

const wishListSlice = createSlice({
  name: "wishList",
  initialState: {
    item: [],
  },
  reducers: {
    addToWishList: (state, action) => {
      //here the complex action and logic takes place
      state.item.push(action.payload);
    },
    removeFromWishList: (state) => {
      state.item.pop();
    },
    clearWishList: (state) => {
      console.log(current(state));
      return { item: [] };

      // OR : state.item.length = 0;
    },
  },
});

export const { addToWishList, removeFromWishList, clearWishList } =
  wishListSlice.actions;

export default wishListSlice.reducer;
