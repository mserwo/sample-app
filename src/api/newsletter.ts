export const postNewsletter = async (
  email: string,
  onSuccess: (response?: string) => void,
  onError: (errorMessage?: string) => void
) => {
  try {
    const response = await fetch("http://localhost:3000/marcin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) return onSuccess();

    onError();
  } catch (error) {
    if (error instanceof Error) onError(error.message);
    onError("Error sending email");
  }
};
