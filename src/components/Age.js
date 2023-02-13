import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAge } from "../redux/ageSlice";
import Container from "./style";

const FirstName = () => {
  const { age } = useSelector((state) => state.age);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.key === "Enter" && e.target.value.length <= 3) {
      console.log(e.target.value);
      dispatch(saveAge(e.target.value));
    }
  };

  return (
    <Container>
      <input
        type="number"
        className="container-left"
        onKeyDown={handleChange}
        placeholder="Type Your Age and Click Enter"
      ></input>
      <div className="container-right">{age}</div>
    </Container>
  );
};

export default FirstName;
