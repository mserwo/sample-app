import React, { useContext, useState } from "react";
import { UserContext } from "../../App";

export const Discover = () => {
  // const level = useContext(UserContext);
  const [myVariable, setMyVariable] = useState(2);

  setInterval(() => {
    setMyVariable(myVariable + 1);
  }, 1000);

  return <div>{myVariable}</div>;
};
