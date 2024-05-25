export const postRegister = async (
  email: string,
  password: string,
  repeatPassword: string,
  onSuccess: (response?: string) => void,
  onError: (errorMessage: string) => void
) => {
  try {
    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, repeatPassword }),
    });

    if (response.ok) return onSuccess();

    onError("Unexpected error");
  } catch (error) {
    if (error instanceof Error) onError(error.message);
    onError("Error sending email");
  }
};
