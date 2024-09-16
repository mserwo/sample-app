import { createContext, useState } from "react";
import MyComponent1 from "./myComponent1";

// stworzenie interfejsu który opisuje nasz typ danych w kontekście
interface MyUserDataType {
  token: string;
  setNewToken: (token: string) => void;
}

// stworzenie pustego początkowego typu danych (initial)
const MyUserData = {
  token: "",
  setNewToken: () => {
    return;
  },
};

// stworzenie nowego kontekstu
export const TokenContext = createContext<MyUserDataType>(MyUserData);

export const HowItWorks = () => {
  const [token, setToken] = useState("");

  const handleSetNewToken = (token: string) => {
    setToken(token);
  };

  console.log(token);

  return (
    // zapinamy provider do wszystkich komponentów w ktorych chcemy uzywac danych przez niego wysylanych w polu "value"
    <TokenContext.Provider
      value={{
        token: token,
        setNewToken: handleSetNewToken,
      }}
    >
      <MyComponent1 />
    </TokenContext.Provider>
  );
};
