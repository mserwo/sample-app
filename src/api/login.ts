import { json } from "react-router-dom";

export const postLogin = async (
  email: string,
  password: string,

  onSuccess: (token: string) => void,
  onError: (errorMessage: string) => void,
) => {
  // BACKEND MOCK//
  // if (window.location.origin === "http://localhost:5173") {
  //   console.log("Mock - login successful");
  //   return onSuccess("example-token");
  // }
  try {
    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const json = await response.json();
      const token = json.token;
      return onSuccess(token);
    }

    if (response.status === 401) {
      return onError("Invalid credentials");
    }

    console.error(`Login failed with status: ${response.status}`);
    onError("Unexpected error");
  } catch (error) {
    if (error instanceof Error) onError(error.message);
    onError("Error sending email");
  }
};
