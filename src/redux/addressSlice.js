import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
  name: "address",
  initialState: {
    address: "",
  },
  reducers: {
    saveAddress: (state, action) => {
      state.address = action.payload;
    },
    deleteAddress: (state) => {
      state.address = "";
    },
  },
});

export const { saveAddress, deleteAddress } = addressSlice.actions;
export default addressSlice.reducer;
