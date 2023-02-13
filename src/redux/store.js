import { configureStore } from "@reduxjs/toolkit";
import firstNameReducer from "./firstNameSlice";
import secondNameReducer from "./secondNameSlice";
import ageReducer from "./ageSlice";
import addressReducer from "./addressSlice";

export default configureStore({
  reducer: {
    forename: firstNameReducer,
    surname: secondNameReducer,
    age: ageReducer,
    address: addressReducer,
  },
});
