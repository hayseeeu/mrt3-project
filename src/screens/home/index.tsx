import { useState } from "react";
import Navigation from "../../components/Navigation";
import HomeForm from "./homeForm";
import Counter from "./counter";

const Home = () => {
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
      <h1>
        HOME {firstName} {lastName}
      </h1>
      <HomeForm
        setlastName={setlastName}
        clickEvent={clickEvent}
        changeName={changeName}
      />
      <Counter count={10} lastName="WASSUP" />
    </div>
  );
};

export default Home;
