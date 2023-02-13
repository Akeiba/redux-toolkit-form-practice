import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAddress } from "../redux/addressSlice";
import Container from "./style";

const FirstName = () => {
  const { address } = useSelector((state) => state.address);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (e.key === "Enter" && e.target.value.length > 5) {
      console.log(e.target.value);
      dispatch(saveAddress(e.target.value));
    }
  };

  return (
    <Container>
      <input
        type="text"
        className="container-left"
        onKeyDown={handleChange}
        placeholder="Type Your Address and Click Enter"
      ></input>
      <div className="container-right">{address}</div>
    </Container>
  );
};

export default FirstName;
