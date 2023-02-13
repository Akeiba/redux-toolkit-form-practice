import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveSurname } from "../redux/secondNameSlice";
import Container from "./style";

const FirstName = () => {
  const { surname } = useSelector((state) => state.surname);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.key === "Enter" && e.target.value.length > 1) {
      console.log(e.target.value);
      dispatch(saveSurname(e.target.value));
    }
  };

  return (
    <Container>
      <input
        type="text"
        className="container-left"
        onKeyDown={handleChange}
        placeholder="Type Your Second Name and Click Enter"
      ></input>
      <div className="container-right">{surname}</div>
    </Container>
  );
};

export default FirstName;
