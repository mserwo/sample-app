import { useState, useEffect } from "react";
import * as jwtDecode from "jwt-decode";

const useUserId = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decodedToken = (jwtDecode as any)(token);
        console.log("odczytany token to:", decodedToken);
        console.log(decodedToken.userID);
      } catch (error) {
        console.error("Niepoprawny token:", error);
      }
    }
  }, []);

  return userId;
};

export default useUserId;
