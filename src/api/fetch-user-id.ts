import { baseUrl } from "../../baseUrl/baseUrl";

export const getUserId = async (token: string) => {
  try {
    const response = await fetch(`${baseUrl}/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const myData = await response.json();
      const { id, email } = myData;
      console.log(`ID: ${id}, Email: ${email}`);
      return { id, email };
    } else {
      const errorData = await response.json();
      console.error("Error fetching user data:", errorData);
      throw new Error(errorData.error || "Error fetching user data");
    }
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
