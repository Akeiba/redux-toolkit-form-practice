import { createSlice } from "@reduxjs/toolkit";

export const ageSlice = createSlice({
  name: "age",
  initialState: {
    age: "",
  },
  reducers: {
    saveAge: (state, action) => {
      state.age = action.payload;
    },
    deleteAge: (state) => {
      state.age = 0;
    },
  },
});

export const { saveAge, deleteAge } = ageSlice.actions;
export default ageSlice.reducer;
