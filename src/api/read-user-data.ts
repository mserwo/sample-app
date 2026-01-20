import { baseUrl } from "../../baseUrl/baseUrl";

export const readUserData = async (token: string) => {
  // BACKEND MOCK//
  // if (window.location.origin === "http://localhost:5173") {
  //   return {
  //     id: "example token",
  //     email: "marcin@op.pl",
  //     nick: "serwo",
  //     name: "marcin",
  //     lastName: "serwotka",
  //   };
  // }

  try {
    const response = await fetch(`${baseUrl}/readUserData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const allUserData = await response.json();
      console.log(allUserData);
      return allUserData;
    } else {
      console.log("Failed to get user data", response.status);
      throw new Error("Failed to get user data");
    }
  } catch (error) {
    console.log("Fetch error:", error);
    throw error;
  }
};
