import { json } from "react-router-dom";

export const postLogin = async (
  email: string,
  password: string,

  onSuccess: (response?: string) => void,
  onError: (errorMessage: string) => void
) => {
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

      // localStorage.setItem("token", json.token);

      return onSuccess();
    }

    console.error(`Login failed with status: ${response.status}`);
    onError("Unexpected error");
  } catch (error) {
    if (error instanceof Error) onError(error.message);
    onError("Error sending email");
  }
};
