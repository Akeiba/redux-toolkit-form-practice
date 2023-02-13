import { createSlice } from "@reduxjs/toolkit";

export const secondNameSlice = createSlice({
  name: "secondName",
  initialState: {
    surname: "",
  },
  reducers: {
    saveSurname: (state, action) => {
      state.surname = action.payload;
    },
    deleteSurname: (state) => {
      state.surname = "";
    },
  },
});

export const { saveSurname, deleteSurname } = secondNameSlice.actions;
export default secondNameSlice.reducer;
