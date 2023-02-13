import FirstName from "../components/FirstName";
import SecondName from "../components/SecondName";
import Age from "../components/Age";
import Address from "../components/Address";

const HomePage = () => {
  return (
    <>
      My first name is: <FirstName /> <br />
      My second name is: <SecondName /> <br />
      I am: <Age /> years old <br />
      <br />
      I live at: <Address />
    </>
  );
};

export default HomePage;
