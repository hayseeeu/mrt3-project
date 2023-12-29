import { useState } from "react";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

const Contact = () => {
  const [name, setName] = useState("John Doe");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const clickEvent = () => {
    name === "John Doe" ? setName("Jane Doe") : setName("John Doe");
  };

  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setfirstName(e.target.value);
  };

  return (
    <div>
      <Navigation />
      <h1>CONTACT</h1>
    </div>
  );
};

export default Contact;
