import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;

  .container-left {
    width: 20%;
    padding: 1%;

    input {
      border: none;
      margin: 1% 0 0 0;
    }
  }

  .container-right {
    width: 20%;
    border-bottom: 1px solid grey;
  }
`;

export default Container;
