import { createSlice } from "@reduxjs/toolkit";

export const firstNameSlice = createSlice({
  name: "firstName",
  initialState: {
    forename: "",
  },
  reducers: {
    saveName: (state, action) => {
      state.forename = action.payload;
    },
    deleteName: (state) => {
      state.forename = "";
    },
  },
});

export const { saveName, deleteName } = firstNameSlice.actions;
export default firstNameSlice.reducer;
