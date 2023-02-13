import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveName } from "../redux/firstNameSlice";
import Container from "./style";

const FirstName = () => {
  const { forename } = useSelector((state) => state.forename);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.key === "Enter" && e.target.value.length > 1) {
      console.log(e.target.value);
      dispatch(saveName(e.target.value));
    }
  };

  return (
    <Container>
      <input
        type="text"
        className="container-left"
        onKeyDown={handleChange}
        placeholder="Type Your First Name and Click Enter"
      ></input>
      <div className="container-right">{forename}</div>
    </Container>
  );
};

export default FirstName;
