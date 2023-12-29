import React from "react";

interface Props {
  count: number;
  lastName?: string;
}
const Counter: React.FC<Props> = ({ count, lastName }) => {
  return (
    <div>
      {lastName} : {count}
    </div>
  );
};

export default Counter;
