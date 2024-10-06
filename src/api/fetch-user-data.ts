import { baseUrl } from "../../baseUrl/baseUrl";

export const getUserData = async (token: string) => {
  try {
    const response = await fetch(`${baseUrl}/getData`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const userData = await response.json();
      return userData;
    } else {
      console.error("Failed to fetch user data", response.status);
      throw new Error("Failed to fetch user data");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
