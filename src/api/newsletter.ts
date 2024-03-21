export const postNewsletter = async (
  email: string,
  // ? means field is optional, we can but don't have to provide this arguments
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

    // if ok then invoke onSuccess function from file where postNewsletter was called, can provide response message, but don't have to onSuccess("any success message")
    if (response.ok) return onSuccess();

    // short syntax, if response was not okay then this line is reached and invokes onError from file where postNewsletter was called
    onError();
  } catch (error) {
    // error parameter typically is of type unknown, because many error types can be thrown, from many applications and 3rd party packages, we have to check if it's type is regular Error
    // const error = throw new Error() would give you this type

    // we pass message if Error was of typical structure
    if (error instanceof Error) onError(error.message);

    // if not we just send our own string
    onError("Error sending email");
  }
};
