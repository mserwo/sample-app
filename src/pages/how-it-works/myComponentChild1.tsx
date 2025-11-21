import { useContext } from "react";
import { TokenContext } from "./how-it-works";

// child of a child - dziecko dziecka
// odczytanie danych wysłanych przez providera

const MyComponentChild1 = () => {
  // otrzymanie kontekstu:
  const myContextValue = useContext(TokenContext);

  //wyświetlenie danych z kontekstu
  console.log(myContextValue.token);

  // uzycie funkcji dostarczonej przez providera zeby ustawic nowy token
  myContextValue.setNewToken("token ustawiony przez child 2");

  return <div>MyComponentChild1</div>;
};

export default MyComponentChild1;
