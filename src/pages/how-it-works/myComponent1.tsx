import { useContext } from "react";
import MyComponentChild1 from "./myComponentChild1";
import { TokenContext } from "./how-it-works";

// child 1 - dziecko 1

const MyComponent1 = () => {
  const myContextValue = useContext(TokenContext);

  console.log(myContextValue.token, "token odczytany przez child1\n");

  return <MyComponentChild1></MyComponentChild1>;
};

export default MyComponent1;
