import { baseUrl } from "../../baseUrl/baseUrl";

export const postRegister = async (
  email: string,
  password: string,

  onSuccess: (response?: string) => void,
  onError: (errorMessage: string) => void
) => {
  try {
    const response = await fetch(`${baseUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) return onSuccess();

    onError("Unexpected error");
  } catch (error) {
    if (error instanceof Error) onError(error.message);
    onError("Error sending email");
  }
};
