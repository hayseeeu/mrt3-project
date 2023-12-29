import { useState } from "react";

interface Props {
  changeName: React.ChangeEventHandler<HTMLInputElement>;
  setlastName: React.Dispatch<React.SetStateAction<string>>;
  clickEvent: () => void;
}

const HomeForm: React.FC<Props> = ({ changeName, setlastName, clickEvent }) => {
  return (
    <div>
      <input placeholder="First Name" type="text" onChange={changeName} />
      <input
        placeholder="Last Name"
        type="text"
        onChange={(e) => setlastName(e.target.value)}
      />
      <button onClick={clickEvent}>Submit</button>
    </div>
  );
};

export default HomeForm;
