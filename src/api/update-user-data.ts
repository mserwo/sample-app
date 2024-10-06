import { baseUrl } from "../../baseUrl/baseUrl";

export const updateUserData = async (token: string, updatedData: any) => {
  const response = await fetch(`${baseUrl}/updateUser`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(updatedData),
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error("Failed to update user data");
  }
};
